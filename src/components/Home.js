import React from "react";
// import { CommonRoom } from "../styles/index";
import { CommonRoom } from "../styles/index";
import "../assets/Home.css";

class Home extends React.Component {
  render() {
    return (
      <CommonRoom>
        <div className="header col-1-span-2">Hi</div>
        <div className="item">Hi</div>
        <div className="item">Hi</div>
        <div className="item">Hi</div>
        <div className="item">Hi</div>
        {/* <HouseHeader>
          <h1>{house} Common Room</h1>
        </HouseHeader>
        <PointCounters>
          <HousePointCounter></HousePointCounter>*4
        </PointCounters> */}
      </CommonRoom>
    );
  }
}

export default Home;
