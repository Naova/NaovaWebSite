import React, { Component } from "react";
import Member from "../Team/Member";
import 'react-toggle/style.css';
import { FormattedMessage } from "react-intl";
import "../Team/member.css";

const member_data = require("../../json/memberOld.json");
const naoFaceHalf_img = require("../../img/logo/naoface.svg");

class ListOfOldMembers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSectionVisible: false,
        };
        this.toggleSection = this.toggleSection.bind(this);
    }

    toggleSection() {
        this.setState((prevState) => ({
            isSectionVisible: !prevState.isSectionVisible,
        }));
    }

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
                        <h1
                            onClick={this.toggleSection}
                            style={{ cursor: 'pointer' }}
                            className="align-center"
                        >
                            <FormattedMessage id="oldMembreTitre" defaultMessage="Old Member" />
                        </h1>
                    </div>
                </center>
                {this.state.isSectionVisible && 
                <div>
                    <center>
                        <div className="container">
                            <div className="row">
                                {member_data.map((m, i) => {
                                    return <Member key={i} imgName={m.imgName} img2Name={m.img2Name} name={m.name} idProgramme={m.idProgramme} isFounder={m.isFounder} isCurrentMember={false} defaultMessageProgramme={m.defaultMessageProgramme} idTitre={m.idTitre} defaultMessageTitre={m.defaultMessageTitre} />
                                })}
                            </div>
                        </div>
                    </center>
                </div>}
            </div>
        );
    }
}

export default ListOfOldMembers;
