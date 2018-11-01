import React, { Component } from "react";
import Member from "./Member";

const member_data = require("../../json/member.json");

class ListOfMembers extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container">
                        <div>
                            {member_data.map((m, i) => {
                                return <Member key={i} imgName={m.imgName} img2Name={m.img2Name} name={m.name} idProgramme={m.idProgramme} isFounder={m.isFounder} defaultMessageProgramme={m.defaultMessageProgramme} />
                            })}
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfMembers;
