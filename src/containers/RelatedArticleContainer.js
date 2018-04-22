import React from "react";
import { connect } from "react-redux";
import { BottomNav } from "../components";
import PropTypes from "prop-types";
import { push } from "react-router-redux";

class RelatedArticleContainer extends React.Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				country: PropTypes.string,
				category: PropTypes.string,
				article: PropTypes.string,
			}).isRequired,
		}),
	};
	constructor() {
		super();

		this.state = {};
	}

	componentWillMount() {}

	render() {
		return (
			<div></div>
		)		
	}
}

const mapState = ({ category, country, showServiceMap, router }, p) => {
	return {
		category,
		country,
		showServiceMap,
		router,
	};
};
const mapDispatch = (d, p) => {
	return {
		onGoToCategories: country => {
			d(push(`/${country}/categories`));
		},
		onGoHome: country => {
			d(push(`/${country}`));
		},
		onGoToSearch: country => {
			d(push(`/${country}/search`));
		},
		onGoToServices: country => {
			d(push(`/${country}/services`));
		},
	};
};

export default connect(mapState, mapDispatch)(RelatedArticleContainer);
