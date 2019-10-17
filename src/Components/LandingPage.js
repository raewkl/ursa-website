import React, { Component } from "react";
let scrollPos = 0;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionOne: false,
      sectionTwo: false,
      sectionThree: false,
      contact: false
    };
  }

  componentDidMount() {
    // check if in contact for initial circle position
    this.setState(
      {
        sectionOne: true,
        sectionTwo: false,
        sectionThree: false,
        contact: false
      },
      () => {
        this.circleAnimations("", this.scrollHeight());

        window.addEventListener("scroll", this.scrollDirection, false);
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollDirection, false);
  }

  scrollDirection = () => {
    const circle = document.getElementById("circle");

    if (circle) {
      let percentage = this.scrollHeight();

      if (document.body.getBoundingClientRect().top > scrollPos) {
        // scroll up
        this.circleAnimations("-", percentage);
      } else {
        // scroll down
        this.circleAnimations("", percentage);
      }

      // saves the new position for iteration.
      scrollPos = document.body.getBoundingClientRect().top;
    }
  };

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

  circleAnimations = (vector, height) => {
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
      if (percentage < 15 && !this.state.sectionOne) {
        this.setState(
          {
            sectionOne: true,
            sectionTwo: false,
            sectionThree: false,
            contact: false
          },
          () => {
            this.removeClasses(circle, animationClasses);
            circle.classList.add("circle21");
          }
        );
      } else if (percentage > 15 && percentage < 48 && !this.state.sectionTwo) {
        this.setState(
          {
            sectionOne: false,
            sectionTwo: true,
            sectionThree: false,
            contact: false
          },
          () => {
            this.removeClasses(circle, animationClasses);
            circle.classList.add("circle32");
          }
        );
      } else if (
        percentage > 48 &&
        percentage < 78 &&
        !this.state.sectionThree
      ) {
        this.setState(
          {
            sectionOne: false,
            sectionTwo: false,
            sectionThree: true,
            contact: false
          },
          () => {
            this.removeClasses(circle, animationClasses);
            circle.classList.add("circle43");
          }
        );
      }
    } else {
      if (percentage > 15 && percentage < 48 && !this.state.sectionTwo) {
        this.setState(
          {
            sectionOne: false,
            sectionTwo: true,
            sectionThree: false,
            contact: false
          },
          () => {
            this.removeClasses(circle, animationClasses);
            circle.classList.add("circle12");
          }
        );
      } else if (
        percentage > 48 &&
        percentage < 78 &&
        !this.state.sectionThree
      ) {
        this.setState(
          {
            sectionOne: false,
            sectionTwo: false,
            sectionThree: true,
            contact: false
          },
          () => {
            this.removeClasses(circle, animationClasses);
            circle.classList.add("circle23");
          }
        );
      } else if (percentage > 78 && !this.state.contact) {
        this.setState(
          {
            sectionOne: false,
            sectionTwo: false,
            sectionThree: false,
            contact: true
          },
          () => {
            this.removeClasses(circle, animationClasses);
            circle.classList.add("circle34");
          }
        );
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
                  <span>Turnkey ISA Solutions</span> for Schools
                </h1>
                <div className="borderSeven"></div>
              </div>
              <p>
                Improve access, enrollment, and outcomes for students. We do the
                heavy lifting <span>so you can focus on what’s important.</span>
              </p>

              <button>
                Learn More<i className="fas fa-arrow-up"></i>
              </button>
            </div>

            <div className="imgBox">
              <img src={require("../Assets/Images/student_light.png")} alt="" />
              <div className="shadow"></div>
            </div>
          </section>

          {/* SECTION TWO */}

          <section className="sectionTwo">
            <section
              className="sectionTwoUpper navSection"
              id="sectionTwoUpper"
            >
              <div className="borderOne"></div>
              {/* <div className="borderTwo"></div> */}
              {/* <div className="pathImgBox1">
                <img
                  src={require("../Assets/Images/3d_acorn_light2.png")}
                  alt=""
                />
              </div>
              <div className="pathImgBox2">
                <img
                  src={require("../Assets/Images/3d_tree3_light.png")}
                  alt=""
                />
              </div>
              <div className="pathImgBox3">
                <img
                  src={require("../Assets/Images/3d_tree3_dark.png")}
                  alt=""
                />
              </div>
              <div className="pathImgBox4">
                <img
                  src={require("../Assets/Images/3d_tree2_light.png")}
                  alt=""
                />
              </div>
              <div className="pathImgBox5">
                <img
                  src={require("../Assets/Images/3d_acorn_dark2.png")}
                  alt=""
                />
              </div> */}

              <h2>How it works</h2>
              <ul>
                <li>
                  <figure>
                    <div className="numBox">
                      <p>1</p>
                    </div>
                    <figcaption>
                      <div className="subFig">
                        <h3>Partner with ursa</h3>
                        <p>
                          We work with your school to create a tailored ISA
                          program with terms that will support financial health
                          for your students and graduates.
                        </p>
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
                        <h3>Students apply via school</h3>
                        <p>
                          Students fill out a simple application form and
                          eligible candidates are provided an ISA.
                        </p>
                        <a href="">
                          <p>
                            Request an ISA program at <span>your school ></span>
                          </p>
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
                        <h3>Ursa pays the student’s tuition to the school</h3>
                        <p>
                          We pay tuition on the students’ behalf. A portion is
                          withheld until the students start earning so schools
                          are also invested in their students’ success.
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
                        <h3>Students pay Ursa when they start earning</h3>
                        <p>
                          Students pay Ursa a % of their earnings, until they
                          hit the payment cap or the contract term expires.
                          Schools receive the portion of tuition deferred as the
                          student pays their ISA.
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
                      className="rocket"
                      src={require("../Assets/Images/rocket.png")}
                      alt={"Ursa Logo"}
                    />
                    <div className="shadow s1"></div>
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
                    <div className="shadow s2"></div>
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
                      className="stuTree"
                      src={require("../Assets/Images/tree.png")}
                      alt={"Ursa Logo"}
                    />

                    <div className="stuImgAcorn">
                      <img
                        src={require("../Assets/Images/3d_acorn_dark1.png")}
                        alt={"Acorn"}
                      />
                    </div>

                    <div className="shadow s3"></div>
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
              <p>Request an ISA program at <span>your school ></span></p>
            </a>

            {/* <div className="sec3ImgBox1">
              <img
                src={require("../Assets/Images/3d_tree4_light.png")}
                alt={"Ursa Logo"}
              />
            </div>
            <div className="sec3ImgBox2">
              <img
                src={require("../Assets/Images/3d_tree3_dark.png")}
                alt={"Ursa Logo"}
              />
            </div> */}
          </section>

          {/* CONTACT*/}

          <section className="contact navSection" id="contact">
            <div className="borderFive"></div>
            <div className="borderSix"></div>
            <div className="circleEnd"></div>

            {/* <div className="conImgBox1">
              <img
                src={require("../Assets/Images/3d_acorn_light2.png")}
                alt={"Ursa Logo"}
              />
            </div>
            <div className="conImgBox2">
              <img
                src={require("../Assets/Images/3d_tree2_light.png")}
                alt={"Ursa Logo"}
              />
            </div>
            <div className="conImgBox3">
              <img
                src={require("../Assets/Images/3d_tree3_dark.png")}
                alt={"Ursa Logo"}
              />
            </div>
            <div className="conImgBox4">
              <img
                src={require("../Assets/Images/3d_acorn_dark1.png")}
                alt={"Ursa Logo"}
              />
            </div> */}

            <h2>Contact Us</h2>

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
                          <label for="schoolRadio">
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
                          <label for="studentRadio">
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
                          <label for="otherRadio">
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
                      <input
                        type="submit"
                        value="Send"
                        id="submitBox"
                        className="submitBox button"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <aside className="byTheNumbers">
                <ul className="factList">
                  <li>
                    <h3>7 in 10</h3>
                    <p>students require financial assistance</p>
                  </li>
                  <li>
                    <h3>1 in 10</h3>
                    <p>default on their loans</p>
                  </li>
                  <li>
                    <h3>$1.5 Trillion</h3>
                    <p>outstanding student debt in North America</p>
                  </li>
                  <li>
                    <p className="motto">
                      There's a better way <span>to finance education</span>
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
