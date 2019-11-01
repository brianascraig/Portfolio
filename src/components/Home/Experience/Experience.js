import React from 'react';
import './Experience.css';

export default function experience() {
    return (
        <div className="Experience">
            <h2>Experience.</h2>
            <h3>Design and code you can experience.</h3>
            <div className="experienceBlurb">
                The thing I love most about creating in IT is discovering the design a client
                or teammate has in mind and making it come to life. From the wireframe, to the frontend design,
                to the backend controls, it's exciting to see requirements take form visually and logically.
            </div>
            <div className="experienceMoreInfo">
                <div className="expListItem">
                    <div>
                        01. DESIGN
                    </div>
                    <p>
                        An application starts with its design.
                        I create wireframes to match the trending application designs of the moment. To make
                        the design eye-catching, I use cutting-edge graphic designs, trending color schemes,
                        and the latest architectural styles.
                    </p>
                </div>
                <div className="expListItem">
                    <div>
                        02. FRONTEND
                    </div>
                    <p>
                        From the wireframe design, I create a frontend application to match wireframe as
                        exactly as possible. My favorite frameworks to use for this step are ReactJS, Angular 8,
                        JavaScript, jQuery, Bootstrap, and Angular Material.
                    </p>
                </div>
                <div className="expListItem">
                    <div>
                        03. BACKEND
                    </div>
                    <p>From the frontend design, I've connected it all using REST API to a backend with Java,
                        Spring, or Springboot. </p>
                </div>
            </div>
        </div>

    );
}
