import React from "react";
import { HouseRoster } from "../styles/index"

class HousePoints extends React.Component {

  pointsRef = React.createRef();

  updatePoints() {
    const points = this.pointsRef.current.value;
    this.props.updatePoints(points, this.props.index);
  }

  renderPoints() {
    if (this.props.user.teacher) {
      return (
        <input
          type="text"
          className="points"
          size="6"
          defaultValue={this.props.house.points}
          ref={this.pointsRef}
          onChange={() => this.updatePoints()}
        />
      )
    }
    return (
      <h3>
        {this.props.house.points}
      </h3>
    )
  }

  render() {
    const houseCrest = require(`../assets/${this.props.house.name}.png`);

    return (
      <div
        className="housePoints"
        style={{backgroundImage: `url(${houseCrest})`}}
      >
        <div className="overlay">
          <h2>
            {this.props.house.name}
          </h2>
          {this.renderPoints()}
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
