import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Sponsors from "./Sponsors";

class Or extends Component {
    render() {
        return (
            <div>
                <SectionHeaderNao isBigNaoFace={false}>
                    <FormattedMessage id="sponsors.gold" defaultMessage="Gold" />
                </SectionHeaderNao>
                <div className="container">
                    <Sponsors 
                        img="aeetslogo.png"
                        link="http://aeets.com/"
                        colNum="6"
                        idTitle="sponsors.sp1"
                        defaultMessageTitle="ETS's Student Association"/>

                    <Sponsors 
                        img="Ubisoft_Montreal_Logo.png"
                        link="http://montreal.ubisoft.com/"
                        colNum="6"
                        idTitle="sponsors.sp2"
                        defaultMessageTitle="Ubisoft Montréal"/>
                </div>
            </div>
        );
    }
}

export default Or;
