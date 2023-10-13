import React, { Component } from "react";
import PropTypes from "prop-types";

import "./oneImage.css";

class OneImage extends Component {

    render(){
        const { img, alt } = this.props;
        return(
            <div className="gallery">
                <img src={require(`../../img/portfolio/${img.toLowerCase()}`).default} alt={alt}/>
            </div>
        );
    }
}

OneImage.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string
}

export default OneImage;