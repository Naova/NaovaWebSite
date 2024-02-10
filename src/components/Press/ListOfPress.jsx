import React, { Component } from "react";
import Press from "./Press";

import "./press.css";
import PressYearSection from "./PressYearSection";

const press_data = require("../../json/press.json");

class ListOfPress extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container naova_press_section">
                        <PressYearSection year={2018} />
                       {/* 
                        <div>
                            {press_data.map((p, i) => {
                                return <Press key={i} title={p.title} lang={p.lang} type={p.type} date={p.date} resume={p.resume} link={p.link} source={p.source}/>
                            })}
                        </div> 
                        */} 
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfPress;
