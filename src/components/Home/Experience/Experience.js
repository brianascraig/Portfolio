import React from 'react';
import './Experience.css';
import picture from './expImage.jpg';

export default function experience() {
    return (
        <div className="Experience">
            <div className="expContainer">
                <h2 className="expTitle">Experience.</h2>
                <h3 className="expDesc">Design and code you can experience.</h3>
                <div className="expBlurb">
                    <p>
                        The thing I love most about creating in IT is discovering the design a client
                        or teammate has in mind and making it come to life. From the wireframe, to the frontend design,
                        to the backend controls, it's exciting to see requirements take form visually and logically.
                    </p>
                </div>
                <div className="expMoreInfo">
                    <div className="expListItemContainer">
                        <div className="expListItem">
                            01. DESIGN
                        </div>
                        <p>
                            An application starts with its design.
                            I create wireframes to match the trending application designs of the moment. To make
                            the design eye-catching, I use cutting-edge graphic designs, trending color schemes,
                            and the latest architectural styles.
                        </p>
                    </div>
                    <div className="expListItemContainer">
                        <div className="expListItem">
                            02. FRONTEND
                        </div>
                        <p>
                            From the wireframe design, I create a frontend application to match wireframe as
                            exactly as possible. My favorite frameworks to use for this step are ReactJS, Angular 8,
                            JavaScript, jQuery, Bootstrap, and Angular Material.
                        </p>
                    </div>
                    <div className="expListItemContainer">
                        <div className="expListItem">
                            03. BACKEND
                        </div>
                        <p>
                            From the frontend design, I've connected it all using REST API to a backend with Java,
                            Spring, or Springboot.
                        </p>
                    </div>
                    <div className="expListItemContainer">
                        <div className="expListItem">
                            04. DIGITAL MARKETING & BRANDING
                        </div>
                        <p>
                            I have provided digital marketing and branding on social media platforms for my past clients.
                            I also integrated these elements into the development of my client's websites.
                        </p>
                    </div>
                    <div className="expListItemContainer">
                        <div className="expListItem">
                            05. GRAPHIC DESIGNS
                        </div>
                        <p>
                            I've created graphic designs for my clients to assist with their digital marketing,
                            business presentations, and web design.
                        </p>
                    </div>
                    <button className="btn btn-lg expBtn">Skills</button>
                </div>
            </div>
            <div className="expImgContainer">
                <img src={picture} alt=""/>
            </div>
        </div>

    );
}
