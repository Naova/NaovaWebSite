import React, { Component } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { FormattedMessage , FormattedHTMLMessage} from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

import "./contactUs.css"

//const marker_nao_icon = require("../../img/logo/naofacehalf.png");

class ContactUs extends Component {

    render(){
        const Map = compose(
            withProps({
              googleMapURL:
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkj5ZbICj-HuiAZYZOZrPsFt3VqiBSZes&amp;sensor=false",
              loadingElement: <div style={{ height: `100%` }} />,
              containerElement: <div style={{ height: `400px` }} />,
              mapElement: <div style={{ height: `100%` }} />
            }),
            withScriptjs,
            withGoogleMap
          )(props => (
            <GoogleMap defaultZoom={14} defaultCenter={{ lat: 45.495125, lng: -73.562493 }} options={{
                streetViewControl: false,
                scaleControl: false,
                fullscreenControl: false,
                disableDoubleClickZoom: false,
                mapTypeControl: false,
                zoomControl: false,
                clickableIcons: false
            }}>
              <Marker position={{ lat: 45.495125, lng: -73.562493 }}/>
            </GoogleMap>
          ));

        return(
            <div id="tf-contact">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle="contactUs.sectionHeadNaoTitle"  defaultMessageSmallTitle="We love getting cards!">
                    <FormattedHTMLMessage id="contactUs.sectionHeadNaoChild" defaultMessage='Contact <span class="highlight"><strong>us</strong></span>'/>
                </SectionHeaderNao>
                <div id="map">
                    <Map />
                </div>
                
                <div className="container">
                    <div className="row justify-content-center"> 
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="contact-detail">
                                        <a href="https://goo.gl/maps/3hMjSTfhGeo" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-map-marker"></i>
                                            <h4><FormattedMessage id="contactUs.address" defaultMessage="1100 Notre-Dame Street West, Montréal, QC H3C 1K3" /></h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="contact-detail">
                                        <i className="fa fa-envelope-o"></i>
                                        <h4>naova@ens.etsmtl.ca</h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="contact-detail">
                                        <a href="https://www.facebook.com/naorobotique/?ref=br_rs" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-facebook"></i>
                                            <h4>Facebook</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="contact-detail">
                                        <a href="https://www.instagram.com/clubnaova/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-instagram"></i>
                                            <h4>instagram</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;