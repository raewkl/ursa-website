import React from "react";
import EditStudent from "./EditStudent";

const FormList = props => {
  return (
    <div>
      {props.students.map((student, i) => {

        return (
          <li key={(student.key)}>
            <p>{student.firstName}</p>
            <p>{student.lastName}</p>
            <p>{student.cohort}</p>
            <p>{student.email}</p>
            <p>{student.phone}</p>
            <p>{student.linkedIn}</p>
            <p>{student.notes}</p>
            <button onClick={() => props.editStudent(i)}>edit</button>
            <button
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to delete this item?")
                ) {
                  props.removeStudent(student.key);
                }
              }}
            >
              delete
            </button>

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
