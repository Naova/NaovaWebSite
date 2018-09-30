import React, { Component } from "react";

class Definition extends Component {

    render(){
        return(
            <div className="container">
                <div className="col-md-12">
                    <p>Naova est le nouveau club scientifique de robotique de l'ETS fondé par Jonathan Fortin.</p><br/>
                    <p>Il a pour vocation la participation aux matchs de soccer robotique lors des épreuves de la plus grande compétition internationale de robots: la Robocup.
                    Lors de ces matchs, des équipes de robots s'affrontent pour marquer un maximum de buts contre l'adversaire. Les robots agissent de manière entierement autonome, et doivent donc être programmés de manière à
                    pouvoir jouer en équipe sans intervention exterieure.</p>

                    <p>Toutes les équipes sont composées du même robot standard, il faut donc réussir à faire la différence sur le programme dictant son comportement.</p><br/>
                    <p>Venez nous encourager du 15 au 22 juin 2018 au Palais des Congrès de Montréal pour assister à notre première participation à la RoboCup!</p>
                    <center>
                        <a href="https://secure.ticketpro.ca/?server=ww1&aff=RoboCup&lang=fr#def_1288916787" className="btn btn-default">Achat de billets!</a>
                        <a href="https://www.facebook.com/events/1093839804068868/?active_tab=about" className="btn btn-primary">Pour plus d'info</a>
                    </center>
                    <br/>
                    <p>* Pour les étudiants de l'ETS l'entrée est GRATUITE!</p>
                    <br/>
                </div>
             <br/>
        </div>
        );
    }
}

export default Definition;