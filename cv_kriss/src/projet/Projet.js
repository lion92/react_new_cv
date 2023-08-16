import React, {Component} from 'react';
import './projet.css'
class Projet extends Component {
    render() {
        return (
            
            <div className="card" style={{ color:"pink"}}>
                <div className="titre" style={{borderRadius:10, marginTop:'10px', padding:10,color:"white",font:'bold', fontSize:50}}>{this.props.projet.titre}</div>
                <h2>{this.props.projet.description}</h2>
            </div>
        );
    }
}

export default Projet;