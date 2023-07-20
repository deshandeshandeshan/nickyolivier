import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./homeParallaxImage.css";

const homeParallaxImage = () => {
  return (
    <Parallax pages={1} className="parallax">
      <ParallaxLayer offset={0} speed={2.5}>
        <div className="homeParallaxImage animation"></div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default homeParallaxImage;
