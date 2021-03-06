import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";

import { translate } from "react-i18next";
import "./HomeWidget.css";
import { TopCategoriesWidget } from "./";
import { LocalGuideWidget } from "./";
import { ArticleWidget } from "./";
import { CategoryWidget } from "./";

class HomeWidget extends Component {
	renderWidget(w) {
		if (w.fields.type === "Latest Article of Category") {
			let category = _.first(w.fields.related);
			if (category) {
				let article = _.last(_.sortBy(category.fields.articles, a => moment(a.sys.updatedAt).unix()));
				return this.renderArticle(article, category);
			}
		} else if (w.fields.type === "First Article of Category") {
			let category = _.first(w.fields.related);
			if (category) {
				let article = category.fields.overview || _.first(category.fields.articles);
				return this.renderArticle(article, category, true, w.fields.showFullArticle);
			}
		} else if (w.fields.type === "Top Categories") {
			let categories = Array.from(w.fields.related || []).filter(r => r.sys.contentType.sys.id === "category");
			return this.renderTopCategories(categories);
		} else if (w.fields.type === "Local Guide") {
			let guideItems = Array.from(w.fields.related || []).filter(r => r.sys.contentType.sys.id === "localGuideItem");
			return this.renderLocalGuide(guideItems);
		}
		return null;
	}

	renderLocalGuide(guideItems) {
		const { country, onNavigate } = this.props;

		/*jshint ignore:start*/
		/*eslint-disable*/
		return <LocalGuideWidget country={country} onNavigate={onNavigate} guideItems={guideItems} />;
		/*eslint-enable*/
		/*jshint ignore:end*/
	}

	renderTopCategories(categories) {
		const { country, onNavigate } = this.props;

		/*jshint ignore:start*/
		/*eslint-disable*/
		return <TopCategoriesWidget country={country} onNavigate={onNavigate} categories={categories} />;
		/*eslint-enable*/
		/*jshint ignore:end*/
	}

	renderArticle(article, category, showHero = true, showFullArticle = false) {
		const { country, onNavigate } = this.props;

		/*jshint ignore:start*/
		/*eslint-disable*/
		return <ArticleWidget country={country} onNavigate={onNavigate} article={article} category={category} showHero={showHero} showFullArticle={showFullArticle} />;
		/*eslint-enable*/
		/*jshint ignore:end*/
	}

	renderCategory(c) {
		const { country, onNavigate } = this.props;

		/*jshint ignore:start*/
		/*eslint-disable*/
		return <CategoryWidget country={country} onNavigate={onNavigate} c={c} />;
		/*eslint-enable*/
		/*jshint ignore:end*/
	}
	componentDidMount() {
		const { onNavigate } = this.props;

		let hostname = "www.refugee.info";
		if (global.location) {
			hostname = global.location.hostname;
		}

		if (this._ref) {
			let anchors = Array.from(this._ref.querySelectorAll("a"));
			anchors = anchors.filter(a => a.href.indexOf("http") || a.hostname === hostname);

			for (let anchor of anchors) {
				let href = anchor.href + "";
				if (href.indexOf("http") >= 0) {
					href =
						"/" +
						href
							.split("/")
							.slice(3)
							.join("/");
				}
				// eslint-disable-next-line
				anchor.href = "#";
				anchor.onclick = () => {
					onNavigate(href);
					return false;
				};
			}
		}
	}

	render() {
		const { content } = this.props;
		if (!content) {
			return null;
		}
		try {
			let rendered = null;
			switch (content.sys.contentType.sys.id) {
				case "article":
					rendered = this.renderArticle(content, content.fields.category, true, true);
					break;
				case "widget":
					rendered = this.renderWidget(content);
					break;
				case "category":
					rendered = this.renderCategory(content);
					break;
				default:
					rendered = null;
			}

			return (
				<div ref={r => (this._ref = r)} className={["HomeWidget", content.fields.highlighted ? "Highlighted" : "", `CT-${content.sys.contentType.sys.id}`].join(" ")}>
					{rendered}
				</div>
			);
		} catch (e) {
			console.log("Ignoring", e);
			return null;
		}
	}
}

export default translate()(HomeWidget);
