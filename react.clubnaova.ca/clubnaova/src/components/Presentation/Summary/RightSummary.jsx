import React, { Component } from "react";
import PropTypes from "prop-types";

class RightSummary extends Component {

    render(){
        const { title, description, icon, link, linkTitle } = this.props;
        return(
            <div className="media service"> 
                <div className="media-left media-middle">
                    <a href={link}><i className={icon}></i></a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><a href={link}>{title}</a></h4>
                    <p>{description}</p>
                    <p><a href={link}>{linkTitle}</a></p>
                </div>
            </div>
        );
    }
}

RightSummary.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    linkTitle: PropTypes.string
}


export default RightSummary;