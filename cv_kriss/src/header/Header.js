import React, {Component} from 'react';
import './Header.css'
import { BiLogoJava } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import logokriss from '../ideta.png';
class Header extends Component {
    render() {
        return (
                <div className="container">
                    <div className="container">
                        <BiLogoJava className="java" size={200} color={"white"} />
                        <IoLogoJavascript className="java" size={200} color={"white"} />

                    </div>
                    <a target="_blank" href="https://github.com/lion92">
                    <div style={{margin: '10px'}}>
                    <img src={logokriss} alt="react logo"
                         style={{width: '200px',borderRadius: '50%'}}/>
                </div></a>
                    <a target="_blank" href="https://github.com/lion92">
                        https://github.com/lion92</a>
                    <div className="qui">
                                <div className="nom">CLOTILDE</div>
                                <div className="prenom">kriss</div>
                                 <div className="titrecv">Developpeur FullStack</div>

                    </div>
                </div>
    );
    }
}

export default Header;