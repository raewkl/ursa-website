import React, { Component } from 'react';
import './Partials/App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import LogIn from "./Components/LogIn";
import Header from "./Components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={() => <Header />} />

          <Route exact path="/" component={() => <LandingPage />} />

          <Route path="/login" component={() => <LogIn />} />

          <Route path="/" component={() => <Footer />} />
        </div>
      </Router>
    );
  }
}

export default App;
