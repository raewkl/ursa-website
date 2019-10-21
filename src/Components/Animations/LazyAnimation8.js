import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

const LazyAnimation8 = () => {
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
    <animated.ul ref={ref} style={props} className="stuBenefitsList">
      <li>
        <figure>
          <div className="stuImg">
            <img
              className="rocket"
              src={require("../../Assets/Images/rocket.png")}
              alt={"Ursa Logo"}
            />
            <div className="shadow s1"></div>
          </div>

          <figcaption>
            <h3>Pay only when you start working</h3>
            <p>
              With Ursa, you’ll never have to worry about balances or interest.
              We get paid when you get paid!
            </p>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <div className="stuImg">
            <img
              src={require("../../Assets/Images/piggybank.png")}
              alt={"Ursa Logo"}
            />
            <div className="shadow s2"></div>
          </div>
          <figcaption>
            <h3>Financing that’s always affordable</h3>
            <p>
              Payments will always be a set % of your earnings, and you’ll never
              pay more than the cap we agree on.
            </p>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <div className="stuImg">
            <img
              className="stuTree"
              src={require("../../Assets/Images/tree.png")}
              alt={"Ursa Logo"}
            />

            <div className="stuImgAcorn">
              <img
                src={require("../../Assets/Images/3d_acorn_dark1.png")}
                alt={"Acorn"}
              />
            </div>

            <div className="shadow s3"></div>
          </div>
          <figcaption>
            <h3>Mentorship and career support</h3>
            <p>
              We know how stressful the jump from school to working can be.
              We’re here to make it easier.
            </p>
          </figcaption>
        </figure>
      </li>
    </animated.ul>
  );
};

export default LazyAnimation8;
