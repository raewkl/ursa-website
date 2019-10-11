import React from "react";

const EditStudent = props => {
  return (
    <div className="editStudentContainer">
      <form action="">
        <div className="mainForm">
          <div className="upperForm">
            <label htmlFor="editStuFirstName" className="visuallyHidden">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="editStuFirstName"
              placeholder="First Name"
              className="editStuFirstName"
              value={props.studentsEdit[props.i].firstName}
              onChange={e => props.handleChangeEdit(e, props.i)}
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
              value={props.studentsEdit[props.i].lastName}
              onChange={e => props.handleChangeEdit(e, props.i)}
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
              value={props.studentsEdit[props.i].cohort}
              onChange={e => props.handleChangeEdit(e, props.i)}
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
              value={props.studentsEdit[props.i].email}
              onChange={e => props.handleChangeEdit(e, props.i)}
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
              value={props.studentsEdit[props.i].phone}
              onChange={e => props.handleChangeEdit(e, props.i)}
            />

            <label htmlFor="editStuLinkedIn" className="visuallyHidden">
              Notes
            </label>
            <input
              type="text"
              name="linkedIn"
              id="editStuLinkedIn"
              placeholder="LinkedIn"
              className="editStuLinkedIn"
              value={props.studentsEdit[props.i].linkedIn}
              onChange={e => props.handleChangeEdit(e, props.i)}
            />
          </div>

          <div className="lowerForm">
            <label htmlFor="stuNotes" className="visuallyHidden">
              Cohort
            </label>
            <textarea
              name="notes"
              id="stuNotes"
              className="stuNotes"
              cols="30"
              rows="10"
              value={props.studentsEdit[props.i].notes}
              onChange={e => props.handleChangeEdit(e, props.i)}
            ></textarea>
          </div>
        </div>

        <label htmlFor="editStuSubmit" className="visuallyHidden">
          Submit
        </label>
        <input
          type="submit"
          value="Submit"
          id="editStuSubmit"
          className="editSubmitBox button"
          onClick={e => props.handleEditSubmit(e, props.i)}
        />
      </form>
    </div>
  );
};

export default EditStudent;
