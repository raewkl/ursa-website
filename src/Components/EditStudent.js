import React, { Component } from "react";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="editStudentContainer">
        <form action="">
          <label htmlFor="editStuFirstName" className="visuallyHidden">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="editStuFirstName"
            placeholder="First Name"
            className="editStuFirstName"
            value={this.props.studentsEdit[this.props.i].firstName}
            onChange={e => this.props.handleChangeEdit(e, this.props.i)}
          />

          <label htmlFor="editStuLastName" className="visuallyHidden">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="editStuLastName"
            placeholder="Last Name"
            className="editStuLastName"
            value={this.props.studentsEdit[this.props.i].lastName}
            onChange={e => this.props.handleChangeEdit(e, this.props.i)}
          />

          <label htmlFor="editCohort" className="visuallyHidden">
            Cohort
          </label>
          <input
            type="text"
            name="cohort"
            id="editCohort"
            placeholder="Cohort"
            className="editCohort"
            value={this.props.studentsEdit[this.props.i].cohort}
            onChange={e => this.props.handleChangeEdit(e, this.props.i)}
          />

          <label htmlFor="editStuEmail" className="visuallyHidden">
            Cohort
          </label>
          <input
            type="text"
            name="email"
            id="editStuEmail"
            placeholder="Email"
            className="editStuEmail"
            value={this.props.studentsEdit[this.props.i].email}
            onChange={e => this.props.handleChangeEdit(e, this.props.i)}
          />

          <label htmlFor="editStuPhone" className="visuallyHidden">
            Cohort
          </label>
          <input
            type="text"
            name="phone"
            id="editStuPhone"
            placeholder="Phone #"
            className="editStuPhone"
            value={this.props.studentsEdit[this.props.i].phone}
            onChange={e => this.props.handleChangeEdit(e, this.props.i)}
          />

          <label htmlFor="editStuLinkedIn" className="visuallyHidden">
            Cohort
          </label>
          <input
            type="text"
            name="linkedIn"
            id="editStuLinkedIn"
            placeholder="LinkedIn"
            className="editStuLinkedIn"
            value={this.props.studentsEdit[this.props.i].linkedIn}
            onChange={e => this.props.handleChangeEdit(e, this.props.i)}
          />

          <label htmlFor="stuNotes" className="visuallyHidden">
            Cohort
          </label>
          <textarea
            name="notes"
            id="stuNotes"
            className="stuNotes"
            cols="30"
            rows="10"
            value={this.props.studentsEdit[this.props.i].notes}
            onChange={e => this.props.handleChangeEdit(e, this.props.i)}
          ></textarea>

          <label htmlFor="editStuSubmit" className="visuallyHidden">
            Submit
          </label>
          <input
            type="submit"
            value="Submit"
            id="editStuSubmit"
            className="editSubmitBox button"
            onClick={e => this.props.handleEditSubmit(e, this.props.i)}
          />
        </form>
      </div>
    );
  }
}

export default EditStudent;
