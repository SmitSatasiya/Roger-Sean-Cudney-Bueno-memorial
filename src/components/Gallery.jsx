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

    // close lightbox
    const closeLightbox = () => setSelectedIndex(null);

    // prev / next
    const nextImage = (e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
    };
    const prevImage = (e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) =>
            prev === null ? images.length - 1 : prev === 0 ? images.length - 1 : prev - 1
        );
    };

    // keyboard support
    useEffect(() => {
        const onKey = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setSelectedIndex(index)}
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
                    onClick={closeLightbox} // click backdrop to close
                >
                    {/* Container to prevent backdrop click when clicking image/content */}
                    <div
                        className="relative max-w-[90vw] max-h-[90vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeLightbox}
                            aria-label="Close"
                            className="absolute top-4 right-4 z-50 text-white text-3xl p-2 rounded hover:scale-110 transition bg-black/40"
                        >
                            ✖
                        </button>

                        {/* Prev arrow */}
                        <button
                            type="button"
                            onClick={prevImage}
                            className="absolute left-2 hidden sm:flex items-center justify-center z-40 text-white text-4xl p-2 hover:text-blue-300 select-none"
                            aria-label="Previous"
                        >
                            ❮
                        </button>

                        {/* The image */}
                        <img
                            src={images[selectedIndex]}
                            alt={`Large ${selectedIndex + 1}`}
                            className="max-h-[80vh] max-w-[calc(100%-120px)] object-contain rounded-lg shadow-lg transition-transform duration-200"
                            draggable={false}
                        />

                        {/* Next arrow */}
                        <button
                            type="button"
                            onClick={nextImage}
                            className="absolute right-2 hidden sm:flex items-center justify-center z-40 text-white text-4xl p-2 hover:text-blue-300 select-none"
                            aria-label="Next"
                        >
                            ❯
                        </button>

                        {/* small caption + mobile prev/next controls */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white z-40 px-4">
                            <p className="text-md sm:text-lg">{`Image ${selectedIndex + 1} of ${images.length}`}</p>
                            <div className="mt-2 flex gap-4 justify-center sm:hidden">
                                <button
                                    type="button"
                                    onClick={prevImage}
                                    className="px-3 py-2 bg-black/40 rounded text-white"
                                >
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    onClick={nextImage}
                                    className="px-3 py-2 bg-black/40 rounded text-white"
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
