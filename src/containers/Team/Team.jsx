import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeaderTeam from "../../components/Header/HeaderTeam";
import ListOfMembers from "../../components/Team/ListOfMembers";
import Footer from "../../components/Footer/Footer";

class Team extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <HeaderTeam />
                <ListOfMembers />
                <Footer />
            </div>
        );
    }
}

export default Team;