import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

class LeftSummary extends Component {

    renderLink() {
        const { link, idLinkTitle, defaultMessageLinkTitle } = this.props;
        if(idLinkTitle && defaultMessageLinkTitle) {
            return <a href={link}><FormattedMessage id={idLinkTitle} defaultMessage={defaultMessageLinkTitle} /></a>
        } else {
            return null;
        }
    }

    render(){
        const { idTitle, defaultMessageTitle, idDescription, defaultMessageDescription, icon, link } = this.props;
        return(
            <div className="media service">
                <div className="media-body">
                    <h4 className="media-heading"><a href={link}><FormattedMessage id={idTitle} defaultMessage={defaultMessageTitle} /></a></h4>
                    <p className="naova_summary_unit"><FormattedMessage id={idDescription} defaultMessage={defaultMessageDescription} /></p>
                    <p>{this.renderLink()}</p>
                </div>
                <div className="media-right media-middle">
                    <a href={link}><i className={icon}></i></a>
                </div>
            </div> 
        );
    }
}

LeftSummary.propTypes = {
    idTitle: PropTypes.string,
    defaultMessageTitle: PropTypes.string,
    idDescription: PropTypes.string,
    defaultMessageDescription: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    idLinkTitle: PropTypes.string,
    defaultMessageLinkTitle: PropTypes.string
}

export default LeftSummary;