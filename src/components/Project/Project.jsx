import React, { Component } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Skill from "./Skill";

import "./project.css";

const redNao_img = require("../../img/nao-solo-rouge.png");
const project_data = require("../../json/project.json");


class Project extends Component {

    render(){
        return(
            <div id="project">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle="project.sectionHeadNaoTitle" defaultMessageSmallTitle="Gotta keep workin'">
                    <FormattedHTMLMessage id="project.sectionHeadNaoChild" defaultMessage='Projects in <span class="highlight"><strong>progress</strong></span>'/>                    
                </SectionHeaderNao>
                <div className="gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4"> 
                                <div className="about-left-content text-center">
                                    <div className="img-wrap"> 
                                        <div className="profile-img">
                                            <img src={redNao_img} alt="Nao rouge" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <center>
                                <div className="col-md-6">
                                    <div className="about-right-content">
                                        <h4><strong><FormattedMessage id="project.title" defaultMessage="Progression" /></strong></h4>
                                        <p><FormattedMessage id="project.description" defaultMessage="Our team works (too?) hard on the following projects."/></p>
                                        <div className="skills">
                                            {project_data.map((data, i) => {
                                                let value = (data.close / (data.close + data.open)) * 100;
                                                return <Skill key={i} idTitle={data.idTitle} defaultMessageTitle={data.defaultMessage} value_num={Math.round(value)} />
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Project;