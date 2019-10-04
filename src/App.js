import React, { Component } from 'react';
import './Partials/App.scss';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "./Components/firebase";

import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import LogIn from "./Components/LogIn";
import Header from "./Components/Header";
import Admin from "./Components/Admin";
import AdminDashboard from "./Components/AdminDashboard";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  updateUser = user => {
    this.setState({
      user
    });
  };

  handleChange = event => {
    let value = event.target.value;

    this.setState({
      [event.target.name]: value
    });
  };

  login = event => {
    event.preventDefault();

    let email = this.state.email;
    let password = this.state.password;

    auth.signInWithEmailAndPassword(email, password).then(result => {
      const user = result.user;

      this.setState(
        {
          user
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
          user: null
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
          <Route exact path="/" component={() => <Header />} />

          <Route exact path="/" component={() => <LandingPage />} />

          <Route
            path="/admin"
            component={() => (
              <Admin
                updateUser={this.updateUser}
                handleChange={this.handleChange}
                login={this.login}
                logout={this.logout}
                email={this.state.email}
                password={this.state.password}
                user={this.state.user}
              />
            )}
          />

          <Route
            path="/admindash"
            component={() => <AdminDashboard logout={this.logout} />}
          />

          {/* <Route exact path="/admin">
            {this.state.user ? (
              <Redirect
                to="/admindash"
              />
            ) : (
              <Admin
                updateUser={this.updateUser}
                handleChange={this.handleChange}
                login={this.login}
                email={this.state.email}
                password={this.state.password}
                user={this.state.user}
              />
            )}
          </Route> */}

          <Route path="/login" component={() => <LogIn />} />

          <Route path="/" component={() => <Footer />} />
        </div>
      </Router>
    );
  }
}

export default App;
