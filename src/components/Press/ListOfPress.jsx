import React, { Component } from "react";
import Press from "./Press";

import "./press.css";

const press_data = require("../../json/press.json");

class ListOfPress extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container naova_press_section">
                        <div>
                            {press_data.map((p, i) => {
                                return <Press key={i} title={p.title} lang={p.lang} type={p.type} idDate={p.idDate} defaultMessageDate={p.defaultMessageDate} resume={p.resume} link={p.link} source={p.source}/>
                            })}
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfPress;
