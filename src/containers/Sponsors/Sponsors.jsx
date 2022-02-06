import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeaderSponsor from "../../components/Header/HeaderSponsor";
import Diamant from "../../components/Sponsors/Diamant";
import Platine from "../../components/Sponsors/Platine";
import Or from "../../components/Sponsors/Or";
// import Argent from "../../components/Sponsors/Argent";
//import Bronze from "../../components/Sponsors/Bronze";
import Footer from "../../components/Footer/Footer";

class Sponsors extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <HeaderSponsor />
                <Diamant />
                <Platine />
                <Or />
                {/* <Argent /> */}
                {/*<Bronze />*/}
                <Footer />
            </div>
        );
    }
}

export default Sponsors;
