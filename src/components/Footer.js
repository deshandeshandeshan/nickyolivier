import LogoMark from "../images/logo-icon-4.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mobile-grid footer-grid-padding">
      <img
        src={LogoMark}
        alt="Cosmic energy logo"
        className="footer-brand footer-grid-item-a"
      />

      <div className="footer-details footer-grid-item-b">
        <ul className="footer-contact-details">
          <li className="contact-list-item footer-text-padding">
            <a href="mailto:hello@nickyolivier.com">hello@nickyolivier.com</a>
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

      <ul className="footer-link-list footer-grid-item-c">
        <li className="footer-list-item footer-text-padding">
          <Link to="/" className="footer-nav-links">
            Home
          </Link>
        </li>
        <li className="footer-list-item footer-text-padding">
          <Link to="/gallery" className="footer-nav-links">
            Gallery
          </Link>
        </li>
        <li className="footer-list-item footer-text-padding">
          <Link to="/process" className="footer-nav-links">
            Process
          </Link>
        </li>
        <li className="footer-list-item footer-text-padding">
          <Link to="/contact" className="footer-nav-links">
            Contact
          </Link>
        </li>
        <li className="footer-list-item footer-text-padding">
          <Link to="/aboutme" className="footer-nav-links">
            About me
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
