import React from 'react';
import './Slider.css';
import picture from './slider-image.png';

export default function slider() {
    return (
        <div className="Slider" id="slider">
            {/*<img className="sliderImg" src={picture} alt=""/>*/}
            <div className="sliderCaption1">
                Briana Craig
            </div>
            <div className="sliderCaption2">
                Full Stack Developer
            </div>
            <div className="sliderCaption3">
                Perfection is not attainable, but if we chase perfection <br/> we can catch excellence.
            </div>
            <a href="#about"><button className="moreBtn">Learn More About Me</button></a>
        </div>
    );
}
