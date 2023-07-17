import React, {Component} from 'react';
import './projet.css'
class Projet extends Component {
    render() {
        return (
            <div className="card">
                <div>{this.props.projet.titre}</div>
                <h2>{this.props.projet.description}</h2>
            </div>
        );
    }
}

export default Projet;