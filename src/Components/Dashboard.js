import React, { Component } from "react";
import firebase from "./firebase";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      stuFirstName: "",
      stuLastName: "",
      cohort: "",
      stuEmail: "",
      stuPhone: "",
      stuLinkedIn: "",
      stuNotes: "",
      user: null,
      userId: null
    };
  }

  componentDidMount() {

    this.listener = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState(
          {
            user,
            userId: user.uid
          },
          () => {
            const dbRef = firebase
              .database()
              .ref(`users/${this.state.userId}/students/`);

            dbRef.on("value", response => {

              const newState = [];
              const data = response.val();

              console.log(data);

              for (let key in data) {
                newState.push({
                  key: key,
                  firstName: data[key].firstName,
                  lastName: data[key].lastName,
                  cohort: data[key].cohort,
                  email: data[key].email,
                  phone: data[key].phone,
                  linkedIn: data[key].linkedIn,
                  notes: data[key].notes
                });
              }

              this.setState(
                {
                  students: newState,
                },
                () => {
                  console.log(this.state.students);
                }
              );
            });
          }
        );
      } else {
        this.setState({
          user: null,
          userId: null
        });
      }
    });
  }

  componentWillUnmount() {
    this.listener();
    this.props.listener();
  }

  handleChange = event => {
    let value = event.target.value;

    this.setState({
      [event.target.name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.userId);
    console.log(this.state.students);

    // here, we create a reference to our database
    const dbRef = firebase
      .database()
      .ref(`users/${this.state.userId}/students/`);

    // here we grab whatever value this.state.userInput has and push it to the database
    dbRef.push({
      firstName: this.state.stuFirstName,
      lastName: this.state.stuLastName,
      cohort: this.state.cohort,
      email: this.state.stuEmail,
      phone: this.state.stuPhone,
      linkedIn: this.state.stuLinkedIn,
      notes: this.state.stuNotes
    });

    // here we reset the state to an empty string
    this.setState({
      stuFirstName: "",
      stuLastName: "",
      cohort: "",
      stuEmail: "",
      stuPhone: "",
      stuLinkedIn: "",
      stuNotes: ""
    });
  };

  render() {
    return (
      <div className="dashboard wrapper">
        <div className="dashHeader">
          <h1>Admin Dashboard</h1>

          <button onClick={this.props.logout}>Log Out</button>
        </div>

        <div className="formContainer">
          <form action="">
            <label htmlFor="stuFirstName" className="visuallyHidden">
              First Name
            </label>
            <input
              type="text"
              name="stuFirstName"
              id="stuFirstName"
              placeholder="First Name"
              className="stuFirstName"
              value={this.state.stuFirstName}
              onChange={e => this.handleChange(e)}
            />

            <label htmlFor="stuLastName" className="visuallyHidden">
              Last Name
            </label>
            <input
              type="text"
              name="stuLastName"
              id="stuLastName"
              placeholder="Last Name"
              className="stuLastName"
              value={this.state.stuLastName}
              onChange={e => this.handleChange(e)}
            />

            <label htmlFor="cohort" className="visuallyHidden">
              Cohort
            </label>
            <input
              type="text"
              name="cohort"
              id="cohort"
              placeholder="Cohort"
              className="cohort"
              value={this.state.cohort}
              onChange={e => this.handleChange(e)}
            />

            <label htmlFor="stuEmail" className="visuallyHidden">
              Cohort
            </label>
            <input
              type="text"
              name="stuEmail"
              id="stuEmail"
              placeholder="Email"
              className="stuEmail"
              value={this.state.stuEmail}
              onChange={e => this.handleChange(e)}
            />

            <label htmlFor="stuPhone" className="visuallyHidden">
              Cohort
            </label>
            <input
              type="text"
              name="stuPhone"
              id="stuPhone"
              placeholder="Phone #"
              className="stuPhone"
              value={this.state.stuPhone}
              onChange={e => this.handleChange(e)}
            />

            <label htmlFor="stuLinkedIn" className="visuallyHidden">
              Cohort
            </label>
            <input
              type="text"
              name="stuLinkedIn"
              id="stuLinkedIn"
              placeholder="LinkedIn"
              className="stuLinkedIn"
              value={this.state.stuLinkedIn}
              onChange={e => this.handleChange(e)}
            />

            <label htmlFor="stuNotes" className="visuallyHidden">
              Cohort
            </label>
            <textarea
              name="stuNotes"
              id="stuNotes"
              className="stuNotes"
              cols="30"
              rows="10"
              value={this.state.stuNotes}
              onChange={e => this.handleChange(e)}
            ></textarea>

            <label htmlFor="stuSubmit" className="visuallyHidden">
              Submit
            </label>
            <input
              type="submit"
              value="Submit"
              id="stuSubmit"
              className="submitBox button"
              onClick={this.handleSubmit}
            />
          </form>
        </div>

        <div>
          <ul>{this.state.students.map((student) => {
            return (
              <li key={student.key}>
                <p>{student.firstName}</p>
                <p>{student.lastName}</p>
                <p>{student.cohort}</p>
                <p>{student.email}</p>
                <p>{student.phone}</p>
                <p>{student.linkedIn}</p>
                <p>{student.notes}</p>
              </li>
            );
          })
          }</ul>
        </div>
      </div>
    );
  }
}
export default Dashboard;
