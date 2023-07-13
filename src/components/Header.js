import { Link } from "react-router-dom";
import Logo from "../images/lockup-1.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <Link to="/" className="navLink">
          <img
            src={Logo}
            alt="Nicky Olivier logo"
            width="200"
            className="navBrand navBrandPadding"
          />
        </Link>

        <ul className="navMenu navPadding">
          <li className="navItem navPadding">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem navPadding">
            <Link to="/gallery" className="navLink">
              Gallery
            </Link>
          </li>
          <li className="navItem navPadding">
            <Link to="/process" className="navLink">
              Process
            </Link>
          </li>
          <li className="navItem navPadding">
            <Link to="/contact" className="navLink">
              Contact
            </Link>
          </li>
          <li className="navItem navPadding">
            <Link to="/aboutme" className="navLink">
              About me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
