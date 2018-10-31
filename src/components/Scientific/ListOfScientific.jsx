import React, { Component } from "react";
import Scientific from "./Scientific";

const scientific_data = require("../../json/scientific.json");

class ListOfScientific extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container">
                        <div>
                            {scientific_data.map((s, i) => {
                                return <Scientific key={i} title={s.title} lang={s.lang} idDate={s.idDate} defaultMessageDate={s.defaultMessageDate} link={s.link} source={s.source}/>
                            })}
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfScientific;
