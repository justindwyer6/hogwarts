import React from "react";
// import { Router } from "@reach/router";
import firebase from "firebase";
import base, { firebaseApp } from "./base.js";
import Login from "./components/Login";
import SortingHat from "./components/SortingHat";
import Home from "./components/Home";
import "./assets/magic-master/dist/magic.css";
import "./assets/App.css";
import loadingSpinner from "./assets/loading-cat.gif";

class App extends React.Component {

  state = {
    student: null,
    loading: true
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if(user) {
        console.log(user);
        await this.authHandler({ user });
      }
      let loading = this.state.loading;
      loading = false;
      this.setState({ loading });
    });
  }

  authHandler = async userData => {
    const studentId = userData.user.email.replace(/@.*\.com/, "");
    const student = await base.fetch(`students/${studentId}`, { context: this });
    if (Object.keys(student).length === 0 && student.constructor === Object) {
      this.signOut();
      alert("Please sign in with your Bulldog email!");
      return null;
    }
    this.setState({ student });
  }

  authenticate = provider => {
    provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(this.authHandler).catch(function(error) {
        console.log(`Error code: ${error.code}`);
        console.log(`Error message: ${error.message}`);
        console.log(`Error email: ${error.email}`);
        console.log(`Error credential: ${error.credential}`);
      });
  }

  signOut = async () => {
    await firebase.auth().signOut();
    const student = null;
    this.setState({ student });
  }

  sortStudent = () => {
    const student = { ...this.state.student };
    student.hasBeenSorted = true;
    const emailRegEx = /@.*\.com/;
    const studentId = student.email.replace(emailRegEx, "");
    base.post(`students/${studentId}/hasBeenSorted`, { data: student.hasBeenSorted })
      .then(
        this.setState({ student })
      );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loadingC">
          <img src={loadingSpinner} alt="Loading" className="loading"/>
        </div>
      );
    }

    if (this.state.student && this.state.student.hasBeenSorted) {
      return (
        <Home houses={this.state.houses} signOut={this.signOut} />
      )
    }

    if (this.state.student && !this.state.student.hasBeenSorted) {
      return (
        <SortingHat
          student={this.state.student}
          sortStudent={this.sortStudent}
          signOut={this.signOut}
        />
      );
    }

    return (
      <Login
        authenticate={this.authenticate}
        signOut={this.signOut}
      />
    );
  }
}

export default App;
