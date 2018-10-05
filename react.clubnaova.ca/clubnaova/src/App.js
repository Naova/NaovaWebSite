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
							<Route exact path="/" component={Home} />
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
