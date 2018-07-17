import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <center>MINI PROJECTS</center>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-4">
                        <a href='https://github.com/4bhishekKasam/React-FoodRecipe'>
                            <img src={require("../img/food.PNG")} alt="food" />
                            <center>Food Recipe </center>
                        </a>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                        <a href='https://github.com/4bhishekKasam/React-Emoji-Search'>
                            <img src={require("../img/emoji1.PNG")} alt="emoji" />
                            <center>Emoji Search </center>
                        </a>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-4">
                        <a href='https://github.com/4bhishekKasam/React-Assignment'>
                            <img src={require("../img/assignmentScreenshot.PNG")} alt="food" />
                            <center>Github Search </center>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;