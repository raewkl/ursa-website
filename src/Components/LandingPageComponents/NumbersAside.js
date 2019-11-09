import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

const NumbersAside = () => {
  const [ref, inView] = useInView({
    rootMargin: "-50px 0px",
    triggerOnce: true
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    left: inView ? 0 : 100,
    config: config.default
  });

  return (
    <animated.div ref={ref} style={props} className="asideBox">
        <aside  className="theNumbers">
          <h3>The Numbers</h3>
          <div className="fact1">
            <h4>7 in 10</h4>
            <p>students rely on financial assistance</p>
          </div>
          <div className="fact2">
            <h4>1 in 10</h4>
            <p>students default every year</p>
          </div>
          <div className="fact3">
            <h4>$1.6 Trillion</h4>
          <p>outstanding student debt <span className="lineBreak">in North America</span></p>
          </div>
          <p className="motto">
            There's a better way <span>to pay for education</span>
          </p>
        </aside>
    </animated.div>
  );
};

export default NumbersAside;
