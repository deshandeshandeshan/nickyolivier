import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="home-intro">
        <div className="home-text-feature">
          <h1 className="text-feature-text text-feature-line-1">
            Creating beautiful hairstyles
          </h1>
          <h1 className="text-feature-text text-feature-line-2">
            to be picture perfect
          </h1>
          <h1 className="text-feature-text text-feature-line-3">
            on your wedding day
          </h1>
        </div>
        <img></img>
        <p className="home-intro-text">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
        <Link to="/contact" className="home-intro-contact-button-link">
          <button className="home-intro-contact-button">
            <h3>Contact me</h3>
            <p>Enquire about your special day</p>
          </button>
        </Link>
      </div>
      <img></img>
      <div className="home-about-me">
        <img></img>
        <h2 className="home-about-me-heading">Hello!</h2>
        <p className="home-about-me-text">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
        <Link to="/aboutme" className="home-about-me-button-link">
          <button className="home-about-me-button">
            <h3>Read more</h3>
            <p>About myself and my experience</p>
          </button>
        </Link>
      </div>
      <div className="home-gallery">
        <img></img>
        <Link to="/gallery" className="home-gallery-button-link">
          <button className="home-gallery-button">
            <h3>View gallery</h3>
            <p>Take a look at some of my work</p>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
