import React, { Component } from "react";
import LeftSummary from "./LeftSummary";
import RightSummary from "./RightSummary";

import "./summary.css";

class Summary extends Component {

    render(){
        return(
            <div className="container summary_section">
            <div className="col-md-6 text-right"> 
                <LeftSummary 
                    idTitle="summary.title1"
                    defaultMessageTitle="A CLEAR GOAL"
                    idDescription="summary.description1"
                    defaultMessageDescription="We aim to win in Robocup, category soccer 5vs5."
                    icon="fa fa-futbol-o"/>

                <br/><br/>

                <LeftSummary 
                    idTitle="summary.title2"
                    defaultMessageTitle="AN IDEAL ROBOT"
                    idDescription="summary.description2"
                    defaultMessageDescription="With the help of its humanoid shape and its numerous embarked captors, the robot Nao has (almost) nothing to envy from Zidane."
                    icon="fa fa-magic"
                    link="https://www.ald.softbankrobotics.com/fr/robots/nao"
                    idLinkTitle="summary.linkTitle2"
                    defaultMessageLinkTitle="Learn more about Nao"/>

                <br/><br/><br/>

                <LeftSummary 
                    idTitle="summary.title3"
                    defaultMessageTitle="NECESSARY SUPPORT"
                    idDescription="summary.description3"
                    defaultMessageDescription="Without them nothing would be possible, we want to thank our sponsors."
                    icon="fa fa-thumbs-up"
                    link="/sponsor"
                    idLinkTitle="summary.linkTitle3"
                    defaultMessageLinkTitle="Get involved as a sponsor"/>
            </div>

            <br/><br/>

            <div className="col-md-6">
                <br/><br/>

                <RightSummary 
                    idTitle="summary.title4"
                    defaultMessageTitle="AN INCREDIBLE TEAM"
                    idDescription="summary.description4"
                    defaultMessageDescription="Coming from the four corners of ETS, paired with their ducks, Naova’s team fear nothing in thisworld."
                    icon="fa fa-users"
                    link="/team"
                    idLinkTitle="summary.linkTitle4"
                    defaultMessageLinkTitle="Learn more about the team"/>

                <div><br/></div>

                <RightSummary 
                    idTitle="summary.title5"
                    defaultMessageTitle="A THRILLING SUBJECT TO STUDY"
                    idDescription="summary.description5"
                    defaultMessageDescription="Playing soccer isn’t that simple for a robot. The performance being directly linked to the code dictating their comportment, the team works hard to optimize the performance of our robotic friends."
                    icon="fa fa-question"/>
            </div>
        </div>
        );
    }
}

export default Summary;