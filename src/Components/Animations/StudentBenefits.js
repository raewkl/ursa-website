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
    <animated.div ref={ref} style={props} className="sectionThreeSub">
      <ul className="stuBenefitsList">
        <li>
          <figure>
            {/* <div className="stuImgBoxUpper"> */}
              <div className="stuImgBox">
                <img
                  className="stuImg"
                  src={require("../../Assets/Gifs/rocket2.jpg")}
                  alt=""
                />
                <img
                  className="stuGif"
                  src={require("../../Assets/Gifs/rocket2G.gif")}
                  alt=""
                />
              </div>
            {/* </div> */}

            <figcaption>
              <h3>Pay only when you start working</h3>
              {/* <p>
                With Ursa, you’ll never have to worry about balances or
                interest. We get paid when you get paid!
              </p> */}
            </figcaption>
          </figure>
        </li>
        <li>
          <figure className="evenFigure">
            {/* <div className="stuImgBoxUpper"> */}
              <div className="stuImgBox">
                <img
                  className="stuImg"
                  src={require("../../Assets/Gifs/hooray.jpg")}
                  alt=""
                />
                <img
                  className="stuGif"
                  src={require("../../Assets/Gifs/hoorayG.gif")}
                  alt=""
                />
              </div>
            {/* </div> */}
            <figcaption>
              <h3>Financing that’s always affordable</h3>
              {/* <p>
                Payments will always be a set % of your earnings, and you’ll
                never pay more than the cap we agree on.
              </p> */}
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            {/* <div className="stuImgBoxUpper"> */}
              <div className="stuImgBox">
                <img
                  className="stuImg"
                  src={require("../../Assets/Gifs/youGotThis.jpg")}
                  alt=""
                />
                <img
                  className="stuGif"
                  src={require("../../Assets/Gifs/youGotThisG.gif")}
                  alt=""
                />
              </div>
            {/* </div> */}
            <figcaption>
              <h3>Mentorship and career support</h3>
              {/* <p>
                We know how stressful the jump from school to working can be.
                We’re here to make it easier.
              </p> */}
            </figcaption>
          </figure>
        </li>
      </ul>

      <ScrollLink
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <button className="requestIsa">
          <span>
            Request ISA<span className="lower">s </span> for your program
          </span>
          <i className="fas fa-arrow-up"></i>
        </button>
      </ScrollLink>

      {/* <div className="quoteContainer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus accusamus voluptates sunt consectetur assumenda, repellendus quam atque mollitia ipsa nobis sed. Sit fugit delectus maxime ullam et deserunt consectetur!</p>
      </div> */}
    </animated.div>
  );
};

export default StudentBenefits;
