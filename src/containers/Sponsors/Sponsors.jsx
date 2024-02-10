import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeaderSponsor from "../../components/Header/HeaderSponsor";
import Footer from "../../components/Footer/Footer";
import { SPONSORS_ORDER } from "../../components/Sponsors/sponsors.constants";
import SponsorSection from "../../components/Sponsors/SponsorSection";

class Sponsors extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <HeaderSponsor />
        {SPONSORS_ORDER.map((sponsorType) => <SponsorSection sponsorType={sponsorType} />)}
        <Footer />
      </div>
    );
  }
}

export default Sponsors;
