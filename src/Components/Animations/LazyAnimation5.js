import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

const LazyAnimation5 = () => {
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
    <animated.ul ref={ref} style={props} className="threeFourList">
      <li>
        <figure>
          <div className="numBox">
            <p>3</p>
          </div>
          <figcaption>
            <div className="subFig">
              <h3>Ursa pays the student’s tuition to the school</h3>
              <p>
                We pay tuition on the students’ behalf. A portion is withheld
                until the students start earning so schools are also invested in
                their students’ success.
              </p>
            </div>
          </figcaption>
        </figure>
      </li>

      <li>
        <figure className="even">
          <div className="numBox">
            <p>4</p>
          </div>
          <figcaption>
            <div className="subFig">
              <h3>Students pay Ursa when they start earning</h3>
              <p>
                Students pay Ursa a % of their earnings, until they hit the
                payment cap or the contract term expires.
                {/* Schools receive the portion of tuition deferred as the
                          student pays their ISA. */}
              </p>
              <a href="">
                <p>Learn more ></p>
              </a>
            </div>
          </figcaption>
        </figure>
      </li>
    </animated.ul>
  );
};

export default LazyAnimation5;
