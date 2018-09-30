import React, { Component } from "react";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Definition from "./Definition/Definition";
import Summary from "./Summary/Summary";

class Presentation extends Component {

    render(){
        return(
            <div id="tf-presentation">
				<SectionHeaderNao isBigNaoFace={true}>Naova : <span className="highlight"><strong>définition</strong></span></SectionHeaderNao>
				<Definition />

           		<div className="fancy"><span></span></div>
                <div className="container">
                    <p><h2>Naova, c'est donc :</h2></p>
                    <Summary />
                </div>
            </div>
        );
    }
}

export default Presentation;