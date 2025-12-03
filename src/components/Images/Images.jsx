import React, { Component } from "react";
import { FormattedHTMLMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import OneImage from "./OneImage";

import "./images.css";

class Images extends Component {

    render() {
        return (
            <div id="pictures">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle="imgages.sectionHeadNaoTitle" defaultMessageSmallTitle="Because a robot is worth a thousand photos">
                    <FormattedHTMLMessage id="images.sectionHeadNaoChild" defaultMessage='Our work in <span class="highlight"><strong>pictures</strong></span>' />
                </SectionHeaderNao>
                <div className="images">
                    <center>
                        <OneImage img="36.webp" />
                        <OneImage img="32.webp" />
                        <OneImage img="33.webp" />
                        <OneImage img="34.webp" />
                        <OneImage img="35.webp" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="27.webp" />
                        <OneImage img="28.webp" />
                        <OneImage img="29.webp" />
                        <OneImage img="30.webp" />
                        <OneImage img="31.webp" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="22.webp" />
                        <OneImage img="23.webp" />
                        <OneImage img="24.webp" />
                        <OneImage img="25.webp" />
                        <OneImage img="26.webp" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="16.webp" />
                        <OneImage img="17.webp" />
                        <OneImage img="19.webp" />
                        <OneImage img="20.webp" />
                        <OneImage img="21.webp" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="11.webp" />
                        <OneImage img="12.webp" />
                        <OneImage img="13.webp" />
                        <OneImage img="14.webp" />
                        <OneImage img="15.webp" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="6.webp" />
                        <OneImage img="7.webp" />
                        <OneImage img="8.webp" />
                        <OneImage img="9.webp" />
                        <OneImage img="10.webp" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="1.webp" />
                        <OneImage img="2.webp" />
                        <OneImage img="3.webp" />
                        <OneImage img="4.webp" />
                        <OneImage img="5.webp" />
                    </center>
                </div>
            </div>
        );
    }
}

export default Images;