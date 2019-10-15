import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = props => {
  return (
    <footer className="wrapper">
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
            <p className="motto">Forward Together</p>
            <div className="footerLinks">
              <ul>
                {/* <li>Company</li> */}
                {/* <li>Team</li>
                <li>Help & Support</li> */}
                {/* <li>Privacy Policy</li>
                <li>Terms Of Use</li> */}
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Legal</li>
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
        <a href="#">
          <i className="fas fa-arrow-up"></i>
          <p className="return">Return To Top</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
