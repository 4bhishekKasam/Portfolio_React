import React, { Component } from 'react';
import './Resume.css';
import resume from '../doc/ResumeAbhishek.pdf';

class Resume extends Component {

    componentWillMount = () => {
        console.log('check =');
        console.log(resume);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <center>RESUME DOWNLOAD</center>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <center>
                            <a type="button" className="btn btn-secondary btn-lg"
                                href='../doc/ResumeAbhishek.pdf'
                                download>
                                <i className="fa fa-download" aria-hidden="true" />
                                &nbsp; Resume</a>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;