import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSpring, animated, config } from "react-spring";

// Animations are in css. For animations in js, add class to trigger css animation.

const Header = props => {
  let clicked = false;

  const animArray = [
    // animArray applies to the hambuger menu specifically.
    "open",
    "close",
    "expand",
    "contract",
    "fadeIn",
    "fadeOut"
  ];

  const removeAnimations = (ham, topBar, hamLinks) => {
    for (let i = 0; i < animArray.length; i++) {
      ham.classList.remove(animArray[i]);
      topBar.classList.remove(animArray[i]);
      hamLinks.classList.remove(animArray[i]);
    }
  };

  const hamClick = () => {
    const hamburger = document.getElementById("hamburger");
    const navCircle = document.getElementById("navCircle");
    const hamburgerLinks = document.getElementById("hamburgerLinks");

    if (clicked === false) {
      removeAnimations(hamburger, navCircle, hamburgerLinks);

      clicked = true;
      hamburger.classList.add("open"); // 0.5 speed, check _header.scss
      navCircle.classList.add("expand"); // 0.5
      hamburgerLinks.style.display = "block";
      hamburgerLinks.classList.add("fadeIn"); // 0.75
    } else {
      clicked = false;
      hamburger.classList.add("close"); // 0.5
      hamburgerLinks.classList.add("fadeOut"); // 0.375
      navCircle.classList.add("contract"); // 0.75

      setTimeout(() => {
        hamburgerLinks.style.display = "none";
        removeAnimations(hamburger, navCircle, hamburgerLinks);
      }, 750);
    }
  };

  const contactClick = () => {
    const hamburger = document.getElementById("hamburger");
    const navCircle = document.getElementById("navCircle");
    const hamburgerLinks = document.getElementById("hamburgerLinks");

    removeAnimations(hamburger, navCircle, hamburgerLinks);

    if (clicked === true) {
      clicked = false;
      hamburger.classList.add("close");
      navCircle.classList.add("contract");
      hamburgerLinks.classList.add("fadeOut");

      setTimeout(() => {
        hamburgerLinks.style.display = "none";
        removeAnimations(hamburger, navCircle, hamburgerLinks);
      }, 750);
    }
  };

//TOP NAV BAR 

  // animProps: this relates to the header (topnav) background
  const headerLinks = useSpring({
    config: config.molasses,
    from: { opacity: 0, top: -80 },
    //starts 80 px above original position (off viewport), then slides to 0px (so top of bar is at top of viewport)
    to: { opacity: 1, top: 20 }
  });

  //bar background including border
  const headerBackground = useSpring({
    config: config.molasses,
    from: { top: -116 },
    to: { top: -16 }
  });


  // RENDER + RUN 
  return (
    <header className="landingNav">
      <animated.div
        style={headerBackground}
        className="topBarContainer"
        id="topBarContainer"
      >
        <animated.div style={headerLinks} className="topBar" id="topBar">
          <HashLink
            to="/#sectionOne"
            className="logoBoxContainer"
            onClick={() => {
              contactClick();
            }}
          >
            <div className="logoBox">
              <img
                src={require("../Assets/Logo/Logo_blue.png")}
                alt={"Ursa Logo"}
              />
            </div>
          </HashLink>

          <nav className="mainNav">
            <ul>
              <li>
                <HashLink to="/#contact" className="contactLink">
                  <span className="animatedBorder">Contact</span>
                </HashLink>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="logIn"
                  // onClick={() => props.addHeader()}
                >
                  <span className="movingText1">Log In</span>
                  {/* <span className="movingText2">Log In</span> */}
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="miniNav" id="miniNav">
            <div className="navCircle" id="navCircle"></div>

            <button className="hamburger" id="hamburger" onClick={hamClick}>
              <div className="topBun"></div>
              <div className="bottomBun"></div>
            </button>

            <ul className="hamburgerLinks" id="hamburgerLinks">
              <li>
                <HashLink
                  to="/#contact"
                  className="hamburgerContactLink"
                  onClick={contactClick}
                >
                  Contact
                </HashLink>
              </li>

              <li className="logInContainer">
                <Link
                  to="/dashboard"
                  className="hamburgerLogIn"
                  onClick={contactClick}
                >
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </animated.div>
      </animated.div>
    </header>
  );
};

export default Header;
