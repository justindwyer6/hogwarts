import React from "react";
import { CommonRoom } from "../styles/index";
import "../assets/Home.css";
import HousePoints from "./HousePoints"

class Home extends React.Component {
  render() {
    return (
      <>
      <button className="signOut" onClick={() => this.props.signOut()}>Log Out</button>
      <div className="flex flex-col justify-center items-center">
      	<CommonRoom>
      	  <div className="header col-1-span-2">
      	    <h1>{this.props.student.house} Common Room</h1>
      	  </div>
      	  {Object.keys(this.props.houses).map(key =>
      	    <HousePoints
      	      key={key}
      	      student={this.props.student}
      	      house={this.props.houses[key]}
      	      students={this.props.students}
      	    />
      	  )}
      	</CommonRoom>
      </div>
      </>
    );
  }
}

export default Home;
