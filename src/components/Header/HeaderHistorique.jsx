import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./headerHistorique.css"

const naovoLogo_img = require("../../img/logo/logo_titre.svg").default;

class HeaderHistorique extends Component {

    render(){
        return(
            <div id="tf-historique">
                <div className="overlay">
                    <div className="container"> 
                        <div className="content-heading text-center">
                            <center><img src={naovoLogo_img} className="intro-logo img-responsive" alt="free-template"/></center>
                            <h1><FormattedMessage id="historique.title" defaultMessage="Club history" /></h1>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default HeaderHistorique;