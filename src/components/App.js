import React from "react";
import { Router } from "@reach/router";
import "../resources/App.css";
import firebaseConfig from "../firebase.js";
import firebase from "firebase";
import Login from "./Login";
import SortingHat from "./SortingHat";
import Home from "./Home";

class App extends React.Component {

  state = {
    user: null,
    student: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (userData) => {
    // 1. Look up student in firebase db
    console.log(userData.user.email);
    const student = await firebaseConfig.fetch(userData.user.email,
      { context: this });
    console.log(student);
    // 3. Set the state of the Inventory component to reflect the current user
    // this.setState({
    //   user
    // });
  }

  authenticate = provider => {
    provider = new firebase.auth.GoogleAuthProvider();
    firebaseConfig
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
          console.log(token);
          console.log(user);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          console.log(credential);
      });
  }

  signOut = async () => {
    await firebase.auth().signOut();
    this.setState({ user: null });
  }

  render() {
    if (!this.state.user) {
      return (
        <Login authenticate={this.authenticate} signOut={this.signOut} />
      );
    }

    // if (notValidStudentEmail) {
    //   fetch user from db
    //   alert("Womp womp.");
    // }

    return (
        <Router>
          <SortingHat exact path="/sortingHat"
            house="Ravenclaw"
            user={this.state.user}
            signOut={this.signOut}
          />
          <Home default path="/"
            signOut={this.signOut}
          />
        </Router>
    );
  }
}

export default App;
