import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./header.css"

const naovoLogo_img = require("../../img/logo/logo_titre_degraderblanc2.png");
const aeetsLogo_img = require("../../img/partenaire/aeetslogo.png");
const ubiMtlLogo_img = require("../../img/partenaire/Ubisoft_Montreal_Logo.png");
const etsLogo_img = require("../../img/partenaire/ets.png");
const equisoft_img = require("../../img/partenaire/EQUISOFT_RGB_FR.png");

class Header extends Component {

    render(){
        return(
            <div id="tf-home">
                <div className="overlay"> 
                    <div className="container">
                        <div className="content-heading text-center">
                            <center><img src={naovoLogo_img} className="intro-logo img-responsive" alt="Naova Logo"/></center>
                            <h1><FormattedMessage id="header.title" defaultMessage="Robotic scientific club" /></h1>
                            <p className="lead"><FormattedMessage id="header.school" defaultMessage="Ecole de Technologie Supérieure, Montréal" /></p>
                            <div>
                                <img src={etsLogo_img} className="col-md-3 partenaire_ets_img intro-logo" alt="École de technologie supérieure"/>
                                <img src={equisoft_img} className="col-md-3 partenaire_equisoft_img intro-logo" alt="Équisoft" />
                                <img src={aeetsLogo_img} className="col-md-3 intro-logo" alt="AEETS"/>
                                <img src={ubiMtlLogo_img} className="col-md-3 partenaire_ubiMtl_img intro-logo" alt="Ubisoft Montréal"/> 
                            </div>
                            <div className="col-md-12">
                                <a href="#tf-presentation" className="scroll goto-arrow"><i className=" fa fa-arrow-down fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;