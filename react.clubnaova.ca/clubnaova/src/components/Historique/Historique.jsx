import React, { Component } from "react";
import { FormattedHTMLMessage} from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

class Historique extends Component {

    render(){
        return(
            <div id="tf-history">
                <SectionHeaderNao isBigNaoFace={false}>
                    <span className="highlight"><strong>Historique</strong></span> du club
                </SectionHeaderNao>
                <div className="container">
                    <div className="col-md-12">
                        <h4>
                            <p><FormattedHTMLMessage id="historique.his1" defaultMessage='<span class="highlight"><strong>MAI 2017</strong></span> - Création du club étudiant <span class="highlight"><strong>Naova</strong></span> par Jonathan Fortin, Alexandre Doyle et Thierry Pouplier' /></p>
                            <p><FormattedHTMLMessage id="historique.his2" defaultMessage='<span class="highlight"><strong>JANUARY 24 2018</strong></span> - Qualifed to participate in the <span class="highlight"><strong>RoboCup Montréal 2018</strong></span> (RoboCupSoccer - Standard Platform)' /></p>
                            <p><FormattedHTMLMessage id="historique.his3" defaultMessage='<span class="highlight"><strong>JUNE 15-22, 2018</strong></span> - Participated to in the <span class="highlight"><strong>RoboCup Montréal 2018</strong></span> (RoboCupSoccer - Standard Platform)' /></p>
                            <p><FormattedHTMLMessage id="historique.his4" defaultMessage='<span class="highlight"><strong>JUIN 22, 2018</strong></span> - Finalist (Challenge Shield) to in the <span class="highlight"><strong>RoboCup Montréal 2018</strong></span> (RoboCupSoccer - Standard Platform)' /></p>
                        </h4>
                    </div>
                </div>
          </div>
        );
    }
}

export default Historique;