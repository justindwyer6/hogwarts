import React from "react";
import hat from "../assets/Sorting_Hat.png";
import "../assets/SortingHat.css";

class SortingHat extends React.Component {

  renderMessage() {
    if (this.props.user.house === "Slytherin") {
      return "Ambitious, clever, resourceful. . ."
    }
    if (this.props.user.house === "Hufflepuff") {
      return "Loyal, hardworking, honest, genuine. . ."
    }
    if (this.props.user.house === "Gryffindor") {
      return "Courageous, trusting, confident. . ."
    }
    if (this.props.user.house === "Ravenclaw") {
      return "Intelligent, wise, creative, original. . ."
    }
  }

  render() {
    return (
      <>
        <div className="sortingHatContainer">
          <div className="sortingHat">
            <div>
              <img src={hat} alt="Sorting Hat"/>
              <div className="entryContainer" onClick={() => this.props.sortStudent()}>
                <p className="entry">
                  Click here to enter the {this.props.user.house} common room!
                </p>
              </div>
            </div>
            <div>
              <div className="messageContainer">
                <p className="message typewriter first">
                  Aaah, {`${this.props.user.firstName} of the ${this.props.user.lastName} family` || "yes"}. . .
                </p>
                <p className="message typewriter second">
                You are an interesting one. Hmmm. . .
                </p>
                <p className="house message typewriter third">
                  {this.renderMessage()}
                </p>
                <p className="message typewriter fourth">
                  Yes, definitely seems like a. . .
                </p>
                <p className="message typewriter fifth yell" onClick={() => this.props.sortStudent()}>
                  {`${this.props.user.house.toUpperCase()}!`}
                </p>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default SortingHat
