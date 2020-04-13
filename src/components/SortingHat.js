import React from "react";
import Hat from "../resources/Sorting_Hat.png";
import Headshot from "../resources/Dwyer_color.jpg";

class SortingHat extends React.Component {
  render() {
    return (
      <div className="sorting-hat">
        <h1>The Sorting Hat</h1>
        <img src={Hat} alt="Sorting Hat"/>
        <div className="photoMessage">
          <img src={Headshot} alt="Headshot"/>
          <p className="message">
            Alright firstName, let's find you a house. Hmmm...<br/>
            Strong spirit, very driven, but clever too..<br/>
            Yes, definitely seems like a...<br/>
            HUFFLEPUFF!
          </p>
        </div>
      </div>
    );
  }
}

export default SortingHat
