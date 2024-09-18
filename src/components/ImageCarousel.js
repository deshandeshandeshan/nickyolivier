import "./ImageCarousel.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import imageSlides from "./CarouselImages";

const ImageCarousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div className="carousel" ref={carousel}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {imageSlides.map((image) => {
          return (
            <motion.div className="item" key={image}>
              <img className="carousel-image" src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ImageCarousel;
