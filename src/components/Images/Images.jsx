import React, { Component } from "react";
import { FormattedHTMLMessage} from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import OneImage from "./OneImage";

import "./images.css";

class Images extends Component {

    render(){
        return(
            <div id="pictures">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle="imgages.sectionHeadNaoTitle" defaultMessageSmallTitle="Because a robot is worth a thousand photos">
                    <FormattedHTMLMessage id="images.sectionHeadNaoChild" defaultMessage='Our work in <span class="highlight"><strong>pictures</strong></span>' />
                </SectionHeaderNao>
                <div className="images">
                    <center>
                        <OneImage img="1.png"/>
                        <OneImage img="2.png"/>
                        <OneImage img="3.png"/>
                        <OneImage img="4.png"/>
                        <OneImage img="5.png"/>
                    </center>
                    <br/>
                    <center>
                        <OneImage img="6.png"/>
                        <OneImage img="7.png"/>
                        <OneImage img="8.png"/>
                        <OneImage img="9.png"/>
                        <OneImage img="10.png"/>
                    </center>
                </div>
            </div>
        );
    }
}

export default Images;