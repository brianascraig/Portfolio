import React from 'react';
import './Home.css';
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Slider from "./Slider/Slider";
import Header from "../Header/Header";

export default function home() {
    return (
        <div className="Home">
            <div className="row no-gutters">
                <div className="headerContainer col-2">
                    <Header className="header"/>
                </div>

                <div className="homeContainer col-10">
                    <Slider className="slider"/>
                    <About className="about"/>
                    <Projects/>
                    <Experience/>
                    <Skills/>
                    <Blog/>
                    <Contact/>
                </div>
            </div>

        </div>
    );
}
