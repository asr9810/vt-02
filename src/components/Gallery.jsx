import React from "react";

const images = [
  // "/gallery/gal1.jpg",
  // "/gallery/gal2.jpg",
  // "/gallery/gal3.jpg",
  // "/gallery/gal4.jpg",
  // "/gallery/gal5.jpeg",
  // "/gallery/gal6.JPG",
  "/gallery/gal1-min.jpg",
  "/gallery/gal2-min.jpg",
  "/gallery/gal3-min.jpg",
  "/gallery/gal4-min.jpg",
  "/gallery/gal5-min.jpeg",
  "/gallery/gal6-min.JPG",
]; // Replace with actual image paths

export default function Gallery() {
  return (
    <section className="bg-white pt-20 pb-12 px-4 sm:px-6 md:px-20">
      {/* Heading */}
      <h2
        className="text-[#3D3E98] text-center font-[DM Sans] font-medium text-[32px] sm:text-[40px] md:text-[46px] leading-tight mb-10"
        style={{
          margin: "20px auto",
        }}
      >
        Our Gallery
      </h2>

      {/* Gallery Container */}
      <div
        className="flex flex-wrap justify-center md:justify-between gap-y-8 gap-x-4 mx-auto"
        style={{ maxWidth: "1240px" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full sm:w-[47%] md:w-[48%] h-[250px] sm:h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
