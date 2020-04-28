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
    user: null,
    houses: null,
    students: null,
    loading: true
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if(user) {
        await this.authHandler({ user });
      }
      let loading = this.state.loading;
      loading = false;
      this.setState({ loading });
    });
  }

  authHandler = async userData => {
    this.housesRef = base.syncState("houses", {
      context: this,
      state: "houses"
    });
    this.studentsRef = base.syncState("students", {
      context: this,
      state: "students"
    });
    const studentId = userData.user.email.replace(/@.*\.com/, "");
    const user = await base.fetch(`students/${studentId}`, { context: this });
    if (Object.keys(user).length === 0 && user.constructor === Object) {
      this.signOut();
      alert("Please sign in with your Bulldog email!");
      return null;
    }
    this.setState({ user });
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
      }
    );
  }

  signOut = async () => {
    await firebase.auth().signOut();
    base.removeBinding(this.housesRef);
    base.removeBinding(this.studentsRef);
    const user = null;
    const students = null;
    this.setState({ students, user });
  }

  sortStudent = () => {
    const user = { ...this.state.user };
    user.hasBeenSorted = true;
    const emailRegEx = /@.*\.com/;
    const studentId = user.email.replace(emailRegEx, "");
    base.post(`students/${studentId}/hasBeenSorted`, { data: user.hasBeenSorted })
      .then(
        this.setState({ user })
      );
  }

  updatePoints = (points, index) => {
    const houses = { ...this.state.houses };
    houses[index].points = points;
    this.setState({ houses })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loadingC">
          <img src={loadingSpinner} alt="Loading" className="loading"/>
        </div>
      );
    }

    if (this.state.user && this.state.user.hasBeenSorted) {
      return (
        <Home
          user={this.state.user}
          houses={this.state.houses}
          students={this.state.students}
          updatePoints={this.updatePoints}
          signOut={this.signOut}
        />
      );
    }

    if (this.state.user && !this.state.user.hasBeenSorted) {
      return (
        <SortingHat
          user={this.state.user}
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
