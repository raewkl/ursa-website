import React, { Component } from "react";
import FormList from "./FormList";
import StudentForm from "./StudentForm";
import firebase from "./firebase";


// const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      studentsEdit: null,

      stuFirstName: "",
      stuLastName: "",
      cohort: "",
      stuEmail: "",
      stuPhone: "",
      stuLinkedIn: "",
      stuNotes: "",
      stuStatus: "Approved",

      user: null,
      userId: null
    };
  }

  componentDidMount() {

    // this.props.addHeader();

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
                  status: "Approved",

                  addStudent: false
                });
              }

              this.setState(
                {
                  students: newState
                },
                () => {
                  // console.log(this.state.students);
                  // console.log(this.state.studentsEdit);
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

    this.setState({
      ...this.state,
      studentsEdit: studentsEditValues
    });
  };

  editStudent = i => {
    // use a placeholder, but only take state from student on the first open

    if (!this.state.studentsEdit) {
      const updateStudents = { ...this.state.students };

      console.log(updateStudents);

      this.setState({
        studentsEdit: updateStudents
      });
    }

    // setting the student.edit to true, so it opens the edit box
    const allStudents = [...this.state.students];

    const student = {
      ...allStudents[i],
      edit: true
    };

    allStudents[i] = student;

    this.setState(
      {
        students: allStudents
      },
      () => {
        // console.log(this.state.studentsEdit);
      }
    );
  };

  updateStudent = i => {
    const dbRef = firebase
      .database()
      .ref(
        `users/${this.state.userId}/students/${this.state.studentsEdit[i].key}`
      );

    dbRef.update({
      firstName: this.state.studentsEdit[i].firstName,
      lastName: this.state.studentsEdit[i].lastName,
      cohort: this.state.studentsEdit[i].cohort,
      email: this.state.studentsEdit[i].email,
      phone: this.state.studentsEdit[i].phone,
      linkedIn: this.state.studentsEdit[i].linkedIn,
      notes: this.state.studentsEdit[i].notes
    });
  };

  handleEditSubmit = (event, i) => {
    // NEED TO ISOLATE INDIVIDUAL STUDENTS, NOT EVERYTHING

    event.preventDefault();

    this.updateStudent(i);

    const update = { ...this.state.studentsEdit[i] };
    const fullUpdate = { ...this.state.studentsEdit };

    console.log(fullUpdate);

    // let's close the individual edit box

    const current = this.state.students;
    current[i] = { ...update, edit: false };

    // update state for students edit as well, so that it maintains after refresh

    this.setState(
      {
        students: current,
        studentEdits: fullUpdate
      },
      () => {
        // console.log(this.state.students);
        // console.log(this.state.studentsEdit);
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();

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
      notes: this.state.stuNotes,
      status: this.state.stuStatus
    });

    this.setState({
      stuFirstName: "",
      stuLastName: "",
      cohort: "",
      stuEmail: "",
      stuPhone: "",
      stuLinkedIn: "",
      stuNotes: "",
      stuStatus: "N/A",
      addStudent: !this.state.addStudent
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
      <div className="dashboard wrapper scrollChild">
        <div className="dashHeader">
          <h1>School Dashboard</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>

        <div className="accountSettings"></div>

        <div className="addStudent">
          <button
            className="addStudentButton"
            onClick={() =>
              this.setState({
                addStudent: !this.state.addStudent
              })
            }
          >
            {this.state.addStudent ? (
              <div className="addStudentLower">
                <i class="fas fa-times"></i>
              </div>
            ) : (
              <div className="addStudentLower">
                <p>Add Student</p>
                <i className="fas fa-user-plus"></i>
              </div>
            )}
          </button>
        </div>

        {this.state.addStudent ? (
          <StudentForm
            stuFirstName={this.state.stuFirstName}
            stuLastName={this.state.stuLastName}
            cohort={this.state.cohort}
            stuEmail={this.state.stuEmail}
            stuPhone={this.state.stuPhone}
            stuLinkedIn={this.state.stuLinkedIn}
            stuNotes={this.state.stuNotes}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : null}

        <div>
          <div className="formListHeader">
            <h4>First</h4>
            <h4>Last</h4>
            <h4>Cohort</h4>
            <h4>Status</h4>
            <h4>Notes</h4>
          </div>

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
