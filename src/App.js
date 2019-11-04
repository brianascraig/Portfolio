import React, { Component } from 'react';
import logo from './logo.svg';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import About from "./components/Home/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blog from "./components/Home/Blog/Blog";
import Contact from "./components/Home/Contact/Contact";
import Experience from "./components/Home/Experience/Experience";
import Projects from "./components/Home/Projects/Projects";
import Skills from "./components/Home/Skills/Skills";
import Articles from "./components/Posts/Articles/Articles";
import ProjectPosts from "./components/Posts/ProjectPosts/ProjectPosts";
import './theme/theme.css'


const RootApp = () => {
    return (
            <BrowserRouter>
                <AppWithRouter/>
            </BrowserRouter>
    )
};

export default RootApp;

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Header className="header col-3"/>*/}
                <Switch>
                    <Route path='/project-posts' component={ProjectPosts} />
                    <Route path='/articles' component={Articles} />
                    <Route path='/skills' component={Skills} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/about' component={About}/>
                    <Route path='/' component={Home} />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

const AppWithRouter = withRouter(App);
