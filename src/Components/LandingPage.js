import React, { Component } from "react";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // check if in contact for initial circle position
    this.circleAnimationFinal("", this.scrollHeight());

    this.scrollDirection();
  }

  componentWillUnmount() {
    this.scrollDirection();
  }

  getDocHeight = () => {
    let d = document;
    return Math.max(
      d.body.scrollHeight,
      d.documentElement.scrollHeight,
      d.body.offsetHeight,
      d.documentElement.offsetHeight,
      d.body.clientHeight,
      d.documentElement.clientHeight
    );
  };

  scrollHeight = () => {
    const winHeight =
      window.innerHeight ||
      (document.documentElement || document.body).clientHeight;

    const docHeight = this.getDocHeight();

    const scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    const trackLength = docHeight - winHeight;
    const percentScrolled = (scrollTop / trackLength) * 100;

    return percentScrolled;
  };

  removeClasses = (target, classes) => {
    const circle = target;
    const animClasses = classes;

    animClasses.forEach(i => {
      circle.classList.remove(i);
    });
  };


  scrollDirection = () => {
    // Initial state
    let scrollPos = 0;

    // adding scroll event
    window.addEventListener(
      "scroll",
      () => {
        // detects new state and compares it with the new one

        let percentage = this.scrollHeight();

        if (document.body.getBoundingClientRect().top > scrollPos) {
          // scroll up
          this.circleAnimationFinal("-", percentage);
        } else {
          // scroll down
          this.circleAnimationFinal("", percentage);
        }

        // saves the new position for iteration.
        scrollPos = document.body.getBoundingClientRect().top;
      },
      false
    );
  };

  circleAnimationFinal = (vector, height) => {
    const circle = document.getElementById("circle");

    const animationClasses = [
      "circle12",
      "circle23",
      "circle34",
      "circle21",
      "circle32",
      "circle43"
    ];

    let percentage = height;
    let animationVector = vector;

    if (animationVector === "-") {
      if (percentage > 11 && percentage < 15) {
        this.removeClasses(circle, animationClasses);
        circle.classList.add("circle21");
      } else if (percentage > 44 && percentage < 48) {
        this.removeClasses(circle, animationClasses);
        circle.classList.add("circle32");
      } else if (percentage > 74 && percentage < 78) {
        this.removeClasses(circle, animationClasses);
        circle.classList.add("circle43");
      }
    } else {
      if (percentage > 15 && percentage < 19) {
        this.removeClasses(circle, animationClasses);
        circle.classList.add("circle12");
      } else if (percentage > 48 && percentage < 52) {
        this.removeClasses(circle, animationClasses);
        circle.classList.add("circle23");
      } else if (percentage > 78) {
        this.removeClasses(circle, animationClasses);
        circle.classList.add("circle34");
      }
    }
  };

  render() {
    return (
      <div className="wrapper landingPage">
        <main>
          {/* SECTION ONE */}
          <section className="sectionOne navSection" id="sectionOne">
            <div className="sectionOneLeft">
              <div className="titleBox">
                <h1>
                  Turnkey ISA Solutions <span>for Schools</span>
                </h1>
                <div className="borderSix"></div>
              </div>
              <p>
                Improve access, enrollment, and outcomes for students. We do the
                heavy lifting <span>so you can focus on what’s important.</span>
              </p>

              <button>Learn More</button>
            </div>

            <div className="imgBox">
              <img src={require("../Assets/Images/turnkey2.png")} alt="" />
            </div>
          </section>

          {/* SECTION TWO */}

          <section className="sectionTwo">
            <section
              className="sectionTwoUpper navSection"
              id="sectionTwoUpper"
            >
              <div className="borderOne"></div>
              <div className="borderTwo"></div>

              <h2>
                <em>How it works</em>
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
                        {/* <p>Contact Us ></p> */}
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
                          Students fill out a simple application form and
                          eligable candidates are provided an ISA.
                        </p>
                        <a href="">
                          <p>Request an ISA program at your school ></p>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section>

            {/* SECTION TWO BOTTOM */}

            <section className="sectionTwoBottom">
              <div className="borderThree"></div>

              <ul>
                <li>
                  <figure>
                    <div className="numBox">
                      <p>3</p>
                    </div>
                    <figcaption>
                      <div className="subFig">
                        <h3>Tuition is Paid Upfront</h3>
                        <p>
                          Ursa pays tuition for the students upfront, with no
                          risk to the school itself.
                        </p>
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
                        <a href="">
                          <p>Learn more ></p>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section>
          </section>

          {/* SECTION THREE */}

          <section className="sectionThree navSection" id="sectionThree">
            <div className="borderFour"></div>

            <h2>
              <em>Student</em> benefits
            </h2>

            <ul>
              <li>
                <figure>
                  <div className="stuImg">
                    <img
                      src={require("../Assets/Images/rocket.png")}
                      alt={"Ursa Logo"}
                    />
                  </div>
                  <figcaption>
                    <h3>Pay only when you start working</h3>
                    <p>
                      With Ursa, you’ll never have to worry about balances or
                      interest. We get paid when you get paid!
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <div className="stuImg">
                    <img
                      src={require("../Assets/Images/piggybank.png")}
                      alt={"Ursa Logo"}
                    />
                  </div>
                  <figcaption>
                    <h3>Financing that’s always affordable</h3>
                    <p>
                      Payments will always be a set % of your earnings, and
                      you’ll never pay more than the cap we agree on.
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <div className="stuImg">
                    <img
                      src={require("../Assets/Images/tree.png")}
                      alt={"Ursa Logo"}
                    />
                  </div>
                  <figcaption>
                    <h3>Mentorship and career support</h3>
                    <p>
                      We know how stressful the jump from school to working can
                      be. We’re here to make it easier.
                    </p>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <a href="">
              <p>Request an ISA program at your school ></p>
            </a>
          </section>

          {/* CONTACT*/}

          <section className="contact navSection" id="contact">
            <div className="borderFive"></div>
            <div className="borderSix"></div>
            <div className="circleEnd"></div>

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

                    <div className="schoolProgram">
                      <label htmlFor="school" className="visuallyHidden">
                        Enter school name
                      </label>
                      <input
                        type="text"
                        name="school"
                        id="school"
                        placeholder="School / Institution Name"
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
                    </div>

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
                {/* <div className="numberBox">
                  <h2>The Numbers</h2>
                </div> */}

                <ul className="factList">
                  <li>
                    <h3>7 In 10</h3>
                    <p>students require financial assistance</p>
                  </li>
                  <li>
                    <h3>1 In 10</h3>
                    <p>default on their loans</p>
                  </li>
                  <li>
                    <h3>1.5 Trillion</h3>
                    <p>outstanding student debt in North America</p>
                  </li>
                  <li>
                    <p className="motto">
                      There's a better way to finance education.
                    </p>
                  </li>
                </ul>
              </aside>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default LandingPage;
