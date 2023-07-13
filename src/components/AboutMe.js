import { Link } from "react-router-dom";
import aboutMeIntroImage from "../images/in-nature.jpg";
import hairStyling from "../images/hair-styling.jpg";

const AboutMe = () => {
  return (
    <main className="about-me">
      <div className="about-me-intro">
        <img
          src={aboutMeIntroImage}
          alt="woman walking through large field"
          className="about-me-intro-image"
          width="500"
        />
        <h2 className="about-me-intro-heading">Hello!</h2>
        <p className="about-me-intro-text">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
      </div>
      <div className="about-me-main">
        <img
          src={hairStyling}
          alt="woman getting her hair styled by hairdresser"
          className="about-me-main-image"
          width="500"
        />
        <p className="about-me-main-text">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
        <Link className="about-me-main-link">
          <button className="about-me-main-button">
            <h3>Contact me</h3>
            <p>Enquire about your special day</p>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default AboutMe;
