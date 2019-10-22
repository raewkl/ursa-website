import React, { Component } from "react";
import LazyAnimation1 from "./Animations/SectionTwoUpper";
import LazyAnimation5 from "./Animations/SectionTwoLower";
import LazyAnimation8 from "./Animations/LazyAnimation8";
import FormAnimation from "./Animations/FormAnimation";
import NumbersAnimation from "./Animations/NumbersAnimation";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;
// let scrollPos = 0;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   sectionOne: false,
    //   sectionTwo: false,
    //   sectionThree: false,
    //   contact: false
    // };
  }

  componentDidMount() {
    // check if in contact for initial circle position
    // this.setState(
    //   {
    //     sectionOne: true,
    //     sectionTwo: false,
    //     sectionThree: false,
    //     contact: false
    //   },
    //   () => {
    // this.circleAnimations("", this.scrollHeight());
    // window.addEventListener("scroll", this.scrollDirection, false);
    // }
    // );
  }

  // useOnScreen = (options) => {

  //   const

  // }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.scrollDirection, false);
  }

  // scrollDirection = () => {
  //   const circle = document.getElementById("circle");

  //   if (circle) {
  //     let percentage = this.scrollHeight();

  //     if (document.body.getBoundingClientRect().top > scrollPos) {
  //       // scroll up
  //       this.circleAnimations("-", percentage);
  //     } else {
  //       // scroll down
  //       this.circleAnimations("", percentage);
  //     }

  //     // saves the new position for iteration.
  //     scrollPos = document.body.getBoundingClientRect().top;
  //   }
  // };

  // getDocHeight = () => {
  //   let d = document;
  //   return Math.max(
  //     d.body.scrollHeight,
  //     d.documentElement.scrollHeight,
  //     d.body.offsetHeight,
  //     d.documentElement.offsetHeight,
  //     d.body.clientHeight,
  //     d.documentElement.clientHeight
  //   );
  // };

  // scrollHeight = () => {
  //   const winHeight =
  //     window.innerHeight ||
  //     (document.documentElement || document.body).clientHeight;

  //   const docHeight = this.getDocHeight();

  //   const scrollTop =
  //     window.pageYOffset ||
  //     (document.documentElement || document.body.parentNode || document.body)
  //       .scrollTop;

  //   const trackLength = docHeight - winHeight;
  //   const percentScrolled = (scrollTop / trackLength) * 100;

  //   return percentScrolled;
  // };

  // removeClasses = (target, classes) => {
  //   const circle = target;
  //   const animClasses = classes;

  //   animClasses.forEach(i => {
  //     circle.classList.remove(i);
  //   });
  // };

  // circleAnimations = (vector, height) => {
  //   const circle = document.getElementById("circle");

  //   const animationClasses = [
  //     "circle12",
  //     "circle23",
  //     "circle34",
  //     "circle21",
  //     "circle32",
  //     "circle43"
  //   ];

  //   let percentage = height;
  //   let animationVector = vector;

  //   if (animationVector === "-") {
  //     if (percentage < 15 && !this.state.sectionOne) {
  //       this.setState(
  //         {
  //           sectionOne: true,
  //           sectionTwo: false,
  //           sectionThree: false,
  //           contact: false
  //         },
  //         () => {
  //           this.removeClasses(circle, animationClasses);
  //           circle.classList.add("circle21");
  //         }
  //       );
  //     } else if (percentage > 15 && percentage < 48 && !this.state.sectionTwo) {
  //       this.setState(
  //         {
  //           sectionOne: false,
  //           sectionTwo: true,
  //           sectionThree: false,
  //           contact: false
  //         },
  //         () => {
  //           this.removeClasses(circle, animationClasses);
  //           circle.classList.add("circle32");
  //         }
  //       );
  //     } else if (
  //       percentage > 48 &&
  //       percentage < 78 &&
  //       !this.state.sectionThree
  //     ) {
  //       this.setState(
  //         {
  //           sectionOne: false,
  //           sectionTwo: false,
  //           sectionThree: true,
  //           contact: false
  //         },
  //         () => {
  //           this.removeClasses(circle, animationClasses);
  //           circle.classList.add("circle43");
  //         }
  //       );
  //     }
  //   } else {
  //     if (percentage > 15 && percentage < 48 && !this.state.sectionTwo) {
  //       this.setState(
  //         {
  //           sectionOne: false,
  //           sectionTwo: true,
  //           sectionThree: false,
  //           contact: false
  //         },
  //         () => {
  //           this.removeClasses(circle, animationClasses);
  //           circle.classList.add("circle12");
  //         }
  //       );
  //     } else if (
  //       percentage > 48 &&
  //       percentage < 78 &&
  //       !this.state.sectionThree
  //     ) {
  //       this.setState(
  //         {
  //           sectionOne: false,
  //           sectionTwo: false,
  //           sectionThree: true,
  //           contact: false
  //         },
  //         () => {
  //           this.removeClasses(circle, animationClasses);
  //           circle.classList.add("circle23");
  //         }
  //       );
  //     } else if (percentage > 78 && !this.state.contact) {
  //       this.setState(
  //         {
  //           sectionOne: false,
  //           sectionTwo: false,
  //           sectionThree: false,
  //           contact: true
  //         },
  //         () => {
  //           this.removeClasses(circle, animationClasses);
  //           circle.classList.add("circle34");
  //         }
  //       );
  //     }
  //   }
  // };

  LazyAnimation2 = () => {
    const props = useSpring({
      config: config.molasses,
      from: { opacity: 0, left: -100 },
      to: { opacity: 1, left: 0 }
      // delay: 500
    });

    return (
      <animated.h1 style={props}>
        <span>Turnkey ISA Solutions</span> for Schools
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
        <p>
          Improve access, enrollment, and outcomes for students. We do the heavy
          lifting <span>so you can focus on what’s important.</span>
        </p>

        <ScrollLink
          activeClass="active"
          to="sectionTwo"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          <button>
            Learn More<i className="fas fa-arrow-up"></i>
          </button>
        </ScrollLink>
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
        <h2>
          How <span>it works</span>
        </h2>
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
      </animated.div>
    );
  };

  LazyAnimation7 = () => {
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
      <animated.h2 ref={ref} style={props} className="studentBenefits">
        Student <span>benefits</span>
      </animated.h2>
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
        
        <a href="#contact">
          <p>
            Request an ISA program at <span>your school ></span>
          </p>
        </a>
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
      right: inView ? 0 : 50,
      config: config.default
    });

    return (
      <animated.h2 ref={ref} style={props} className="contactUs">
        Contact <span>Us</span>
      </animated.h2>
    );
  };

  render() {
    return (
      <div className="noWrapper">
        <this.LazyAnimation6 />

        <div className="wrapper landingPage">
          <main>
            {/* SECTION ONE */}

            <section
              className="sectionOne navSection scrollChild"
              id="sectionOne"
            >
              <div className="sectionOneLeft">
                <div className="titleBox">
                  <this.LazyAnimation2 />
                  <div className="borderSeven"></div>
                </div>

                <this.LazyAnimation3 />
              </div>

              <div className="imgBox">
                <img
                  src={require("../Assets/Images/student_light.png")}
                  alt=""
                  className="boyImg"
                />
                <div className="shadow shadow1"></div>
              </div>
            </section>

            {/* SECTION TWO */}

            <section className="sectionTwo scrollChild">
              <section
                className="sectionTwoUpper navSection"
                id="sectionTwoUpper"
              >
                <div className="borderOne"></div>
                <this.LazyAnimation4 />
                <LazyAnimation1 />
              </section>

              {/* SECTION TWO BOTTOM */}

              <section className="sectionTwoBottom">
                <div className="borderThree"></div>

                <LazyAnimation5 />
              </section>
            </section>

            {/* SECTION THREE */}

            <section
              className="sectionThree navSection scrollChild"
              id="sectionThree"
            >
              <div className="borderFour"></div>
              <this.LazyAnimation7 />

              <LazyAnimation8 />

              <this.LazyAnimation9 />

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

            <section className="contact navSection scrollChild" id="contact">
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

              <this.LazyAnimation10 />
              {/* <h2>
                Contact <span>Us</span>
              </h2> */}

              <div className="formAsideBox">
                <FormAnimation />
                <NumbersAnimation />
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
export default LandingPage;
