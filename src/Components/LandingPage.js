import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    // let userInput = e.target.value;
    // this.setState({ userWish: userInput });
  };

  render() {
    return (
      <div className="wrapper">

        <main>
          {/* SECTION ONE */}

          <section className="sectionOne" id="sectionOne">
            <h1>
              Turnkey ISA Solutions <span>for Schools</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              optio fuga veniam! Vitae obcaecati quia eum minima magnam sint
              tempore laborum, aliquam autem!
            </p>

            <button>Learn More</button>
          </section>

          {/* SECTION TWO */}

          <section className="sectionTwo">
            <h2>
              <em>How</em> it works
            </h2>
            <ul>
              <li>
                <figure>
                  <div className="numBox">
                    <p>1</p>
                  </div>
                  <figcaption>
                    <div className="subFig">
                      <h3>Schools Partner With Us</h3>
                      <p>
                        Ursa works with schools to create an ISA program with
                        set % income share, $ cap, and payment term.
                      </p>
                      <p>Contact Us ></p>
                    </div>
                  </figcaption>
                </figure>
              </li>

              <li>
                <figure className="even">
                  <div className="numBox">
                    <p>2</p>
                  </div>
                  <figcaption>
                    <div className="subFig">
                      <h3>Students Apply</h3>
                      <p>
                        Students fill out a simple application form and eligable
                        candidates are provided an ISA.
                      </p>
                      <p>Apply now ></p>
                    </div>
                  </figcaption>
                </figure>
              </li>

              <li>
                <figure>
                  <div className="numBox">
                    <p>3</p>
                  </div>
                  <figcaption>
                    <div className="subFig">
                      <h3>Tuition is Paid Upfront</h3>
                      <p>
                        Ursa pays tuition for the students upfront, with no risk
                        to the school itself.
                      </p>
                      <p>Learn more ></p>
                    </div>
                  </figcaption>
                </figure>
              </li>

              <li>
                <figure className="even">
                  <div className="numBox">
                    <p>4</p>
                  </div>
                  <figcaption>
                    <div className="subFig">
                      <h3>Students Pay, But Only When They Can</h3>
                      <p>
                        Student pays Ursa a % of their earnings. Once they hit
                        the $ cap or the payment term ends, the ISA terminates
                        and their payment obligations are complete.
                      </p>
                      <p>Learn more ></p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>

          {/* SECTION THREE */}

          <section className="sectionThree">
            <h2>
              <em>Student</em> benefits
            </h2>

            <ul>
              <li>
                <figure>
                  <div className="stuImg">
                    <img
                      src={require("../Assets/Images/ac_arrow2_blue.svg")}
                      alt={"Ursa Logo"}
                    />
                  </div>
                  <figcaption>
                    <h3>Affordable Financing</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam adipisci ipsa?
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <div className="stuImg">
                    <img
                      src={require("../Assets/Images/ac_calendar2_blue.svg")}
                      alt={"Ursa Logo"}
                    />
                  </div>
                  <figcaption>
                    <h3>Mentorship</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam adipisci ipsa?
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <div className="stuImg">
                    <img
                      src={require("../Assets/Images/ac_elements_blue.svg")}
                      alt={"Ursa Logo"}
                    />
                  </div>
                  <figcaption>
                    <h3>Career Support</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam adipisci ipsa?
                    </p>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>

          {/* CONTACT*/}

          <section className="contact" id="contact">
            <h2>
              <em>Contact</em> Us
            </h2>

            <div className="formAsideBox">
              <div className="formBox">
                <form
                  action=""
                  method="POST"
                  className="commentForm"
                  name="commentForm"
                >
                  <div className="upperForm">
                    <div className="nameEmail">
                      <label htmlFor="name" className="visuallyHidden">
                        Enter your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Contact Name"
                        className="formName"
                      />

                      <label htmlFor="email" className="visuallyHidden">
                        Enter your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="formEmail"
                      />
                    </div>

                    <label htmlFor="school" className="visuallyHidden">
                      Enter school name
                    </label>
                    <input
                      type="text"
                      name="school"
                      id="school"
                      placeholder="School Name"
                      className="formSchool"
                    />

                    <label htmlFor="program" className="visuallyHidden">
                      Enter name of program
                    </label>
                    <input
                      type="text"
                      name="program"
                      id="program"
                      placeholder="Program Name"
                      className="formProgram"
                    />

                    <div className="numberBox">
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
                    </div>
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
                      <input
                        type="submit"
                        value="Submit"
                        id="submitBox"
                        className="submitBox button"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <aside className="byTheNumbers">
                <div className="numberBox">
                  <h2>The Numbers</h2>
                </div>

                <ul>
                  <li>
                    <h3>7 Out Of 10</h3>
                    <p>Students require financial assistance.</p>
                  </li>
                  <li>
                    <h3>1 In 10</h3>
                    <p>Are expected to default on their loans.</p>
                  </li>
                  <li>
                    <h3>1.5 Trillion</h3>
                    <p>Outstanding student debt and growing.</p>
                  </li>
                </ul>

                <p className="punchLine">
                  There's a better way to finance education.
                </p>
              </aside>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default LandingPage;
