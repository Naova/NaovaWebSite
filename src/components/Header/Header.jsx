import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./header.css"
import { SPONSORS, SPONSOR_DIAMANT, SPONSOR_OR, SPONSOR_PLATINE, SPONSOR_BRONZE } from "../Sponsors/sponsors.constants";

const naovaLogo_img = require("../../img/logo/logo_titre.svg").default;
const aeetsLogo_img = require("../../img/partenaire/aeetslogo.webp");
const etsLogo_img = require("../../img/partenaire/ets.webp");
const teledyneLogo_img = require("../../img/partenaire/Teledyne_Logo_Blue.webp");
const rousseauLogo_img = require("../../img/partenaire/rousseau_blue_logo.webp");

class Header extends Component {

    render(){

        const diamondSponsors = SPONSORS.filter((sponsor) => sponsor.type === SPONSOR_DIAMANT)
        const platinumSponsors = SPONSORS.filter((sponsor) => sponsor.type === SPONSOR_PLATINE)
        const goldSponsors = SPONSORS.filter((sponsor) => sponsor.type === SPONSOR_OR)
        const bronzeSponsors = SPONSORS.filter((sponsor) => sponsor.type === SPONSOR_BRONZE)
        const allSponsors = [...diamondSponsors, ...platinumSponsors, ...goldSponsors, ...bronzeSponsors]
        return (
            <div id="tf-home">
                <div className="overlay"> 
                    <div className="container">
                        <div className="content-heading text-center">
                            <center><img src={naovaLogo_img} className="intro-logo img-responsive" alt="Naova Logo"/></center>
                            <h1><FormattedMessage id="header.title" defaultMessage="Robotic scientific club" /></h1>
                            <p className="lead"><FormattedMessage id="header.school" defaultMessage="Ecole de Technologie Supérieure, Montréal" /></p>
                            <div className="row align-items-center partenaire-wrapper">
                                {allSponsors.map((sponsor) =>
                                    <div style={{width: sponsor.frontPageWidth, padding: "2%"}}>
                                        <a target="_blank" href={sponsor.link} >
                                            <img src={require("../../img/partenaire/"+sponsor.img)} className="partenaire_img" alt={sponsor.defaultMessageTitle}/>
                                        </a>
                                    </div>
                                )}
                                
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
