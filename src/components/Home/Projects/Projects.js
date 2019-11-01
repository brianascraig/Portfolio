import React from 'react';
import './Projects.css';
import project1 from './HomeschoolApp.png';
import project2 from './FlashcardsApp.png';
import project3 from './ForumApp.png';
import project4 from './MealPrepper.png';

export default function projects() {
    return (
        <div className="Projects">
            <div className="projTitleBlock">
                <h2 className="projTitle">Projects</h2>
                <h3 className="projDesc">Recent Work</h3>
            </div>
            <div className="projImagesContainer">
                <div className="projImageRow1">
                    <div className="projImage">
                        <img src={project1} alt=""/>
                        <div className="imageTextContainer">
                            <div className="imageText">
                                Homeschool Manager App
                            </div>
                        </div>
                    </div>
                    <div className="projImage">
                        <img src={project2} alt=""/>
                        <div className="imageTextContainer">
                            <div className="imageText">
                                Sight Words FlashCards App
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projImageRow2">
                    <div className="projImage">
                        <img src={project3} alt=""/>
                        <div className="imageTextContainer">
                            <div className="imageText">
                                Forum Blog App
                            </div>
                        </div>
                    </div>
                    <div className="projImage">
                        <img src={project4} alt=""/>
                        <div className="imageTextContainer">
                            <div className="imageText">
                                Meal Prep Helper App
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}
