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
          width="100%"
        />
        <h2 className="about-me-intro-heading about-me-text-align about-me-text-padding">
          Hello!
        </h2>
        <p className="about-me-intro-text about-me-text-align">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
      </div>

      <div className="about-me-section-divider"></div>

      <div className="about-me-main about-me-main-grid about-me-section-padding">
        <img
          src={hairStyling}
          alt="woman getting her hair styled by hairdresser"
          className="about-me-main-image about-me-section-padding"
          width="100%"
        />
        <p className="about-me-main-text about-me-section-padding about-me-text-align">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
        <Link className="about-me-main-link">
          <button className="about-me-main-button button">
            <h3>Contact me</h3>
            <p>Enquire about your special day</p>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default AboutMe;
