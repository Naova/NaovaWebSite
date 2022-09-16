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
                        <OneImage img="36.jpg" />
                        <OneImage img="32.jpg" />
                        <OneImage img="33.jpg" />
                        <OneImage img="34.jpg" />
                        <OneImage img="35.jpg" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="27.jpg" />
                        <OneImage img="28.jpg" />
                        <OneImage img="29.jpg" />
                        <OneImage img="30.jpg" />
                        <OneImage img="31.jpg" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="22.jpg" />
                        <OneImage img="23.jpg" />
                        <OneImage img="24.jpg" />
                        <OneImage img="25.jpg" />
                        <OneImage img="26.jpg" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="16.jpg" />
                        <OneImage img="17.jpg" />
                        <OneImage img="19.jpg" />
                        <OneImage img="20.jpg" />
                        <OneImage img="21.jpg" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="11.jpg" />
                        <OneImage img="12.png" />
                        <OneImage img="13.jpg" />
                        <OneImage img="14.jpg" />
                        <OneImage img="15.jpg" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="6.png" />
                        <OneImage img="7.png" />
                        <OneImage img="8.png" />
                        <OneImage img="9.png" />
                        <OneImage img="10.png" />
                    </center>
                    <br />
                    <center>
                        <OneImage img="1.png" />
                        <OneImage img="2.png" />
                        <OneImage img="3.png" />
                        <OneImage img="4.png" />
                        <OneImage img="5.png" />
                    </center>
                </div>
            </div>
        );
    }
}

export default Images;