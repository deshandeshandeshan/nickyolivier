import "./Gallery.css";
import weddingHairImage1 from "../finalImages/Gallery (1).webp";
import weddingHairImage2 from "../finalImages/Gallery (2).webp";
import weddingHairImage3 from "../finalImages/Gallery (3).webp";
import weddingHairImage4 from "../finalImages/Gallery (4).webp";
import weddingHairImage5 from "../finalImages/Gallery (5).webp";
import weddingHairImage6 from "../finalImages/Gallery (6).webp";
import weddingHairImage7 from "../finalImages/Gallery (7).webp";
import weddingHairImage8 from "../finalImages/Gallery (8).webp";
import weddingHairImage9 from "../finalImages/Gallery (9).webp";
import weddingHairImage10 from "../finalImages/Gallery (10).webp";
import weddingHairImage11 from "../finalImages/Gallery (11).webp";
import weddingHairImage12 from "../finalImages/Gallery (12).webp";
import weddingHairImage13 from "../finalImages/Gallery (13).webp";
import weddingHairImage14 from "../finalImages/Gallery (14).webp";
import weddingHairImage15 from "../finalImages/Gallery (15).webp";
import weddingHairImage16 from "../finalImages/Gallery (16).webp";
import weddingHairImage17 from "../finalImages/Gallery (17).webp";
import weddingHairImage18 from "../finalImages/Gallery (18).webp";
import weddingHairImage19 from "../finalImages/Gallery (19).webp";
import weddingHairImage20 from "../finalImages/Home_Hero1.webp";

import { Reveal } from "./utils/ScrollReveal";

const Gallery = () => {
  const imgData = [
    {
      id: 1,
      imgSrc: weddingHairImage1,
    },
    {
      id: 1,
      imgSrc: weddingHairImage2,
    },
    {
      id: 3,
      imgSrc: weddingHairImage3,
    },
    {
      id: 4,
      imgSrc: weddingHairImage4,
    },
    {
      id: 5,
      imgSrc: weddingHairImage5,
    },
    {
      id: 6,
      imgSrc: weddingHairImage6,
    },
    {
      id: 7,
      imgSrc: weddingHairImage7,
    },
    {
      id: 8,
      imgSrc: weddingHairImage8,
    },
    {
      id: 9,
      imgSrc: weddingHairImage9,
    },
    {
      id: 10,
      imgSrc: weddingHairImage10,
    },
    {
      id: 11,
      imgSrc: weddingHairImage11,
    },
    {
      id: 12,
      imgSrc: weddingHairImage12,
    },
    {
      id: 13,
      imgSrc: weddingHairImage13,
    },
    {
      id: 14,
      imgSrc: weddingHairImage14,
    },
    {
      id: 15,
      imgSrc: weddingHairImage15,
    },
    {
      id: 16,
      imgSrc: weddingHairImage16,
    },
    {
      id: 17,
      imgSrc: weddingHairImage17,
    },
    {
      id: 18,
      imgSrc: weddingHairImage18,
    },
    {
      id: 19,
      imgSrc: weddingHairImage19,
    },
    {
      id: 20,
      imgSrc: weddingHairImage20,
    },
  ];

  return (
    <main className="gallery">
      <div className="gallery-intro-grid">
        <h1 className="gallery-heading gallery-text-align">Gallery</h1>
        <p className="gallery-intro-text gallery-text-align">
          Here is a collection of some of the hairstyles I have created so far!
        </p>
      </div>
      <div className="gallery-image-layout">
        {imgData.map((item, index) => {
          return (
            <Reveal>
              <div className="" key={index}>
                <img className="gallery-images" src={item.imgSrc} alt="" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </main>
  );
};

export default Gallery;
