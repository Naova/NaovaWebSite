import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import { IntlProvider } from "react-intl";

import Home from "./containers/Home/Home";
import Team from "./containers/Team/Team";
import Sponsors from "./containers/Sponsors/Sponsors";
import Press from "./containers/Press/Press";
import Scientific from "./containers/Scientific/Scientific";

import messages from "./messages";
import "./style/bootstrap.min.css";
import "./style/font-awesome.css";
//import "./style/style.css";
import "./style/responsive.css";

class App extends Component {
	render() {
		const { lang } = this.props;
		return (
			<IntlProvider locale={lang} messages={messages[lang]}>
				<div>
					<Router>
						<Switch>
							<Route exact path="/team" component={Team} />
							<Route exact path="/sponsors"component={Sponsors} />
							<Route exact path="/press"component={Press} />
							<Route exact path="/scientific"component={Scientific} />
							<Route path="/" component={Home} />
							<Route component={Home} />
						</Switch>
					</Router>
				</div>
			</IntlProvider>
		);
	}
}

App.propTypes = {
	lang: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
	return {
		lang : state.locale.lang
	};
}

export default connect(mapStateToProps)(App);
