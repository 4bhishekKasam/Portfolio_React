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
            </div>

        );
    }
}

export default About;