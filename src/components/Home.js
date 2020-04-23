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
        <div className="header flex justify-center items-center text-6xl mb-10">
          <h1>{this.props.user.house} Common Room</h1>
        </div>
      	<CommonRoom>
      	  {Object.keys(this.props.houses).map(key =>
      	    <HousePoints
      	      key={key}
      	      index={key}
      	      user={this.props.user}
      	      house={this.props.houses[key]}
      	      students={this.props.students}
              updatePoints={this.props.updatePoints}
      	    />
      	  )}
      	</CommonRoom>
      </div>
      </>
    );
  }
}

export default Home;
