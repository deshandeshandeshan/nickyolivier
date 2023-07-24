import "./Gallery.css";
import weddingHairImage1 from "../images/wedding-hair-3.jpg";
import weddingHairImage2 from "../images/wedding-hair-4.jpg";
import weddingHairImage3 from "../images/wedding-hair-5.jpg";
import weddingHairImage4 from "../images/wedding-hair-6.jpg";
import weddingHairImage5 from "../images/wedding-hair-7.jpg";
import weddingHairImage6 from "../images/wedding-hair-8.jpg";
import weddingHairImage7 from "../images/wedding-hair-9.jpg";
import weddingHairImage8 from "../images/wedding-hair-10.jpg";
import weddingHairImage9 from "../images/wedding-hair-11.jpg";

const Gallery = () => {
  return (
    <main className="gallery">
      <div className="gallery-intro-grid">
        <h1 className="gallery-heading gallery-text-align">Gallery</h1>
        <p className="gallery-intro-text gallery-text-align">
          Lorem ipsum dolor sit amet consectetur. Auctor semper hac eu
          elementum. Lacus consectetur porttitor pulvinar ac aliquam risus
          dictum scelerisque. Cras enim consequat ut molestie facilisis risus
          varius volutpat vitae. Convallis fermentum nec metus etiam massa proin
          arcu faucibus. In ac aliquam at sed in aliquet.
        </p>
      </div>
      <div className="gallery-image-layout">
        <div className="gallery-column">
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage1} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage2} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage3} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
        </div>
        <div className="gallery-column">
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage4} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage5} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage6} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
        </div>
        <div className="gallery-column">
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage7} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage8} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
          <div className="gallery-image-wrapper">
            <img src={weddingHairImage9} alt="" className="gallery-image" />
            <div className="gallery-image-overlay" />
            <div className="gallery-overlay-text">
              <h2>Wedding hair</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
