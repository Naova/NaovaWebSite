import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./headerPress.css"

const naovoLogo_img = require("../../img/logo/logo_titre.png");

class HeaderPress extends Component {

    render(){
        return(
            <div id="tf-press">
                <div className="overlay">
                    <div className="container"> 
                        <div className="content-heading text-center">
                            <center><img src={naovoLogo_img} className="intro-logo img-responsive" alt="free-template"/></center>
                            <h1><FormattedMessage id="press.title" defaultMessage="Naova's press" /></h1>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default HeaderPress;