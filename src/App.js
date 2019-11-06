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

  componentDidMount() {
    document.addEventListener("mousemove", this.moveMouse);
  }

  componentWillUnmount() {}

  addHeader = () => {
    const topBar = document.getElementById("topBarContainer");
    topBar.classList.remove("removeHeight");
    topBar.classList.add("addHeight");
  };

  removeHeader = () => {
    const topBar = document.getElementById("topBarContainer");
    topBar.classList.remove("addHeight");
    topBar.classList.add("removeHeight");
  };

  moveMouse = e => {
    const cursor = document.getElementById("cursor");
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x - 6.5}px, ${y - 6.5}px)`;
  };

  updateUser = user => {
    this.setState({
      user
    });
  };

  login = (event, email, password) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(result => {
      const user = result.user;

      this.setState(
        {
          user,
          uid: user.uid
        },
        () => {
          // console.log(user);
        }
      );
    });
  };

  logout = event => {
    event.preventDefault();

    auth.signOut().then(() => {
      this.setState(
        {
          user: null,
          userId: null
        },
        () => {
          // console.log(this.state.user);
        }
      );
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="cursor" id="cursor"></div>

          <Route
            path="/"
            component={() => (
              <Header
                addHeader={this.addHeader}
                removeHeader={this.removeHeader}
              />
            )}
          />

          <Route exact path="/" component={() => <LandingPage />} />

          <Route path="/dashboard">
            {this.state.user ? (
              <Dashboard
                logout={this.logout}
                userId={this.state.uid}
                listener={this.listener}
                addHeader={this.addHeader}
              />
            ) : (
              <LogIn
                updateUser={this.updateUser}
                handleChange={this.handleChange}
                login={this.login}
                user={this.state.user}
                addHeader={this.addHeader}
              />
            )}
          </Route>

          <Route exact path="/faq" component={() => <Faq />} />

          <Route
            path="/"
            component={() => (
              <Footer
                addHeader={this.addHeader}
                removeHeader={this.removeHeader}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
