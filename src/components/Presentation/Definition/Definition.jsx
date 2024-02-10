import React, { Component } from "react";
import { FormattedHTMLMessage } from "react-intl";

import "./definition.css";

class Definition extends Component {
//<center><a href="/competition.html" className="btn btn-primary"><FormattedMessage id="definition.buton" defaultMessage="Show the competition's results!" /></a></center>
    render(){
        return(
            <div className="container">
                <div className="col-md-12 naova_definition justify-content-center">
                    <p><FormattedHTMLMessage id="definition.def1"  /></p>
                    <p><FormattedHTMLMessage id="definition.def2"  /></p>
                    <p><FormattedHTMLMessage id="definition.def3" /></p><br/>

                </div>
             <br/>
        </div>
        );
    }
}

export default Definition;