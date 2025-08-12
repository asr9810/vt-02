import React from "react";
import carImage from "../assets/carlogo.png"; // Replace with your image path
import ReservationBanner from "@/components/ReservationBanner";
import { useNavigate } from "react-router-dom";

// const carsData = [
//   {
//     title: "Mini Bus Coach",
//     description: "Spacious coaches ideal for long-distance corporate or group travel. Comfortable and efficient.",
//     image: "/ourFleet/Buses/coach/1.jpg",
//   },
//   {
//     title: "Luxury Coach",
//     description: "Bharat Benz luxury buses offer unmatched comfort, safety, and space for group journeys.",
//     image: "/ourFleet/Buses/mb/1.jpg",
//   },
//   {
//     title: "Scania/Volvo",
//     description: "Volvo luxury coaches for ultra-comfortable highway and outstation travel. Book now.",
//     image: "/ourFleet/Buses/volvo/1.jpg",
//   },
// ];

const carsData = [
  {
    title: "MINI BUS COACH",
    description:
      "Spacious coaches ideal for long-distance corporate or group travel. Comfortable and efficient.",
    image: "/ourFleet/Buses/coach/1.jpg",
    url: "/mini-bus-coach",
  },
  {
    title: "LUXURY COACH",
    description:
      "Bharat Benz luxury buses offer unmatched comfort, safety, and space for group journeys.",
    image: "/ourFleet/Buses/mb/1.jpg",
    url: "/luxury-coach",
  },
  {
    title: "SCANIA/VOLVO",
    description:
      "Volvo luxury coaches for ultra-comfortable highway and outstation travel. Book now.",
    image: "/ourFleet/Buses/volvo/1.jpg",
    url: "/scania-volvo-bus",
  },
];

export default function LuxuryBus({ carType }) {
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
            Luxury Buses
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
            If you're looking for a spacious, relaxing, and dependable method of
            traveling around India, Vivek Travels has the answer for you! Our
            fleet of luxury buses are ideal for traveling in large groups, no
            matter if it's a destination wedding, corporate tour, family trip,
            or pilgrimage.
            <br />
            <br />
            Each bus is mechanically well-maintained and air-conditioned. Our
            professional chauffeur service will make your journey not only
            enjoyable, timely, and smooth; it will also be worry-free. Luxurious
            and comfortable group transportation available through Vivek Travels
            - luxury bus rentals will enhance the convenience of traveling as a
            group and set the standard for comfort, dependability, and space.
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
