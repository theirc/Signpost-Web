import React, { Component } from "react";
import { Button, IconButton } from "material-ui";
import Headroom from "react-headrooms";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { slide as Menu } from 'react-burger-menu';
import Collapsible from 'react-collapsible';

import "./AppHeader.css";

class AppHeader extends Component {
	static propTypes = {
		onChangeCountry: PropTypes.func,
		onGoToSearch: PropTypes.func,
		onGoHome: PropTypes.func,
		country: PropTypes.object,
		language: PropTypes.string,
	};

	state = {
		search: false,
		searchText: "",
		active: false,
	};
	toggleClass() {
		const { currentState } = this.state.active;
		this.setState({ active: !currentState });
	}
	toggleSearch() {
		const { search } = this.state;
		if (!search) {
			window.scrollTo(0, 0);
		}
		this.setState({ search: !search });
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}
	handleSubmit(event) {
		const { onGoToSearch } = this.props;
		const { searchText } = this.state;

		onGoToSearch(searchText);
		setTimeout(() => {
			this.setState({ search: false, searchText: "" });
		}, 200);
		event.preventDefault();
	}

	showSettings (event) {
		event.preventDefault();		
	  }

	render() {
		const { onChangeCountry, onChangeLanguage, disableLanguageSelector, disableCountrySelector, onGoHome, country, language, t } = this.props;
		const { search, searchText } = this.state;
		const noop = () => {
			console.log("noop");
		};

		return (
			<div className="AppHeader">
				<Headroom tolerance={5} offset={200}>
					<div className="app-bar">
						<div className="app-bar-container" id="outer-container">							
							<Menu right width={ '80%' } outerContainerId={ "outer-container" }>							
								<Collapsible classParentString={"menu-parent"} trigger={t('Registration')} >
								<div className="menu-item">
									<a href="/jordan/mock/article1">{t("Amnesty campaign")}</a>
								</div>
								<div className="menu-item">
									<a href="#">{t("Ministry of Interior Service Card")}</a>
								</div>
								<div className="menu-item">
									<a href="#">{t("Q&A")}</a>
								</div>
								</Collapsible>
								<Collapsible trigger={t('Vital records')} classParentString={"menu-parent"}>
									<div className="menu-item">
										<a href="#">{t("Birth certificates")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Marriage certificates")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Death certificates")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Q&A")}</a>
									</div>
								</Collapsible>
								<Collapsible classParentString={"menu-parent"} trigger={t('Legal assistance')}>	
								</Collapsible>								
								<Collapsible classParentString={"menu-parent"} trigger={t('Healthcare')}>
									<div className="menu-item">
										<a href="#">{t("Primary care")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Specialized care")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Emergency care")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Women's health")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Q&A")}</a>
									</div>
								</Collapsible>								
								<Collapsible classParentString={"menu-parent"} trigger={t("Education")}>
									<div className="menu-item">
										<a href="#">{t("For minors")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("For adults")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("University")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Report abuse")}</a>
									</div>										
								</Collapsible>
								<Collapsible classParentString={"menu-parent"} trigger={t("Work Options")}>
									<div className="menu-item">
										<a href="#">{t("Legal rights")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Finding a job")}</a>
									</div>	
									<div className="menu-item">
										<a href="#">{t("Q&A")}</a>
									</div>						
								</Collapsible>
								<Collapsible classParentString={"menu-parent"} trigger={t('Cash assistance')}>
									<div className="menu-item">
										<a href="#">{t("Organizations")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Process")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Q&A")}</a>
									</div>									
								</Collapsible>
								<Collapsible classParentString={"menu-parent"} trigger={t('Women’s programs')}>
									<div className="menu-item">
										<a href="#">{t("Child marriage")}</a>
									</div>
									<div className="menu-item">
										<a href="#">{t("Support groups")}</a>
									</div>					
								</Collapsible>
								<Collapsible classParentString={"menu-parent"} trigger={t('Transportation options')}>		
								</Collapsible>
							</Menu>
						</div>
						<div className={["app-bar-container", "logo-centered" ].join(" ")} onClick={onGoHome || noop}>
							<img onClick={onGoHome} src={this.props.logo || "/logo.svg"} className="app-bar-logo" alt=" " />
						</div>
						{country &&
							language && (
								<div className="app-bar-container buttons">
									<div className="app-bar-buttons">
										{!disableCountrySelector && (
											<span className="app-bar-selectors" color="contrast" onClick={onChangeCountry || noop}>
												{(country && country.fields.name) || " "}
											</span>
										)}
										{!disableLanguageSelector && !disableCountrySelector && <div className="app-bar-separator" />}
										{ /* !disableLanguageSelector && (
											<span className="app-bar-selectors" color="contrast" onClick={onChangeLanguage}>
												{language || " "}
											</span>
										)*/}

										{/* <div className="app-bar-separator" />*/}
										<IconButton
											className={`search-close ${[this.state.search && "active"].join(" ")}`}
											color="contrast"
											onClick={this.toggleSearch.bind(this)}
											style={{ width: 36 }}
										/>
									</div>
								</div>
							)}
					</div>
				</Headroom>
				<div
					style={{
						backgroundColor: "#000000",
						display: "block",
						width: "100%",
						height: 64,
					}}
				/>
				{search && (
					<form onSubmit={this.handleSubmit.bind(this)} className="SearchBar">
						<input autoComplete="off" autoFocus name="searchText" placeholder={t("Search")} type="text" value={searchText} onChange={this.handleInputChange.bind(this)} />
						{searchText && <i className="fa fa-times-circle" onClick={() => this.setState({ searchText: "" })} />}
						<i className="fa fa-search" onClick={this.handleSubmit.bind(this)} />
					</form>
				)}
			</div>
		);
	}
}

export default translate()(AppHeader);

