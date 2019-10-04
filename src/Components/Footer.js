import React from "react";

const Footer = props => {
  return (
    <footer className="wrapper">
      <div className="upperFooter">
        <div className="leftFooter">
          <div className="logoBox">
            <img
              src={require("../Assets/Logo/Logo_Akkurat_blue.png")}
              alt={"Ursa Logo"}
            />
          </div>
          <div className="footerText">
            <p className="motto">We align goals for better results.</p>
            <div className="footerLinks">
              <ul>
                <li>Company</li>
                <li>Blog</li>
                <li>Legal</li>
                <li>Team</li>
                <li>Help & Support</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rightFooter">
          <ul>
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottomFooter">
        <p>&copy; 2019 Ursa Inc.</p>
        <a href="#">
          <i class="fas fa-arrow-up"></i>
          <p className="return">Return To Top</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
