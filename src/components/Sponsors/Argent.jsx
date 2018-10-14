import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Sponsors from "./Sponsors";

class Argent extends Component {
    render() {
        return (
            <div>
                <SectionHeaderNao isBigNaoFace={false}>
                    <FormattedMessage id="sponsors.silver" defaultMessage="Silver" />
                </SectionHeaderNao>

                <div className="container">
                    <Sponsors 
                        img="fdrdqlogo.png"
                        link="http://www.frqnt.gouv.qc.ca/accueil"
                        colNum="12"
                        idTitle="sponsors.sp3"
                        defaultMessageTitle="Fond de recherche du Québec"/>
                </div>
            </div>
        );
    }
}

export default Argent;
