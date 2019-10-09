import React from "react";

const FormList = (props) => {

    return (

      <div>

        {props.students.map(student => {
          return (
            <li key={student.key}>
              <p>{student.firstName}</p>
              <p>{student.lastName}</p>
              <p>{student.cohort}</p>
              <p>{student.email}</p>
              <p>{student.phone}</p>
              <p>{student.linkedIn}</p>
              <p>{student.notes}</p>
              <button>edit</button>
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
            </li>
          );
        })}

      </div>
    );
}

export default FormList;