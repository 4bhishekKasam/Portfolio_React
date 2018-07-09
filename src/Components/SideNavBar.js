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
                    <div class="sidenav">
                        <div className="container">
                            <img src={require("../img/profile.jpg")} className="img-circle"
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
                    </div>
                    <div className="main">
                        <Switch>
                            <Route exact path="/About" component={About} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/Portfolio" component={Portfolio} />
                            <Route path="/Resume" component={Resume} />
                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

export default SideNavBar;
