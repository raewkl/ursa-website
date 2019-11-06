import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSpring, animated, config } from "react-spring";

const Header = props => {
  let clicked = false;

  const animArray = [
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
    const topBarContainer = document.getElementById("topBarContainer");
    const hamburgerLinks = document.getElementById("hamburgerLinks");

    removeAnimations(hamburger, topBarContainer, hamburgerLinks);

    if (clicked === false) {
      clicked = true;
      hamburger.classList.add("open"); // 0.5
      topBarContainer.classList.add("expand"); // 0.5
      hamburgerLinks.style.display = "block";
      hamburgerLinks.classList.add("fadeIn"); // 0.75
    } else {
      clicked = false;
      hamburger.classList.add("close"); // 0.5
      hamburgerLinks.classList.add("fadeOut"); // 0.375
      topBarContainer.classList.add("contract"); // 0.75

      setTimeout(() => {
        hamburgerLinks.style.display = "none";
        removeAnimations(hamburger, topBarContainer, hamburgerLinks);
      }, 750);
    }
  };

  const contactClick = () => {
    const hamburger = document.getElementById("hamburger");
    const topBarContainer = document.getElementById("topBarContainer");
    const hamburgerLinks = document.getElementById("hamburgerLinks");

    removeAnimations(hamburger, topBarContainer, hamburgerLinks);

    if (clicked === true) {
      clicked = false;
      hamburger.classList.add("close");
      topBarContainer.classList.add("contract");
      hamburgerLinks.classList.add("fadeOut");

      setTimeout(() => {
        hamburgerLinks.style.display = "none";
        removeAnimations(hamburger, topBarContainer, hamburgerLinks);
      }, 750);
    }
  };

  const animProps = useSpring({
    config: config.molasses,
    from: { opacity: 0, top: -80 },
    to: { opacity: 1, top: 20 }
  });

  return (
    <header className="landingNav">
      <div className="topBarContainer" id="topBarContainer">
        <animated.div style={animProps} className="topBar" id="topBar">
          <HashLink
            to="/#sectionOne"
            className="logoBoxContainer"
            onClick={() => {
              props.removeHeader();
              contactClick();
            }}
          >
            <div className="logoBox">
              <img
                src={require("../Assets/Logo/Logo_Akkurat_blue.png")}
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
                  onClick={() => props.addHeader()}
                >
                  <span className="movingText1">Log In</span>
                  {/* <span className="movingText2">Log In</span> */}
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="miniNav">
            <div className="navCircle"></div>

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
      </div>
    </header>
  );
};

export default Header;
