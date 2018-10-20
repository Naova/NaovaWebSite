import React, { Component } from "react";
import { FormattedHTMLMessage, FormattedMessage} from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

import "./historique.css";

class Historique extends Component {

    render(){
        return(
            <div id="tf-history">
                <SectionHeaderNao isBigNaoFace={false}>
                    <FormattedHTMLMessage id="historique.sectionHeadNaoChild" defaultMessage='Club <span class="highlight"><strong>history</strong></span>'/>
                </SectionHeaderNao>
                <div className="container">
                    <div className="col-md-12">
                        <h4 className="naova_historique">
                            <p>
                                <span className="highlight naova_historique_date"><strong><FormattedMessage id="historique.his1_date" defaultMessage="MAY 2017"/></strong></span>
                                <span className="naova_historique_line"> - </span>
                                <FormattedHTMLMessage id="historique.his1" defaultMessage='Creation of the student club <span class="highlight"><strong>Naova</strong></span> by Jonathan Fortin, Alexandre Doyle and Thierry Pouplier' />
                            </p>
                            <p>
                                <span className="highlight naova_historique_date"><strong><FormattedMessage id="historique.his2_date" defaultMessage="JANUARY 24 2018"/></strong></span>
                                <span className="naova_historique_line"> - </span>
                                <FormattedHTMLMessage id="historique.his2" defaultMessage='Qualifed to participate in the <span class="highlight"><strong>RoboCup Montréal 2018</strong></span> (RoboCupSoccer - Standard Platform)' />
                            </p>
                            <p>
                                <span className="highlight naova_historique_date"><strong><FormattedMessage id="historique.his3_date" defaultMessage="JUNE 15-22, 2018"/></strong></span>
                                <span className="naova_historique_line"> - </span>
                                <FormattedHTMLMessage id="historique.his3" defaultMessage='Participated to in the <span class="highlight"><strong>RoboCup Montréal 2018</strong></span> (RoboCupSoccer - Standard Platform)' />
                            </p>
                            <p>
                                <span className="highlight naova_historique_date"><strong><FormattedMessage id="historique.his4_date" defaultMessage="JUIN 22, 2018"/></strong></span>
                                <span className="naova_historique_line"> - </span>
                                <FormattedHTMLMessage id="historique.his4" defaultMessage='Finalist (Challenge Shield) to in the <span class="highlight"><strong>RoboCup Montréal 2018</strong></span> (RoboCupSoccer - Standard Platform)' />
                            </p>
                        </h4>
                    </div>
                </div>
          </div>
        );
    }
}

export default Historique;