import { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const imageSlides = [
    {
      image: require("../images/wedding-hair-1.jpg"),
      title: "Annies wedding hair",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="image-slide-container">
      <img
        className="image-slide"
        src={`${imageSlides[currentIndex].image}`}
        alt="woman holding flowers looking out into a lake"
      />
    </div>
  );
};

export default ImageSlider;
