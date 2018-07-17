import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <center>ABOUT ME</center>
                    </div>
                </div>
                <div className="row">
                    <span>
                        I am a <b>Reactjs</b> Developer. I love building beautiful websites and other lovely web things. When I'm not programming, I can be found watching TV, biking with my friends.
               </span>
                </div>


                <div className="row">
                    <div className="col-sm-7">
                        <ul id="skill">
                            <li><span className="bar html"></span><h4>HTML5 & CSS3</h4></li>
                            <li><span className="bar Bootstrap"></span><h4>Bootstrap</h4></li>
                            <li><span className="bar ReactJs"></span><h4>ReactJs</h4></li>
                            <li><span className="bar ExpressJs"></span><h4>ExpressJs</h4></li>
                            <li><span className="bar NodeJs"></span><h4>NodeJs</h4></li>
                        </ul>
                    </div>
                </div>

            </div>

        );
    }
}

export default About;