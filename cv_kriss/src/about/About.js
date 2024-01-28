import React from 'react';
import '../css/about.css'

import {FaJava, FaReact} from "react-icons/fa";
import {RiJavascriptFill} from "react-icons/ri";
import {SiSpring} from "react-icons/si";
import {FaAngular} from "react-icons/fa6";


const About = () => {

    return (
        <div className="section">

            <div className="section" data-anchor="skills">
                <h1 style={{color: "green"}}>A PROPOS</h1>
                <div className="content">

                    <p style={{color:"green"}}>
                        Je suis kriss CLOTILDE, développeur en reconversion. <br/>
                        Je suis disponible pour une mission en java ou javascript. <br/>
                        J'aime le craft et les bonnes pratiques de programmations. <br/>
                        Je vise les étoiles pour au moins décrocher la lune.</p>


                </div>
                <div className="section">
                    <div className="techno"><h2><FaJava style={{

                    }}/>Java </h2>

                        <h2><SiSpring style={{

                        }}/>Spring </h2>


                        <h2><RiJavascriptFill style={{

                        }}/>Javascrit </h2>

                        <h2><FaReact style={{

                        }}/>React </h2>

                        <h2><FaAngular style={{
                            fontSize: '40px'
                        }}/>Angular </h2>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default About;