import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <h2>Welcome to</h2>
        <h1>
          Hogwarts School of Witchcraft and Wizardry
        </h1>
        <button onClick={() => this.props.authenticate()}>Enter Hogwarts</button>
        {/* <button onClick={() => this.props.signOut()}>Log out!</button> */}
      </div>
    );
  }
}

export default Login
