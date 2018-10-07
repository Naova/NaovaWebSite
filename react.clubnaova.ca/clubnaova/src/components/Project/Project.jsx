import React, { Component } from "react";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Skill from "./Skill";

import "./project.css";

const redNao_img = require("../../img/nao-solo-rouge.png");

class Project extends Component {

    render(){
        return(
            <div id="tf-about">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle="" defaultMessageSmallTitle="Gotta keep workin'">
                    Projets en <span className="highlight"><strong>cours</strong></span>
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
                                        <h4><strong>Progression</strong></h4>
                                        <p>Notre équipe se concentre actuellement sur les tâches suivantes avec beaucoup (un peu trop?) d'acharnement.</p>
                                        <div className="skills">
                                            <Skill 
                                                title="Simulation"
                                                value_num="65"
                                                className="progress-65"/>
                                            
                                            <Skill 
                                                title="Developpement de la Vision"
                                                value_num="60"
                                                className="progress-60"/>
                                            
                                            <Skill 
                                                title="Developpement de la Communication"
                                                value_num="55"
                                                className="progress-55"/>
                                            
                                            <Skill 
                                                title="Gestion des mouvements, Contrôle"
                                                value_num="60"
                                                className="progress-60"/>
                                            
                                            <Skill 
                                                title="Technologies de l'information du club"
                                                value_num="62"
                                                className="progress-62"/>

                                            <Skill 
                                                title="Projet en Deep Learning"
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