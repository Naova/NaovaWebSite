import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getLang } from "../../selector/locale";

import "./member.css";

const naoFace_img = require("../../img/logo/naoface.png");

class Member extends Component {

    renderImage2Member() {
        const { img2Name, name } = this.props;
        if (img2Name) {
            return <img src={require(`../../img/team/${img2Name}.jpg`)} alt={name} className="img-fluid img-membre-profil" />;
        } else {
            return <h4>{name}</h4>;
        }
    }

    renderImageMember() {
        const { imgName, name } = this.props;
        if (imgName) {
            return <img src={require(`../../img/team/${imgName}.jpg`)} alt={name} className="img-fluid img-membre-profil" />;
        } else {
            return <img src={naoFace_img} alt="team member" className="img-fluid" />;
        }
    }

    renderFounder() {
        const { isFounder } = this.props;
        if (isFounder) {
            return <span><br /><span><FormattedMessage id="team.founder" defaultMessage="Founder" /></span></span>;
        }
    }

    renderProgram() {
        const { lang, idProgramme, defaultMessageProgramme } = this.props;
        if (lang === "fr") {
            return (
                <span>
                    <span className="team-student"><FormattedMessage id="team.student" defaultMessage="Étudiant en " /></span>
                    <span><FormattedMessage id={idProgramme} defaultMessage={defaultMessageProgramme} /></span> 
                </span>);
        } else {
            return (
                <span>
                    <span><FormattedMessage id={idProgramme} defaultMessage={defaultMessageProgramme} /></span>
                    <span className="team-student"><FormattedMessage id="team.student" defaultMessage="student" /></span>
                </span>);
        }
    }

    renderTitre() {
        const { idTitre, defaultMessageTitre } = this.props;
        if( idTitre && defaultMessageTitre){
            return (<span><span><FormattedMessage id={idTitre} defaultMessage={defaultMessageTitre} /></span><br /></span>);
        }
    }

    render() {

        const { name } = this.props;
        return (
            <div className="col-md-4 col-sm-4 card-team-member">
                <div className="team-member">
                    <div className="team-img">
                        {this.renderImageMember()}
                    </div>
                    <div className="team-hover">
                        <div className="desk">
                            {this.renderImage2Member()}
                        </div>
                    </div>
                </div>
                <div className="team-title">
                    <h5>{name}</h5>
                    {this.renderTitre()}
                    {this.renderProgram()}
                    {this.renderFounder()}
                </div>
            </div>
        );
    }
}

Member.propTypes = {
    imgName: PropTypes.string,
    img2Name: PropTypes.string,
    name: PropTypes.string,
    idProgramme: PropTypes.string,
    defaultMessageProgramme: PropTypes.string,
    idTitre: PropTypes.string,
    defaultMessageTitre: PropTypes.string,
    isFounder: PropTypes.bool,
    lang: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        lang: getLang(state)
    };
}

export default connect(mapStateToProps, null)(Member);
