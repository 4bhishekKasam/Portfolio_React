import React, { Component } from 'react';

class Resume extends Component {
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
                             <button type="button" className="btn btn-secondary btn-lg">
                                <i class="fa fa-download" aria-hidden="true"/>
                            &nbsp; Resume</button>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;