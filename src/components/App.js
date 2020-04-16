import React from "react";
// import { Router } from "@reach/router";
import firebase from "firebase";
import base, { firebaseApp } from "../base.js";
import Login from "./Login";
import SortingHat from "./SortingHat";
import Home from "./Home";
import "../resources/App.css";

class App extends React.Component {

  state = {
    student: null
  }

  componentWillMount() {
    if (this.state.student) {
      const emailRegEx = /@.*\.com/;
      const studentId = this.state.student.email.replace(emailRegEx, "");
      this.ref = base.syncState(`students/${studentId}`, {
        context: this,
        state: this.state.student
      });
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user });
      }
    });
    // if (this.state.student) {
      // const emailRegEx = /@.*\.com/;
      // const studentId = this.state.student.email.replace(emailRegEx, "");
      // this.studentRef = base.syncState(`/students/${studentId}`, {
      //   context: this,
      //   state: 'student'
      // });
    // }
  }

  // componentDidUpdate() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if(user) {
  //       this.authHandler({ user });
  //     }
  //   });
  // }

  componentWillUnmount() {
    base.removeBinding(this.student);
  }

  authHandler = async (userData) => {
    const emailRegEx = /@.*\.com/;
    const studentId = userData.user.email.replace(emailRegEx, "");
    const student = await base.fetch(`students/${studentId}`, { context: this });
    this.setState({ student });
  }

  authenticate = provider => {
    provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result.credential.accessToken);
        console.log(result.user);
      }).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
        console.log(error.email);
        console.log(error.credential);
      });
  }

  signOut = async () => {
    await firebase.auth().signOut();
    let student = { ...this.state.student };
    student = null;
    this.setState({ student });
  }

  sortStudent = () => {
    const student = { ...this.state.student };
    student.hasBeenSorted = true;
    this.setState({ student });
    const emailRegEx = /@.*\.com/;
    const studentId = student.email.replace(emailRegEx, "");
    base.post(`students/${studentId}/hasBeenSorted`, { data: student.hasBeenSorted });
  }

  render() {
    if (this.state.student && this.state.student.hasBeenSorted) {
      console.log("fromRenderHome");
      return (
        <Home signOut={this.signOut} />
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

    console.log("fromRenderLogin");
    return (
      <Login
        authenticate={this.authenticate}
        signOut={this.signOut}
      />
    );

    // return (
    //     <Router>
    //       <SortingHat exact path="/sortingHat"
    //         house="Ravenclaw"
    //         student={this.state.student}
    //         signOut={this.signOut}
    //       />
    //       <Home default path="/"
    //         signOut={this.signOut}
    //       />
    //       <Login exact path="/login"
    //         authenticate={this.authenticate}
    //         signOut={this.signOut}
    //       />
    //     </Router>
    // );
  }
}

export default App;
