import React, { Component } from "react";
import SectionTwoUpper from "./Animations/SectionTwoUpper";
import StudentBenefits from "./Animations/StudentBenefits";
import FormAnimation from "./Animations/FormAnimation";
import NumbersAnimation from "./Animations/NumbersAnimation";

import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;
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
    this.props.footerBlue();
    // check if in contact for initial circle position
    this.setState(
      {
        sectionOne: true,
        sectionTwo: false,
        sectionThree: false,
        contact: false
      },
      () => {
        // this.circleAnimations("", this.scrollHeight());
        window.addEventListener("scroll", this.scrollDirection, false);
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollDirection, false);
  }

  scrollDirection = () => {
    this.scrollHeight();

    // const circle = document.getElementById("circle");

    // if (circle) {
    //   let percentage = this.scrollHeight();

    //   if (document.body.getBoundingClientRect().top > scrollPos) {
    //     // scroll up
    //     this.circleAnimations("-", percentage);
    //   } else {
    //     // scroll down
    //     this.circleAnimations("", percentage);
    //   }

    //   // saves the new position for iteration.
    //   scrollPos = document.body.getBoundingClientRect().top;
    // }
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

    this.circleTextAnimation(percentScrolled);

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

  circleTextAnimation = scrollPercentage => {
    // select circleTextBox
    const circleTextBox = document.getElementById("circleTextBox");

    // set css transform rotate to percentage
    circleTextBox.style.transform = "rotate(" + scrollPercentage * 3 + "deg)";
  };

  LazyAnimation2 = () => {
    const props = useSpring({
      config: config.molasses,
      from: { opacity: 0, left: -100 },
      to: { opacity: 1, left: 0 }
      // delay: 500
    });

    return (
      <animated.h1 style={props}>
        A better way to pay <span className="forEdu">for education.</span>
      </animated.h1>
    );
  };

  LazyAnimation3 = () => {
    const props = useSpring({
      config: config.molasses,
      from: { opacity: 0, bottom: -100 },
      to: { opacity: 1, bottom: 0 }
      // delay: 500
    });

    return (
      <animated.div style={props} className="landingPageText">
        <div className="landingPageTextSub">
          <div className="arrowBoxS1">
            <img
              src={require("../Assets/Images/arrowTwo.svg")}
              alt=""
              className="arrowImg"
            />
          </div>
          <p>
            Pay only when you start working with{" "}
            <span>Income Share Agreements.</span>
          </p>
        </div>
      </animated.div>
    );
  };

  LazyAnimation4 = () => {
    const [ref, inView] = useInView({
      rootMargin: "-50px 0px",
      triggerOnce: true
    });

    const props = useSpring({
      opacity: inView ? 1 : 0,
      left: inView ? 0 : 100,
      config: config.default
    });

    return (
      <animated.div ref={ref} style={props} className="howItWorks">
        <h2>What’s an ISA?</h2>
      </animated.div>
    );
  };

  LazyAnimation6 = () => {
    const [ref, inView] = useInView({
      rootMargin: "-50% 0px",
      triggerOnce: false
    });

    const props = useSpring({
      opacity: inView ? 1 : 0,
      config: config.molasses
    });

    return (
      <animated.div ref={ref} style={props} className="floatingPoints">
        <div className="circle1">&#x1f511;</div>
        <div className="circle2">&#128273;</div>
        <div className="circle3">&#128273;</div>
        <div className="circle4">&#128273;</div>

        <div className="circle5"></div>
        <div className="circle6"></div>
        <div className="circle7"></div>
        <div className="circle8"></div>

        <div className="circle9"></div>
        {/* <div className="circle10"></div> */}
      </animated.div>
    );
  };

  LazyAnimation9 = () => {
    const [ref, inView] = useInView({
      rootMargin: "-10px 0px",
      triggerOnce: true
    });

    const props = useSpring({
      opacity: inView ? 1 : 0,
      top: inView ? 0 : 50,
      config: config.default
    });

    return (
      <animated.div ref={ref} style={props} className="requestIsa">
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="requestIsa">
            Request ISA<span>s</span> for your program
          </button>
        </ScrollLink>
      </animated.div>
    );
  };

  LazyAnimation10 = () => {
    const [ref, inView] = useInView({
      rootMargin: "-50px 0px",
      triggerOnce: true
    });

    const props = useSpring({
      opacity: inView ? 1 : 0,
      left: inView ? 0 : 50,
      config: config.default
    });

    return (
      <animated.h2 ref={ref} style={props} className="contactUs">
        Contact Us
      </animated.h2>
    );
  };

  // mouseListener = () => {
  //   document.addEventListener("mousemove", this.moveMouse, false);
  // }

  render() {
    return (
      <div className="noWrapper">
        <this.LazyAnimation6 />

        <div className="landingPage">
          <main>
            {/* SECTION ONE */}

            <div className="sectionOneBg">
              <div className="circleTextBox" id="circleTextBox">
                <img
                  src={require("../Assets/Images/circleText2.svg")}
                  alt=""
                  className="circleTextImg"
                />
              </div>

              <section
                className="sectionOne navSection scrollChild wrapper"
                id="sectionOne"
              >
                <div className="sectionOneLeft">
                  <div className="titleBox">
                    <this.LazyAnimation2 />
                    {/* <div className="borderSeven"></div> */}

                    <this.LazyAnimation3 />
                  </div>
                </div>

                {/* <div className="imgBox">
                    <img
                      src={require("../Assets/Images/student_light.png")}
                      alt=""
                      className="boyImg"
                    />
                    <div className="shadow shadow1"></div>
                  </div> */}

                <ScrollLink
                  activeClass="active"
                  to="sectionTwo"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {/* <button>
            Learn More
            <i className="fas fa-arrow-up"></i>
          </button> */}

                  <div className="cursorDownContainer">
                    <img
                      src={require("../Assets/Cursors/cursorDown.svg")}
                      alt=""
                    />
                  </div>
                </ScrollLink>
              </section>

              {/* <div className="diagonalBox">
                <div className="diagonal1"></div>
              </div> */}
            </div>

            {/* SECTION TWO */}

            <div className="sectionTwoBg">
              <section className="sectionTwo scrollChild wrapper">
                <section
                  className="sectionTwoUpper navSection"
                  id="sectionTwoUpper"
                >
                  {/* <this.LazyAnimation4 /> */}

                  <SectionTwoUpper />
                </section>

                <ScrollLink
                  activeClass="active"
                  to="sectionThree"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {/* <button>
              Tell Me More
              <i className="fas fa-arrow-up"></i>
            </button> */}

                  <div className="cursorDownContainer">
                    <img
                      src={require("../Assets/Cursors/cursorDown.svg")}
                      alt=""
                    />
                  </div>
                </ScrollLink>
              </section>

              {/* <div className="diagonalBox">
                <div className="diagonal2"></div>
              </div> */}
            </div>

            {/* SECTION THREE */}

            <div className="sectionThreeBg">
              <StudentBenefits />

              {/* </section> */}
            </div>

            {/* CONTACT*/}

            <div className="contactBg">
              <section
                className="contact navSection scrollChild wrapper"
                id="contact"
              >
                <this.LazyAnimation10 />

                <div className="formAsideBox">
                  <FormAnimation />
                  <NumbersAnimation />
                </div>
              </section>

              <div className="contactBgSub"></div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default LandingPage;
