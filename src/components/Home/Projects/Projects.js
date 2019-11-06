import React from 'react';
import './Projects.css';
import project1 from './HomeschoolApp.png';
import project2 from './FlashcardsApp.png';
import project3 from './ForumApp.png';
import project4 from './MealPrepper.png';
import linkImg from './foreign.png';
import browserImg from './browser.png';
import {Link} from "react-router-dom";


export default function projects() {
    return (
        <div className="Projects" id="projects">
            <div className="projTitleBlock">
                <h2 className="sectTitle">Projects</h2>
                <h3 className="sectDesc">Recent Work</h3>
            </div>
            <div className="projImagesContainer">
                <div className="projImageRow1">
                    <div className="projImage">
                        <img src={project1} alt=""/>
                        <div className="imageTextContainer">
                            <div className="imageText">
                                <Link to="/project-posts/homeschool-manager">Homeschool Manager App</Link>
                                {/*<a href="https://github.com/brianascraig/HomeschoolManagerApp">Homeschool Manager App</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="projImage">
                        <img src={project2} alt=""/>
                        <div className="imageTextContainer">
                            <div className="imageText">
                                <Link to="/project-posts/sight-words-flashcards">Sight Words Flashcards App</Link>
                                {/*<a href="https://github.com/brianascraig/SightWordsCards">Sight Words Flashcards App</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projImageRow2">
                    <div className="projImage">
                        <img src={project3} alt=""/>
                        <div className="imageTextContainer">
                            <div className="imageText">
                                <Link to="/project-posts/forum-blog">Forum Blog App</Link>
                                {/*<a href="https://github.com/brianascraig/AngularBlogForum">Forum Blog App</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="projImage">
                        <img src={project4} alt=""/>
                        <div className="imageTextContainer">
                            <div className="imageText">
                                <Link to="/project-posts/meal-prep-helper">Meal Prep Helper App</Link>
                                {/*<a href="https://github.com/brianascraig/Meal-Prep-Helper">Meal Prep Helper App</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
