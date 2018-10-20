import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Sponsors from "./Sponsors";

class Diamant extends Component {
    render() {
        return (
            <div>
                <SectionHeaderNao isBigNaoFace={false}>
                    <FormattedMessage id="sponsors.diamond" defaultMessage="Diamond" />
                </SectionHeaderNao>

                <div className="container">
                    <Sponsors 
                        img="ets.png"
                        link="https://www.etsmtl.ca/"
                        colNum="12"
                        idTitle="sponsors.sp4"
                        defaultMessageTitle="École de technologie supérieure"/>
                </div>
            </div>
        );
    }
}

export default Diamant;
