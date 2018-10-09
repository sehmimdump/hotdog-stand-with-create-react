import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// My Componenets
import OrderSteps from "./components/OrderSteps";
import Main from "./components/Main";

import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";
import About from "./components/About";
import SimpleMap from "./components/Location";
import Reviews from "./components/Reviews";


class RouteComponent extends Component {
  state ={
    loggedIn : true
  }
  render() {    
    return (
    <Router>
        <div>
          <Route exact path="/" component={ Main }/>
          <Route path="/order" component={ OrderSteps }/>
        </div>
    </Router>
    );
  }
}
export default RouteComponent;


