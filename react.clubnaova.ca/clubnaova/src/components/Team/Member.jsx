import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import "./member.css";

const naoFace_img = require("../../img/logo/naoface.png");

class Member extends Component {

    renderImageMember() {
        const { imgName, name } = this.props;
        if(imgName){
            return <img src={require(`../../img/team/${imgName}.jpg`)} alt={name} className="img-responsive img-membre-profil"/>;
        }else{
            return <h4>{name}</h4>;
        }
    }

    render() {

        const {name, idProgramme, defaultMessageProgramme} = this.props;
        return (
            <div className="col-md-4 col-sm-4">
                <div className="team-member">
                    <div className="team-img">
                        <img src={naoFace_img} alt="team member" className="img-responsive"/>
                    </div>
                    <div className="team-hover">
                        <div className="desk">
                            {this.renderImageMember()}
                        </div>

                    </div>
                </div>
                <div className="team-title">
                    <h5>{name}</h5>
                    <span><FormattedMessage id={idProgramme} defaultMessage={defaultMessageProgramme}/></span>
                </div>
            </div>
        );
    }
}

Member.propTypes = {
    imgName: PropTypes.string,
    name: PropTypes.string,
    idProgramme: PropTypes.string,
    defaultMessageProgramme: PropTypes.string
}

export default Member;
