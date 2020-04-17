import React from "react";
import hat from "../resources/Sorting_Hat.png";

class SortingHat extends React.Component {

  renderMessage() {
    if (this.props.student.house === "Slytherin") {
      return (
        <p className="house message typewriter">Determined, ambitious, clever, resourceful...</p>
      );
    }
    if (this.props.student.house === "Hufflepuff") {
      return (
        <p className="house message typewriter">Loyal, kind, hardworking, honest, genuine...</p>
      );
    }
    if (this.props.student.house === "Gryffindor") {
      return (
        <p className="house message typewriter">Brave, courageous, trusting, confident...</p>
      );
    }
    if (this.props.student.house === "Ravenclaw") {
      return (
        <p className="house message typewriter">Intelligent, wise, creative, original...</p>
      );
    }
  }

  render() {
    console.log(this.props.student);
    return (
      <>
        <div className="sorting-hat">
          <div>
            {/* <h1>The Sorting Hat</h1> */}
            <img src={hat} alt="Sorting Hat" onClick={() => this.props.sortStudent()}/>
          </div>
          <div>
            <div className="messageContainer">
              <p className="message typewriter">
                Aaah {`${this.props.student.firstName} of the ${this.props.student.lastName} family` || "yes"}. . .
              </p>
              <p className="message typewriter">
              You are an interesting one. Hmmm. . .
              </p>
              {this.renderMessage()}
              <p className="message typewriter">
                Yes, definitely seems like a. . .
              </p>
              <p className="message typewriter">
                {`${this.props.student.house.toUpperCase()}!!!`}
              </p>
              {/* <p className="message">
                Click the Sorting Hat.
              </p> */}
            </div>
          </div>
        </div>
        {/* <button className="enter-hogwarts" onClick={() => this.props.sortStudent()}>Enter Hogwarts</button>
        <button onClick={() => this.props.signOut()}>Log out!</button> */}
        </>
    );
  }
}

export default SortingHat
