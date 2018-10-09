import React from "react";
import ReactDOM from "react-dom";
// Components
import RouteComponent from "./RouteComponent";

import "./App.sass";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <RouteComponent />
      </div>
    );
  }
}

export default App;
