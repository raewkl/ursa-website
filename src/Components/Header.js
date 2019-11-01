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
      hamburger.classList.add("open");
      topBarContainer.classList.add("expand");
      hamburgerLinks.style.display = "block";
      hamburgerLinks.classList.add("fadeIn");
    } else {
      clicked = false;
      hamburger.classList.add("close");
      hamburgerLinks.classList.add("fadeOut");
      topBarContainer.classList.add("contract");

      setTimeout(() => {
        hamburgerLinks.style.display = "none";

        hamburger.classList.remove("close");
        topBarContainer.classList.remove("contract");
        hamburgerLinks.classList.remove("fadeOut");
      }, 750);
    }
  };

  const contactClick = () => {
    const hamburger = document.getElementById("hamburger");
    const topBarContainer = document.getElementById("topBarContainer");
    const hamburgerLinks = document.getElementById("hamburgerLinks");

    removeAnimations(hamburger, topBarContainer, hamburgerLinks);

    clicked = false;
    hamburger.classList.add("close");
    topBarContainer.classList.add("contract");
    hamburgerLinks.classList.add("fadeOut");

    setTimeout(() => {
      hamburgerLinks.style.display = "none";

      hamburger.classList.remove("close");
      topBarContainer.classList.remove("contract");
      hamburgerLinks.classList.remove("fadeOut");
    }, 500);
  };

  const animProps = useSpring({
    config: config.molasses,
    from: { opacity: 0, top: -80 },
    to: { opacity: 1, top: 20 }
  });

  return (
    <header className="landingNav">

      <div className="topBarContainer" id="topBarContainer">
        <div className="navCircle"></div>

        <animated.div style={animProps} className="topBar" id="topBar">
          <HashLink to="/#sectionOne">
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
                <Link to="/dashboard" className="logIn">
                  <span className="movingText1">Log In</span>
                  {/* <span className="movingText2">Log In</span> */}
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="miniNav">
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
