import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

class Platine extends Component {
    render() {
        return (
            <div>
                <SectionHeaderNao isBigNaoFace={false} >
                    <FormattedMessage id="sponsors.platinum" defaultMessage="Platinum" />
                </SectionHeaderNao>
            </div>
        );
    }
}

export default Platine;
