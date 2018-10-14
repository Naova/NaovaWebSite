import React, { Component } from "react";
import { FormattedHTMLMessage} from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import OneImage from "./OneImage";

import "./images.css";

class Images extends Component {

    render(){
        return(
            <div id="tf-works">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle="imgages.sectionHeadNaoTitle" defaultMessageSmallTitle="Because a robot is worth a thousand photos">
                    <FormattedHTMLMessage id="images.sectionHeadNaoChild" defaultMessage='Our work in <span class="highlight"><strong>pictures</strong></span>' />
                </SectionHeaderNao>
                <div className="images">
                    <center>
                        <OneImage img="03.jpg"/>
                        <OneImage img="02.jpg"/>
                        <OneImage img="04.jpg"/>
                        <OneImage img="05.jpg"/>
                        <OneImage img="06.jpg"/>
                    </center>
                    <br/>
                    <center>
                        <OneImage img="07.jpg"/>
                        <OneImage img="08.jpg"/>
                        <OneImage img="09.jpg"/>
                        <OneImage img="10.jpg"/>
                        <OneImage img="11.jpg"/>
                    </center>
                </div>
            </div>
        );
    }
}

export default Images;