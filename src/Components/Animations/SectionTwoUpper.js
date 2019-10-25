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
    <animated.div ref={ref} style={props} className="sectionTwoLower">
      <div className="isaDescription">
        <p>
          An <em>Income Share Agreement</em> lets you train in that field you
          want to work in without worrying about debt.
        </p>

        <p>
          We pay your tuition upfront, and you pay us a % of your income for a
          period of time once you start working.
        </p>
      </div>

      <ul className="oneTwoList">
        <li>
          <figure>
            <div className="emoji">&#128091;</div>

            <figcaption>
              <div className="subFig">
                <p>ISA payments depend on how much you earn.</p>
              </div>
            </figcaption>
          </figure>
        </li>

        <li>
          <figure className="even">
            <div className="emoji">&#128079;</div>
            <figcaption>
              <div className="subFig">
                <p>
                  Payments are capped, so your balance will <span>never</span>{" "}
                  grow.
                </p>
              </div>
            </figcaption>
          </figure>
        </li>

        <li>
          <figure>
            <div className="emoji">&#9200;</div>
            <figcaption>
              <div className="subFig">
                <p>
                  ISAs expire after some time, no matter how much you’ve paid.
                </p>
              </div>
            </figcaption>
          </figure>
        </li>

        <li>
          <figure className="even">
            <div className="emoji">&#x1F3C6;</div>
            <figcaption>
              <div className="subFig">
                <p>
                  ISAs don’t depend on credit - instead, we look to your
                  potential.
                </p>
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>

      <p className="institutions">
        We work with educational institutions in Canada and the US.
      </p>
    </animated.div>
  );
};

export default SectionTwoUpper;
