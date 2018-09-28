import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import Home from "./containers/Home/Home";
import "./style/bootstrap.min.css";
import "./style/font-awesome.css";
//import "./style/style.css";
import "./style/responsive.css";

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
