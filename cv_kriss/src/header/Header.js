import React, {Component} from 'react';
import './Header.css'
import { BiLogoJava } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
class Header extends Component {
    render() {
        return (
                <div className="container">
                    <div className="container">
                        <BiLogoJava className="java" size={200} color={"white"} />
                        <IoLogoJavascript className="java" size={200} color={"white"} />

                    </div>
                    <div style={{margin: '10px'}}>
                    <img src="https://projet.krissclotilde.com/asset/avatar-gratuit.png" alt="react logo"
                         style={{width: '200px',borderRadius: '50%'}}/>
                </div>
                    <div>
                                <div className="nom">CLOTILDE</div>
                                <div className="prenom">kriss</div>
                                 <div className="titrecv">Developpeur FullStack</div>

                    </div>
                </div>
    );
    }
}

export default Header;