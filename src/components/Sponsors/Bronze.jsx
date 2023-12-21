import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Sponsors from "./Sponsors";

class Bronze extends Component {
    render() {
        return (
            <div>
                <SectionHeaderNao isBigNaoFace={false}>
                    <FormattedMessage id="sponsors.bronze" defaultMessage="Bronze" />
                </SectionHeaderNao>
                <div className="container">
                    <div className="row align-items-center">
                       
                   </div> 
                </div>
            </div>
        );
    }
}

export default Bronze;
