import React from "react";
import {Link} from "react-router-dom";
import './Home.css';
function Home(){
    return(
        <div className="App">
        <h1>Health Tracker</h1>
        <h3>A health tracker is a digital tool designed to monitor and record various aspects of an individual's health and fitness journey. You can record daily activities for fitness and health information to know your status of health.</h3>
        <Link to="/signup">
          <button className="btn1">Get Started</button>
        </Link>
      </div>
    );
}
export default Home;