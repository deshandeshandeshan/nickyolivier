import { Link } from "react-router-dom";
import introImage from "../images/home-hero.webp";
import aboutMe from "../images/about-me.webp";
import ImageSlider from "./ImageSlider";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="home-intro home-grid">
        <h1 className="text-feature-text text-feature heading-1">
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
        <Link
          to="/contact"
          className="home-intro-contact-button-link home-button-align"
        >
          <button className="home-intro-contact-button button">
            <h3 className="button-heading-text">Contact me</h3>
            <p className="home-body-text">Enquire about your special day</p>
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
        <div className="home-about-me-content">
          <h2 className="home-about-me-heading home-text-padding home-text-align heading-2 padding-top">
            Hello & Welcome
          </h2>
          <p className="home-about-me-text home-body-text home-section-padding home-text-align home-button-padding">
            With over 20 years of Hairdressing experience I have always had a
            passion for creative styling. This led me to specialize in wedding
            and occasion hairstyling about 6 years ago. I strive for perfection
            so you can feel your absolute best on your special day.
          </p>
        </div>
        <Link
          to="/aboutme"
          className="home-about-me-button-link home-button-align"
        >
          <button className="home-about-me-button button">
            <h3 className="button-heading-text">Read more</h3>
            <p className="home-body-text">About myself and my experience</p>
          </button>
        </Link>
      </div>
      <div className="home-gallery home-grid">
        <h1 className="home-gallery-text home-section-padding heading-1 text-feature-text">
          My specialty is in creative, long-lasting hairstyling with a unique
          vibe, and flair for <i>romantic</i>, <i>boho</i> and{" "}
          <i>soft glam styles</i>.
        </h1>
        <ImageSlider />
        <Link to="/gallery" className="home-gallery-button-link">
          <button className="button home-gallery-button">
            <h3 className="button-heading-text">View full gallery</h3>
            <p className="home-body-text">
              Take a look at some of my recent work
            </p>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
