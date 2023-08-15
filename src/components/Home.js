import { Link } from "react-router-dom";
import introImage from "../finalImages/Home_Hero1.webp";
import weddingCouple from "../images/wedding-hair-15.webp";
import aboutMe from "../images/about-me.webp";
import ImageSlider from "./ImageSlider";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home-intro home-grid">
        <h1 className="text-feature-text text-feature-line-1 home-heading-text">
          Creating <i>beautiful</i> hairstyles
        </h1>
        <h1 className="text-feature-text text-feature-line-2 home-heading-text">
          to be picture perfect
        </h1>
        <h1 className="text-feature-text text-feature-line-3 home-heading-text">
          on your <i>wedding</i> day
        </h1>
        <img
          src={introImage}
          alt="woman holding flowers looking out into a lake"
          className="home-intro-feature-image home-section-padding image-border"
          width="100%"
        />
        <p className="home-intro-text home-body-text home-section-padding home-button-padding">
          Kia ora, I'm Nicky and I am a hairstylist based in Upper Hutt,
          Wellington. I offer professional Wedding Hairstyling in Wellington,
          Wairarapa and Kapiti.
        </p>
        <Link to="/contact" className="home-intro-contact-button-link">
          <button className="home-intro-contact-button button">
            <h3 className="button-heading-text">Contact me</h3>
            <p>Enquire about your special day</p>
          </button>
        </Link>
      </div>
      <img
        src={weddingCouple}
        alt="two newly-weds walking through the forest holding hands"
        className="home-devider-image"
      />
      <div className="home-about-me home-grid">
        <img
          src={aboutMe}
          alt="potraight of a woman posing amongst flowers"
          className="home-about-me-image home-section-padding image-border"
          width="100%"
        />
        <h2 className="home-about-me-heading home-heading-text home-text-padding home-text-align">
          Hello & Welcome
        </h2>
        <p className="home-about-me-text home-body-text home-section-padding home-text-align home-button-padding">
          With over 20 years of Hairdressing experience. I have always
          particularly loved creative styling for as long as I can remember.
          This led me to specialize in Wedding and occasion Hairstyling about 6
          years ago. I am passionate and strive for perfection so you can feel
          your absolute best on your special day.
        </p>
        <Link to="/aboutme" className="home-about-me-button-link">
          <button className="home-about-me-button button">
            <h3 className="button-heading-text">Read more</h3>
            <p>About myself and my experience</p>
          </button>
        </Link>
      </div>
      <div className="home-devider"></div>
      <div className="home-gallery home-grid">
        <ImageSlider />
        <p className="home-gallery-text home-body-text home-section-padding home-text-align home-button-padding">
          My specialty is in creative, long-lasting Hairstyling with a unique
          vibe, and flair for Romantic, Boho and Soft glam styles.
        </p>
        <Link to="/gallery" className="home-gallery-button-link">
          <button className="button home-gallery-button">
            <h3 className="button-heading-text">View full gallery</h3>
            <p>Take a look at some of my recent work</p>
          </button>
        </Link>
      </div>
      <div className="home-devider"></div>
    </main>
  );
};

export default Home;
