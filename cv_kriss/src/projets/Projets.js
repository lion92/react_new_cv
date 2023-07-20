import React, {Component} from 'react';
import Projet from '../projet/Projet'
import './projets.css'
import ImageUrl from '../imageUrl/ImageUrl'
class Projets extends Component {

    render() {
       let srcImage="https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/logo_java.jpg"
       let srcImageJS="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
        return (
            <div className="containerProjets">
                <div className="card">
                <Projet projet={{titre:"Java", description:"Projet de développement Java"}}></Projet>
                <ImageUrl titre={"java image"} imageUrl={srcImage}></ImageUrl>
                    <ul style={{fontSize:30, color:'blue'}}>
                        <li>Kata Tondeuse</li>
                        <li>Kata Mars Rover</li>
                        <li>3ans d'expériences en java 7 et 8,
                            monté en compentence sur kotlin</li>
                    </ul>
                </div>
                <div className="card">
                    <Projet projet={{titre:"JavaScript", description:"Projet de développement JavaScript"}}></Projet>
                    <ImageUrl  style={{height:10, width:10}}titre={"javaScript image"} imageUrl={srcImageJS}></ImageUrl>
                    <ul style={{fontSize:30, color:'blue'}}>
                        <li>Kata Tondeuse</li>
                        <li>Kata Mars Rover</li>
                        <li>3ans d'expériences en java 7 et 8,
                            monté en compentence sur kotlin</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Projets;