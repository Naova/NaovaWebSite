import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Presentation from "../../components/Presentation/Presentation";
import Video from "../../components/Video/Video";
import Images from "../../components/Images/Images";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Header />
                <Presentation />
                <Video />
                {/* <Projet /> */}
                <Images />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default Home;
