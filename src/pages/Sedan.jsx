import React from "react";
import carImage from "../assets/carlogo.png"; // Replace with your image path
import ReservationBanner from "@/components/ReservationBanner";
import { useNavigate } from "react-router-dom";

const carsData = [
  {
    title: "Amaze",
    description:
      "Hire Maruti Suzuki Swift Dzire on rent. Contact Now & Get discounted deals on booking.",
    image: "/ourFleet/Sedan/amaze/1.jpg",
    url: "/honda-amaze",
  },
  {
    title: "Aura",
    description:
      "Spacious and powerful, the Innova Crysta is perfect for family or group travel. Book now for special rates.",
    image: "/ourFleet/Sedan/aura/1.jpg",
    url: "/hyundai-aura",
  },
  {
    title: "Ciaz",
    description:
      "Travel in unmatched luxury with our premium 4-7 seater Mercedes-Benz. Ideal for business or VIP travel.",
    image: "/ourFleet/Sedan/ciaz/1.jpg",
    url: "/maruti-suzuki-ciaz",
  },
  {
    title: "Dzire",
    description:
      "Hire Force Urbania for comfortable, safe, and affordable group transportation. Perfect for long routes.",
    image: "/ourFleet/Sedan/dzire/1.jpg",
    url: "/swift-dzire",
  },
  {
    title: "Honda City",
    description:
      "Go green with the Tata Nexon EV. Eco-friendly, modern, and cost-effective for city rides.",
    image: "/ourFleet/Sedan/hondacity/1.jpg",
    url: "/honda-city",
  },
];


export default function Sedan({ carType }) {
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
            Sedan
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
            Thinking about traveling across India with a comfortable and
            economical style? Vivek Travels is here for you. We offer a fleet of
            economy sedans, and all of our sedans are clean, and
            well-maintained, and we put our sedans to good use on each trip.
            <br />
            Every sedan comes with a transport provider, so you can just relax
            and enjoy your journey without worrying about if you are running
            late or simply relaxing and enjoying your surroundings. All of our
            sedans include comfortable interior seating, effortless travel, and
            reliable service to suit your scheduling needs without any worries
            along the way. View our options for a sedan and enjoy your journey
            with Vivek Travels.
          </p>
        </div>

        {/* Card Container Section */}
        <div className="w-full max-w-[1206px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carsData.map((car, index) => (
            <div
              key={index}
              className="bg-white p-[18px] rounded shadow-md flex flex-col"

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
