import React from "react";
import EditStudent from "./EditStudent";

const FormList = props => {
  return (
    <div className="formList">
      {props.students.map((student, i) => {

        return (
          <li key={student.key}>
            <div className="studentInfo">
              <div className="studentContainer">
                <div className="upperStudent">
                  <p>{student.firstName}</p>
                  <p>{student.lastName}</p>
                  <p>{student.cohort}</p>
                  <p>{student.status}</p>
                  <p className="studentNotes">{student.notes}</p>
                </div>
              </div>

              <div className="buttonBox">
                <div className="buttonBoxLower">
                  <a href={`mailto:${student.email}`}>
                    <i class="far fa-envelope"></i>
                  </a>
                  <a href={student.linkedIn}>
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <button onClick={() => props.editStudent(i)}>
                    <i class="far fa-edit"></i>
                  </button>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        )
                      ) {
                        props.removeStudent(student.key);
                      }
                    }}
                  >
                    <i class="fas fa-user-times"></i>
                  </button>
                </div>

                <div className="phoneContact">
                  <i class="fas fa-phone"></i>
                  <p>{student.phone}</p>
                </div>
              </div>
            </div>

            {student.edit ? (
              <EditStudent
                studentsEdit={props.studentsEdit}
                i={i}
                handleEditSubmit={props.handleEditSubmit}
                handleChangeEdit={props.handleChangeEdit}
              />
            ) : null}
          </li>
        );
      })}
    </div>
  );
};

export default FormList;
