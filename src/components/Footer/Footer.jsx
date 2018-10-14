import React, { Component } from "react";

import "./footer.css"

class ContactUs extends Component {

    render(){
        return(
            <div id="tf-footer">
                <div className="container">
                    <p className="pull-left">© 2017 Naova<br/>Design basé sur ethanol</p>
                    <ul className="list-inline social pull-right">
                        <li><a href="https://www.facebook.com/naorobotique/?ref=br_rs"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCq-fKihCxhfaHoomeB9B6Yg"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/clubnaova/"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactUs;