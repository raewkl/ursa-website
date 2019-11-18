//overarching, root file. contains functions that are constant across pages.
// anything starting with return is jsx (functions like html)- comment = {/* */}. within the curly brackets, the code is js again.

import React, { Component } from "react";
import "./Partials/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import firebase from "./Components/firebase";

import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import LogIn from "./Components/LogIn";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Faq from "./Components/Faq";

// const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      userId: null
    };
  }

  //componentDidMount - after components have mounted, run the following: "mousemove" searches for the cursor trailer div (via cursor)
  componentDidMount() {
    // document.addEventListener("mousemove", this.moveMouse);
  }
  
//CURSOR

  moveMouse = e => {
    const cursor = document.getElementById("cursor");
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x - 6.5}px, ${y - 6.5}px)`;
  };

//HEADER

  // addHeader = () => {
  //   const topBar = document.getElementById("topBarContainer");
  //   topBar.classList.remove("removeHeight");
  //   topBar.classList.add("addHeight");
  // };

  // removeHeader = () => {
  //   const topBar = document.getElementById("topBarContainer");
  //   topBar.classList.remove("addHeight");
  //   topBar.classList.add("removeHeight");
  // };

  updateUser = user => {
    this.setState({
      user
    });
  };

  login = (event, email, password) => {
    event.preventDefault();

    const warning = document.getElementById("warning");

    auth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;

        this.setState(
          {
            user,
            uid: user.uid
          },
          () => {
            if (warning) {
              warning.style.display = "none";
            }
          }
        );
      })
      .catch(function(error) {
        warning.style.display = "block";
      });
  };

  logout = event => {
    event.preventDefault();

    auth
      .signOut()
      .then(() => {
        this.setState(
          {
            user: null,
            userId: null
          },
          () => {
            // console.log(this.state.user);
          }
        );
      })
      .catch(function(error) {
      });
  };


  //render: renders jsx code inside "return". All jsx in thi

  render() {
    return (
      <Router>
        <div className="App">
          {/* <div className="cursor" id="cursor"></div> */}
          {/* {^this is code for the trailing cursor} */}

        {/* Header */}
          <Route
            path="/"
            component={() => (
              <Header
                // addHeader={this.addHeader}
                // removeHeader={this.removeHeader}
              />
            )}
          />

       {/* Landing Page */}
          <Route
            exact
            path="/"
            component={() => <LandingPage 
              // addHeader={this.addHeader} 
              />}
          />

        { /* Log-in and Dashboard */}
          <Route exact path="/dashboard">
            {this.state.user ? (
              <Dashboard
                logout={this.logout}
                userId={this.state.uid}
                listener={this.listener}
                // addHeader={this.addHeader}
              />
            ) : (
              <LogIn
                updateUser={this.updateUser}
                handleChange={this.handleChange}
                login={this.login}
                user={this.state.user}
                // addHeader={this.addHeader}
              />
            )}
          </Route>
        {/* Faq */}
          <Route exact path="/faq" component={() => <Faq />} />
        {/* Footer */}
          <Route
            path="/"
            component={() => (
              <Footer
                // addHeader={this.addHeader}
                // removeHeader={this.removeHeader}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
