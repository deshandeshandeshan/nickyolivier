import LogoMark from "../images/LogoMark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footerGrid mobileGrid footerGridPadding">
      <div className="footerGridItemA">
        <img
          src={LogoMark}
          alt="Cosmic energy logo"
          width="50"
          className="footerBrand"
        />

        <ul className="footerContact">
          <li className="contactItem textPadding">
            <a href="mailto:hello@nickyolivier.com">hello@nickyolivier.com</a>
          </li>
          {/* <li className="contactItem textPadding">+64 27 000 0000</li> */}
          <li className="contactItem textPadding">
            <Link to="https://www.instagram.com/styledbynicky_o/">
              Instagram
            </Link>
          </li>
          <li className="contactItem textPadding">
            <Link to="https://www.tiktok.com/@nickyolivier1">TikTok</Link>
          </li>
          <li className="contactItem textPadding">
            2023 Nicky Olivier Wedding Hair
          </li>
        </ul>
      </div>

      <ul className="footerLink footerGridItemB">
        <li className="footerItem textPadding">
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="navLink">
            Gallery
          </Link>
        </li>
        <li className="footerItem textPadding">
          <Link to="/process" className="navLink">
            Process
          </Link>
        </li>
        <li className="footerItem textPadding">
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </li>
        <li className="footerItem textPadding">
          <Link to="/aboutme" className="navLink">
            About me
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
