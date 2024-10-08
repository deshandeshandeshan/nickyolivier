import LogoMark from "../images/logo-icon-4.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mobile-grid footer-grid-padding">
      <img
        src={LogoMark}
        alt="Nicky Olivier Logo"
        className="footer-logo footer-grid-item-a"
      />

      <div className="footer-details footer-grid-item-b">
        <ul className="footer-contact-details">
          <li className="contact-list-item footer-text-padding">
            <a href="mailto:weddinghair@nickyolivier.com">
              weddinghair@nickyolivier.com
            </a>
          </li>
          <li className="contact-list-item footer-text-padding">
            <Link to="https://www.instagram.com/styledbynicky_o/">
              Instagram
            </Link>
          </li>
          <li className="contact-list-item footer-text-padding">
            <Link to="https://www.tiktok.com/@nickyolivier1">TikTok</Link>
          </li>
          <li className="contact-list-item">2023 Nicky Olivier Wedding Hair</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
