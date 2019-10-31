import React, { Component } from "react";
import SectionTwo from "./LandingPageComponents/SectionTwoUpper";
import StudentBenefits from "./LandingPageComponents/StudentBenefits";
import FormAnimation from "./LandingPageComponents/FormAnimation";
import NumbersAnimation from "./LandingPageComponents/NumbersAnimation";

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
    // this.scrollHeight();

    const topBar = document.getElementById("topBar");

    if (topBar) {
      // let percentage = this.scrollHeight();

      if (document.body.getBoundingClientRect().top > scrollPos) {
        topBar.classList.remove("moveUp");
        topBar.classList.add("moveDown");
      } else {
        topBar.classList.remove("moveDown");
        topBar.classList.add("moveUp");
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

    // this.circleTextAnimation(percentScrolled);

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
      // if (percentage < 15 && !this.state.sectionOne) {
      //   this.setState(
      //     {
      //       sectionOne: true,
      //       sectionTwo: false,
      //       sectionThree: false,
      //       contact: false
      //     },
      //     () => {
      //       this.removeClasses(circle, animationClasses);
      //       circle.classList.add("circle21");
      //     }
      //   );
      // } else if (percentage > 15 && percentage < 48 && !this.state.sectionTwo) {
      //   this.setState(
      //     {
      //       sectionOne: false,
      //       sectionTwo: true,
      //       sectionThree: false,
      //       contact: false
      //     },
      //     () => {
      //       this.removeClasses(circle, animationClasses);
      //       circle.classList.add("circle32");
      //     }
      //   );
      // } else if (
      //   percentage > 48 &&
      //   percentage < 78 &&
      //   !this.state.sectionThree
      // ) {
      //   this.setState(
      //     {
      //       sectionOne: false,
      //       sectionTwo: false,
      //       sectionThree: true,
      //       contact: false
      //     },
      //     () => {
      //       this.removeClasses(circle, animationClasses);
      //       circle.classList.add("circle43");
      //     }
      //   );
      // }
    } else {
      // if (percentage > 15 && percentage < 48 && !this.state.sectionTwo) {
      //   this.setState(
      //     {
      //       sectionOne: false,
      //       sectionTwo: true,
      //       sectionThree: false,
      //       contact: false
      //     },
      //     () => {
      //       this.removeClasses(circle, animationClasses);
      //       circle.classList.add("circle12");
      //     }
      //   );
      // } else if (
      //   percentage > 48 &&
      //   percentage < 78 &&
      //   !this.state.sectionThree
      // ) {
      //   this.setState(
      //     {
      //       sectionOne: false,
      //       sectionTwo: false,
      //       sectionThree: true,
      //       contact: false
      //     },
      //     () => {
      //       this.removeClasses(circle, animationClasses);
      //       circle.classList.add("circle23");
      //     }
      //   );
      // } else if (percentage > 78 && !this.state.contact) {
      //   this.setState(
      //     {
      //       sectionOne: false,
      //       sectionTwo: false,
      //       sectionThree: false,
      //       contact: true
      //     },
      //     () => {
      //       this.removeClasses(circle, animationClasses);
      //       circle.classList.add("circle34");
      //     }
      //   );
      // }
    }
  };

  // circleTextAnimation = scrollPercentage => {
  // select circleTextBox

  // const circleTextBox = document.getElementById("circleTextBox");

  // set css transform rotate to percentage

  // circleTextBox.style.transform = "rotate(" + scrollPercentage * 3 + "deg)";
  // };

  MainHeader = () => {
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

  MainText = () => {
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

  floatingCircles = () => {
    // const [ref, inView] = useInView({
    //   rootMargin: "-50% 0px",
    //   triggerOnce: false
    // });

    // const props = useSpring({
    //   opacity: inView ? 1 : 0,
    //   config: config.molasses
    // });

    return (
      <animated.div className="floatingPoints">
        <div className="circle1">&#x1f511;</div>
        <div className="circle2">&#128273;</div>
        <div className="circle3">&#128273;</div>
        <div className="circle4">&#128273;</div>

        <div className="circle5"></div>
        <div className="circle6"></div>
        <div className="circle7"></div>
        <div className="circle8"></div>
        <div className="circle9"></div>
      </animated.div>
    );
  };

  ContactHeader = () => {
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

  render() {
    return (
      <div className="noWrapper">
        <this.floatingCircles />
        <div className="landingPage">
          <main>
            {/* SECTION ONE */}

            <div className="sectionOneBg">
              <section
                className="sectionOne navSection scrollChild wrapper"
                id="sectionOne"
              >
                <div className="sectionOneLeft">
                  <div className="titleBox">
                    <this.MainHeader />

                    <this.MainText />
                  </div>
                </div>

                <ScrollLink
                  activeClass="active"
                  to="sectionTwo"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <div className="cursorDownContainer">
                    <img
                      className="cursorNormal"
                      src={require("../Assets/Cursors/cursorDown.svg")}
                      alt=""
                    />
                    <img
                      className="cursorHover"
                      src={require("../Assets/Cursors/cursorDownBlue.svg")}
                      alt=""
                    />
                  </div>
                </ScrollLink>
              </section>
            </div>

            {/* SECTION TWO */}

            <div className="sectionTwoBg">
              <section className="sectionTwo scrollChild wrapper">
                <section
                  className="sectionTwoUpper navSection"
                  id="sectionTwoUpper"
                >
                  <SectionTwo />
                </section>

                <ScrollLink
                  activeClass="active"
                  to="sectionThree"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <div className="cursorDownContainer">
                    <img
                      className="cursorNormal"
                      src={require("../Assets/Cursors/cursorDown.svg")}
                      alt=""
                    />
                    <img
                      className="cursorHover"
                      src={require("../Assets/Cursors/cursorDownBlue.svg")}
                      alt=""
                    />
                  </div>
                </ScrollLink>
              </section>
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
                <this.ContactHeader />

                <div className="formAsideBox">
                  <FormAnimation />
                  <NumbersAnimation />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default LandingPage;
