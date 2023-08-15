import { useState } from "react";
import "./ImageSlider.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const imageSlides = [
    {
      image: require("../finalImages/Image_slider2.jpg"),
      title: "Zitas wedding hair",
    },
    {
      image: require("../finalImages/Image_slider1.jpg"),
      title: "Annies wedding hair",
    },
    {
      image: require("../finalImages/Image_slider3.jpg"),
      title: "Hellens wedding hair",
    },
    {
      image: require("../finalImages/Image_slider4.jpg"),
      title: "Louises wedding hair",
    },
    {
      image: require("../finalImages/Image_slider5.jpg"),
      title: "Louises wedding hair",
    },
  ];

  console.log(imageSlides);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imageSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="home-image-slider">
      <div className="image-slider">
        <div className="image-slide-container">
          <img
            className="image-slide image-border"
            src={`${imageSlides[currentIndex].image}`}
            alt={`${imageSlides[currentIndex].title}`}
          />
        </div>
        <p className="image-slide-number">
          {currentIndex + 1}/{imageSlides.length}
        </p>
        <FaAngleLeft onClick={goToPrev} className="image-slider-left-arrow" />
        <FaAngleRight onClick={goToNext} className="image-slider-right-arrow" />
        {/* <p className="image-slide-title">{`${imageSlides[currentIndex].title}`}</p> */}
      </div>
    </div>
  );
};

export default ImageSlider;
