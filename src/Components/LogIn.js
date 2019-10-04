import React, { Component } from "react";
import HeaderLogIn from "./HeaderLogIn";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="logInPage">
        <HeaderLogIn />

        <div className="logInFormBox">
          <form action="" className="logInForm">
            <div className="upperFormLogIn">
              <label htmlFor="userName" className="visuallyHidden">
                Your email address
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
                className="formUserName"
              />

              <label htmlFor="password" className="visuallyHidden">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="formPassword"
              />
            </div>

            <div className="lowerFormLogIn">
              <div className="passBox">
                <a href="">Forgot your password?</a>

                {/* On Click, link to Reset Password Component */}
              </div>

              <div className="signInContainer">
                <input
                  type="submit"
                  value="Sign In"
                  id="signIn"
                  className="submitBox button logInSubmit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default LogIn;
