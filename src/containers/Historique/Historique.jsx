import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeaderHistorique from "../../components/Header/HeaderHistorique";
import ListOfHistorique from "../../components/Historique/ListOfHistorique";
import Footer from "../../components/Footer/Footer";

class Historique extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <HeaderHistorique />
                <ListOfHistorique />
                <Footer />
            </div>
        );
    }
}

export default Historique;
