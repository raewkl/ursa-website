import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import * as Scroll from "react-scroll";
import { HashLink } from "react-router-hash-link";

let ScrollLink = Scroll.Link;

const Mission = () => {
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
    <animated.section ref={ref} style={props} className="mission wrapper">
      <div className="missionDescription">
          <div className="missionTitle">
              <h1><em>ursa's mission is to close the income gap </em>by increasing access 
              to fair financing and post-secondary education.</h1>
          </div>
          <div className="missionText">
              <p>Ursa has completed an initial pilot with 12 students in Toronto, Canada, to test product viability.</p>
              <p>We are currently looking for <em>non-profits</em>, <em>government</em> and <em>community groups</em> to collaborate with for a larger scale
              pilot program. Please <HashLink className="reachOut" to="#contact">reach out</HashLink> if you are interested!</p>
          </div>
      </div>

      <ScrollLink
        activeClass="active"
        to="sectionTwoBg"
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

export default Mission;
