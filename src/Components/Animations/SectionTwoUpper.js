import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

const SectionTwoUpper = () => {

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
      <animated.ul ref={ref} style={props} className="oneTwoList">
        <li>
          <figure>
            <div className="numBox">
              <p>1</p>
            </div>
            <figcaption>
              <div className="subFig">
                <h3>Partner with Ursa</h3>
                <p>
                  We work with your school to create a tailored ISA program with
                  terms that will support financial health for your students and
                  graduates.
                </p>
              </div>
            </figcaption>
          </figure>
        </li>

        <li>
          <figure className="even">
            <div className="numBox">
              <p>2</p>
            </div>
            <figcaption>
              <div className="subFig">
                <h3>Students apply via school</h3>
                <p>
                  Students fill out a simple application form and eligible
                  candidates are provided an ISA.
                </p>
                <a href="#contact">
                  <p>
                    Request an ISA program at <span>your school ></span>
                  </p>
                </a>
              </div>
            </figcaption>
          </figure>
        </li>
      </animated.ul>
  );
};

export default SectionTwoUpper;
