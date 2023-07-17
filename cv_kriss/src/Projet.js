import React, {Component} from 'react';
import './projet.css'
class Projet extends Component {
    render() {
        return (
            <div className="containerProj">
                <div>{this.props.projet.titre}</div>
                <div>{this.props.projet.description}</div>
            </div>
        );
    }
}

export default Projet;