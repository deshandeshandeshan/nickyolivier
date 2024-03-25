import { Link } from "react-router-dom";
import introImage from "../images/home-hero.webp";
import aboutMe from "../images/about-me.webp";
import ImageSlider from "./ImageSlider";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home-intro home-grid">
        <h1 className="text-feature-text text-feature home-heading-text">
          Creating <i>beautiful</i> hairstyles to be picture perfect on your{" "}
          <i>wedding</i> day
        </h1>
        <img
          src={introImage}
          alt="woman holding flowers looking out into a lake"
          className="home-intro-feature-image home-section-padding image-border"
          width="100%"
        />
        <p className="home-intro-text home-body-text home-section-padding home-button-padding padding-top">
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
      <div className="home-about-me home-grid">
        <img
          src={aboutMe}
          alt="potraight of a woman posing amongst flowers"
          className="home-about-me-image home-section-padding image-border"
          width="100%"
        />
        <h2 className="home-about-me-heading home-text-padding home-text-align home-heading-text padding-top">
          Hello & Welcome
        </h2>
        <p className="home-about-me-text home-body-text home-section-padding home-text-align home-button-padding">
          With over 20 years of Hairdressing experience I have always had a
          passion for creative styling. This led me to specialize in wedding and
          occasion hairstyling about 6 years ago. I strive for perfection so you
          can feel your absolute best on your special day.
        </p>
        <Link to="/aboutme" className="home-about-me-button-link">
          <button className="home-about-me-button button">
            <h3 className="button-heading-text">Read more</h3>
            <p>About myself and my experience</p>
          </button>
        </Link>
      </div>
      <div className="home-gallery home-grid">
        <h1 className="home-gallery-text home-section-padding home-heading-text">
          My specialty is in creative, long-lasting hairstyling with a unique
          vibe, and flair for romantic, boho and soft glam styles.
        </h1>
        <ImageSlider />
        <Link to="/gallery" className="home-gallery-button-link">
          <button className="button home-gallery-button">
            <h3 className="button-heading-text">View full gallery</h3>
            <p>Take a look at some of my recent work</p>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
