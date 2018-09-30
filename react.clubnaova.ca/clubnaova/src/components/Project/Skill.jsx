import React, { Component } from "react";
import PropTypes from "prop-types";

import "./skill.css";

class Skill extends Component {

    render(){
        const { title, value, className } = this.props;

        const classN = "progress-bar " + className;

        return(
            <div className="skillset"> 
                <p>{title}</p>
                <div className="progress">
                    <div className={classN} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
                        <span className="sr-only">{value}% Complete</span>
                    </div>
                </div>
            </div>
        );
    }
}

Skill.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string
}

export default Skill;