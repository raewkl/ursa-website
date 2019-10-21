import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import * as Scroll from "react-scroll";
import { useSpring, animated, config } from "react-spring";

let ScrollLink = Scroll.Link;

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
      topBarContainer.classList.add("contract");
      hamburgerLinks.classList.add("fadeOut");

      setTimeout(() => {
        hamburgerLinks.style.display = "none";

        hamburger.classList.remove("close");
        topBarContainer.classList.remove("contract");
        hamburgerLinks.classList.remove("fadeOut");
      }, 500);
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
    to: { opacity: 1, top: 20 },
    delay: 100
  });

  return (
    <header className="landingNav scrollChild">
      {/* Make all of this position fixed */}

      <div className="topBarContainer" id="topBarContainer">
        <div className="navCircle"></div>
        <animated.div style={animProps} className="topBar">
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
                <a className="contactLink" href="#contact">
                  Contact
                </a>
              </li>

              <li>
                <Link to="/dashboard" className="logIn">
                  Log In
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

      {/* <div className="sideNav">
        <ul className="sideNavLower">
          <ScrollLink
            activeClass="active"
            to="sectionOne"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="navContainer" name="sectionOneScroll">
              <div className="dot"></div>
            </li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="sectionTwo"
            spy={true}
            smooth={true}
            offset={-25}
            duration={500}
          >
            <li className="navContainer">
              <div className="dot"></div>
            </li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="sectionThree"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <li className="navContainer">
              <div className="dot"></div>
            </li>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className="navContainer">
              <div className="dot"></div>
            </li>
          </ScrollLink>
        </ul>
        <div className="circle" id="circle"></div>
      </div> */}
    </header>
  );
};

export default Header;
