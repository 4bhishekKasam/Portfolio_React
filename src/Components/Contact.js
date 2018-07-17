import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <center>CONTACT ME</center>
                    </div>
                </div>
          
                <div className="row">
                <div className="col-md-2"/>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;