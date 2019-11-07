import React from "react";
import './SightWordsFlashcards.css';
import Header from "../../../Header/Header";
import picture from "../../../Home/Projects/FlashcardsApp.png";
import Footer from "../../../Footer/Footer";

export default function sightWordsFlashcards () {
    return(
        <div className="SightWordsFlashcards">
            <div className="row no-gutters">
                <div className="headerContainer col-2">
                    <Header />
                </div>
                <div className="no-gutters projTopContainer col-10">
                    <div className="sliderImgContainer slider-img shadow p-3 mb-5">
                        <img src={picture} alt=""/>
                    </div>
                    <div className="projInfoContainer">
                        <div className="projDescContainer">
                            <h3 className="sectDesc projForumTitle">Sight Words Flashcards</h3>
                            <p className="sectMoreInfo">
                                This application is designed to allow users between pre-kindergarten and third grade to
                                learn and practice sight words and new vocabulary. The user can browse through flashcards,
                                take quizzes on sight words, and play games to help them retain their knowledge.
                                <br/><br/>
                            </p>
                        </div>
                        <div className="projSkillsContainer">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <th colSpan="2">Technologies Used</th>
                                    <td>ReactJS, MongoDB, Java, Springboot, REST API, HTML, CSS
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="2">Project URL</th>
                                    <td><a href="https://github.com/brianascraig/SightWordsCards">See Code on GitHub</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="2">Copyright</th>
                                    <td>Briana Craig</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Footer/>
                </div>

            </div>
        </div>
    )
}
