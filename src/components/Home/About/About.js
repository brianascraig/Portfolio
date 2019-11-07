import React from 'react';
import './About.css';
import about_picture from './about-image.png';

export default function about() {
    return (
        <div className="About sectContainer" id="about">
            <div className="topContainer">
                <h2 className="sectTitle">About Me.</h2>
                <h3 className="sectDesc">Motivated by passion and positivity.</h3>
                <div className="sectBlurb aboutBlurb">
                    <p>
                        I have a passion to learn technology which burns brighter every day that I continue
                        to explore information technology. I'm naturally a life-long learner, but the drive
                        to learn more comes easily within a field that never stagnates and constantly
                        inspires the creativity in me. Most importantly, there's a lot of positive change
                        happening now because new technologies and I'm excited to be a part of that positivity.
                    </p>
                </div>
                <div className="sectMoreInfo">
                    <p>
                        My journey into this field starts with my hometown Atlanta, GA. I started attending college
                        at Georgia State University in 2010 and graduated in 2012 with a Bachelor of Arts in English
                        with a concentration in Education. After graduating, I went on to teach Georgia Pre-kindergarten
                        and studied to become a licensed teacher.
                        <br/><br/>
                        During that time, I also started working with a non-profit organization called Speak Life Now.
                        Low on staff, the organization to develop their website and manage their media and digital
                        marketing. Although, I had no experience, I dove in to creating their website, teaching myself
                        along the way. I taught myself, web development, marketing, graphic design, SEO, and anything
                        else I thought would help this organization with a great cause get off the ground. I wanted to
                        help this organization, but they helped me in a way I didn't expect: my experience there helped
                        me discover my passion for tech.
                        <br/><br/>
                        Once I had discovered my zeal for technology, I started a journey to expand my knowledge in this
                        field in any way I knew how. I tried a few different fields in information technology from computer
                        information systems, to networking, to graphic design until I discovered the one which truly
                        made me feel excited: programming.
                        <br/><br/>
                        After narrowing my focus to programming, I decided to continue my education to learn more.
                        I started a Master of Science in Information Technology Software Engineering at the University
                        of Maryland University College where I learned agile methodologies, backend development, and
                        project management. I also joined Thinkful where I learned full stack frontend development. Then,
                        I joined my latest academy bootcamp where I learned Java full stack development.
                        <br/><br/>
                        Now, six years later from when I started learning tech, five years since I started freelance
                        web development for small businesses, and a few years since I decided to continue my education,
                        I am ready and enthusiastic to break in to a career in IT. I'm a life-long learner and I'm
                        determined to do my very best learning and practicing new technologies so I can code and design
                        with excellence.
                    </p>
                    <a href="#projects"><button className="sectBtn">Projects</button></a>
                </div>
            </div>
            <div className="sectImgContainer">
                <img className="aboutImage" src={about_picture} alt=""/>
            </div>

        </div>
    );
}
