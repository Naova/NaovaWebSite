import React, { Component } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Definition from "./Definition/Definition";
import Summary from "./Summary/Summary";

class Presentation extends Component {

    render(){
        return(
            <div id="tf-presentation row">
				<SectionHeaderNao isBigNaoFace={true}>
                    <FormattedHTMLMessage id="presentation.sectionHeadNaoChild" defaultMessage='Naova : <span class="highlight"><strong>definition</strong></span>' />
                </SectionHeaderNao>
				<Definition />

           		<div className="fancy"><span></span></div>
                <div className="container">
                    <div className="row justify-content-center" >
                        <h2><FormattedMessage id="presentation.def" defaultMessage="Naova, briefly :" /></h2>
                        <Summary />
                    </div>
                </div>
            </div>
        );
    }
}

export default Presentation;