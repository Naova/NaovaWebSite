import React, { Component } from "react";
import Member from "../Team/Member";
import { FormattedMessage } from "react-intl";
import "../Team/member.css";

const member_data = require("../../json/memberOld.json");
const naoFaceHalf_img = require("../../img/logo/naofacehalf.png");

class ListOfOldMembers extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container">
                        <div className="fancy">
                            <span>
                                <img src={naoFaceHalf_img} alt="Nao Face Logo"/>
                            </span>
                        </div>
                        <h1 className="align-center"><FormattedMessage id="oldMembreTitre" defaultMessage="Old Member" /></h1>
                        <div className="row">
                            {member_data.map((m, i) => {
                                return <Member key={i} imgName={m.imgName} img2Name={m.img2Name} name={m.name} idProgramme={m.idProgramme} isFounder={m.isFounder} defaultMessageProgramme={m.defaultMessageProgramme} idTitre={m.idTitre} defaultMessageTitre={m.defaultMessageTitre} />
                            })}
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfOldMembers;
