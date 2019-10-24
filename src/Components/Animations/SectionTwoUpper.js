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


          <div className="emoji">&#128091;</div>

          <figcaption>
            <div className="subFig">
              {/* <h3>Partner with Ursa</h3> */}
              <p>ISA payments depend on how much you earn.</p>
            </div>
          </figcaption>
        </figure>
      </li>

      <li>
        <figure className="even">
          {/* <div className="numBox">
            <div className="numUpper">
              <span>02</span>
            </div>

            <div className="numUpper">
              <span>02</span>
            </div>
          </div> */}

          <div className="emoji">&#128079;</div>
          <figcaption>
            <div className="subFig">
              {/* <h3>Students apply via school</h3> */}
              <p>Payments are capped, so your balance will <span>never</span> grow.</p>
              {/* <a href="#contact">
                <p>
                  Request an ISA program at <span>your school ></span>
                </p>
              </a> */}
            </div>
          </figcaption>
        </figure>
      </li>

      <li>
        <figure>
          {/* <div className="numBox">
            <p>3</p>
          </div> */}
          <div className="emoji">&#9200;</div>
          <figcaption>
            <div className="subFig">
              {/* <h3>Ursa pays the student’s tuition to the school</h3> */}
              <p>
                ISAs expire after some time, no matter how much you’ve paid.
              </p>
            </div>
          </figcaption>
        </figure>
      </li>

      <li>
        <figure className="even">
          {/* <div className="numBox">
            <p>4</p>
          </div> */}
          <div className="emoji">&#x1F3C6;</div>
          <figcaption>
            <div className="subFig">
              {/* <h3>Students pay Ursa when they start earning</h3> */}
              <p>
                ISAs don’t depend on credit - instead, we look to your
                potential.
              </p>
              {/* <a href="#sectionThree">
                <p>Learn more ></p>
              </a> */}
            </div>
          </figcaption>
        </figure>
      </li>
    </animated.ul>
  );
};

export default SectionTwoUpper;
