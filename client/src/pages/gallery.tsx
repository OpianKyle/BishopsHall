import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Sample gallery images - replace with your actual images
const photos = [
  { src: "/assets/image04.jpg", width: 1600, height: 900 },
  { src: "/assets/image04.jpg", width: 1600, height: 1067 },
  { src: "/assets/image04.jpg", width: 1600, height: 1067 },
  { src: "/assets/image04.jpg", width: 1600, height: 900 },
  { src: "/assets/image04.jpg", width: 1600, height: 1067 },
  { src: "/assets/image04.jpg", width: 1600, height: 900 },
  { src: "/assets/image04.jpg", width: 1600, height: 1067 },
  { src: "/assets/image04.jpg", width: 1600, height: 900 },
  { src: "/assets/image04.jpg", width: 1600, height: 1067 },
].map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
}));

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold mb-8 text-center">Our Gallery</h1>
      <div className="max-w-[1200px] mx-auto">
        <PhotoAlbum
          photos={photos}
          layout="masonry"
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            if (containerWidth < 1024) return 2;
            return 3;
          }}
          spacing={16}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
}
