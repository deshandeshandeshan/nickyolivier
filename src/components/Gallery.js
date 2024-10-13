import "./Gallery.css";
import galleryImages from "./GalleryImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  return (
    <main className="gallery">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="2rem">
          {galleryImages.map((image, i) => (
            <img
              alt={image}
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
};

export default Gallery;
