import { Link } from "react-router-dom";
import Logo from "../images/lockup-1.png";
import "./Header.css";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-grid">
          <Link to="/" className="nav-logo-link">
            <img
              src={Logo}
              alt="Nicky Olivier logo"
              width="200"
              className="nav-brand nav-brand-padding"
            />
          </Link>
          <div
            className="hamburger-grid-item"
            onClick={() => {
              setOpen(!open);
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
                className="nav-link"
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
              <div className="nav-link-wrapper"></div>
            </li>
            <li className="nav-item nav-padding">
              <Link
                to="/gallery"
                className="nav-link"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "0.9s" : "0s",
                }}
              >
                Gallery
              </Link>
              <div className="nav-link-wrapper"></div>
            </li>
            <li className="nav-item nav-padding">
              <Link
                to="/process"
                className="nav-link"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "1.1s" : "0s",
                }}
              >
                Process
              </Link>
              <div className="nav-link-wrapper"></div>
            </li>
            <li className="nav-item nav-padding">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "1.3s" : "0s",
                }}
              >
                Contact
              </Link>
              <div className="nav-link-wrapper"></div>
            </li>
            <li className="nav-item nav-padding">
              <Link
                to="/aboutme"
                className="nav-link"
                onClick={() => {
                  setOpen(!open);
                }}
                style={{
                  top: open ? "0" : "120px",
                  transitionDelay: open ? "1.5s" : "0s",
                }}
              >
                About me
              </Link>
              <div className="nav-link-wrapper"></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
