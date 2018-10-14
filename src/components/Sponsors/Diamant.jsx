import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

class Diamant extends Component {
    render() {
        return (
            <div>
                <SectionHeaderNao isBigNaoFace={false}>
                    <FormattedMessage id="sponsors.diamond" defaultMessage="Diamond" />
                </SectionHeaderNao>
            </div>
        );
    }
}

export default Diamant;
