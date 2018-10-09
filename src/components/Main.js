import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// My Componenets
import OrderSteps from "./OrderSteps";

import LandingPage from "./LandingPage";
import Menu from "./Menu";
import About from "./About";
import SimpleMap from "./Location";
import Reviews from "./Reviews";


class Main extends Component {
  render() {    
    return (
    <div>
        <div>
        <LandingPage />
        <hr></hr>
        <Menu />
        <hr></hr>
        <SimpleMap></SimpleMap>
        <hr></hr>
        <About className="about"></About>
        <hr></hr>
        <Reviews></Reviews>
        </div>
    </div>
    );
  }
}
export default Main;


