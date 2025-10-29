import React, { useEffect, useState } from "react";
import photo1 from "../assets/f1.jpg";

const images = [
  "",
  "",
  "https://picsum.photos/id/1039/1200/800",
  "",
  "",
  photo1,
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null
        ? images.length - 1
        : prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  useEffect(() => {
    const onKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  return (
    <div className="w-full bg-white py-10 text-center">
      <h2 className="text-2xl font-semibold mb-6">Gallery</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Popup */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container */}
            <div className="relative flex items-center justify-center w-full">
              {/* Prev arrow (desktop only) */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 hidden sm:flex items-center cursor-pointer justify-center z-40 text-white text-4xl p-2 hover:text-blue-300 select-none"
                aria-label="Previous"
              >
                ❮
              </button>

              {/* Image wrapper with close button on image */}
              <div className="relative inline-block">
                <img
                  src={images[selectedIndex]}
                  alt={`Large ${selectedIndex + 1}`}
                  className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg transition-transform duration-200"
                  draggable={false}
                />

                {/* Close button ON image */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close"
                  className="absolute top-3 right-3 z-50 text-white text-2xl md:text-2xl cursor-pointer p-1 md:p-2 rounded-[5px] bg-black/40 hover:bg-black/70 hover:scale-110 transition"
                >
                  ✖
                </button>
              </div>

              {/* Next arrow (desktop only) */}
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 hidden sm:flex items-center cursor-pointer justify-center z-40 text-white text-4xl p-2 hover:text-blue-300 select-none"
                aria-label="Next"
              >
                ❯
              </button>
            </div>

            {/* Caption + mobile controls BELOW image */}
            <div className="mt-4 text-center text-white z-40 px-4 w-full">
              <p className="text-[12px]">{`Image ${
                selectedIndex + 1
              } of ${images.length}`}</p>
              <div className="mt-3 flex gap-4 justify-center sm:hidden">
                <button
                  type="button"
                  onClick={prevImage}
                  className="px-4 py-2 cursor-pointer bg-black/50 rounded text-white"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="px-4 py-2 cursor-pointer bg-black/50 rounded text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
