import React, { Component } from "react";
import "./video.css";

class Video extends Component {

    render(){
        return(
            <div className="video">
                <center>
                    <iframe title="video" width="768" height="432" src="https://www.youtube.com/embed/_whKvIQkM6U" frameBorder="0" allowFullScreen></iframe>
                </center>
            </div>
        );
    }
}

export default Video;