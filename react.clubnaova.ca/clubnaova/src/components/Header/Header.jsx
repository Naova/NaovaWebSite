import React, { Component } from "react";

import "./header.css"

const naovoLogo_img = require("../../img/logo/logo_titre_degraderblanc2.png");
const aeetsLogo_img = require("../../img/partenaire/aeetslogo.png");
const ubiMtlLogo_img = require("../../img/partenaire/Ubisoft_Montreal_Logo.png");

class Header extends Component {

    render(){
        return(
            <div id="tf-home">
                <div className="overlay"> 
                    <div className="container">
                        <div className="content-heading text-center">
                            <center><img src={naovoLogo_img} className="intro-logo img-responsive" alt="Naova Logo"/></center>
                            <h1>Club scientifique de robotique</h1>
                            <p className="lead">Ecole de Technologie Supérieure, Montréal</p>
                            <div>
                                <img src={aeetsLogo_img} className="partenaire_aeets_img intro-logo" alt="AEETS"/>
                                <img src={ubiMtlLogo_img} className="partenaire_ubiMtl_img intro-logo" alt="Ubisoft Montréal"/>
                            </div>
                            <a href="#tf-presentation" className="scroll goto-arrow"><i className=" fa fa-arrow-down fa-3x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;