import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

class Bronze extends Component {
    render() {
        return (
            <div>
                <SectionHeaderNao isBigNaoFace={false}>
                    <FormattedMessage id="sponsors.bronze" defaultMessage="Bronze" />
                </SectionHeaderNao>
            </div>
        );
    }
}

export default Bronze;
