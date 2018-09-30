import React, { Component } from "react";
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
                        <h3>
                            <p><span className="highlight"><strong>MARS 2017</strong></span> - Création du club étudiant <span className="highlight"><strong>Naova</strong></span> par Jonathan Fortin</p>
                            <p><span className="highlight"><strong>24 JANVIER 2018</strong></span> - Qualifié pour participer à la <span className="highlight"><strong>RoboCup Montréal 2018</strong></span> (RoboCupSoccer - Standard Platform)</p>
                        </h3>
                    </div>
                </div>
          </div>
        );
    }
}

export default Historique;