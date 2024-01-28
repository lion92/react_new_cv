import React, {Component} from 'react';
import Projet from '../projet/Projet'
import './projets.css'
import ImageUrl from '../imageUrl/ImageUrl'
import Footer from '../footer/Footer'
import logoArolla from '../arolla.jpg'
import logoDSI from '../dsi.png'
import logoArkance from '../arkance.png'
import logoQuestion from '../question.jpg'
import logojs from '../js.png'
import java from '../java.jpg'
import logoIdeta from '../ideta.png'
import About from "../about/About";

class Projets extends Component {

    render() {
        return (
            <>
                <div className="fontImage">
                    <div className="containerProjets">
                        <div className="card">
                            <Projet projet={{titre: "Java", description: "Projets de développement Java"}}></Projet>
                            <ImageUrl style={{width: "100px"}} titre={"java image"} imageUrl={java}></ImageUrl>
                            <ul style={{fontSize: 30, color: 'blue'}}>
                                <li>Kata Tondeuse</li>
                                <li>Kata Mars Rover</li>
                                <li>3ans d'expériences en java 7 et 8,<br/>
                                    monté en compentence sur kotlin
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <Projet
                                projet={{
                                    titre: "JavaScript",
                                    description: "Projets de développement JavaScript"
                                }}></Projet>
                            <ImageUrl titre={"javaScript image"}
                                      imageUrl={logojs}></ImageUrl>
                            <ul style={{fontSize: 30, color: 'blue'}}>
                                <li>Projet d'entreprise sur Angular</li>
                                <li>Projets personnels type todoList React et Angular</li>

                            </ul>
                        </div>

                    </div>
                    <About></About>
                    <div className="card">
                        <Projet
                            projet={{titre: "Personnalite", description: "Personnalite"}}></Projet>
                        <ImageUrl style={{height: 10, width: 10}} titre={"Personnalite"}
                                  imageUrl={logoQuestion}></ImageUrl>
                        <ul style={{fontSize: 30, color: 'blue'}}>
                            <li>Aimable</li>
                            <li>Passionné</li>
                            <li>Perséverant
                            </li>
                            <li>Curieux
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <Projet projet={{
                        titre: "Entreprises travaillées",
                        description: "Entreprises dans lesquelles j'ai eu l'occasion de travailler."
                    }}></Projet>

                    <div className="dispositionImageBoulot">
                        <ImageUrl titre={"Entreprises où j'ai traivaillé"} imageUrl={logoDSI}></ImageUrl>
                        <ImageUrl titre={"Entreprises où j'ai traivaillé"} imageUrl={logoArkance}></ImageUrl>

                        <ImageUrl titre={"Entreprises où j'ai traivaillé"} imageUrl={logoIdeta}></ImageUrl>

                        <ImageUrl titre={"Entreprises où j'ai traivaillé"} imageUrl={logoArolla}></ImageUrl>
                    </div>
                </div>
                <Footer></Footer>
            </>
        )
            ;
    }
}

export default Projets;