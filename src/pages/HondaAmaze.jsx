import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";

// const hondaAmazeConfig = {
//   vehicleName: `Honda Amaze Rental Service`,
//   introText: `Choose our immaculate Honda Amaze cars that drive as if they were your own...`,
//   rentalIntroText: `The Honda Amaze is just right - stylish enough to grab attention...`,
//   rentalDetails: [
//     {
//       title: "Travel Inclusions",
//       items: [
//         "Charges applicable from garage to garage",
//         "Night charges applicable after 11:00 PM IST",
//         "Fuel, toll, state tax, and driver charges included",
//         "Parking and GST charges extra",
//       ],
//     },
//     {
//       title: "Amenities",
//       items: ["Air conditioned", "GPS Tracker", "Chauffeur", "Ample Luggage Area"],
//     },
//     {
//       title: "Features",
//       items: [
//         "Safety features like seatbelt reminders, high-speed alerts...",
//         "The spacious cabin to make every journey feel effortless.",
//         "The SmartPlay infotainment system to keep entertained.",
//       ],
//     },
//   ],
//   rentalClosingParagraph: `Get your Honda Amaze booked with Vivek Travels so you can travel...`,
//   vehicleSpecs: [
//     ["Air conditioning", "yes"],
//     ["Mileage", "around 18-19 kmp"],
//     ["Seats", "4 passengers+ driver"],
//     ["Engine", "1197 cc"],
//   ],
//   vehicleParagraph: `We ensure that our Honda Amaze is clean, maintained, and always ready...`,
// };

const hondaAmazeConfig = {
  vehicleName: `Honda Amaze Rental Service`,
  introText: `Choose our immaculate Honda Amaze cars that drive as if they were your own; ideal for weekend escapades, pickups from the airport, discovery of the city or other; ideal for life’s little adventures. Your journey is unique whether you are going it alone or with friends and family. We are Delhi-based and thus we know what all travelers want: dependable rides, unrivaled cost, realistic pricing, and the best. We find driving, whether it’s a quick run or a coast-to-coast odyssey seamless and jitter-free here for you.`,
  rentalIntroText: `
The Honda Amaze is just right - stylish enough to grab attention, practical enough for everyday use. With plenty of space and exceptional fuel efficiency, it's perfect for business meetings, family airport runs and weekends away.
At Vivek Travels we provide chauffeurs that really want you to be comfortable. Just get in, sit back, and let us manage your plans. Because good travel should be easy.`,

  rentalDetails: [
    {
      title: "Travel Inclusions",
      items: [
        "Charges applicable from garage to garage",

        "Night charges applicable after 11:00 PM IST",

        "Fuel, toll, state tax, and driver charges included",

        "Parking and GST charges extra",
      ],
    },
    {
      title: "Amenities",
      items: [
        "Air conditioned",
        "GPS Tracker",
        "Chauffeur",
        "Ample Luggage Area",
      ],
    },
    {
      title: "Features",
      items: [
        "Safety features like seatbelt reminders, high-speed alerts, and rear parking sensors.",

        "The spacious cabin to make every journey feel effortless. ",

        "The SmartPlay infotainment system to keep entertained.",
      ],
    },
  ],

  rentalClosingParagraph: `
Get your Honda Amaze booked with Vivek Travels so you can travel without any hassles around Delhi NCR or the rest of India. Our courteous drivers will not only get you there, but they will ensure you enjoy the travelling experience, get you there safely, unwind, and arrive on time.
Each Honda Amaze is equipped with everything you need for a comfortable travelling experience. Whether your are travelling locally or long distance, we want to do our best to make your travel smooth, reliable, and stress-free.
Ready to book? Call us, and we will be happy to assist you in planning your trip.`,

  vehicleSpecs: [
    ["Air conditioning", "yes"],
    ["Mileage", "around 18-19 kmp"],
    ["Seats", "4 passengers+ driver"],
    ["Engine", "1197 cc"],
  ],

  vehicleParagraph: `We ensure that our Honda Amaze is clean, maintained, and always ready for your business. Our drivers are not only professionals but are people that care. They are familiar with every road like an old friend. So, you can kick back and enjoy the ride.
Whether you are taking a quick jaunt across town or a long journey ahead, put your mind at ease. Simply sit back and let us take care of everything else. Enjoy the journey as the best aspect of any journey is the journey itself, not the destination.`,
};

