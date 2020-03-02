import React from "react";
import { useInView, InView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import * as Scroll from "react-scroll";
import { HashLink } from "react-router-hash-link";

let ScrollLink = Scroll.Link;

const SectionTwo = () => {
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
    <animated.section ref={ref} style={props} className="sectionTwo wrapper">
      <div className="isaDescription">
        <div className="headlineBox">
          <h2>What’s an ISA?</h2>
        </div>
        <div className="isaDescriptionLower">
          <p>
            An <em>Income Share Agreement (ISA)</em> lets you enroll in post-secondary programs without having to worry about debt. We pay your tuition
            upfront, and you pay us a % of your income for a set period of time once
            you start earning.
          </p>

          <ul className="oneTwoList">
            <li>
              <figure>
                <div className="emojiContainer">
                  <span className="emoji" role="img" aria-label="purse">
                    &#128091;
                  </span>
                </div>

                <figcaption>
                  <div className="subFig">
                    <p>Always affordable</p>

                    <p className="light">
                      ISA payments depend on how much you earn.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure className="even">
                <div className="emojiContainer">
                  <span
                    className="emoji"
                    role="img"
                    aria-label="clapping hands"
                  >
                    &#128079;
                  </span>
                </div>
                <figcaption>
                  <div className="subFig">
                    <p>No interest</p>

                    <p className="light">
                      Unlike loans, contracts are capped and will{" "}
                      <span className="under">never</span> grow.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <div className="emojiContainer">
                  <span className="emoji" role="img" aria-label="alarm clock">
                    &#9200;
                  </span>
                </div>
                <figcaption>
                  <div className="subFig">
                    <p>Finite obligation</p>

                    <p className="light">
                      ISAs expire after some time, no matter how much you’ve
                      paid.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure className="even">
                <div className="emojiContainer">
                  <span className="emoji" role="img" aria-label="trophy">
                    &#x1F3C6;
                  </span>
                </div>
                <figcaption>
                  <div className="subFig">
                    <p>Future-focused</p>

                    <p className="light">
                      Instead of leaning on credit, we look to your potential.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>

          <div className="questionsS2">
            <HashLink
              to="/faq#faq"
              className="logIn"
              onClick={() => props.addHeader}
            >
              Frequently asked questions >
            </HashLink>
          </div>
        </div>
      </div>

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

export default SectionTwo;
