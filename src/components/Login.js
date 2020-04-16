import React from "react";
import ticket from "../resources/hogwarts-ticket.webp";
import crest from "../resources/hogwarts-crest.png";

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="Login">
          <img class="hogwarts-crest" src={crest} alt="Hogwarts Crest" onClick={() => this.props.authenticate()}></img>
          <h1>
            Hogwarts School of Witchcraft and Wizardry
          </h1>
          <h2>Click your ticket to hop on the Hogwarts Express and begin the sorting ceremony.</h2>
          {/* <button className="enter-hogwarts floating" onClick={() => this.props.authenticate()}>Enter Hogwarts</button> */}
          {/* <button onClick={() => this.props.signOut()}>Log out!</button> */}
          <img class="hogwarts-ticket floating" src={ticket} alt="Hogwarts Ticket" onClick={() => this.props.authenticate()}></img>
        </div>
      </div>
    );
  }
}

export default Login
