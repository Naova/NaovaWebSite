import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { setLocale } from "../../actions/locale";
import { getLang } from "../../selector/locale";

import "./navbar.css";

const logo_img = require("../../img/logo/logo.png");

class NavBar extends Component {

    render(){
        let langChange = "fr";
        if(this.props.lang === "fr"){
            langChange = "en";
        }

        return(
                <nav id="nav_bar" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/"><img src={logo_img} alt="Logo du Club Naova"/></a>
                    </div>
        
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#tf-home" className="scroll">
                                <FormattedMessage id="nav.home" defaultMessage="Home" />
                            </a>
                        </li>
                        <li>
                            <a href="#tf-presentation" className="scroll">
                                <FormattedMessage id="nav.presentation" defaultMessage="Presentation" />
                            </a>
                        </li>
                        <li>
                            <a href="#tf-history" className="scroll">
                                <FormattedMessage id="nav.history" defaultMessage="History" />
                            </a>
                        </li>
                        <li>
                            <a href="#tf-about" className="scroll">
                                <FormattedMessage id="nav.projects" defaultMessage="Projects" />
                            </a>
                        </li>
                        <li>
                            <a href="#tf-works" className="scroll">
                                <FormattedMessage id="nav.pictures" defaultMessage="Pictures" />
                            </a>
                        </li>
                        <li>
                            <a href="equipe.html" className="scroll">
                                <FormattedMessage id="nav.team" defaultMessage="Team" />
                            </a>
                        </li>
                        <li>
                            <a href="partenaires.html" className="scroll">
                                <FormattedMessage id="nav.sponsors" defaultMessage="Sponsors" />
                            </a>
                        </li>
                        <li>
                            <a href="#tf-contact" className="scroll">
                                <FormattedMessage id="nav.contact" defaultMessage="Contact us" />
                            </a>
                        </li> 
                        <li><span className="scroll navbar_small_bar">|</span></li>
                        <li>
                            <a className="scroll" onClick={() => this.props.setLocale(langChange)}>
                                <FormattedMessage id="nav.langue" defaultMessage="fr" />
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    lang: PropTypes.string.isRequired,
	setLocale: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
	return {
		setLocale: (lang) => dispatch(setLocale(lang))
	}
}

const mapStateToProps = (state) => {
	return {
        lang: getLang(state)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);