import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;

const Header = props => {
  return (
    <header className="landingNav">
      {/* Make all of this position fixed */}

      <div className="topBar">
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
      </div>

      <div className="sideNav">
        <ul className="sideNavLower">
          <li className="navContainer" name="sectionOneScroll">
            <ScrollLink
              activeClass="active"
              to="sectionOne"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className="dot"></div>
            </ScrollLink>
          </li>
          <li className="navContainer">
            <ScrollLink
              activeClass="active"
              to="sectionTwo"
              spy={true}
              smooth={true}
              offset={-25}
              duration={500}
            >
              <div className="dot"></div>
            </ScrollLink>
          </li>
          <li className="navContainer">
            <ScrollLink
              activeClass="active"
              to="sectionThree"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <div className="dot"></div>
            </ScrollLink>
          </li>
          <li className="navContainer">
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className="dot"></div>
            </ScrollLink>
          </li>
        </ul>
        <div className="circle" id="circle"></div>
      </div>
    </header>
  );
};

export default Header;
