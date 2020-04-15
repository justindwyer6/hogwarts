import React from "react";
import Hat from "../resources/Sorting_Hat.png";

class SortingHat extends React.Component {

  renderMessage() {
    if (this.props.house === "Slytherin") {
      return (
        <span className="house">Determined, ambitious, clever, resourceful...</span>
      );
    }
    if (this.props.house === "Hufflepuff") {
      return (
        <span className="house">Loyal, kind, hardworking, honest, genuine...</span>
      );
    }
    if (this.props.house === "Gryffindor") {
      return (
        <span className="house">Brave, courageous, trusting, confident...</span>
      );
    }
    if (this.props.house === "Ravenclaw") {
      return (
        <span className="house">Intelligent, wise, creative, original...</span>
      );
    }
  }

  render() {
    return (
      <div className="sorting-hat">
        <h1>The Sorting Hat</h1>
        <img src={Hat} alt="Sorting Hat"/>
        <div className="messageContainer">
          <p className="message">
            Aaah {this.props.user.firstName || "yes"}, you are an interesting one. Hmmm...<br/>
            {this.renderMessage()}<br/>
            Yes, definitely seems like a...<br/>
            {`${this.props.house.toUpperCase()}!!!`}
          </p>
        </div>
      </div>
    );
  }
}

export default SortingHat
