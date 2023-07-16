import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
                <div className="container">

                    <div style={{margin: '10px'}}>
                        <img src="https://projet.krissclotilde.com/asset/avatar-gratuit.png" alt="react logo"
                             style={{width: '200px',}}/>
                    </div>
                    <div>
                                <div className="nom">CLOTILDE</div>
                                <div className="prenom">kriss</div>
                                 <div className="titre_cv">Developpeur FullStack</div>

                    </div>
                </div>
    );
    }
}

export default Header;