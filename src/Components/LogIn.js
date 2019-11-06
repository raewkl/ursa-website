import React, { Component } from "react";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  // bring state for handle change
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    this.props.addHeader();
  }

  render() {
    return (
      <div className="logInPage wrapper">

        <form action="" className="logInForm">
          <div className="upperFormLogIn">
            <label htmlFor="userName" className="visuallyHidden">
              Your email address
            </label>
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Your email"
              className="formUserEmail"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
              required
            />

            <label htmlFor="password" className="visuallyHidden">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="formPassword"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              required
            />
          </div>

          <div className="lowerFormLogIn">
            {/* <div className="passBox">
              <a href="#">Forgot your password?</a>
            </div> */}

            <div className="signInContainer">
              <input
                type="submit"
                value="Sign In"
                id="signIn"
                className="submitBox button logInSubmit"
                onClick={event =>
                  this.props.login(event, this.state.email, this.state.password)
                }
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default LogIn;
