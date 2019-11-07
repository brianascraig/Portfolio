import React from 'react';
import './Footer.css';
import logo from '../Header/BrianaCraigLogo.png';
import githubIcon from './github.png';
import  linkedinIcon from './linkedin.png';

export default function footer() {
    return (
        <div className="Footer">
            <div className="footerLogoContainer">
                <a href="/Portfolio/#home"><img className="footerLogo" src={logo} alt=""/></a>
            </div>
            <div className="copyrightContainer">
                <p>Copyright 2019-2020 | Portfolio by Briana Craig | All Rights Reserved</p>
            </div>
            <div className="socialLinksContainer">
                <div className="githubLink">
                    <a href="https://github.com/brianascraig"><img src={githubIcon} alt=""/></a>
                </div>
                <div className="linkedInLink">
                    <a href="https://www.linkedin.com/in/brianascraig/"><img  src={linkedinIcon} alt=""/></a>
                </div>
            </div>
            <div className="iconLinkRef">
            Icons made by <a href="https://www.flaticon.com/authors/freepik"
                             title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
                                                                 title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    );
}
