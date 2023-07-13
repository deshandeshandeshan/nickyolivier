import { Link } from "react-router-dom";
import Logo from "../images/lockup-1.png";
import "./Header.css";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBackground, setNavBackground] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > lastScrollY && lastScrollY >= 0) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setLastScrollY(window.scrollY);
  };

  const closeNavOnScroll = () => {
    if (window.scrollY > lastScrollY) {
      setOpen(false);
    }

    setLastScrollY(window.scrollY);
  };

  const removeBackgroundOnScroll = () => {
    if (window.scrollY > 200) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    window.addEventListener("scroll", closeNavOnScroll);
    window.addEventListener("scroll", removeBackgroundOnScroll);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
      window.addEventListener("scroll", closeNavOnScroll);
      window.addEventListener("scroll", removeBackgroundOnScroll);
    };
  });

  return (
    <header className="header">
      <nav
        className={`navBar ${showNav ? "nav--active" : "nav--hidden"} ${
          navBackground ? "navBackground--active" : "navBackground--hidden"
        }`}
      >
        <div className="nav-grid">
          <Link to="/" className="nav-logo-link">
            <img
              src={Logo}
              alt="Nicky Olivier logo"
              width="200"
              className="navBrand navBrandPadding"
            />
          </Link>
          <div
            className="hamburger-grid-item"
            onClick={() => {
              setOpen(!open);
              setNavBackground(true);
            }}
          >
            <div className="hamburger">
              <span className={open ? "bar bar1 spin" : "bar bar1"}></span>
              <span className={open ? "bar bar2 spin" : "bar bar2"}></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: open ? "0" : "-100vh",
            transitionDelay: open ? "0s" : "0.3s",
          }}
        >
          <ul className="nav-menu">
            <li className="nav-item nav-padding">
              <Link
                to="/"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.7s" : "0s",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item nav-padding">
              <Link
                to="/gallery"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.7s" : "0s",
                }}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item nav-padding">
              <Link
                to="/process"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.7s" : "0s",
                }}
              >
                Process
              </Link>
            </li>
            <li className="nav-item nav-padding">
              <Link
                to="/contact"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.7s" : "0s",
                }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item nav-padding">
              <Link
                to="/aboutme"
                className="navLink"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.7s" : "0s",
                }}
              >
                About me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
