import React from "react";
import { Router } from "@reach/router";
import "../resources/App.css";
import SortingHat from "./SortingHat"
import Login from "./ Login"

class App extends React.Component {
  render() {
    return (
      <>
        {/* <SortingHat /> */}
        <Router>
          <Login path="/login" />
          <SortingHat path="/sortingHat" />
          {/* <Home path="/" /> */}
        </Router>
      </>
    );
  }
}

export default App;
