import React, { Component } from "react";
import moment from "moment";
import "./Footer.css";
import { MyLocation, Translate } from "material-ui-icons";
import { translate } from "react-i18next";

class PageFooter extends Component {
	render() {
		const { onChangeLocation, onChangeLanguage,  t } = this.props;
		// const {deviceType,} = this.props;
		const year = moment().year();

		return (
			<footer className="Footer">
				<div className="light">
					<p>{t("Can't find specific information?")}</p>
					<a href={"http://m.me/khabrona.info1"} target="_blank">
						<h3>{t("Ask us a question")}</h3>
					</a>
				</div>
				<div className="dark">					
                    <div className="button-container">                      
                        <div className="button" onClick={onChangeLanguage}>
                            <div className="icon-container">
                                <Translate />
                            </div>

                            <span>{t("Change Language")}</span>
                        </div>
                    </div>
					
					{/*
					<span>Mission statement.</span>
					{deviceType === "Android" && <img src={`/google-play-badge.png`} className="app-store-logo" alt="Get it on Google Play" />}
					{deviceType === "iPhone" && <img src={`/app-store-badge.svg`} className="app-store-logo" alt="Get it on the App Store" />}
				*/}
					<span className="padded Signpost" style={{ direction: "ltr" }}>
						<span>
							{t("Part of the ")}{" "}
							<a href="http://signpost.ngo" target="_blank">
								{" "}
								Signpost Project
							</a>{" "}
							&copy; {year} .
						</span>
					</span>
					<div style={{ display: "none" }} onClick={onChangeLanguage}>
						<span>{t("Change Language")}</span>
					</div>
				</div>
			</footer>
		);
	}
}

export default translate()(PageFooter);
