import React, { Component } from "react";
import SectionTwo from "./LandingPageComponents/SectionTwo";
// import SectionThree from "./LandingPageComponents/SectionThree";
// import SectionFour from "./LandingPageComponents/SectionFour";
import ContactForm from "./LandingPageComponents/ContactForm";
import NumbersAside from "./LandingPageComponents/NumbersAside";

import { useInView, InView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import * as Scroll from "react-scroll";
import Mission from "./LandingPageComponents/Mission";

let ScrollLink = Scroll.Link;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topBar: false
    };
  }

  componentDidMount() {
    this.setState({
      topBar: false
    });
  }

  componentWillUnmount() {
    this.setState({
      topBar: false
    });
  }

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
      from: { opacity: 0, bottom: -30 },
      to: { opacity: 1, bottom: 0 }
    });

    return (
      // <animated.h1 style={props}>
      //   A better way to pay <span className="lineBreak">for education.</span>
      // </animated.h1>
      <animated.h1 style={props}>
        {/* Ditch debt. */}
        Let's make student <span className="lineBreak">outcomes matter.</span>

      </animated.h1>
    );
  };

  MainText = () => {
    const props = useSpring({
      config: config.molasses,
      from: { opacity: 0, bottom: -30 },
      to: { opacity: 1, bottom: 0 }
    });

    return (
      <animated.div style={props} className="landingPageText">
        <div className="landingPageTextSub">
          <p>
            Pay tuition with{" "}
            <span className="bold">Income Share Agreements.</span>
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
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <div className="circle6"></div>
        <div className="circle7"></div>

        <div className="star1"></div>
        <div className="star2"></div>
        <div className="star3"></div>
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
        Get in touch
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
                    className="titleBox"
                    as="div"
                    onChange={(inView, entry) => {
                      const topBar = document.getElementById("topBarContainer");
                      
                      // static top bar for all sections
                      if (inView === true) {
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
                  to="missionBg"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  <div className="cursorDownContainer">
                    <img
                      className="cursorNormal"
                      src={require("../Assets/Cursors/cursorDownBlue.svg")}
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

            {/* MISSION */}

            <div className="sectionTwoBg" id="missionBg">
              <Mission />
            </div>

            {/* SECTION TWO - WHAT'S AN ISA */}

            <div className="sectionTwoBg" id="sectionTwoBg">
              <SectionTwo 
              // addHeader={this.props.addHeader} 
              />
            </div>

            {/* SECTION THREE - HOW IT WORKS */}

            {/*<div className="sectionThreeBg" id="sectionThreeBg">
              <SectionThree />
            </div>*/}

            {/* SECTION FOUR - HIGHLIGHTS */}

            {/*<div className="sectionFourBg" id="sectionFourBg">
              <SectionFour />
            </div>*/}

            {/* CONTACT */}

            <div className="contactBg" id="contactBg">
              <section className="contact wrapper" id="contact">
                <this.ContactHeader />

                <div className="formAsideBox">
                  <ContactForm />
                  <NumbersAside />
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
