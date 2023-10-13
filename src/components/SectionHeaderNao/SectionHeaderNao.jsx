import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import "./sectionHeaderNao.css";

const naoFace_img = require("../../img/logo/naoface.svg").default;
const naoFaceHalf_img = require("../../img/logo/naoface.svg").default;

class SectionHeaderNao extends Component {

    renderSmalTitle() {
        const { idSmallTitle, defaultMessageSmallTitle, title } = this.props;
        if(idSmallTitle && defaultMessageSmallTitle && title){
            return <span><FormattedMessage id={idSmallTitle} defaultMessage={defaultMessageSmallTitle} /> {title}</span>;
        }else if(idSmallTitle && defaultMessageSmallTitle){
            return <FormattedMessage id={idSmallTitle} defaultMessage={defaultMessageSmallTitle} />
        }else {
            return null;
        }
    }

    render(){
        const {isBigNaoFace, children} = this.props;
        return(
            <div className="container"> 
                <div className="section-header">
                    <div className="fancy">
                        <span>
                            <img src={isBigNaoFace ? naoFace_img : naoFaceHalf_img} alt="Nao Face Logo"/>
                        </span>
                    </div>
                    <h2>{children}</h2>
                    <h5><em>{this.renderSmalTitle()}</em></h5>
                </div>
            </div>
        );
    }
}

SectionHeaderNao.propTypes = {
    isBigNaoFace: PropTypes.bool,
    idSmallTitle: PropTypes.string,
    defaultMessageSmallTitle: PropTypes.string,
    title: PropTypes.string
}

export default SectionHeaderNao;