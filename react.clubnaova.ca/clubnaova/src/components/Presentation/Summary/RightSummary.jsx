import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

class RightSummary extends Component {

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
                <div className="media-left media-middle">
                    <a href={link}><i className={icon}></i></a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><a href={link}><FormattedMessage id={idTitle} defaultMessage={defaultMessageTitle} /></a></h4>
                    <p><FormattedMessage id={idDescription} defaultMessage={defaultMessageDescription} /></p>
                    <p>{this.renderLink()}</p>
                </div>
            </div>
        );
    }
}

RightSummary.propTypes = {
    idTitle: PropTypes.string,
    defaultMessageTitle: PropTypes.string,
    idDescription: PropTypes.string,
    defaultMessageDescription: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    idLinkTitle: PropTypes.string,
    defaultMessageLinkTitle: PropTypes.string
}


export default RightSummary;