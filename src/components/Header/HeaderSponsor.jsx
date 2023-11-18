import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getLang } from "../../selector/locale";

import "./headerSponsor.css"

const sponsor_pdf_en = require("../../doc/partenariat/Partnership plan-EN.pdf");
const sponsor_pdf_fr = require("../../doc/partenariat/Plan de partenariat-FR.pdf");

const naovaLogo_img = require("../../img/logo/logo_titre.svg").default;

const don_link = "https://www.jedonneenligne.org/fdets/campagne/ets/challenges/view/5c9fa310-7cd4-11ee-ac26-001dd8b75df7";

class headerSponsor extends Component {

    render(){
        return(
            <div id="tf-sponsors">
                <div className="overlay">
                    <div className="container"> 
                        <div className="content-heading text-center">
                            <center><img src={naovaLogo_img} className="intro-logo img-responsive" alt="free-template"/></center>
                            <h1><FormattedMessage id="sponsors.title" defaultMessage="Sponsors" /></h1>
                            <p className="lead"><FormattedMessage id="sponsors.description" defaultMessage="Thanks for all our sponsors!"/></p>
                        </div>
                        <center>
                            <a href={this.props.lang === "fr" ? sponsor_pdf_fr : sponsor_pdf_en} type="button" className="btn btn-primary btn_become_sponsor">
                                <FormattedMessage id="sponsors.becomeSponsors" defaultMessage="Become a sponsors!" />
                            </a>
                        </center>
                        <center>
                            <a href={don_link} type="button" className="btn btn-primary btn_become_sponsor">
                                <FormattedMessage id="sponsors.donation" defaultMessage="Make a donation!" />
                            </a>
                        </center>
                    </div> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        lang: getLang(state)
    };
}

export default connect(mapStateToProps)(headerSponsor);;