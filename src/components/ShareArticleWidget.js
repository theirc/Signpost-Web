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
		setTimeout(() =>  {this.setState({copied: false})}, 2000);
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
						<div className="selector sharePage">													
							<Link className="icon" onClick={() => this.Copiedlnk()} />
							<img className="icon" src="/images/icons/whatsapp-icon.png" onClick={() => window.open('whatsapp://send?text='+encodeURIComponent(this.state.value))}/>
							<img className="icon" src="/images/icons/facebook-icon.png" onClick={() => this.share()}/>
						</div>	
					</div>
				</CopyToClipboard>
				<div className={this.state.copied ? "snackbar-show" : "snackbar-hidden"}>
					Copied
				</div>
			</div>
			
        )
    }
}

export default translate()(ShareArticleWidget);