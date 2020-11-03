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
                    <div className="justify-content-center row">
                        <Sponsors 
                            img="aeetslogo.png"
                            link="http://aeets.com/"
                            colNum="6"
                            idTitle="sponsors.sp1"
                            defaultMessageTitle="ETS's Student Association"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Or;
