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
                        <Sponsors 
                            img="sgal.jpg"
                            link="https://sgalinc.com/"
                            colNum="12"
                            idTitle="sponsors.sp8"
                            defaultMessageTitle="Systèmes de gestion Alain Legault inc."/>
                            <Sponsors 
                            img="vimagefactory.png"
                            link="https://vimagefactory.com/"
                            colNum="12"
                            idTitle="sponsors.sp9"
                            defaultMessageTitle="Vimage Factory"/>
                   </div> 
                </div>
            </div>
        );
    }
}

export default Bronze;
