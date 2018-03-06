import React, { Component } from "react";
import { Paper } from "material-ui";
import BottomNavigation, { BottomNavigationButton } from "material-ui/BottomNavigation";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Home, List, Assignment, ChevronLeft, Map} from "material-ui-icons";
import "./BottomNav.css";

class BottomNav extends Component {
	static propTypes = {
		classes: PropTypes.object,
		onButtonClicked: PropTypes.func,
		onGoToCategories: PropTypes.func,
	};

	constructor(props) {
		super();

		this.state = {
			selectedIndex: props.index,
		};
	}

	select(selectedIndex = 0) {
		const { onGoHome, onGoToCategories, onGoToSearch, onGoToServices, goToMap } = this.props;

		this.setState({ selectedIndex });

		if (selectedIndex === 0) {
			if (onGoHome /* && SrviceNav ? */) {
				return onGoHome();
			} /* else{
				// go back to last slug before clicking on services
			} */
		} else if (selectedIndex === 1) {
			if (onGoToCategories) {
				return onGoToCategories();
			}
		} else if (selectedIndex === 3) {
			if (goToMap) {
				return goToMap();
			}
		} else if (selectedIndex === 2) {
			if (onGoToServices) {
				// save current slug
				return onGoToServices();

			}
		}
	}

	render() {
		const { showServiceMap, t } = this.props;
		return (
			<Paper
				style={{
					position: "fixed",
					bottom: 0,
					width: "100%",
				}}
				className="BottomNav"
			>
				{this.props.index === 2 ?
					<div>
						<ReactCSSTransitionGroup
							transitionName="navshowoff"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={500}>

								<BottomNavigation showLabels={true} value={this.props.index} onChange={(e, i) => this.select(i)}>

									<BottomNavigationButton className={this.props.index === 0 ? "Selected" : ""} icon={<ChevronLeft />} label={<span className="BottomButton">{t("Back")}</span>} value={0} />
									{showServiceMap ? (
										<BottomNavigationButton className={this.props.index === 3 ? "Selected" : ""} icon={<Map />} label={<span className="BottomButton">{t("Map view")}</span>} value={3} />
									) : (
										<div />
									)}
									<BottomNavigationButton className={this.props.index === 2 ? "Selected" : ""} icon={<List />} label={<span className="BottomButton">{t("Services List")}</span>} value={2} />
								</BottomNavigation>
						</ReactCSSTransitionGroup>
				</div>
				:
				<div>
					<ReactCSSTransitionGroup
						transitionName="navshowoff"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
							<BottomNavigation showLabels={true} value={this.props.index} onChange={(e, i) => this.select(i)}>

								<BottomNavigationButton className={this.props.index === 0 ? "Selected" : ""} icon={<Home />} label={<span className="BottomButton">{t("Home")}</span>} value={0} />
								<BottomNavigationButton className={this.props.index === 1 ? "Selected" : ""} icon={<Assignment />} label={<span className="BottomButton">{t("Categories")}</span>} value={1} />
								{showServiceMap ? (
									<BottomNavigationButton className={this.props.index === 2 ? "Selected" : ""} icon={<List />} label={<span className="BottomButton">{t("Services")}</span>} value={2} />
								) : (
									<div />
								)}
						</BottomNavigation>
					</ReactCSSTransitionGroup>
				</div>
			}

			</Paper>
		);
	}
}

export default translate()(BottomNav);
