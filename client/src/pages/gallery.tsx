import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Sample gallery images with varying sizes and aspect ratios
const photos = [
  { src: "/assets/image04.jpg", width: 1600, height: 900 },  // 16:9
  { src: "/assets/image04.jpg", width: 800, height: 1200 },  // 2:3 portrait
  { src: "/assets/image04.jpg", width: 1600, height: 1067 }, // 3:2
  { src: "/assets/image04.jpg", width: 1200, height: 1200 }, // 1:1 square
  { src: "/assets/image04.jpg", width: 1600, height: 600 },  // panorama
  { src: "/assets/image04.jpg", width: 800, height: 1200 },  // 2:3 portrait
  { src: "/assets/image04.jpg", width: 1600, height: 900 },  // 16:9
  { src: "/assets/image04.jpg", width: 1200, height: 1200 }, // 1:1 square
  { src: "/assets/image04.jpg", width: 1600, height: 1067 }, // 3:2
  { src: "/assets/image04.jpg", width: 800, height: 1200 },  // 2:3 portrait
  { src: "/assets/image04.jpg", width: 1600, height: 600 },  // panorama
  { src: "/assets/image04.jpg", width: 1600, height: 900 },  // 16:9
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold mb-8 text-center">Our Gallery</h1>
      <div className="max-w-[1400px] mx-auto">
        <PhotoAlbum
          photos={photos}
          layout="masonry"
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            if (containerWidth < 1024) return 2;
            return 3;
          }}
          spacing={8}
          padding={0}
          targetRowHeight={300}
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