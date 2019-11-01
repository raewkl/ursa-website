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
      className="sectionThreeUpper wrapper"
      ref={ref}
      style={props}
    >
      <section className="sectionThree" id="sectionThree">
        <div className="studentBenefits">
          <h2>
            Student <span>Benefits</span>
          </h2>
        </div>
        <div ref={ref} style={props} className="sectionThreeContent">
          <ul className="stuBenefitsList">
            <li>
              <div className="gifSelector"></div>
              <figure>
                <div className="stuImgBox">
                  <img
                    className="stuImg"
                    src={require("../../Assets/Gifs/rocket2.jpg")}
                    alt="Rocket taking off."
                  />
                  <img
                    className="stuGif"
                    src={require("../../Assets/Gifs/rocket2GCompressed.gif")}
                    alt="Rocket taking off."
                  />
                </div>

                <figcaption>
                  <h3>Pay only when you start working</h3>
                </figcaption>
              </figure>
            </li>
            <li>
              <div className="gifSelector"></div>
              <figure className="evenFigure">
                <div className="stuImgBox">
                  <img
                    className="stuImg"
                    src={require("../../Assets/Gifs/hooray.jpg")}
                    alt="Confetti falling on woman."
                  />
                  <img
                    className="stuGif"
                    src={require("../../Assets/Gifs/hoorayG.gif")}
                    alt="Confetti falling on woman."
                  />
                </div>
                <figcaption>
                  <h3>Financing that’s always affordable</h3>
                </figcaption>
              </figure>
            </li>
            <li>
              <div className="gifSelector"></div>
              <figure>
                <div className="stuImgBox">
                  <img
                    className="stuImg"
                    src={require("../../Assets/Gifs/youGotThis.jpg")}
                    alt="Woman giving thumbs up."
                  />
                  <img
                    className="stuGif"
                    src={require("../../Assets/Gifs/youGotThisCompressed.gif")}
                    alt="Woman giving thumbs up."
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
        offset={-50}
        duration={500}
      >
        <div className="cursorDownContainer">
          <img
            className="cursorNormal"
            src={require("../../Assets/Cursors/cursorDown.svg")}
            alt="Arrow pointing down."
          />
          <img
            className="cursorHover"
            src={require("../../Assets/Cursors/cursorDownBlue.svg")}
            alt="Arrow pointing down."
          />
        </div>
      </ScrollLink>
    </animated.section>
  );
};

export default StudentBenefits;
