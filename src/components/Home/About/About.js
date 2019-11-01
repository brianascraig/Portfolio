import React from 'react';
import './About.css';
import about_picture from './about-image.png';

export default function about() {
    return (
        <div className="About">
            <div className="aboutContainer">
                <h2 className="aboutTitle">About Me.</h2>
                <h3 className="aboutDesc">Motivated by passion and positivity.</h3>
                <div className="aboutBlurb">
                    <p>
                        I have a passion to learn technology which burns brighter every day that I continue
                        to explore information technology. I'm naturally a life-long learner, but the drive
                        to learn more comes easily within a field that never stagnates and constantly
                        inspires the creativity in me. Most importantly, there's a lot of positive change
                        happening now because new technologies and I'm excited to be a part of that positivity.
                    </p>
                </div>
                <div className="aboutMoreInfo">
                    <p>
                        My journey into this field starts with my...Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Eget velit
                        aliquet sagittis id consectetur purus ut faucibus pulvinar. Ut morbi tincidunt augue
                        interdum velit. Tempus quam pellentesque nec nam aliquam sem et tortor. Enim lobortis
                        scelerisque fermentum dui faucibus. Viverra accumsan in nisl nisi. Id interdum velit
                        laoreet id donec ultrices tincidunt arcu non. Etiam dignissim diam quis enim lobortis
                        scelerisque fermentum dui faucibus. Ullamcorper sit amet risus nullam eget felis eget
                        nunc lobortis. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.
                        <br/><br/>
                        Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Id aliquet risus
                        feugiat in ante metus dictum at. Viverra mauris in aliquam sem fringilla ut morbi
                        tincidunt augue. Tristique magna sit amet purus gravida. Viverra suspendisse potenti
                        nullam ac tortor vitae. Pulvinar elementum integer enim neque volutpat ac tincidunt.
                        Aliquam nulla facilisi cras fermentum odio eu. Mi ipsum faucibus vitae aliquet nec
                        ullamcorper sit amet risus. Nunc eget lorem dolor sed viverra. Tincidunt praesent semper
                        feugiat nibh sed pulvinar. Sed ullamcorper morbi tincidunt ornare massa eget egestas.
                        Egestas sed tempus urna et. Facilisis mauris sit amet massa vitae tortor. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur. Nec tincidunt praesent semper feugiat.
                        Sed enim ut sem viverra aliquet eget sit amet tellus. Enim nunc faucibus a pellentesque
                        sit amet porttitor eget.
                    </p>
                    <button className="btn btn-lg projBtn">Projects</button>
                </div>
            </div>
            <div className="aboutImageContainer">
                <img src={about_picture} alt=""/>
            </div>

        </div>
    );
}
