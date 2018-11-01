import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeaderScientific from "../../components/Header/HeaderScientific";
import ListOfScientific from "../../components/Scientific/ListOfScientific";
import Footer from "../../components/Footer/Footer";

class Scientific extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <HeaderScientific />
                <ListOfScientific />
                <Footer />
            </div>
        );
    }
}

export default Scientific;
