import React from 'react';
import './Skills.css';
import picture from './skillsImage.jpg';

export default function skills() {
    return (
        <div className="Skills sectContainer" id="skills">
            <div className="topContainer">
                <h2 className="sectTitle">Skills.</h2>
                <h3 className="sectDesc">Inspired by Design.</h3>
                <div className="sectBlurb">
                    <p>
                        I'm always excited to learn a new skill. I'm a life-long learner not only by choice,
                        but also by my desire to learn. What I enjoy most about earning new technologies is
                        discovering how each technology integrates with another. As a result, I have gained skills
                        in a number of languages and tech through pure curiosity.
                    </p>
                </div>
                <div className="sectMoreInfo skillsInfo">
                    <div className="progbarContainer">
                        <h4>Java  80%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar90"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>React  75%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar75"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>Angular  70%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar70"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>SQL 85%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar85"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>Spring/Springboot 80%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar80"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>HTML/CSS 95%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar95"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>JS/jQuery 90%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar90"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>MongoDB 70%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar70"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>Hibernate 80%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar80"/>
                        </div>
                    </div>
                    <div className="progbarContainer">
                        <h4>Bootstrap/Material Design 85%</h4>
                        <div className="progress">
                            <div className="progress-bar progbar85"/>
                        </div>
                    </div>
                    <a href="#contact"><button className="sectBtn">Contact</button></a>
                </div>

            </div>
            <div className="sectImgContainer skillsImg">
                <img src={picture} alt=""/>
            </div>
        </div>
    );
}
