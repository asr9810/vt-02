import React, { useEffect, useState } from "react";
import CarOffersSection from "../components/car-offers-section";
import { useLocation } from "react-router-dom";
import banner1 from "../assets/hb1.jpg";
import banner2 from "../assets/hb2.jpg";
import banner3 from "../assets/hb3.jpg";

const CarOffer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [currentHeroImg, setCurrentHeroImg] = useState(0);
  const [fade, setFade] = useState(true);

  const heroImages = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentHeroImg((prev) => (prev + 1) % heroImages.length);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const searchData = {
    location: queryParams.get("location"),
    from: queryParams.get("from"),
    destination: queryParams.get("destination"),
    date: queryParams.get("date"),
    time: queryParams.get("time"),
    name: queryParams.get("name"),
    contact: queryParams.get("contact"),
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`bg-${idx}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentHeroImg === idx && fade ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Main Page Content */}
      <div className="relative z-10 p-6">
        <CarOffersSection isVisible={true} />
      </div>
    </div>
  );
};

export default CarOffer;
