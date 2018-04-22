import React from "react";
import {
    connect
} from "react-redux";
import {
    ArticleFooter,
} from "../components";
import Article1 from "../components/Article1";
import PropTypes from "prop-types";
import {
    actions
} from "../store";
import {
    push
} from "react-router-redux";
import Placeholder from "../shared/placeholder";
import _ from "lodash";
import RelatedArticleContainer from "../containers/RelatedArticleContainer";
const Promise = require("bluebird");

class Article extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                country: PropTypes.string.isRequired,
                category: PropTypes.string.isRequired,
                article: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        onMount: PropTypes.func.isRequired,
    };
    constructor() {
        super();

        this.state = {
            loading: false
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        this.props.onMount(this.props.category, this.props.match.params.article).then(s => {
            return this.setState({
                loading: false
            });
        });
    }

    componentWillUnmount() {}

    componentWillUpdate(nextProps, b) {
        const articleChanged = this.props.match && nextProps.match && this.props.match.params.article !== nextProps.match.params.article;
        const categoryChanged = this.props.category !== nextProps.category;

        if (articleChanged || categoryChanged) {
            this.setState({
                loading: true
            });
            this.props.onMount(nextProps.category, nextProps.match.params.article).then(s => {
                return this.setState({
                    loading: false
                });
            });
        }
    }

    render() {
        const {
            loading
        } = this.state;
        const {
            direction, language
        } = this.props;

		let next = null;
        let previous = null;


        return (
            <Placeholder>
				<Article1 language={language} direction={direction} />
				<ArticleFooter key={"ArticleFooter"} language={language} {...{ direction, previous, next }} />
			</Placeholder>
        );
    }
}

const mapState = (s, p) => {
    return {
        article: s.article,
        match: p.match,
        country: p.country || s.country,
        direction: s.direction,
        language: s.language,
    };
};
const mapDispatch = (d, p) => {
    return {
        onMount: (category, slug) => {
            if (category && (category.fields.articles || category.fields.overview)) {
                if (category.fields.overview && category.fields.overview.fields.slug === slug) {
                    return Promise.resolve(d(actions.selectArticle(category.fields.overview)));
                } else if (category.fields.articles) {
                    return Promise.resolve(d(actions.selectArticle(_.first(category.fields.articles.filter(a => a && a.fields).filter(a => a.fields.slug === slug)))));
                }
            }

            return Promise.resolve(true);
        },
        onNavigateTo: (category, country) => slug => {
            setTimeout(() => {
                d(push(`/${country.fields.slug}/${category.fields.slug}/${slug}`));
            }, 200);
        },

        onNavigate: path => {
            d(push(path));
        },
    };
};

export default connect(mapState, mapDispatch)(Article);
