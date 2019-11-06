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
import Footer from "../Footer/Footer";
import Jumbotron from "../Jumbotron/Jumbotron";

export default function home() {
    return (
        <div className="Home" id="home">
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
                    <Jumbotron />
                    <Contact/>
                    <Footer />
                </div>
            </div>

        </div>
    );
}
