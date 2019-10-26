import React, { Component } from "react";
import "./Partials/App.scss";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "./Components/firebase";

import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import LogIn from "./Components/LogIn";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Faq from "./Components/Faq";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      userId: null
    };
  }

  footerWhite = () => {
    const footerBg = document.getElementById("footerBg");
    footerBg.style.backgroundColor = "white";
  };

  footerBlue = () => {
    const footerBg = document.getElementById("footerBg");
    footerBg.style.backgroundColor = "#efeeff";
  };

  componentDidMount() {
    // this.listener = auth.onAuthStateChanged(user => {
    // if (user) {
    //   this.setState({
    //     user,
    //     userId: user.uid
    //    });
    // }
    // else {
    //   this.setState({
    //     user: null,
    //     userId: null
    //   });
    // }
    // });
    // console.log("loading");

    // this.accordionListener();
  }

  componentWillUnmount() {
    // this.accordionListener();
  }



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
          console.log(user);
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
          console.log(this.state.user);
        }
      );
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={() => <Header />} />

          <Route
            exact
            path="/"
            component={() => <LandingPage footerBlue={this.footerBlue} />}
          />

          <Route path="/dashboard">
            {this.state.user ? (
              <Dashboard
                logout={this.logout}
                userId={this.state.uid}
                listener={this.listener}
                footerWhite={this.footerWhite}
              />
            ) : (
              <LogIn
                updateUser={this.updateUser}
                handleChange={this.handleChange}
                login={this.login}
                user={this.state.user}
                footerWhite={this.footerWhite}
              />
            )}
          </Route>

          <Route
            path="/faq"
            component={() => <Faq 
              footerWhite={this.footerWhite} 
              />}
          />

          <Route path="/" component={() => <Footer />} />
        </div>
      </Router>
    );
  }
}

export default App;
