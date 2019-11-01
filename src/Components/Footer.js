import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = props => {
  return (
    <div className="footerBg" id="footerBg">
      <footer className="wrapper scrollChild">
        <div className="upperFooter">
          <div className="leftFooter">
            <HashLink to="/#sectionOne">
              <div className="logoBox">
                <img
                  src={require("../Assets/Logo/Logo_Akkurat_blue.png")}
                  alt={"Ursa Logo"}
                />
              </div>
            </HashLink>

            <div className="footerText">
              <p className="footMotto">
                Forward <span>Together</span>
              </p>
              <div className="footerLinks">
                <ul>
                  <li>
                    <Link to="/faq" className="logIn">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <HashLink to="/#contact">Contact Us</HashLink>
                  </li>
                  <li>
                    <a href="#sectionOne">Legal</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rightFooter">
            <ul>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottomFooter">
          <p>&copy; 2019 Ursa Inc.</p>
          <a href="#sectionOne">
            <i className="fas fa-arrow-up"></i>
            <p className="return">Return To Top</p>
          </a>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
