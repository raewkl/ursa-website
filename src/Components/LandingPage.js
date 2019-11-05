import React, { Component } from "react";
import SectionTwo from "./LandingPageComponents/SectionTwo";
import SectionThree from "./LandingPageComponents/SectionThree";
import StudentBenefits from "./LandingPageComponents/StudentBenefits";
import FormAnimation from "./LandingPageComponents/FormAnimation";
import NumbersAnimation from "./LandingPageComponents/NumbersAnimation";

import { useInView, InView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;
// let scrollPos = 0;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topBar: false
    };
  }

  componentDidMount() {
    // check if in contact for initial circle position
    this.setState({}, () => {
      // window.addEventListener("scroll", this.scrollDirection, false);
    });
  }

  componentWillUnmount() {
    this.setState({
      topBar: false
    });

    // window.removeEventListener("scroll", this.scrollDirection, false);
  }

  // scrollDirection = () => {

  //   const topBar = document.getElementById("topBar");

  //   if (topBar) {

  //     if (document.body.getBoundingClientRect().top > scrollPos) {
  //       topBar.classList.remove("moveUp");
  //       topBar.classList.add("moveDown");
  //     } else {
  //       topBar.classList.remove("moveDown");
  //       topBar.classList.add("moveUp");
  //     }

  //     // saves the new position for iteration.
  //     scrollPos = document.body.getBoundingClientRect().top;
  //   }
  // };

  removeClasses = (target, classes) => {
    const circle = target;
    const animClasses = classes;

    animClasses.forEach(i => {
      circle.classList.remove(i);
    });
  };

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
    });

    return (
      <animated.div style={props} className="landingPageText">
        <div className="landingPageTextSub">
          <p>
            Pay only when you start working with{" "}
            <span>Income Share Agreements.</span>
          </p>
        </div>
      </animated.div>
    );
  };

  floatingCircles = () => {
    const [ref, inView] = useInView({
      rootMargin: "-30% 0px",
      triggerOnce: false
    });

    const props = useSpring({
      opacity: inView ? 1 : 0,
      config: config.molasses
    });

    return (
      <animated.div ref={ref} style={props} className="floatingPoints">
        <span role="img" className="circle1" aria-label="key">
          &#x1f511;
        </span>
        <span role="img" className="circle2" aria-label="key">
          &#128273;
        </span>
        <span role="img" className="circle3" aria-label="key">
          &#128273;
        </span>
        <span role="img" className="circle4" aria-label="key">
          &#128273;
        </span>

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
              <section className="sectionOne wrapper" id="sectionOne">
                <div className="sectionOneLeft">
                  <InView
                    as="div"
                    className="titleBox"
                    as="section"
                    onChange={(inView, entry) => {
                      // select the bar
                      const topBar = document.getElementById("topBarContainer");

                      if (inView === false) {
                        this.setState(
                          {
                            topBar: true
                          },
                          () => {
                            topBar.classList.remove("removeHeight");
                            topBar.classList.add("addHeight");
                          }
                        );
                      } else if (inView === true && this.state.topBar) {
                        topBar.classList.remove("addHeight");
                        topBar.classList.add("removeHeight");
                      }
                    }}
                  >
                    <this.MainHeader />

                    <this.MainText />
                  </InView>
                </div>

                <ScrollLink
                  activeClass="active"
                  to="sectionTwoBg"
                  spy={true}
                  smooth={true}
                  offset={-60}
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

            {/* SECTION TWO - WHAT'S AN ISA */}

            <div className="sectionTwoBg" id="sectionTwoBg">
              <section className="sectionTwo wrapper">
                <section
                  className="sectionTwoUpper navSection"
                  id="sectionTwoUpper"
                >
                  <SectionTwo />
                </section>

                <ScrollLink
                  activeClass="active"
                  to="sectionThreeBg"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <div className="cursorDownContainer">
                    <img
                      className="cursorNormal"
                      src={require("../Assets/Cursors/cursorDown.svg")}
                      alt="Arrow pointing down."
                    />
                    <img
                      className="cursorHover"
                      src={require("../Assets/Cursors/cursorDownBlue.svg")}
                      alt="Arrow pointing down."
                    />
                  </div>
                </ScrollLink>
              </section>
            </div>

            {/* SECTION THREE - HOW IT WORKS */}

            <div className="sectionThreeBg" id="sectionThreeBg">
              <SectionThree />
            </div>

            {/* SECTION FOUR - HIGHLIGHTS */}

            <div className="sectionFourBg" id="sectionFourBg">
              <StudentBenefits />
            </div>
            {/* CONTACT*/}

            <div className="contactBg" id="contactBg">
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
