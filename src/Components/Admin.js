import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="adminPage wrapper">
        <form action="" className="logInForm">
          <div className="upperFormLogIn">
            <label htmlFor="userEmail" className="visuallyHidden">
              Your email address
            </label>
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Your Email"
              className="formUserEmail"
              value={this.props.email}
              onChange={e => this.props.handleChange(e)}
            />

            <label htmlFor="password" className="visuallyHidden">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="formPassword"
              value={this.props.password}
              onChange={e => this.props.handleChange(e)}
            />
          </div>

          <div className="lowerFormLogIn">
            <div className="passBox">
              <a href="">Forgot your password?</a>

              {/* On Click, link to Reset Password Component */}
            </div>

            <div className="signInContainer">
              {/* <Link to="/admindash"> */}
              {/* <button onClick={this.login}>Log In</button> */}

              {/* {this.props.user ? ( */}

              {/* ) : ( */}
              <button onClick={this.props.logout}>Log Out</button>

              <button onClick={this.props.login}>Log In</button>
              {/* )} */}
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Admin;
