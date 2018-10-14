import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import "./skill.css";

class Skill extends Component {

    render(){
        const { idTitle, defaultMessageTitle, value, className } = this.props;

        const classN = "progress-bar " + className;

        return(
            <div className="skillset"> 
                <p><FormattedMessage id={idTitle} defaultMessage={defaultMessageTitle} /></p>
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
    idTitle: PropTypes.string,
    defaultMessageTitle: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string
}

export default Skill;