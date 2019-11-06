import React from "react";
import './ForumBlog.css';
import picture from './forum-slider.JPG';
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";

export default function forumBlog () {
    return(
        <div className="ForumBlog">
            <div className="row no-gutters">
                <div className="headerContainer col-2">
                    <Header />
                </div>
                <div className="no-gutters projTopContainer col-10">
                    <div className="sliderImgContainer shadow p-3 mb-5">
                        <img src={picture} alt=""/>
                    </div>
                    <div className="projInfoContainer">
                        <div className="projDescContainer">
                            <h3 className="sectDesc projForumTitle">Forum Blog App</h3>
                            <p className="sectMoreInfo">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                                <br/><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="projSkillsContainer">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <th colSpan="2">Technologies Used</th>
                                    <td>Angular, Java, Springboot, MongoDB, REST API,
                                        <br/>IntelliJ, Robo 3T
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="2">Project URL</th>
                                    <td><a href="https://github.com/brianascraig/AngularBlogForum">See Code on GitHub</a>
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
