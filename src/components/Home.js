import { Link } from "react-router-dom";
import introImage from "../images/wedding-hair-2.jpg";
import weddingCouple from "../images/wedding-couple.png";
import aboutMe from "../images/about-me.png";
import galleryImage1 from "../images/wedding-hair-1.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home-intro">
        <div className="home-text-feature">
          <h1 className="text-feature-text text-feature-line-1 home-heading-text">
            Creating beautiful hairstyles
          </h1>
          <h1 className="text-feature-text text-feature-line-2 home-heading-text">
            to be picture perfect
          </h1>
          <h1 className="text-feature-text text-feature-line-3 home-heading-text">
            on your wedding day
          </h1>
        </div>
        <img
          src={introImage}
          alt="woman holding flowers looking out into a lake"
          className="home-intro-feature-image"
          width="500"
        />
        <p className="home-intro-text home-body-text">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
        <Link to="/contact" className="home-intro-contact-button-link">
          <button className="home-intro-contact-button">
            <h3 className="button-heading-text">Contact me</h3>
            <p>Enquire about your special day</p>
          </button>
        </Link>
      </div>
      <img
        src={weddingCouple}
        alt="two newly-weds walking through the forest holding hands"
        className="home-devider-image home-paralax"
      />
      <div className="home-about-me">
        <img
          src={aboutMe}
          alt="potraight of a woman posing amongst flowers"
          className="home-about-me-image"
        />
        <h2 className="home-about-me-heading home-heading-text">Hello!</h2>
        <p className="home-about-me-text home-body-text">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
        <Link to="/aboutme" className="home-about-me-button-link">
          <button className="home-about-me-button">
            <h3 className="button-heading-text">Read more</h3>
            <p>About myself and my experience</p>
          </button>
        </Link>
      </div>
      <div className="home-gallery">
        <img
          src={galleryImage1}
          alt="woman back-side showing off wedding hairstyle"
          className="home-gallery-image"
          width="500"
        />
        <Link to="/gallery" className="home-gallery-button-link">
          <button className="home-gallery-button">
            <h3 className="button-heading-text">View gallery</h3>
            <p>Take a look at some of my work</p>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
