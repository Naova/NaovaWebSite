import React, { Component } from "react";
import PropTypes from "prop-types";
import "./sectionHeaderNao.css";

const naoFace_img = require("../../img/logo/naoface.png");
const naoFaceHalf_img = require("../../img/logo/naofacehalf.png");

class SectionHeaderNao extends Component {

    render(){
        const {isBigNaoFace, smallTitle, children} = this.props;
        return(
            <div className="container"> 
                <div className="section-header">
                    <div className="fancy">
                        <span>
                            <img src={isBigNaoFace ? naoFace_img : naoFaceHalf_img} alt="Nao Face Logo"/>
                        </span>
                    </div>
                    <h2>{children}</h2>
                    <h5><em>{smallTitle}</em></h5>
                </div>
            </div>
        );
    }
}

SectionHeaderNao.propTypes = {
    isBigNaoFace: PropTypes.bool,
    smallTitle: PropTypes.string
}

export default SectionHeaderNao;