import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import "./sponsors.css";

class Sponsors extends Component {
    render() {
        const { img, link, colNum, idTitle, defaultMessageTitle} = this.props;

        let classNameCol = classNames("col-md-"+colNum, "col-sm-"+colNum)

        return (
            <div className={classNameCol}>
                <div className="one-sponsor">
                    <a target="_blank" href={link}>
                        <div className="sponsors team-img">
                            <center><img src={require(`../../img/partenaire/${img}`)} alt="sponsor"/></center>
                            <div className="sponsors-title">
                                <h5><FormattedMessage id={idTitle} defaultMessage={defaultMessageTitle} /></h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

Sponsors.propTypes = {
    img: PropTypes.string,
    link: PropTypes.string,
    colNum: PropTypes.string,
    idTitle: PropTypes.string,
    defaultMessageTitle: PropTypes.string
}

export default Sponsors;
