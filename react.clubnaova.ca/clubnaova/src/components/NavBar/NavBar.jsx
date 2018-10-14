import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
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
        let navClassName = classNames("navbar-collapse", {"collapse": !this.state.isCollapseNotActive}, {"not_collapse": this.state.isCollapseNotActive})

        return(
                <nav id="nav_bar" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="/"><img src={logo_img} alt="Logo du Club Naova"/></a>
                    <button onClick={this.onChangeCollapse} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>
        
                    <div className={navClassName} id="navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/#tf-home" onClick={this.onChangeCollapse} className="scroll">
                                <FormattedMessage id="nav.home" defaultMessage="Home" />
                            </a>
                        </li>
                        <li>
                            <a href="/#tf-presentation" onClick={this.onChangeCollapse} className="scroll">
                                <FormattedMessage id="nav.presentation" defaultMessage="Presentation" />
                            </a>
                        </li>
                        <li>
                            <a href="/#tf-history" onClick={this.onChangeCollapse} className="scroll">
                                <FormattedMessage id="nav.history" defaultMessage="History" />
                            </a>
                        </li>
                        <li>
                            <a href="/#tf-about" onClick={this.onChangeCollapse} className="scroll">
                                <FormattedMessage id="nav.projects" defaultMessage="Projects" />
                            </a>
                        </li>
                        <li>
                            <a href="/#tf-works" onClick={this.onChangeCollapse} className="scroll">
                                <FormattedMessage id="nav.pictures" defaultMessage="Pictures" />
                            </a>
                        </li>
                        <li>
                            <a href="/team" onClick={this.onChangeCollapse} className="scroll">
                                <FormattedMessage id="nav.team" defaultMessage="Team" />
                            </a>
                        </li>
                        <li>
                            <a href="/sponsors" onClick={this.onChangeCollapse} className="scroll">
                                <FormattedMessage id="nav.sponsors" defaultMessage="Sponsors" />
                            </a>
                        </li>
                        <li>
                            <a href="/#tf-contact" onClick={this.onChangeCollapse} className="scroll">
                                <FormattedMessage id="nav.contact" defaultMessage="Contact us" />
                            </a>
                        </li> 
                        <li><span className="scroll navbar_small_bar">|</span></li>
                        <li>
                            <a className="scroll" onClick={this.onChangeLangue}>
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