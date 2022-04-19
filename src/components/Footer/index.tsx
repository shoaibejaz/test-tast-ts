import { FC } from "react";
import "./style.css";

import LogoImage from "../../images/logoImg.svg";
import First from "../../images/first.png";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import linkdIn from "../../images/linkdIn.svg";

const Footer: FC = () => {
  return (
    <div className="footer-content-bar">
      <div className="footer-img-bar">
        <img src={LogoImage} alt="logo" />
        <div className="text-container">
          <div className="footer-copyright-text">©2022 Champria.gg</div>
          <div className="footer-copyright-text">Terms of Service</div>
          <div className="footer-copyright-text">©2022 Champria.gg</div>
        </div>
      </div>

      <div className="footer-img-bar">
        <div className="footer-connect-text">Connect with us</div>
        <div className="footer-img-container">
          <img src={First} alt="logo" />
        </div>
        <div className="footer-img-container">
          <img src={facebook} alt="logo" />
        </div>
        <div className="footer-img-container">
          <img src={twitter} alt="logo" />
        </div>
        <div className="footer-img-container">
          <img src={instagram} alt="logo" />
        </div>
        <div className="footer-img-container">
          <img src={linkdIn} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
