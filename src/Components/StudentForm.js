import React from "react";

const StudentForm = props => {

    return (
      <div className="formContainer studentForm">
        <h2>Add Student</h2>

        <form action="">
          <div className="mainForm">
              <div className="upperForm">
                  <label htmlFor="stuFirstName" className="visuallyHidden">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="stuFirstName"
                    id="stuFirstName"
                    placeholder="First Name"
                    className="stuFirstName"
                    value={props.stuFirstName}
                    onChange={e => props.handleChange(e)}
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
                    value={props.stuLastName}
                    onChange={e => props.handleChange(e)}
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
                    value={props.cohort}
                    onChange={e => props.handleChange(e)}
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
                    value={props.stuEmail}
                    onChange={e => props.handleChange(e)}
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
                    value={props.stuPhone}
                    onChange={e => props.handleChange(e)}
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
                    value={props.stuLinkedIn}
                    onChange={e => props.handleChange(e)}
                  />
              </div>
    
              <div className="lowerForm">
                  <label htmlFor="stuNotes" className="visuallyHidden">
                    Cohort
                  </label>
                  <textarea
                    name="stuNotes"
                    id="stuNotes"
                    className="stuNotes"
                    placeholder="Additional Notes"
                    value={props.stuNotes}
                    onChange={e => props.handleChange(e)}
                  ></textarea>
              </div>
          </div>

          <label htmlFor="stuSubmit" className="visuallyHidden">
            Submit
          </label>
          <input
            type="submit"
            value="Submit"
            id="stuSubmit"
            className="submitBox button"
            onClick={props.handleSubmit}
          />
        </form>
      </div>
    );



}

export default StudentForm;