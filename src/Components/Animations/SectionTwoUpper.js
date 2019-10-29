import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;

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
    <animated.div ref={ref} style={props} className="sectionTwoLower">
      <div className="isaDescription">
        <div className="headlineBox">
          <h2>
            What’s <span>an</span> <span>ISA?</span>
          </h2>
        </div>
        <div className="isaDescriptionLower">
          <p>
            An <em>Income Share Agreement</em> lets you train in that field you
            want to work in without worrying about debt. We pay your tuition
            upfront, and you pay us a % of your income for a period of time once
            you start working.
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
                    <p>ISA payments depend on how much you earn.</p>
                    {/* <p>
                      With Ursa, you’ll never have to worry about balances or
                      interest. We get paid when you get paid!
                    </p> */}
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
                    <p>
                      Payments are capped, so your balance will{" "}
                      <span>never</span> grow.
                    </p>
                    {/* <p>
                      Payments will always be a set % of your earnings, and
                      you’ll never pay more than the cap we agree on.
                    </p> */}
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
                    <p>
                      ISAs expire after some time, no matter how much you’ve
                      paid.
                    </p>
                    {/* <p>
                      We know how stressful the jump from school to working can
                      be. We’re here to make it easier.
                    </p> */}
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
                    <p>
                      ISAs don’t depend on credit - instead, we look to your
                      potential.
                    </p>
                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptatum incidunt ab obcaecati ex quaerat aperiam! Voluptate ipsum aliquid sequi!</p> */}
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>

          <ScrollLink
            activeClass="active"
            to="sectionThree"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button>
              Tell Me More 
              <i className="fas fa-arrow-up"></i>
            </button>
          </ScrollLink>
        </div>
      </div>

      {/* <p className="institutions">
        We work with educational institutions in Canada and the US.
      </p> */}
    </animated.div>
  );
};

export default SectionTwoUpper;
