import React from "react";
import carImage from "../assets/carlogo.png"; // Replace with your image path
import ReservationBanner from "@/components/ReservationBanner";
import { useNavigate } from "react-router-dom";

// const carsData = [
//   {
//     title: "Luxury Maharaja Tempo Traveller",
//     description:
//       "Spacious and reliable Tempo Travellers for group journeys and outstation tours.",
//     image: "/ourFleet/TT/TT/1.jpg",
//   },
//   {
//     title: "Urbania",
//     description:
//       "Hire Force Urbania — modern van comfort with premium seating and AC. Ideal for long routes.",
//     image: "/ourFleet/TT/Urbania/1.jpg",
//   },
// ];

const carsData = [
  {
    title: "Luxury Maharaja Tempo Traveller",
    description:
      "Spacious and reliable Tempo Travellers for group journeys and outstation tours.",
    url: "/luxury-maharaja-tempo-traveller",
  image: "/ourFleet/TT/TT/1.jpg",
  },
  {
    title: "Tempo Travellers 2x1",
    description:
      "Comfortable 2x1 Tempo Travellers for small groups and local travels.",
    url: "/tempo-travellers-2x1",
    image: "/ourFleet/TT/TT/1.jpg",
  },
  {
    title: "Urbania - Modified",
    description:
      "Force Urbania offers a modern travel experience with ample space and style.",
    url: "/urbania-modified",
    // images: "/ourFleet/TT/Urbania/1.jpg",
    image: "/ourFleet/TT/Urbania/1.jpg",
  },
  {
    title: "Urbania 2x1",
    description:
      "Urbania 2x1 layout provides optimized space for comfortable longer journeys.",
    url: "/urbania-2x1",
    image: "/ourFleet/TT/Urbania/1.jpg",
  },
];

export default function Van({ carType }) {
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
            Van
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
            For comfortable, affordable, and convenient travel all over India,
            look no further than Vivek Travels. Our fleet of vehicles and Tempo
            Travellers are well-maintained for family trips, group outings or
            outstation trips. No matter how small or large your group, we have
            the right vehicle, ensuring all will travel effectively, comfortably
            and hassle-free.
            <br />
            <br />
            Every vehicle is chauffeur driven, so you can always sit back and
            enjoy the ride as we take care of the road for you. Take a look at
            our Tempo Travellers and Vans, and embrace group travel with Vivek
            Travels!
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
