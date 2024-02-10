import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { setLocale } from "../../actions/locale";
import { getLang } from "../../selector/locale";

import "./navbar.css";

const logo_img = require("../../img/logo/logo.png");

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { isCollapseNotActive: false };
    }

    onChangeCollapse = () => {
        let oldIsCollapseNotActive = this.state.isCollapseNotActive;
        this.setState({
            isCollapseNotActive: !oldIsCollapseNotActive
        })
    }

    onChangeLangue = () => {
        let langChange = "fr";
        if(this.props.lang === "fr"){
            langChange = "en";
        }

        this.props.setLocale(langChange)
        this.onChangeCollapse();
    }

    render(){
        // let navClassName = classNames("navbar-collapse", {"collapse": !this.state.isCollapseNotActive}, {"not_collapse": this.state.isCollapseNotActive})

        return(
                <nav id="nav_bar" className="navbar navbar-light navbar-fixed-top navbar-expand-lg bg-light">
                <div className="container">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="/"><img src={logo_img} alt="Logo du Club Naova"/></a>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
        
                    <div className="collapse navbar-collapse justify-content-center justify-content-sm-end text-sm-center" id="navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <a href="/#project" onClick={this.onChangeCollapse} className="scroll navbar-item-naova">
                                <FormattedMessage id="nav.projects" defaultMessage="Projects" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#pictures" onClick={this.onChangeCollapse} className="scroll navbar-item-naova">
                                <FormattedMessage id="nav.pictures" defaultMessage="Pictures" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/press" onClick={this.onChangeCollapse} className="scroll navbar-item-naova">
                                <FormattedMessage id="nav.press" defaultMessage="Press" />
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a href="/team" onClick={this.onChangeCollapse} className="scroll navbar-item-naova">
                                <FormattedMessage id="nav.team" defaultMessage="Team" />
                            </a>
                        </li>
                        <li>
                            <a href="/scientific" onClick={this.onChangeCollapse} className="scroll navbar-item-naova">
                                <FormattedMessage id="nav.scientific" defaultMessage="Scientific" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/sponsors" onClick={this.onChangeCollapse} className="scroll navbar-item-naova">
                                <FormattedMessage id="nav.sponsors" defaultMessage="Sponsors" />
                            </a>
                        </li>
                        <li className="nav-item"><span className="scroll navbar-item-naova">|</span></li>
                        <li className="nav-item">
                            <a className="scroll navbar-item-naova" onClick={this.onChangeLangue}>
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