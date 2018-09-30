import React, { Component } from "react";
import LeftSummary from "./LeftSummary";
import RightSummary from "./RightSummary";

import "./summary.css";

class Summary extends Component {

    render(){
        return(
            <div className="container">
            <div className="col-md-6 text-right"> 
                <LeftSummary 
                    title="Un but clair"
                    description="Notre objectif est d'être en mesure de participer à la Robocup, catégorie soccer 5 vs 5 , en moins d'un an."
                    icon="fa fa-futbol-o"
                    link=""
                    linkTitle=""/>

                <br/><br/>

                <LeftSummary 
                    title="Un robot idéal"
                    description="A l'aide de sa forme humanoïde et des ses nombreux capteurs embarqués, le robot Nao n'a (presque) rien à envier à Zidane."
                    icon="fa fa-magic"
                    link="https://www.ald.softbankrobotics.com/fr/robots/nao"
                    linkTitle="Decouvrez Nao"/>

                <br/><br/><br/>

                <LeftSummary 
                    title="Des soutiens essentiels"
                    description="Parce que sans eux, rien ne serait possible, nous tenons à remercier nos commanditaires."
                    icon="fa fa-thumbs-up"
                    link="/sponsor"
                    linkTitle="Devenez commanditaires"/>
            </div>

            <br/><br/>

            <div className="col-md-6">
                <br/><br/>

                <RightSummary 
                    title="Une équipe de folie"
                    description="Venue des quatres coins de l'ETS, parée avec ses canards, l'équipe Naova n'a pas peur d'en découdre avec le reste du monde."
                    icon="fa fa-users"
                    link="/team"
                    linkTitle="Decouvrez l'équipe"/>

                <div><br/></div>

                <RightSummary 
                    title="Un sujet d'étude passionnant"
                    description="Jouer au soccer n'est pas si simple pour un robot. Les performances étant directement liées au code dictant leurs comportement, l'équipe Naova travaille d'arrache pied pour opimiser la performance de nos amis robotiques!"
                    icon="fa fa-question"
                    link=""
                    linkTitle=""/>
            </div>

        </div>
        );
    }
}

export default Summary;