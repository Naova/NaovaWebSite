import React, { Component } from "react";
import Scientific from "./Scientific";

import "./scientific.css";

const scientific_data = require("../../json/scientific.json");

class ListOfScientific extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container naova_scientific_section">
                        <div>
                            {scientific_data.map((s, i) => {
                                return <Scientific key={i} title={s.title} lang={s.lang} idDate={s.idDate} defaultMessageDate={s.defaultMessageDate} link={s.link} source={s.source} github={s.github}/>
                            })}
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfScientific;
