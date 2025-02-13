import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./headerTeam.css"

const naovaLogo_img = require("../../img/logo/logo_titre.svg").default;

class HeaderTeam extends Component {

    render(){
        return(
            <div id="tf-team">
                <div className="overlay">
                    <div className="container"> 
                        <div className="content-heading text-center">
                            <center><img src={naovaLogo_img} className="intro-logo img-responsive" alt="free-template"/></center>
                            <h1><FormattedMessage id="team.title" defaultMessage="Naova's team" /></h1>
                            <p className="lead"><FormattedMessage id="team.description" defaultMessage="Humans behind bots"/></p>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default HeaderTeam;