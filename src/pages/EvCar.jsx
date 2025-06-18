import React from "react";
import carImage from "../assets/carlogo.png"; // Replace with your image path
import ReservationBanner from "@/components/ReservationBanner";
import { useNavigate } from "react-router-dom";


// const carsData = [
//   {
//     title: "Ioniq5",
//     description: "Hyundai Ioniq 5 — futuristic design and high-range EV for a smart, clean ride.",
//     image: "/ourFleet/EV/ioniq5/1.jpg",
//   },
//   {
//     title: "Mg",
//     description: "MG ZS EV — spacious, electric, and built for sustainable city travel.",
//     image: "/ourFleet/EV/mg/1.jpg",
//   },
//   {
//     title: "Nexon",
//     description: "Tata Nexon EV — the perfect electric SUV for daily commutes and green adventures.",
//     image: "/ourFleet/EV/nexon/1.jpg",
//   },
//   {
//     title: "Tigore",
//     description: "Tata Tigor EV — compact, efficient, and affordable electric driving.",
//     image: "/ourFleet/EV/tigore/1.jpg",
//   },
// ];


const carsData = [
  {
    title: "Ioniq5",
    description: "Hyundai Ioniq 5 — futuristic design and high-range EV for a smart, clean ride.",
    image: "/ourFleet/EV/ioniq5/1.jpg",
    url: "/ioniq-5",
  },
  {
    title: "Mg",
    description: "MG ZS EV — spacious, electric, and built for sustainable city travel.",
    image: "/ourFleet/EV/mg/1.jpg",
    url: "/mg-zs-ev",
  },
  {
    title: "Nexon",
    description: "Tata Nexon EV — the perfect electric SUV for daily commutes and green adventures.",
    image: "/ourFleet/EV/nexon/1.jpg",
    url: "/tata-nexon",
  },
  {
    title: "Tigore",
    description: "Tata Tigor EV — compact, efficient, and affordable electric driving.",
    image: "/ourFleet/EV/tigore/1.jpg",
    url: "/tata-tigor",
  },
];



export default function EvCar({ carType }) {
  
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
            EV Cars
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
            Are you looking for a sustainable, low-cost, comfortable way to
            travel in India? Vivek Travels has a green solution for you. Our
            network of reliable electric sedan's will ensures that you have a
            sustainable means of transport while travelling for business or
            during family reunion vacations.
            <br />
            All EV's are chauffeur-driven so all you need to do is relax and
            enjoy the ride. Check out our EV fleet today and travel green with
            Vivek Travels - your comfort tour operator... and we'll the planet
            too.
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
