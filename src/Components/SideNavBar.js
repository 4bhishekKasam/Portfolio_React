import React, { Component } from 'react';
import './SideNavBar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

class SideNavBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="sidenav">
                        <div className="container">
                            <img src={require("../img/pro.jpg")} className="img-circle"
                                alt="Abhishek Konnur" />
                        </div>
                        <div className="container">
                            <Link to="/About">
                                <span className="sideBarName">ABHISHEK<br />
                                    KONNUR
                           </span>
                            </Link>
                        </div>
                        <div className="container">
                            <Link to={'/About'}>About</Link>
                            <Link to={'/Contact'}>Contact</Link>
                            <Link to={'/Portfolio'}>Portfolio</Link>
                            <Link to={'/Resume'}>Resume</Link>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="credit"> Handcrafted by Abhishek Konnur</div>
                        </div>
                    </div>
                    <div className="main">
                        <Switch>
                            <Route exact path="/About" component={About} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/Portfolio" component={Portfolio} />
                            <Route path="/Resume" component={Resume} />
                        </Switch>
                    </div>

                    <div className="footer">
                        <p>
                            <a href="https://www.facebook.com/Abhishek.Konnur" className="w3-hover-text-indigo"><i className="fa fa-facebook-official"></i></a>
                            &nbsp;
                            <a href="https://github.com/4bhishekKasam" className="w3-hover-text-red"><i className="fa fa-github"></i></a>
                            &nbsp;
                            <a href="https://twitter.com/abhi_madmax" className="w3-hover-text-red"><i className="fa fa-instagram"></i></a>
                            &nbsp;
                            <a href="https://www.linkedin.com/in/abhishek-konnur-362763163/" className="w3-hover-text-red"><i className="fa fa-linkedin-square"></i></a>
                            &nbsp;
                            <a href="https://stackoverflow.com/users/9624268/abhishek-konnur" className="w3-hover-text-red"><i className="fa fa-stack-overflow"></i></a>
                        </p>
                    </div>

                </div>
            </Router>

        );
    }
}

export default SideNavBar;
