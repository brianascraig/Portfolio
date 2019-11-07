import React from 'react';
import './Header.css';
import { HashLink as Link} from "react-router-hash-link";
import {Link} from "react-router-dom";
import Home from "../Home/Home";
import About from "../Home/About/About";
import Projects from "../Home/Projects/Projects";
import Experience from "../Home/Experience/Experience";
import Skills from "../Home/Skills/Skills";
import Blog from "../Home/Blog/Blog";
import Contact from "../Home/Contact/Contact";
import logo from './BrianaCraigLogo.png';

export default function header() {
    return (
        <div className="Header">
            <nav className="nav flex-column sideNav">
                <div className="nav-item logoContainer">
                    <a href='/#home'>
                        <img className="logo" src={logo} alt=""/>
                    </a>
                </div>
                <div className="nav-item sideNav-item">
                    <a href='/Portfolio/#about'>
                        <img src="" alt=""/>
                        About
                    </a>
                </div>
                <div className="nav-item sideNav-item">
                    <a href='/#projects'>
                        <img src="" alt=""/>
                        Projects
                    </a>
                </div>
                <div className="nav-item sideNav-item ">
                    <a href="/#experience">
                        <img src="" alt=""/>
                        Experience
                    </a>
                </div>
                <div className="nav-item sideNav-item">
                    <a href="/#skills">
                        <img src="" alt=""/>
                        Skills
                    </a>
                </div>
                {/*<div className="nav-item sideNav-item">*/}
                {/*    <Link to={Blog}>*/}
                {/*        <img src="" alt="" />*/}
                {/*        Blog*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <div className="nav-item sideNav-item">
                    <a href="/#contact">
                        <img src="" alt=""/>
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
}
