import React, { Component } from "react";
import "./video.css";

class Video extends Component {

    render(){
        return(
            <div className="video">
                <center>
                    <iframe title="video" width="768" height="432" src="https://www.youtube.com/embed/p3lN7S9PIE0" frameBorder="0" allowFullScreen></iframe>
                </center>
            </div>
        );
    }
}

export default Video;