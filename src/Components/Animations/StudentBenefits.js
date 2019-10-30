import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;

const StudentBenefits = () => {
  const [ref, inView] = useInView({
    rootMargin: "-50px 0px",
    triggerOnce: true
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    top: inView ? 0 : 100,
    config: config.default
  });

  return (
    <animated.section
      className="sectionThreeUpper navSection scrollChild wrapper"
      id="sectionThree"
      ref={ref}
      style={props}
    >
      <section className="sectionThree">
        <div className="studentBenefits">
          <h2>
            Student <span>Benefits</span>
          </h2>
        </div>
        <div ref={ref} style={props} className="sectionThreeContent">
          <ul className="stuBenefitsList">
            <li>
              <figure>
                <div className="stuImgBox">
                  <img
                    className="stuImg"
                    src={require("../../Assets/Gifs/rocket2.jpg")}
                    alt=""
                  />
                  <img
                    className="stuGif"
                    src={require("../../Assets/Gifs/rocket2G.gif")}
                    alt=""
                  />
                </div>
  
                <figcaption>
                  <h3>Pay only when you start working</h3>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="evenFigure">
                <div className="stuImgBox">
                  <img
                    className="stuImg"
                    src={require("../../Assets/Gifs/hooray.jpg")}
                    alt=""
                  />
                  <img
                    className="stuGif"
                    src={require("../../Assets/Gifs/hoorayG.gif")}
                    alt=""
                  />
                </div>
                {/* </div> */}
                <figcaption>
                  <h3>Financing that’s always affordable</h3>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <div className="stuImgBox">
                  <img
                    className="stuImg"
                    src={require("../../Assets/Gifs/youGotThis.jpg")}
                    alt=""
                  />
                  <img
                    className="stuGif"
                    src={require("../../Assets/Gifs/youGotThisG.gif")}
                    alt=""
                  />
                </div>
                <figcaption>
                  <h3>Mentorship and career support</h3>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>

      <ScrollLink
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {/* <button className="requestIsa">
            <span>
              Request ISA<span className="lower">s </span> for your program
            </span>
            <i className="fas fa-arrow-up"></i>
          </button> */}

        <div className="cursorDownContainer">
          <img src={require("../../Assets/Cursors/cursorDown.svg")} alt="" />
        </div>
      </ScrollLink>

    </animated.section>
  );
};

export default StudentBenefits;
