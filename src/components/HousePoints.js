import React from "react";
import { HouseRoster } from "../styles/index"

class HousePoints extends React.Component {
  render() {
    const houseCrest = require(`../assets/${this.props.house.name}.jpg`);
    return (
      <div
        className="housePoints"
        style={{backgroundImage: `url(${houseCrest})`}}
      >
        <div className="overlay bg-trans-black">
          <h2>
            {this.props.house.name}
          </h2>
          <h3>
            {this.props.house.points}
          </h3>
          <HouseRoster>
            {Object.keys(this.props.students).map(key =>
              (this.props.students[key].house === this.props.house.name && !this.props.students[key].teacher)
              ? <li key={key}>{this.props.students[key].firstName} {this.props.students[key].lastName}</li>
              : null
            )}
          </HouseRoster>
        </div>
      </div>
    );
  }
}

export default HousePoints;
