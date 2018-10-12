import React, { Component } from "react";
import Member from "./Member";

class ListOfMembers extends Component {
    render() {
        return (
            <div>
                <center>
                    <div className="container">
                        <div>
                            <Member 
                                imgName="ariane"
                                name="Ariane B. Bétournay"
                                idProgramme="team.capitain"
                                defaultMessageProgramme="Capitain"/>

                            <Member 
                                imgName="jonathan"
                                name="Jonathan Fortin"
                                idProgramme="team.assistant"
                                defaultMessageProgramme="Assistant Capitain"/>

                            <Member 
                                imgName="thierry"
                                name="Thierry Pouplier"
                                idProgramme="team.director"
                                defaultMessageProgramme="Director"/>

                            <Member 
                                imgName=""
                                name="Vincent Girardeau"
                                idProgramme="team.director"
                                defaultMessageProgramme="Director"/>

                            <Member 
                                imgName="alex"
                                name="Alexandre Doyle"
                                idProgramme="team.administration"
                                defaultMessageProgramme="Administration"/>

                            <Member 
                                imgName=""
                                name="Benjamin Caron"
                                idProgramme="team.log"
                                defaultMessageProgramme="Software engineering"/>

                            <Member 
                                imgName=""
                                name="Anthony Brochu"
                                idProgramme="team.log"
                                defaultMessageProgramme="Software engineering"/>

                            <Member 
                                imgName="ben"
                                name="Benjamin Brulard"
                                idProgramme="team.ti"
                                defaultMessageProgramme="Information Technology Enginnering"/>

                            <Member 
                                imgName=""
                                name="Etienne Lussier"
                                idProgramme="team.log"
                                defaultMessageProgramme="Software engineering"/>

                            <Member 
                                imgName="marc_antoine"
                                name="Marc-Antoine Lussier"
                                idProgramme="team.log"
                                defaultMessageProgramme="Software engineering"/>

                            <Member 
                                imgName="humberto"
                                name="Humberto Ramos"
                                idProgramme="team.gpa"
                                defaultMessageProgramme="Engineering of Automated Production"/>

                            <Member 
                                imgName=""
                                name="Edwin Zelaya-Diaz"
                                idProgramme="team.log"
                                defaultMessageProgramme="Software engineering"/>
                            
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default ListOfMembers;
