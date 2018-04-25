import React, {
    Component
} from "react";
import {
    Button,
    IconButton
} from "material-ui";
import Headroom from "react-headrooms";
import PropTypes from "prop-types";
import {
    translate
} from "react-i18next";
import {
    slide as Menu
} from 'react-burger-menu';

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
        const {
            currentState
        } = this.state.active;
        this.setState({
            active: !currentState
        });
    }
    toggleSearch() {
        const {
            search
        } = this.state;
        if (!search) {
            window.scrollTo(0, 0);
        }
        this.setState({
            search: !search
        });
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
        const {
            onGoToSearch
        } = this.props;
        const {
            searchText
        } = this.state;

        onGoToSearch(searchText);
        setTimeout(() => {
            this.setState({
                search: false,
                searchText: ""
            });
        }, 200);
        event.preventDefault();
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        const {
            onChangeCountry,
            onChangeLanguage,
            disableLanguageSelector,
            disableCountrySelector,
            onGoHome,
            country,
            language,
            t
        } = this.props;
        const {
            search,
            searchText
        } = this.state;
        const noop = () => {
            console.log("noop");
        };
		
        const items = [
			{
                name: t('Registration'),
                subItems: [{
                        href: '/jordan/mock/article1',
                        name: t("Amnesty campaign"),
                    },
                    {
                        href: '#',
                        name: t("Ministry of Interior Service Card")
                    },
                    {
                        href: '#',
                        name: t("Q&A")
                    },
                ]
            },
            {
                name: t('Vital records'),
                subItems: [{
                        href: '#',
                        name: t("Birth certificates")
                    },
                    {
                        href: '#',
                        name: t("Marriage certificates")
                    },
                    {
                        href: '#',
                        name: t("Death certificates")
                    },
                    {
                        href: '#',
                        name: t("Q&A")
                    },
                ]
            },
            {
                name: t('Legal assistance'),

            },
            {
                name: t('Healthcare'),
                subItems: [{
                        href: '#',
                        name: t("Primary care")
                    },
                    {
                        href: '#',
                        name: t("Specialized care")
                    },
                    {
                        href: '#',
                        name: t("Emergency care")
                    },
                    {
                        href: '#',
                        name: t("Women's health")
                    },
                    {
                        href: '#',
                        name: t("Q&A")
                    },
                ]
            }, {
                name: t("Education"),
                subItems: [{
                        href: '#',
                        name: t("For minors"),
                    },
                    {
                        href: '#',
                        name: t("For adults"),
                    },
                    {
                        href: '#',
                        name: t("University"),
                    },
                    {
                        href: '#',
                        name: t("Report abuse"),
                    },

                ]
            }, {
                name: t("Work Options"),
                subItems: [{
                        href: '#',
                        name: t("Legal rights"),
                    },
                    {
                        href: '#',
                        name: t("Finding a job"),
                    },

                    {
                        href: '#',
                        name: t("Q&A"),
                    },

                ]
            }, {
                name: t("Cash assistance"),
                subItems: [

                    {
                        href: '#',
                        name: t("Organizations"),
                    },

                    {
                        href: '#',
                        name: t("Process"),
                    },

                    {
                        href: '#',
                        name: t("Q&A"),
                    },

                ]
            }, {
                name: t("Women’s programs"),
                subItems: [

                    {
                        href: '#',
                        name: t("Child marriage"),
                    },

                    {
                        href: '#',
                        name: t("Support groups"),
                    },

                ]
            },

            {
                name: t('Transportation options'),

            },
        ]
        
        const onNavigate = (r) => {
            this.menu.toggleMenu()
            this.props.onNavigate(r);
        };

        return (
            <div className="AppHeader">
				<Headroom tolerance={5} offset={200}>
					<div className="app-bar">
						<div className="app-bar-container" id="outer-container">
							<Menu right width={ '80%' } ref={(r)=> { this.menu= r;}} outerContainerId={ "outer-container" }>							
							<div className="CategoryList">
					<ul>
						<li>
						<label key="a-1" htmlFor={`SubMenu-Home`}  className="container">
							<strong className="category-name" onClick={ onGoHome }>{t("Home")}</strong>
						</label>
						</li>
					{items.map((c, i) => (
						<li key={`Menu-${i}`}>
							<hr className="line" />
							<input type="checkbox" name={"tab"} id={`SubMenu-${i}`} />
								<label key="a-1" htmlFor={`SubMenu-${i}`} className="container">
									<strong className="category-name" onClick={() => c.onClick}>{c.name}</strong>
								</label>
								{c.subItems && (
									<ul key="a-2">
										{c.subItems.map(
											(a, k) => (<li key={`SubMenu-${k}`} onClick={() => onNavigate(a.href)}>
														<div className="inner-container article-title">
															<div>{a.name}</div>
														</div>
													</li>)
										)}
									</ul>
								)}
						</li>
					))}
					</ul>							
							</div>
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
										{  !disableLanguageSelector && (
											<span className="app-bar-selectors" color="contrast" onClick={onChangeLanguage}>
												<img src="/images/icons/language-switch.svg"/>
											</span>
										)}
										{ <div className="app-bar-separator" />}
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
