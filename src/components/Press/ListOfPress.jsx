import React, { Component } from "react";
import Press from "./Press";

import "./press.css";
import PressYearSection from "./PressYearSection";

const press_data = require("../../json/press.json");

class ListOfPress extends Component {
    render() {
        const availableYears = press_data.map(p => new Date(p.date).getFullYear());
        const uniqueYears = [...new Set(availableYears)].sort().reverse();
        return (
            <div>
                <center>
                    <div className="container naova_press_section">
                        {uniqueYears.map((year, i) => {
                            return <PressYearSection key={i} year={year} />;
                        })}
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfPress;
