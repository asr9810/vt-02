
"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function WhatWeOffer() {

const navigate = useNavigate();


  const [hoveredCard, setHoveredCard] = useState(null)
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0)

  const services = [
  {
    title: "Chauffeured Vehicle Rentals",
    description: "Chauffeured sedans and SUVs for every travel requirement.",
    image: "/enova.png",
  },
  {
    title: "Luxury & Corporate Bus Rentals",
    description: "Comfortable buses for group travel, tours and charter events.",
    image: "/bus.jpg",
  },
  {
    title: "Wedding Transportation Solutions",
    description: "A range of elegant options for a seamless and memorable day.",
    image: "/tourister.png",
  },
  {
    title: "VIP & Delegate Travel Services",
    description: "Luxury vehicles for stylish and on-time arrivals.",
    image: "/luxvan.png",
  },
  {
    title: "MICE Transport",
    description: "Reliable transport for groups attending meetings, conferences, and exhibitions.",
    image: "/merc.png",
  },
];


  // Mobile auto-slide functionality
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentMobileSlide((prev) => (prev + 1) % services.length)
  //   }, 3000)

  //   return () => clearInterval(timer)
  // }, [services.length])

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentMobileSlide((prev) => (prev + 1) % services.length)
  }, 6000); // 6 seconds

  return () => clearInterval(timer);
}, [services.length]);


  return (
    <section className="py-8 md:py-16 px-4 md:px-0">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div
          className="mx-auto"
          style={{
            width: "1102px",
            height: "286.83px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 0",
            
          }}
        >
          {/* Header */}
          <div
            style={{
              // width: "278px",
              height: "28px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "20px",
              letterSpacing: "2%",
              textAlign: "center",
              verticalAlign: "middle",
              marginBottom: "100px",
              
            }}
          >
            What We Offer
          </div>

          {/* Services Container */}
          <div
            style={{
              width: "1102px",
              height: "209.67px",
              gap: "13.42px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}

          >
            {services.map((service, index) => (
              <div
              onClick={() => navigate("/our-services")}
                key={index}
                style={{
                  width: "209.67px",
                  height: "209.67px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  style={{
                    width: "209.67px",
                    height: "209.67px",
                    borderRadius: "8.39px",
                    gap: "6.71px",
                    background: "#F6F6F6",
                    overflow: "hidden",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  {/* Car Image */}
                  <div
                    style={{
                      width: "209.67px",
                      height: "118.25px",
                      borderTopLeftRadius: "8.39px",
                      borderTopRightRadius: "8.39px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                        backgroundColor:'white',
                        transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    {hoveredCard === index && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(61, 62, 152, 0.1)",
                          transition: "opacity 0.3s ease",
                        }}
                      />
                    )}
                  </div>

                  {/* Content Section */}
                  <div
                    style={{
                      width: "193.73px",
                      height: "42.90px",
                      gap: "10.9px",
                      marginTop: "24.32px",
                      marginLeft: "8.39px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      fontFamily: "DM Sans, sans-serif"
                    }}
                  >
                    {/* Title */}
                    <div
                      className={` font-dmSans font-bold text-[16px] leading-[16.77px] tracking-[0] text-center align-middle transition-colors ${
                        hoveredCard === index ? "text-[#2A2B7A]" : "text-[#3D3E98]"
                      }`}
                    >
                      {service.title}
                    </div>

                    {/* Description */}
                    <div
                      className={`px-4 h-auto font-dmSans font-medium text-[10.06px] leading-[150%] tracking-[0] text-center align-middle transition-colors ${
                        hoveredCard === index ? "text-[rgba(0,0,0,0.8)]" : "text-[rgba(0,0,0,0.7)]"
                      }`}
                   style={{ fontFamily: "DM Sans, sans-serif" }} >
                      {service.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* Mobile Layout - Auto sliding */}

<div className="block md:hidden w-full overflow-hidden">
  <div className="text-center mb-6">
    <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
  </div>

  <div className="relative w-full overflow-hidden">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{
        transform: `translateX(-${currentMobileSlide * 100}vw)`,
        width: `${services.length * 100}vw`,
      }}
    >
{services.map((service, index) => (
  <div
    key={index}
    className="flex-shrink-0"
    style={{ width: "100vw" }}
  >
    <div className="flex flex-col items-center justify-start mx-auto bg-white">
      {/* Image Section */}
      <div className="w-full h-[160px] flex justify-center items-center overflow-hidden bg-white">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="object-contain h-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full bg-[#F6F6F6] rounded-b-lg text-center px-4 py-4">
        <h3
          className="font-bold text-[#3D3E98] text-[16px] leading-[18px] mb-1 break-words"
          style={{ fontFamily: "DM Sans" }}
        >
          {service.title}
        </h3>
        <p
          className="text-gray-600 text-[11px] leading-[14px] font-medium break-words"
          style={{
            fontFamily: "DM Sans",
            minHeight: "28px", // Ensures even height
          }}
        >
          {service.description}
        </p>
      </div>
    </div>
  </div>
))}

    </div>
  </div>

  {/* Pagination Dots */}
  <div className="flex justify-center mt-4 space-x-2">
    {services.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentMobileSlide(index)}
        className={`w-2 h-2 rounded-full transition-colors ${
          index === currentMobileSlide ? "bg-[#3D3E98]" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>


    </section>
  )
}
