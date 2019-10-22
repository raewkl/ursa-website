import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

const FormAnimation = () => {
  const [ref, inView] = useInView({
    rootMargin: "-50px 0px",
    triggerOnce: true
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    right: inView ? 0 : 100,
    config: config.default
  });

  return (
    <animated.div style={props} ref={ref} className="formBox">
      <form action="" method="POST" className="commentForm" name="commentForm">
        <div className="upperForm">
          <div className="nameEmail">
            <div className="nameBox">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                className="formName"
              />
            </div>

            <div className="emailBox">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="formEmail"
              />
            </div>
          </div>

          <div className="schoolProgram">
            <div className="schoolBox">
              <label htmlFor="school">School / Institution</label>
              <input
                type="text"
                name="school"
                id="school"
                placeholder="Enter School Name"
                className="formSchool"
              />
            </div>

            <div className="programBox">
              <label htmlFor="program">Program</label>
              <input
                type="text"
                name="program"
                id="program"
                placeholder="Enter program name"
                className="formProgram"
              />
            </div>
          </div>

          <fieldset>
            <legend className="visuallyHidden">Customer Type</legend>
            <div className="radioOptionsUpper">
              <p>Tell us more about yourself: </p>
              {/* <div className="radioOptions"> */}

              <div className="radioBox rb1">
                <input
                  type="radio"
                  name="customerType"
                  value="school"
                  id="schoolRadio"
                ></input>
                <label htmlFor="schoolRadio">
                  School
                  <span className="outerRadio">
                    <span className="innerRadio"></span>
                  </span>
                </label>
              </div>

              <div className="radioBox rb2">
                <input
                  type="radio"
                  name="customerType"
                  value="student"
                  id="studentRadio"
                ></input>
                <label htmlFor="studentRadio">
                  Student
                  <span className="outerRadio">
                    <span className="innerRadio"></span>
                  </span>
                </label>
              </div>

              <div className="radioBox rb3">
                <input
                  type="radio"
                  name="customerType"
                  value="other"
                  id="otherRadio"
                ></input>
                <label htmlFor="otherRadio">
                  Other
                  <span className="outerRadio">
                    <span className="innerRadio"></span>
                  </span>
                </label>
              </div>
              {/* </div> */}
            </div>
          </fieldset>

          {/* <div className="numberBox">
                        <label htmlFor="length" className="visuallyHidden">
                          Enter program length in months
                        </label>
                        <input
                          type="number"
                          name="length"
                          id="length"
                          placeholder="Program Length (Months)"
                          className="formLength"
                        />
  
                        <label htmlFor="cost" className="visuallyHidden">
                          Enter program cost in dollars
                        </label>
                        <input
                          type="number"
                          name="cost"
                          id="cost"
                          placeholder="Program Cost (USD)"
                          className="formCost"
                        />
  
                        <label htmlFor="students" className="visuallyHidden">
                          Enter number of students in program
                        </label>
                        <input
                          type="number"
                          name="students"
                          id="students"
                          placeholder="# Of Students"
                          className="formStudents"
                        />
                      </div> */}
        </div>

        <div className="lowerForm">
          <div className="commentBox">
            <label htmlFor="comment" className="visuallyHidden">
              Leave a comment
            </label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              placeholder="Leave a message..."
              className="formComment"
            ></textarea>
          </div>

          <div className="submitContainer">
            <button
              type="submit"
              value="Send"
              id="submitBox"
              className="submitBox button"
            >
              Send
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </form>
    </animated.div>
  );
};

export default FormAnimation;
