import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./headerSponsor.css"

const sponsor_pdf = require("../../doc/partenariat/partenariat_2019.pdf");

const naovoLogo_img = require("../../img/logo/logo_titre_degraderblanc2.png");

const don_link = "https://www.jedonneenligne.org/fdets/campagne/ets/defi/Challenge/view/e79ea1c7-2ad2-494c-b56e-322a89d432a9?fbclid=IwAR04XC9yKNndLICDmI3dIdh2lEvDJQ2E2BLZMkaBrftD0lIiQKm98W3js_8";

class headerSponsor extends Component {

    render(){
        return(
            <div id="tf-sponsors">
                <div className="overlay">
                    <div className="container"> 
                        <div className="content-heading text-center">
                            <center><img src={naovoLogo_img} className="intro-logo img-responsive" alt="free-template"/></center>
                            <h1><FormattedMessage id="sponsors.title" defaultMessage="Sponsors" /></h1>
                            <p className="lead"><FormattedMessage id="sponsors.description" defaultMessage="Thanks for all our sponsors!"/></p>
                        </div>
                        <center>
                            <a href={sponsor_pdf} target="_blank" type="button" className="btn btn-primary btn_become_sponsor">
                                <FormattedMessage id="sponsors.becomeSponsors" defaultMessage="Become a sponsors!" />
                            </a>
                        </center>
                        <center>
                            <a href={don_link} target="_blank" type="button" className="btn btn-primary btn_become_sponsor">
                                <FormattedMessage id="sponsors.donation" defaultMessage="Make a donation!" />
                            </a>
                        </center>
                    </div> 
                </div>
            </div>
        );
    }
}

export default headerSponsor;