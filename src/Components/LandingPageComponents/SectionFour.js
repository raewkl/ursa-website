import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;

const SectionFour = () => {

  const [ref, inView] = useInView({
    rootMargin: "-50px 0px",
    triggerOnce: true
  });

  // "useInView" - is an event listener, checks when a section is visible
  // rootMargin -50 triggers once 50 pixels are in view.

  const props = useSpring({
    opacity: inView ? 1 : 0,
    // opacity goes from 0 (invisible) to 1 (completely opaque)

    top: inView ? 0 : 100,
    // "top" is a property, describing relative position. Once "ref" object is inView, it triggers an animation that slides it up 100 pixels (goes from 100 pixels to 0 pixels)

    config: config.default
  });

  // spring is an animation library for React. you interact via an API. We've installed and imported useSpring library + some other useful functions at the top of the doc. 
  // Google "useSpring" to learn more (documentation is complex)
  // ternary defined by "boolean statement ? iftrue : iffalse" - 1st variable is if true, 2nd is if false.

  return (
    <animated.section
      className="sectionFourUpper wrapper"
      id="sectionFourUpper"
      ref={ref}
      style={props}
    >
      <section className="sectionFour" id="sectionFour">

        <div className="studentBenefits headlineBox">
          <h2>Program highlights</h2>
        </div>

        <div ref={ref} style={props} className="sectionFourContent">
          
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
                    src={require("../../Assets/Gifs/1_rocketgif.gif")}
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
                    src={require("../../Assets/Gifs/2_hooraygif.gif")}
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
                    src={require("../../Assets/Gifs/3_gotthisgif.gif")}
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
        to="contactBg"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="cursorDownContainer">
          <img
            className="cursorNormal"
            src={require("../../Assets/Cursors/cursorDownBlue.svg")}
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

export default SectionFour;
