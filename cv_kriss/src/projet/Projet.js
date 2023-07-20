import React, {Component} from 'react';
import './projet.css'
class Projet extends Component {
    render() {
        return (
            <div className="card" style={{backgroundColor:"cyan"}}>
                <div  style={{backgroundColor:"#E5ABABFF",borderRadius:10, padding:10,color:"white",font:'bold', fontSize:50}}>{this.props.projet.titre}</div>
                <h2 style={{backgroundColor:"gray"}}>{this.props.projet.description}</h2>
            </div>
        );
    }
}

export default Projet;