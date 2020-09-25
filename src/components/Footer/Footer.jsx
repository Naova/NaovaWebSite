import React, { Component } from "react";

import "./footer.css"

class ContactUs extends Component {

    render() {
        return (
            <div id="tf-footer">
                <div className="container">
                    <div className="row ">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <p className="pull-left">© 2018 Naova<br />Design basé sur ethanol</p>
                        </div>
                        <div class="col-md-6 mt-md-0 mt-3">
                            <div class="mb-5 flex-center">
                                <ul className="list-inline social pull-right">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/naorobotique/?ref=br_rs" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="https://github.com/Naova" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCq-fKihCxhfaHoomeB9B6Yg" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/clubnaova/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/company/club-naova" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            </div>
                    </div>
                    </div>
                </div>
                );
            }
        }
        
export default ContactUs;