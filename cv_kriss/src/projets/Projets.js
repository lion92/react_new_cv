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


                    <div className="card" style={{color: "black", textAlign: "justify", margin: "5px", padding: "5px", fontSize:"22px"}}>
                        <Projet
                            projet={{titre: "Cv"}}></Projet>
                        <h1>Cv de kriss</h1>
                        <h2>
                            Software CrafterSoftware Crafter</h2>
                        <p>EDF · CDIEDF · CDI juil. 2022 - aujourd’hui · 1 an 5 moisjuil. 2022 - aujourd’hui · 1 an 5
                            mois Nanterre, Île-de-France, FranceNanterre, Île-de-France, France</p>

                        <p> Mission chez le client sur du java Spring et AngularMission chez le client sur du java
                            Spring et Angular</p>


                        <h2> Software CrafterSoftware Crafter</h2>
                        <p>
                            AROLLA · CDIAROLLA · CDI avr. 2022 - aujourd’hui · 1 an 8 moisavr. 2022 - aujourd’hui · 1 an
                            8 mois

                            TDD, BDD, DDD, clean code, craft, agilitéTDD, BDD, DDD, clean code, craft, agilité
                        </p>
                        <h2>Développeur Full StackDéveloppeur Full Stack</h2>

                        <p>Audensiel · CDIAudensiel · CDI janv. 2022 · 1 moisjanv. 2022 · 1 mois Boulogne-Billancourt,
                            Île-de-France, FranceBoulogne-Billancourt, Île-de-France, France

                            m’a permis de trouver cet emploiLinkedIn m’a permis de trouver cet emploi
                        </p>


                        <h2>Développeur Node Js AlternantDéveloppeur Node Js Alternant</h2>
                        <p>Ideta · Contrat en alternanceIdeta · Contrat en alternance févr. 2021 - déc. 2021 · 11
                            moisfévr. 2021 - déc. 2021 · 11 mois Ville de Paris, Île-de-France, FranceVille de Paris,
                            Île-de-France, France</p>

                        <p>Rédaction de test unitaire avec JestRédaction de test unitaire avec Jest</p>

                        <h2>Développeur java CDIDéveloppeur java CDI</h2>
                        <p> ARICAD / ARKANCE SYSTEMS FRANCE · Temps pleinARICAD / ARKANCE SYSTEMS FRANCE · Temps plein
                            mars 2019 - juil. 2020 · 1 an 5 moismars 2019 - juil. 2020 · 1 an 5 mois ile de franceile de
                            france

                            CDI pour l'éditeur de logiciel Arkance Systems
                            TMA tiers maintenance applicative sur des applications intranet pour EDF


                        </p>
                        <ul>
                            Technologie étudiée:
                            <li>➢ Java JEE, Struts 2, Jquery, oracle, sql developper</li>
                            <li> ➢ IDE Eclipse</li>
                            <li>➢ Monter en compétence sur du VB C#</li>
                            <li>➢ IDE Visual Studio</li>
                            <li> ➢ Rédaction des spécifications techniques et fonctionnelles</li>
                            <li>➢ Rédaction des cahiers de tests manuels</li>

                        </ul>
                        <h2> Développeur Java CDI Développeur Java CDI</h2>
                        <p> DSI mars 2018 - févr. 2019 · 1 anmars 2018 - févr. 2019 · 1 an Région de Paris, FranceRégion
                            de Paris, France
                        </p>
                        <ul>
                            Consultant IT en CDI
                            <li>➢ Création d’un formulaire Excel en VBA (Virtual Basic pour Application) pour la gestion
                                de la qualité des stocks et prévention du gaspillage des cantines de Lille</li>
                            <li> ➢ Elaboration d’une application de recherche de carte Magic sous l’IDE Androïd</li>
                            <li>Studio API 28 dans le cadre d’un projet personnel de formation
                                • Exploitation du Webservice « MTG developper » avec la librairie Fuel
                                • Sauvegarde des cartes sur la base de données SQLite
                                • Application « Carte Magic Recherche » disponible sur Google Play
                            </li>
                            <li>➢ Réalisation d’une application de gestion des stocks d’un entrepôt sous Androïd codé en
                                java et sauvegardé en format CSV
                            </li>
                            <li>➢ Mise en place d’une interface homme-machine sous SWING en java et sous
                                l’IDE Eclipse pour afficher des températures en temps réelConsultant IT en CDI
                            </li>
                            <li> ➢ Création d’un formulaire Excel en VBA (Virtual Basic pour Application) pour la
                                gestion de la qualité des stocks et prévention du gaspillage des cantines de Lille
                            </li>
                            <li>➢ Elaboration d’une application de recherche de carte Magic sous l’IDE Androïd Studio
                                API 28 dans le cadre d’un projet personnel de formation • Exploitation du Webservice «
                                MTG developper » avec la librairie Fuel • Sauvegarde des cartes sur la base de données
                                SQLite • Application « Carte Magic Recherche » disponible sur Google Play
                            </li>
                            <li>➢ Réalisation d’une application de gestion des stocks d’un entrepôt sous Androïd codé en
                                java et sauvegardé en format CSV
                            </li>
                            <li>➢ Mise en place d’une interface homme-machine sous SWING en java et sous l’IDE Eclipse
                                pour afficher des températures en temps réel
                            </li>
                        </ul>
                        <h2> Professeur contractuel en Biochimie en CDDProfesseur contractuel en Biochimie en CDD</h2>
                        <p>ACADEMIE DE VERSAILLES · Temps pleinACADEMIE DE VERSAILLES · Temps plein déc. 2015 - mai 2016
                            · 6 moisdéc. 2015 - mai 2016 · 6 mois PorchevillePorcheville</p>
                        <ul>
                            <li>➢Assurer le programme des classes de STL en Biochimie et Microbiologie.➢Assurer le
                                programme des classes de STL en Biochimie et Microbiologie.
                            </li>

                            <li> Logo de CNRS - Centre national de la recherche scientifique
                                stagiare recherche en biologie moléculairestagiare recherche en biologie moléculaire
                                CNRS - Centre national de la recherche scientifique · StageCNRS - Centre national de la
                                recherche scientifique · Stage déc. 2013 - juin 2014 · 7 moisdéc. 2013 - juin 2014 · 7
                                mois
                            </li>
                            <li>
                                ➢Étude de protéines intrinsèquement déstructurées et leur interaction avec l'actine
                                Technique utilisée: purification de protéine, cristallographie, et fluorimétrie (Safas)
                            </li>
                        </ul>
                    </div>
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