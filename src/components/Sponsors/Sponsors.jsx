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
                <div className="team-member">
                    <div className="sponsors team-img">
                        <center><img src={require(`../../img/partenaire/${img}`)} alt="sponsor"/></center>
                    </div>
                    <div className="team-hover">
                        <div className="desk">
                            <h4><a href={link}><br/><br/><FormattedMessage id={idTitle} defaultMessage={defaultMessageTitle} /></a></h4>
                            <p></p>
                        </div>
                    </div>
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
