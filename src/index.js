import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { compose } from "recompose";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { addLocaleData } from "react-intl";
import fr from "react-intl/locale-data/fr";
import en from "react-intl/locale-data/en";
import App from './App';
import reducerApp from "./reducers";
import { localeSet } from "./actions/locale";
//import registerServiceWorker from './registerServiceWorker';


addLocaleData(en);
addLocaleData(fr);

let store = createStore(reducerApp,
	compose(
        applyMiddleware(thunk),
		//window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if(localStorage.webSiteLang){
    store.dispatch(localeSet(localStorage.webSiteLang));
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);