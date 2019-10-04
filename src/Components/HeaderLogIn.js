import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeaderLogIn = props => {
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
              <HashLink to="/#contact">
                <a className="contactLink" href="#">
                  Contact
                </a>
              </HashLink>
            </li>

            <li>
              <Link to="/login" className="logIn">
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLogIn;
