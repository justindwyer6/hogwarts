import React from "react";
import hat from "../resources/Sorting_Hat.png";

class SortingHat extends React.Component {

  renderMessage() {
    if (this.props.student.house === "Slytherin") {
      return (
        <span className="house">Determined, ambitious, clever, resourceful...</span>
      );
    }
    if (this.props.student.house === "Hufflepuff") {
      return (
        <span className="house">Loyal, kind, hardworking, honest, genuine...</span>
      );
    }
    if (this.props.student.house === "Gryffindor") {
      return (
        <span className="house">Brave, courageous, trusting, confident...</span>
      );
    }
    if (this.props.student.house === "Ravenclaw") {
      return (
        <span className="house">Intelligent, wise, creative, original...</span>
      );
    }
  }

  render() {
    console.log(this.props.student);
    return (
      <div className="sorting-hat">
        <h1>The Sorting Hat</h1>
        <img src={hat} alt="Sorting Hat"/>
        <div className="messageContainer">
          <p className="message">
            Aaah {`${this.props.student.firstName} of the ${this.props.student.lastName} family` || "yes"}, you are an interesting one. Hmmm...<br/>
            {this.renderMessage()}<br/>
            Yes, definitely seems like a...<br/>
            {`${this.props.student.house.toUpperCase()}!!!`}
          </p>
        </div>
        <button className="enter-hogwarts" onClick={() => this.props.sortStudent()}>Enter Hogwarts</button>
        <button onClick={() => this.props.signOut()}>Log out!</button>
      </div>
    );
  }
}

export default SortingHat
