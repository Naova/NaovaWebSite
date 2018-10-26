import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import "./skill.css";

class Skill extends Component {

    render(){
        const { idTitle, defaultMessageTitle, value_num } = this.props;

        return(
            <div className="skillset"> 
                <p><FormattedMessage id={idTitle} defaultMessage={defaultMessageTitle} /></p>
                <div className="progress">
                    <div className="progress-bar" style={{width: value_num +"%"}} role="progressbar" aria-valuenow={value_num} aria-valuemin="0" aria-valuemax="100">
                        <span className="sr-only">{value_num}% Complete</span>
                    </div>
                </div>
            </div>
        );
    }
}

Skill.propTypes = {
    idTitle: PropTypes.string,
    defaultMessageTitle: PropTypes.string,
    value_num: PropTypes.number
}

export default Skill;