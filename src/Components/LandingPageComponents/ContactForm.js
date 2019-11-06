import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

const ContactForm = () => {
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
      <form
        action="https://formspree.io/xknwywgo"
        method="POST"
        className="commentForm"
        name="commentForm"
      >
        <div className="upperForm">
          <div className="nameEmail">
            <div className="nameBox">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="formName"
                required
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
                required
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
                placeholder="Enter school name"
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
            <div className="radioOptionsUpper" id="radioOptionsUpper">
              <p>Tell us more about yourself: </p>

              <div className="radioBox rb1">
                <input
                  type="radio"
                  name="customerType"
                  value="school"
                  id="schoolRadio"
                  required
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
                  required
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
                  required
                ></input>
                <label htmlFor="otherRadio">
                  Other
                  <span className="outerRadio">
                    <span className="innerRadio"></span>
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
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

export default ContactForm;
