import { useState } from "react";
import "./ImageSlider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const imageSlides = [
    {
      image: require("../images/wedding-hair-1.jpg"),
      title: "Annies wedding hair",
    },
    {
      image: require("../images/wedding-hair-2.jpg"),
      title: "Annies wedding hair",
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
    <div>
      <div className="image-slide-container">
        <img
          className="image-slide"
          src={`${imageSlides[currentIndex].image}`}
          alt="woman holding flowers looking out into a lake"
        />
      </div>
      <FaArrowAltCircleLeft onClick={goToPrev} />
      <FaArrowAltCircleRight onClick={goToNext} />
    </div>
  );
};

export default ImageSlider;
