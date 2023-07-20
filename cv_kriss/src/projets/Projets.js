import React, {Component} from 'react';
import Projet from '../Projet'
import './projets.css'
class Projets extends Component {

    render() {
        return (
            <div className="containerProjets">

                <Projet projet={{titre:"projet1", description:"desc1"}}></Projet>
                <Projet projet={{titre:"projet2", description:"desc2"}}></Projet>
                <Projet projet={{titre:"projet3", description:"desc3"}}></Projet>

            </div>
        );
    }
}

export default Projets;