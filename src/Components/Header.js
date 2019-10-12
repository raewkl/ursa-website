import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = props => {
  return (

    <header className="landingNav">
      {/* Make all of this position fixed */}

      <div className="topBar">
        {/* <HashLink to="/#sectionOne">
              <div className="logoBox">
                <img
                  src={require("../Assets/Logo/Logo_Akkurat_blue.png")}
                  alt={"Ursa Logo"}
                />
              </div>
        </HashLink> */}

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
        <ul>
          <li>
            <div className="dot"></div>
          </li>
          <li>
            <div className="dot"></div>
          </li>
          <li>
            <div className="dot"></div>
          </li>
          <li>
            <div className="dot"></div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
