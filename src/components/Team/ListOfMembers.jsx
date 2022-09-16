import React, { Component } from "react";
import Member from "./Member";
import { FormattedMessage } from "react-intl";
import "./member.css";

const member_data = require("../../json/member.json");
const naoFaceHalf_img = require("../../img/logo/naofacehalf.png");


class ListOfMembers extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container">
                        <div className="fancy">
                            <span>
                                <img src={naoFaceHalf_img} alt="Nao Face Logo" />
                            </span>
                        </div>
                        <h1 className="align-center"><FormattedMessage id="membreTitre" defaultMessage="Current Member" /></h1>
                        <div className="row">
                            {member_data.map((m, i) => {
                                return <Member key={i} imgName={m.imgName} name={m.name} idProgramme={m.idProgramme} isFounder={m.isFounder} isCurrentMember={true} linkedin={m.linkedin} defaultMessageProgramme={m.defaultMessageProgramme} idTitre={m.idTitre} defaultMessageTitre={m.defaultMessageTitre} />
                            })}
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfMembers;
