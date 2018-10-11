import React, { Component } from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Skill from "./Skill";

import "./project.css";

const redNao_img = require("../../img/nao-solo-rouge.png");

class Project extends Component {

    render(){
        return(
            <div id="tf-about">
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
                                            <Skill
                                                idTitle="project.skill1" 
                                                defaultMessageTitle="Simulation"
                                                value_num="65"
                                                className="progress-65"/>
                                            
                                            <Skill
                                                idTitle="project.skill2"
                                                defaultMessageTitle="Vision developement"
                                                value_num="60"
                                                className="progress-60"/>
                                            
                                            <Skill
                                                idTitle="project.skill3" 
                                                defaultMessageTitle="Communication developement"
                                                value_num="55"
                                                className="progress-55"/>
                                            
                                            <Skill
                                                idTitle="project.skill4"
                                                defaultMessageTitle="Movement management, controls"
                                                value_num="60"
                                                className="progress-60"/>
                                            
                                            <Skill 
                                                idTitle="project.skill5"
                                                defaultMessageTitle="Club's information technolgy"
                                                value_num="62"
                                                className="progress-62"/>

                                            <Skill 
                                                idTitle="project.skill6"
                                                defaultMessageTitle="Deep Learning project"
                                                value_num="25"
                                                className="progress-25"/>
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