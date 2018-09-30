import React, { Component } from "react";
import PropTypes from "prop-types";

class LeftSummary extends Component {

    render(){
        const { title, description, icon, link, linkTitle } = this.props;
        return(
            <div className="media service">
                <div className="media-body">
                    <a href={link}><h4 className="media-heading">{title}</h4></a>
                    <p>{description}</p>
                    <p><a href={link}>{linkTitle}</a></p>
                </div>
                <div className="media-right media-middle">
                    <a href="{link}"><i className={icon}></i></a>
                </div>
            </div> 
        );
    }
}

LeftSummary.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    linkTitle: PropTypes.string
}

export default LeftSummary;