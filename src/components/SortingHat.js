import React from "react";
import hat from "../resources/Sorting_Hat.png";

class SortingHat extends React.Component {

  renderMessage() {
    if (this.props.student.house === "Slytherin") {
      return (
        <p className="house message typewriter third">Determined, ambitious, clever, resourceful. . .</p>
      );
    }
    if (this.props.student.house === "Hufflepuff") {
      return (
        <p className="house message typewriter third">Loyal, kind, hardworking, honest, genuine. . .</p>
      );
    }
    if (this.props.student.house === "Gryffindor") {
      return (
        <p className="house message typewriter third">Brave, courageous, trusting, confident. . .</p>
      );
    }
    if (this.props.student.house === "Ravenclaw") {
      return (
        <p className="house message typewriter third">Intelligent, wise, creative, original. . .</p>
      );
    }
  }

  render() {
    console.log(this.props.student);
    return (
      <>
        <div className="sortingHatContainer">
          <div className="sortingHat">
            <div>
              <img src={hat} alt="Sorting Hat"/>
            </div>
            <div>
              <div className="messageContainer">
                <p className="message typewriter first">
                  Aaah, {`${this.props.student.firstName} of the ${this.props.student.lastName} family` || "yes"}. . .
                </p>
                <p className="message typewriter second">
                You are an interesting one. Hmmm. . .
                </p>
                {this.renderMessage()}
                <p className="message typewriter fourth">
                  Yes, definitely seems like a. . .
                </p>
                <p className="message typewriter fifth yell" onClick={() => this.props.sortStudent()}>
                  {`${this.props.student.house.toUpperCase()}!`}
                </p>
              </div>
            </div>
          </div>
          <div className="entryContainer" onClick={() => this.props.sortStudent()}>
            <p className="entry">
              Click here to enter the {this.props.student.house} common room!
            </p>
          </div>
        </div>
        {/* <button className="enter-hogwarts" onClick={() => this.props.sortStudent()}>Enter Hogwarts</button>
        <button onClick={() => this.props.signOut()}>Log out!</button> */}
      </>
    );
  }
}

export default SortingHat
