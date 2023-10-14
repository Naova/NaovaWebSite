import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./header.css"

const naovaLogo_img = require("../../img/logo/logo_titre.svg");
const aeetsLogo_img = require("../../img/partenaire/aeetslogo.png");
const etsLogo_img = require("../../img/partenaire/ets.png");
const teledyneLogo_img = require("../../img/partenaire/Teledyne_Logo_Blue.png");
const rousseauLogo_img = require("../../img/partenaire/rousseau_blue_logo.png");

class Header extends Component {

    render(){
        return(
            <div id="tf-home">
                <div className="overlay"> 
                    <div className="container">
                        <div className="content-heading text-center">
                            <center><img src={naovaLogo_img} className="intro-logo img-responsive" alt="Naova Logo"/></center>
                            <h1><FormattedMessage id="header.title" defaultMessage="Robotic scientific club" /></h1>
                            <p className="lead"><FormattedMessage id="header.school" defaultMessage="Ecole de Technologie Supérieure, Montréal" /></p>
                            <div className="col-md-12 row align-items-center partenaire-wrapper">
                                <div className="col-sm">
                                    <a href="https://www.etsmtl.ca/" >
                                        <img src={etsLogo_img} className="partenaire_ets_img" alt="École de technologie supérieure"/>
                                    </a>
                                </div>
                                <div className="col-sm">
                                    <a href="https://www.aeets.com/" >
                                        <img src={aeetsLogo_img} className="partenaire_aeets_img" alt="AEETS"/>
                                    </a>
                                </div> 
                                <div className="col-sm">
                                    <a href="https://www.rousseau.com/int_fr/" >
                                        <img src={rousseauLogo_img} className="partenaire_rousseau_img" alt="Rousseau"/>
                                    </a>
                                </div>
                                <div className="col-sm">
                                    <a href="https://www.teledyne.com/" >
                                        <img src={teledyneLogo_img} className="partenaire_teledyne_img" alt="Teledyne"/>
                                    </a>
                                </div>
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
