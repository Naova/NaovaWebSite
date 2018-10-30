import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeaderPress from "../../components/Header/HeaderPress";
import ListOfPress from "../../components/Press/ListOfPress";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <HeaderPress />
                <ListOfPress />
                <Footer />
            </div>
        );
    }
}

export default Home;
