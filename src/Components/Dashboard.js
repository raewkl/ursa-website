import React, { Component } from "react";
import FormList from "./FormList";
import firebase from "./firebase";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      studentsEdit: {},

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
                  notes: data[key].notes,
                  edit: false
                });
              }

              this.setState(
                {
                  students: newState
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
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangeEdit = (event, i) => {
    const studentsEditValues = {
      ...this.state.studentsEdit,
      [i]: {
        ...this.state.studentsEdit[i],
        [event.target.name]: event.target.value
      }
    };

    this.setState(
      {
        ...this.state,
        studentsEdit: studentsEditValues
      },
      () => console.log(this.state.studentsEdit[i])
    );
  };

  editStudent = i => {
    const allStudents = [...this.state.students];
    const student = {
      ...allStudents[i],
      edit: true
    };

    allStudents[i] = student;

    console.log({ ...allStudents });

    this.setState(
      {
        students: allStudents,
        studentsEdit: { ...allStudents }
      },
      () => {
        console.log(this.state.students);
        console.log(this.state.studentsEdit);
      }
    );
  };

  updateImage = (i) => {

    const dbRef = firebase
      .database()
      .ref(`users/${this.state.userId}/students/${this.state.studentsEdit[i].key}`);

    dbRef.push({
      firstName: this.state.studentsEdit[i].firstName,
      lastName: this.state.studentsEdit[i].lastName,
      cohort: this.state.studentsEdit[i].cohort,
      email: this.state.studentsEdit[i].email,
      phone: this.state.studentsEdit[i].phone,
      linkedIn: this.state.studentsEdit[i].linkedIn,
      notes: this.state.studentsEdit[i].notes
    });
  }

  handleEditSubmit = (event, i) => {
    event.preventDefault();

    // convert StudentEdits Object into array
    const updates = { ...this.state.studentsEdit };
    const arr = Object.values(updates);
    const allStudents = [...arr];

    console.log()

    // create a variable of student being edited, take all the existing values, then change it's edit to false, so we can close the edit box
    const student = { ...allStudents[i], edit: false };

    // update the StudentEdits array, with the new state, which will be passed to the main students state array
    allStudents[i] = student;

    // push the StudentEdits to the database
    this.updateImage(i);

    this.setState(
      {
        students: allStudents,
        studentsEdit: {}
      },
      () => {
        console.log(this.state.students[i].edit);
        
        
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    // console.log(this.state.userId);
    // console.log(this.state.students);

    const dbRef = firebase
      .database()
      .ref(`users/${this.state.userId}/students/`);

    dbRef.push({
      firstName: this.state.stuFirstName,
      lastName: this.state.stuLastName,
      cohort: this.state.cohort,
      email: this.state.stuEmail,
      phone: this.state.stuPhone,
      linkedIn: this.state.stuLinkedIn,
      notes: this.state.stuNotes
    });

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

  removeStudent = studentId => {
    const dbRef = firebase
      .database()
      .ref(`users/${this.state.userId}/students/`);

    dbRef.child(studentId).remove();
  };

  render() {
    return (
      <div className="dashboard wrapper">
        <div className="dashHeader">
          <h1>Dashboard</h1>

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
          <FormList
            students={this.state.students}
            studentsEdit={this.state.studentsEdit}
            removeStudent={this.removeStudent}
            editStudent={this.editStudent}
            handleEditSubmit={this.handleEditSubmit}
            handleChangeEdit={this.handleChangeEdit}
          />
        </div>
      </div>
    );
  }
}
export default Dashboard;
