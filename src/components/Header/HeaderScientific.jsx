import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./headerScientific.css"

const naovoLogo_img = require("../../img/logo/logo_titre_degraderblanc2.png");

class HeaderScientific extends Component {

    render(){
        return(
            <div id="tf-scientific">
                <div className="overlay">
                    <div className="container"> 
                        <div className="content-heading text-center">
                            <center><img src={naovoLogo_img} className="intro-logo img-responsive" alt="free-template"/></center>
                            <h1><FormattedMessage id="scientific.title" defaultMessage="Naova's scientific articles" /></h1>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default HeaderScientific;