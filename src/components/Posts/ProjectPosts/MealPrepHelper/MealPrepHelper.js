import React from "react";
import './MealPrepHelper.css';
import Header from "../../../Header/Header";
import picture from "../../../Home/Projects/MealPrepper.png";
import Footer from "../../../Footer/Footer";

export default function mealPrepHelper () {
    return(
        <div className="MealPrepHelper">
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
                            <h3 className="sectDesc projForumTitle">Meal Prep Helper App</h3>
                            <p className="sectMoreInfo">
                                This application allows users to enter food preferences and generate a week's worth of
                                recipes based on their preferences. The user can view details about each recipe and
                                generate a shopping list. Each recipe can be added to a Google Calendar or shared
                                by email.
                                <br/><br/>
                                Users can edit their preferences, save recipes, and view previous weeks of recipes.
                            </p>
                        </div>
                        <div className="projSkillsContainer">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <th colSpan="2">Technologies Used</th>
                                    <td>HTML, CSS, JS, jQuery, AJAX, API, MongoDB, NodeJS
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="2">Project URL</th>
                                    <td><a href="https://github.com/brianascraig/Meal-Prep-Helper">See Code on GitHub</a>
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
