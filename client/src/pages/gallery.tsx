import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Gallery images from assets with varying sizes for masonry layout
const photos = [
  { 
    src: "/assets/jimmy-woo-F3S-U9Le7u4-unsplash.jpg", 
    width: 1200, 
    height: 800,
    key: "jimmy-1" 
  },
  { 
    src: "/assets/violetta-mezei-o0G1EURG9Es-unsplash.jpg", 
    width: 800, 
    height: 1200,
    key: "violetta-1"
  },
  { 
    src: "/assets/vizag-explore-e09qAo_mziM-unsplash.jpg", 
    width: 1200, 
    height: 675,
    key: "vizag-1"
  },
  { 
    src: "/assets/image04.jpg", 
    width: 800, 
    height: 800,
    key: "image04-1"
  },
  { 
    src: "/assets/jimmy-woo-F3S-U9Le7u4-unsplash.jpg", 
    width: 1200, 
    height: 450,
    key: "jimmy-2"
  },
  { 
    src: "/assets/violetta-mezei-o0G1EURG9Es-unsplash.jpg", 
    width: 800, 
    height: 1200,
    key: "violetta-2"
  }
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold mb-12 text-center text-gray-700">THE VILLA</h1>
      <div className="max-w-[1400px] mx-auto">
        <PhotoAlbum
          photos={photos}
          layout="masonry"
          columns={(containerWidth) => {
            if (containerWidth < 640) return 2;
            if (containerWidth < 1024) return 3;
            return 4;
          }}
          spacing={4}
          padding={0}
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