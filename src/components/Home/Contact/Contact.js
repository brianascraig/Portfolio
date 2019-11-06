import React from 'react';
import './Contact.css';
import picture from './contact-image.jpg';

export default function contact() {
    return (
        <div className="Contact sectContainer" id="contact">
            <div className="topContainer">
                <h2 className="sectTitle">Contact</h2>
                <h3 className="sectDesc">Let's Connect.</h3>
                <div className="sectBlurb">
                    <p>
                        With my drive drive and hard-work ethic, I'm sure I can be an asset to your team. I
                        look forward to meeting you and learning all bout your business needs.
                    </p>
                </div>
                <div>
                    <form action="mailto:brianascraig@gmail.com" method="post" encType="text/plain">
                        <div className="inputContainer">
                            <input className="form-control formInput" type="text" placeholder="Name*" required/>
                        </div>
                        <div className="inputContainer">
                            <input className="form-control formInput" type="text" placeholder="Email*" required/>
                        </div>
                        <div className="inputContainer">
                            <input className="form-control formInput" type="tel" placeholder="Phone" required/>
                        </div>
                        <div className="inputContainer">
                            <textarea name="message" id="message" cols="70" rows="5"
                                      placeholder="  What can I do for you?"/>
                        </div>
                        <button className="sectBtn" type="submit" >Let's Connect</button>
                    </form>
                </div>
            </div>
            <div className="sectImgContainer contactImg">
                <img src={picture} alt=""/>
            </div>
        </div>
    );
}
