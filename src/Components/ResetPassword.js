import React, { Component } from "react";
import HeaderLogIn from "./HeaderLogIn";

class ResetPassword extends Component {
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
          <form action="" className="resetPasswordForm">
            <div className="upperFormLogIn">
              <label htmlFor="userEmailReset" className="visuallyHidden">
                Your email address
              </label>
              <input
                type="email"
                name="userEmailReset"
                id="userEmailReset"
                placeholder="Email"
                className="formEmailReset"
              />
            </div>

            <div className="lowerFormLogIn">
              <div className="signInContainer">
                <input
                  type="submit"
                  value="Reset"
                  id="reset"
                  className="submitBox button resetSubmit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ResetPassword;
