import React from "react";
import carImage from "../assets/carlogo.png"; // Replace with your image path
import ReservationBanner from "@/components/ReservationBanner";
import { useNavigate } from "react-router-dom";

const carsData = [
  {
    title: "Bmw",
    description:
      "Experience sophistication with the BMW 7 Series. Perfect for executive travel and special occasions.",
    image: "/ourFleet/Luxury/bmw/1.jpg",
    url: "/bmw-7-series",
  },
  {
    title: "Camry",
    description:
      "Toyota Camry blends comfort and performance. Book now for a refined and smooth ride.",
    image: "/ourFleet/Luxury/Camry/1.jpg",
    url: "/toyota-camry",
  },
  {
    title: "Defendor",
    description:
      "Land Rover Defender — powerful, bold, and made for luxury off-road travel. Book now.",
    image: "/ourFleet/Luxury/Defendor/1.jpg",
    url: "/land-rover-defender",
  },
  {
    title: "Eclass",
    description:
      "Mercedes E-Class offers luxury and performance in every drive. Travel premium.",
    image: "/ourFleet/Luxury/eclass/1.jpg",
    url: "/mercedes-e-class",
  },
  {
    title: "Jfx",
    description:
      "Drive the Jaguar XF — sleek, sporty, and designed for modern luxury seekers.",
    image: "/ourFleet/Luxury/jfx/1.jpg",
    url: "/jaguar-xf",
  },
  {
    title: "Sclass",
    description:
      "Mercedes S-Class is the pinnacle of comfort, tech, and luxury. Travel like royalty.",
    image: "/ourFleet/Luxury/sclass/1.jpg",
    url: "/mercedes-s-class",
  },
  {
    title: "Vellfire",
    description:
      "Toyota Vellfire offers unmatched space and elegance for family or VIP transport.",
    image: "/ourFleet/Luxury/vellfire/1.jpg",
    url: "/toyota-vellfire",
  },
];


export default function LuxuryCars({ carType }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center px-4 py-12">
        {/* Header Section */}
        <div className="w-full max-w-[1206px] mb-12 text-center">
          <h2
            className="text-[#3D3E98]"
            style={{
              fontFamily: "DM Sans",
              fontWeight: 500,
              fontSize: "46px",
              lineHeight: "1.1",
            }}
          >
            {/* Sedans Rent in Delhi NCR */}
            Luxury Cars (4-7 Seater)
          </h2>
          <p
            className="mt-6 text-black text-left mx-auto"
            style={{
              fontFamily: "DM Sans",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "160%",
              // maxWidth: "900px",
            }}
          >
            Seeking a lavish and comfy drive across India? Vivek Travels has a
            luxury fleet of high-end sedans for clients who prefer luxury
            travel. Whether its a business meeting, special event, or weekend
            getaway, our luxury vehicles ensure more comfort and less stress.
            <br />
            <br />
            All rides come chauffeur-operated, allowing you to sit back and
            relax while we navigate the roads. We, and our luxury cars,
            prioritize your comfort, with generous cabin space, comfy seating,
            and class leading amenities.
            <br />
            <br />
            See the luxury fleet here, and experience effortless, sophisticated
            and enjoyable travel with Vivek Travel.
          </p>
        </div>

        {/* Card Container Section */}
        <div className="w-full max-w-[1206px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carsData.map((car, index) => (
            <div
              key={index}
              className="bg-white p-[18px] rounded shadow-md flex flex-col"
              // style={{
              //   width: "100%",
              //   maxWidth: "386px",
              //   height: "493px",
              //   gap: "24px",
              // }}
              style={{
                width: "100%",
                maxWidth: "386px",
                gap: "24px",
                flex: 1,
              }}
            >
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-[279px] object-contain"
                style={{ maxWidth: "350px" }}
              />
              {/* <div className="flex flex-col gap-4" style={{ height: "160px", maxWidth: "350px" }}> */}
              <div
                className="flex flex-col gap-4 justify-between flex-grow mt-4"
                style={{ maxWidth: "350px" }}
              >
                <h3
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    fontSize: "28px",
                    lineHeight: "32px",
                    color: "#000000",
                  }}
                >
                  {car.title}
                </h3>
                {/* <p
                  className="text-black"
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "100%",
                    maxWidth: "293px",
                  }}
                >
                  {car.description}
                </p> */}
                <button
                  className="text-white mt-auto"
                  style={{
                    width: "178px",
                    height: "36px",
                    backgroundColor: "#3D3E98",
                    padding: "8px 24px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "2px",
                  }}
                  onClick={() => navigate(car.url)}
                >
                  GET DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}
