import { Link } from "react-router-dom";
import aboutMeIntroImage from "../images/in-nature.jpg";
import hairStyling from "../images/hair-styling.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <main className="about-me">
      <div className="about-me-intro about-me-grid">
        <img
          src={aboutMeIntroImage}
          alt="woman walking through large field"
          className="about-me-intro-image about-me-section-padding"
        />
        <h2 className="about-me-intro-heading about-me-text-align about-me-text-padding">
          Hello!
        </h2>
        <p className="about-me-intro-text about-me-text-align">
          I have been a hairdresser for over 20 years now and I come from an
          artistic family and background and have a husband and 4 children who
          are also proving to be very creative. I'm always busy but I manage to
          have a pretty good balance of work and family life. If I'm not working
          you might find me baking or cooking.
        </p>
      </div>

      <div className="about-me-section-divider"></div>

      <div className="about-me-main about-me-main-grid about-me-section-padding">
        <img
          src={hairStyling}
          alt="woman getting her hair styled by hairdresser"
          className="about-me-main-image about-me-section-padding"
        />
        <p className="about-me-main-text about-me-button-padding about-me-text-align">
          If you are wanting to enquire about Wedding Hairstyling, please use
          the contact form provided in the contact page. Please make sure to
          include your wedding date, destination and how many in your bridal
          party. I would love to hear from you.
        </p>
        <Link to="/contact" className="about-me-main-link">
          <button className="about-me-main-button button">
            <h3>Contact me</h3>
            <p>Enquire about your special day</p>
          </button>
        </Link>
      </div>
      <div className="about-me-section-divider"></div>
    </main>
  );
};

export default AboutMe;
