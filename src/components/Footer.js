import LogoMark from "../images/logo-icon-4.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-details">
        <img
          src={LogoMark}
          alt="Cosmic energy logo"
          width="50"
          className="footer-brand"
        />

        <ul className="footer-contact-details">
          <li className="contact-list-item">
            <a href="mailto:hello@nickyolivier.com">hello@nickyolivier.com</a>
          </li>
          <li className="contact-list-item">
            <Link to="https://www.instagram.com/styledbynicky_o/">
              Instagram
            </Link>
          </li>
          <li className="contact-list-item">
            <Link to="https://www.tiktok.com/@nickyolivier1">TikTok</Link>
          </li>
          <li className="contact-list-item">2023 Nicky Olivier Wedding Hair</li>
        </ul>
      </div>

      <ul className="footer-link-list">
        <li className="footer-list-item">
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li className="footer-list-item">
          <Link to="/gallery" className="navLink">
            Gallery
          </Link>
        </li>
        <li className="footer-list-item">
          <Link to="/process" className="navLink">
            Process
          </Link>
        </li>
        <li className="footer-list-item">
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </li>
        <li className="footer-list-item">
          <Link to="/aboutme" className="navLink">
            About me
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
