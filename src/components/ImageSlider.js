import { useState } from "react";
import "./ImageSlider.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const imageSlides = [
    {
      image: require("../images/wedding-hair-1.jpg"),
      title: "Annies wedding hair",
    },
    {
      image: require("../images/wedding-hair-2.jpg"),
      title: "Michelles wedding hair",
    },
    {
      image: require("../images/wedding-hair-3.jpg"),
      title: "Annies wedding hair",
    },
    {
      image: require("../images/wedding-hair-4.jpg"),
      title: "Annies wedding hair",
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
      <div className="image-slide-container">
        <img
          className="image-slide"
          src={`${imageSlides[currentIndex].image}`}
          alt="woman holding flowers looking out into a lake"
        />
      </div>
      <p className="image-slide-number">
        {currentIndex + 1}/{imageSlides.length}
      </p>
      <FaAngleLeft onClick={goToPrev} className="image-slider-left-arrow" />
      <FaAngleRight onClick={goToNext} className="image-slider-right-arrow" />
      <p className="image-slide-title">{`${imageSlides[currentIndex].title}`}</p>
    </div>
  );
};

export default ImageSlider;
