import React from "react";
import { useInView, InView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;

const SectionThree = () => {
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
    <animated.section ref={ref} style={props} className="sectionThree wrapper">
      <div className="sectionThreeLower">
        <div className="headlineBox">
          <h2>How it works</h2>
        </div>

        <ul className="contentBox">
          <li className="stepOne howStep">
            <div className="stepLeft">
              <span>1</span>
            </div>
            <div className="stepRight">
              <h4>
                Check if we fund your program,{" "}
                <span>or ask your school to be a partner institution!</span>
              </h4>
              <p>
                We ask schools to defer some tuition to show accountability to
                student success.
              </p>
              <p className="subText">
                You can check with us <a href="#contact">here.</a>
              </p>
            </div>
          </li>

          <li className="stepTwo howStep">
            <div className="stepLeft">
              <span>2</span>
            </div>
            <div className="stepRight">
              <h4>Complete a quick prescreen, then review the contract.</h4>
              <p>
                If you like our terms and enter into an ISA with Ursa, you don’t
                need to worry about tuition. We pay your school directly and
                send you confirmation.
              </p>
              <p class="subText">
                At this time, Ursa funding is for tuition only.
              </p>
            </div>
          </li>

          <li className="stepThree howStep">
            <div className="stepLeft">
              <span>3</span>
            </div>
            <div className="stepRight">
              <h4>Focus on learning and improving your skill set!</h4>
              <p>
                We know how stressful the transition from school to work can be,
                so whenever you’re ready, we’re here to make it easier.
              </p>
              <p className="subText">Ask us for help with:</p>
              <ul className="helpWith">
                <li className="helpWithOne">Job Search</li>
                <li className="helpWithTwo">Resume & Interview Prep</li>
                <li className="helpWithThree">Negotiations</li>
                <li className="helpWithFour">Contract Review</li>
              </ul>
            </div>
          </li>

          <li className="stepFour howStep">
            <div className="stepLeft">
              <span>4</span>
            </div>
            <div className="stepRight">
              <h4>Pay us when you start earning!</h4>
              <p>
                The ISA will end once your payments hit a max cap or once a
                certain amount of time has passed.
              </p>
              <ul>
                <li>
                  Contracts expire after some time no matter how much you’ve
                  paid.
                </li>
                <li>
                  If you do really well, you keep the upside! We’ll only ever
                  ask for up to the payment cap.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <ScrollLink
        activeClass="active"
        to="sectionFourBg"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="cursorDownContainer">
          <img
            className="cursorNormal"
            src={require("../../Assets/Cursors/cursorDown.svg")}
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

export default SectionThree;
