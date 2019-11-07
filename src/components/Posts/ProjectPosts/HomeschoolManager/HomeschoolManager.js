import React from "react";
import './HomeschoolManager.css';
import picture from './hmsm-slider.png';
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";

export default function homeschoolManager () {
    return(
        <div className="HomeschoolManager">
            <div className="row no-gutters">
                <div className="headerContainer col-2">
                    <Header />
                </div>
                <div className="no-gutters projTopContainer col-10">
                    <div className="sliderImgContainer  shadow p-3 mb-5">
                        <img className="homeschoolProjImg" src={picture} alt=""/>
                    </div>
                    <div className="projInfoContainer">
                        <div className="projDescContainer">
                            <h3 className="sectDesc projForumTitle">Home School Manager</h3>
                            <p className="sectMoreInfo">
                                This application is designed to provide a learning management system geared towards
                                homeschooling parents and children. It provides and interface for its users to upload
                                assignments, homework, or tests. It also allows parents to administer tests and lessons
                                through the platform. Both parents and students can see their dashboard where they can
                                see their records or make changes.
                                <br/><br/>
                                This application is designed to meet the need for homeschooling parents to create and
                                retain adequate records of their child's education as required by the state. Most
                                importantly, it allows parents to use online learning while still implementing their own
                                lessons.
                            </p>
                        </div>
                        <div className="projSkillsContainer">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <th colSpan="2">Technologies Used</th>
                                    <td>Angular, Microservices, Spring Boot, Spring Cloud, MySQL, Docker,
                                        <br/>Cassandra, Spring Zuul, Spring Eureka, Liquibase
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="2">Project URL</th>
                                    <td><a href="https://github.com/brianascraig/HomeschoolManagerApp">See Code on GitHub</a>
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
