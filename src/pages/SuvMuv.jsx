import React from "react";
import carImage from "../assets/carlogo.png"; // Replace with your image path
import ReservationBanner from "@/components/ReservationBanner";
import { useNavigate } from "react-router-dom";

// const carsData = [
//   {
//     title: "Sedans",
//     description:
//       "Hire Maruti Suzuki Swift Dzire on rent. Contact Now & Get discounted deals on booking.",
//     image: carImage,
//   },
//   {
//     title: "SUV/MUVs",
//     description:
//       "Spacious and powerful, the Innova Crysta is perfect for family or group travel. Book now for special rates.",
//     image: carImage,
//   },
//   {
//     title: "Luxury Cars (4-7 Seater)",
//     description:
//       "Travel in unmatched luxury with our premium 4-7 seater Mercedes-Benz. Ideal for business or VIP travel.",
//     image: carImage,
//   },
//   {
//     title: "Van",
//     description:
//       "Hire Force Urbania for comfortable, safe, and affordable group transportation. Perfect for long routes.",
//     image: carImage,
//   },
//   {
//     title: "EV Cars",
//     description:
//       "Go green with the Tata Nexon EV. Eco-friendly, modern, and cost-effective for city rides.",
//     image: carImage,
//   },
//   {
//     title: "Luxury Buses",
//     description:
//       "Book luxury buses for corporate or group travel. Premium comfort and features guaranteed.",
//     image: carImage,
//   },
// ];

const carsData = [
  {
    title: "KIA CARENS",
    description:
      "Book your ride with Carens. Spacious, comfortable, and perfect for your next journey.",
    image: "/ourFleet/SUV-MUV/carens/1.jpg",
    url: "/kia-carens",
  },
  {
    title: "KIA CARNIVAL",
    description:
      "Book your ride with Carnival. Spacious, comfortable, and perfect for your next journey.",
    image: "/ourFleet/SUV-MUV/carnival/1.jpg",
    url: "/kia-carnival",
  },
  {
    title: "INNOVA CRYSTA",
    description:
      "Book your ride with Crysta. Spacious, comfortable, and perfect for your next journey.",
    image: "/ourFleet/SUV-MUV/crysta/1.jpg",
    url: "/innova-crysta",
  },
  {
    title: "MARUTI SUZUKI ERTIGA",
    description:
      "Book your ride with Ertiga. Spacious, comfortable, and perfect for your next journey.",
    image: "/ourFleet/SUV-MUV/ertiga/1.jpg",
    url: "/maruti-suzuki-ertiga",
  },
  {
    title: "TOYOTA FORTUNER",
    description:
      "Book your ride with Fortuner. Spacious, comfortable, and perfect for your next journey.",
    image: "/ourFleet/SUV-MUV/fortuner/1.jpg",
    url: "/toyota-fortuner",
  },
  {
    title: "INNOVA HYCROSS",
    description:
      "Book your ride with Hycross. Spacious, comfortable, and perfect for your next journey.",
    image: "/ourFleet/SUV-MUV/hycross/1.jpg",
    url: "/innova-hycross",
  },
  {
    title: "MARUTI SUZUKI INVICTO",
    description:
      "Book your ride with Invicto. Spacious, comfortable, and perfect for your next journey.",
    image: "/ourFleet/SUV-MUV/invicto/1.jpg",
    url: "/maruti-suzuki-invicto",
  },
  {
    title: "TOYOTA RUMION",
    description:
      "Book your ride with Rumion. Spacious, comfortable, and perfect for your next journey.",
    image: "/ourFleet/SUV-MUV/rumino/1.jpg",
    url: "/toyota-rumion",
  },
];


export default function SuvMuv({ carType }) {
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
            SUV/MUVs
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
            If you want a roomy, comfortable, and affordable ride to travel
            across India, look no further than Vivek Travels. Our rate of
            SUV/MUV vehicles will suffice for a family vacation, weekend getaway
            with friends, business trips or long sessions. 
            <br /><br />
            All of our vehicles
            are driver-driven by courteous and skilled drivers who will make
            sure your trip is safe, smooth and hassle-free. Take a look at our
            fleet today and enjoy every journey in comfort and affordability.
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
