import React, { Component } from "react";
import { FormattedHTMLMessage } from "react-intl";

import "./definition.css";

class Definition extends Component {
//<center><a href="/competition.html" className="btn btn-primary"><FormattedMessage id="definition.buton" defaultMessage="Show the competition's results!" /></a></center>
    render(){
        return(
            <div className="container">
                <div className="col-md-12 naova_definition justify-content-center">
                    <p><FormattedHTMLMessage id="definition.def1" defaultMessage="Naova is the new robotic scientific club at ETS founded by Jonathan Fortin, Alexandre Doyle and Thierry Pouplier." /></p><br/>
                    <p><FormattedHTMLMessage id="definition.def2" defaultMessage="It has for goal to participate in robotic soccer games during the main international robotic competition: the Robocup. 
                            During the games, robot teams compete to score a maximum of goals against the opponent.
                            The robots are entirely autonomous and need to be programmed to play as a team without exterior intervention." /></p>
                    <p><FormattedHTMLMessage id="definition.def3" defaultMessage="Every team are composed of the same standard robots, there has to be a difference in the program dictating its comportment." /></p><br/>

                    <p><FormattedHTMLMessage id="definition.def4" defaultMessage="We are finalist of the Montréal RoboCup (Challenge Shield) during june 15 to 22, 2018 at the Palais des Congrès!" /></p>
                </div>
             <br/>
        </div>
        );
    }
}

export default Definition;