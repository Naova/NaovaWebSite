import React, { Component } from "react";
import Historique from "./Historique";

const historique_data = require("../../json/historique.json");

class ListOfHistorique extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container">
                        <div>
                            {historique_data.map((h, i) => {
                                return <Historique key={i} idDate={h.idDate} defaultMessageDate={h.defaultMessageDate} idContent={h.idContent} defaultMessageContent={h.defaultMessageContent}/>
                            })}
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfHistorique;
