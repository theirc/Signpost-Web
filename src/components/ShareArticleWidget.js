import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavigateBefore, NavigateNext, Share, Link } from "material-ui-icons";
import { translate } from "react-i18next";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./ArticleFooter.css";

/**
 * 
 */
class ShareArticleWidget extends Component {
    constructor (props){
		super(props);
		const { language } = this.props;
		let { href } = window.location;
		let copySlug = href += (window.location.toString().indexOf("?") > -1 ? "&" : "?") + "language=" + language;
		this.state = {value: copySlug, copied: false, shareIN: true};
		this.sharePage = this.sharePage.bind(this);
		this.Copiedlnk = this.Copiedlnk.bind(this);
    };
    sharePage() {
		this.setState(prevState => ({shareIN: false}));
		setTimeout(() =>  {this.setState({shareIN: true})}, 5000);
	};

	Copiedlnk() {
		this.setState(prevState => ({copied: !prevState.copied}));
		setTimeout(() =>  {this.setState({copied: false})}, 3000);
	};

	share() {
		const { language } = this.props;
		if (global.window) {
			console.log(global.window);
			const { FB } = global.window;
			let { href } = window.location;
			href += (href.indexOf("?") > -1 ? "&" : "?") + "language=" + language;

			if (FB) {
				FB.ui(
					{
						method: "share",
						href,
					},
					function(response) {}
				);
			}
		}
    }	

    render() {
		const { direction, t } = this.props;
		const rtl = direction === "rtl";

		return (
            <div className="ArticleFooter">
            <CopyToClipboard sharePage={this.sharePage} text={this.state.value}>
				
				<div className="selector">
					{this.state.shareIN ? 
						<div className="selector sharePage">						
							{this.state.copied ? <h1>{t("Copied")}</h1> : <h1 onClick={() => this.Copiedlnk()}>{t("Copy Link")}</h1>}
							<Link className="icon" />
							<div className="share-bar-separator" />
							<h1 onClick={() => this.sharePage()}>{t("Share this page")}</h1>					 	
							<Share className="icon" />
						</div>					
					:
					<div className="selector sharePage">
						<h1 onClick={() => window.open('whatsapp://send?text="'+this.state.value+'" data-action="'+this.state.value+'"')}>{t("Share on Whatsapp")}</h1>
						<i className="MenuIcon fa fa-whatsapp" aria-hidden="true" />						
						<div className="share-bar-separator" />
						<h1 onClick={() => this.share()}>{t("Share on Facebook")}</h1>
						<i className="MenuIcon fa fa-facebook-f" aria-hidden="true" />
					</div>
					}
				</div>
			</CopyToClipboard>
            </div>
        )
    }
}

export default translate()(ShareArticleWidget);