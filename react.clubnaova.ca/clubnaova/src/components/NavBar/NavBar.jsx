import React, { Component } from "react";
import "./navbar.css";
const logo_img = require("../../img/logo/logo.png");

class NavBar extends Component {

    render(){
        return(
                <nav id="nav_bar" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/"><img src={logo_img} alt="Logo du Club Naova"/></a>
                    </div>
        
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#tf-home" className="scroll">Accueil</a></li>
                        <li><a href="#tf-presentation" className="scroll">Présentation</a></li>
                        <li><a href="#tf-history" className="scroll">Historique</a></li>
                        <li><a href="#tf-about" className="scroll">Projets</a></li>
                        <li><a href="#tf-works" className="scroll">Photos</a></li>
                        <li><a href="equipe.html" className="scroll">Equipe</a></li>
                        <li><a href="partenaires.html" className="scroll">Partenaires</a></li>
                        <li><a href="#tf-contact" className="scroll">Contact</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;