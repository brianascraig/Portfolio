import React from 'react';
import './Header.css';
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
                    <Link to={Home}>
                        <img className="logo" src={logo} alt=""/>
                    </Link>
                </div>
                <div className="nav-item sideNav-item">
                    <Link to={About}>
                        <img src="" alt=""/>
                        About
                    </Link>
                </div>
                <div className="nav-item sideNav-item">
                    <Link to={Projects}>
                        <img src="" alt=""/>
                        Projects
                    </Link>
                </div>
                <div className="nav-item sideNav-item ">
                    <Link to={Experience}>
                        <img src="" alt=""/>
                        Experience
                    </Link>
                </div>
                <div className="nav-item sideNav-item">
                    <Link to={Skills}>
                        <img src="" alt=""/>
                        Skills
                    </Link>
                </div>
                <div className="nav-item sideNav-item">
                    <Link to={Blog}>
                        <img src="" alt="" />
                        Blog
                    </Link>
                </div>
                <div className="nav-item sideNav-item">
                    <Link to={Contact}>
                        <img src="" alt=""/>
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
    );
}