export default function HondaAmaze() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });

  const [activeTab, setActiveTab] = useState("local");
  const [mainImage, setMainImage] = useState("/ourFleet/Sedan/amaze/1.jpg");
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const scrollAmount = 350;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="w-full px-4 py-10 flex flex-col items-center">
        <h1
          className="text-[#3D3E98] text-center mb-10"
          style={{
            fontFamily: "DM Sans",
            fontWeight: 500,
            fontSize: "46px",
            lineHeight: "1.1",
          }}
        >
          Honda Amaze
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            <div className="border rounded-md flex justify-center items-center"
              // style={{ width: "100%", height: "579px" }}
              style={{ width: "100%",  }}
            >
              <img
                src={mainImage}
                alt="Main Car"
                className="object-contain h-full transition-all duration-300"
              />
            </div>

               <div className="flex items-center justify-between w-full ">
              {/* <button
                className="cursor-pointer w-6 h-6 flex items-center justify-center rotate-180 text-[#3D3E98]"
                onClick={() => scrollCarousel("left")}
              >
                <TfiArrowCircleRight size={24} />
              </button> */}

              <div
                ref={carouselRef}
                className="flex gap-2 overflow-x-auto flex-nowrap w-full justify-center sm:h-[160px] cursor-pointer "
                style={{ scrollbarWidth: "none" }}
              >
                {[
                  "/ourFleet/Sedan/amaze/1.jpg",
                  "/ourFleet/Sedan/amaze/2.jpg",
                  "/ourFleet/Sedan/amaze/3.jpg",
                ].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Car ${idx}`}
                    onClick={() => setMainImage(img)}
              className="w-[90px] h-[60px] sm:w-[160px] sm:h-[120px] md:w-[200px] md:h-[140px] object-cover rounded border p-1 sm:p-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  />
                ))}
              </div>

              {/* <button
                className="cursor-pointer w-6 h-6 flex items-center justify-center text-[#3D3E98]"
                onClick={() => scrollCarousel("right")}
              >
                <TfiArrowCircleRight size={24} />
              </button> */}
            </div>
          </div>

          <div className="h-[80%] w-full lg:w-[460px] border border-black bg-[#3D3E98] text-white rounded-[10px] px-6 py-8 flex flex-col gap-4">
            <div className="flex mb-4">
              <button
                onClick={() => setActiveTab("local")}
                className={`flex-1 py-2 md:py-3 px-2 md:px-4 rounded-l-lg font-medium transition-colors text-sm md:text-[20px] ${
                  activeTab === "local"
                    ? "bg-white text-[#3D3E98]"
                    : "bg-[#4A3FA3] text-white hover:bg-[#3F3498]"
                }`}
              >
                Local / Airport
              </button>
              <button
                onClick={() => setActiveTab("outstation")}
                className={`flex-1 py-2 md:py-3 px-2 md:px-4 rounded-r-lg font-medium transition-colors text-sm md:text-[20px] ${
                  activeTab === "outstation"
                    ? "bg-white text-[#3D3E98]"
                    : "bg-[#4A3FA3] text-white hover:bg-[#3F3498]"
                }`}
              >
                Outstation
              </button>
            </div>

            <form className="flex flex-col gap-4 text-sm">
              {["from", "destination", "dateTime", "name", "contact"].map(
                (field, idx) => (
                  <div key={idx}>
                    <label className="block mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                      {field.charAt(0).toUpperCase() +
                        field.slice(1).replace("Time", " & Time")}
                    </label>
                    <input
                      type={
                        field === "dateTime"
                          ? "datetime-local"
                          : field === "contact"
                          ? "tel"
                          : "text"
                      }
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder={
                        field === "contact"
                          ? "+91 1234567890"
                          : `Enter ${field}`
                      }
                      className="placeholder:text-white placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                    />
                  </div>
                )
              )}
              <button
                type="submit"
                className="w-full mt-2 bg-white text-[#3D3E98] py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base md:text-[18px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <VehicleDetailInfoSection {...hondaAmazeConfig} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}
