import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";

const hondaCityConfig = {
  vehicleName: `Honda City Rental Service`,
  introText: `We provide you with spotless, well-kept Honda City cars that are great regardless of the adventure - weekend jaunts, airport transportation, business events, or just a relaxing ride in the city. We're in Delhi, and we're just neighbors who know a few things about inexpensive, comfortable, and easy on the wallet travel opportunities! `,
  rentalIntroText: ` 
The Honda City achieves that perfect balance; stylish enough for an important meeting and roomy enough for family adventures. Add luxurious interiors, stylish exteriors, and great fuel economy on every ride, and each drive is so uninterruptedly luxurious! When you sign the deal, make family memories, or take a flight, the City fits into your world. At Vivek Travels, our professional drivers do all the work for you so you can just relax and enjoy the ride.`,

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
Rent a Honda City from Vivek Travels, and experience easy travel to and from Delhi NCR as well as to other locations across India. Each reservation comes with a driver who cares, is experienced and has a solid commitment to ensuring safety and comfort. Each car in our City fleet has been cleaned, and has all the necessary features to allow our guests to feel comfortable, whilst providing great amenities, that make every mile feel like first class. Use Vivek Travels for safe, comfortable and quality travel experiences. Are you ready to book? Call us, we would love to help.  `,

  vehicleSpecs: [
    ["Air conditioning", "yes"],
    ["Mileage", "18.4  KMPL"],
    ["Seats", "4 passengers+ driver"],
    ["Engine", "1197 cc"],
  ],

  vehicleParagraph: `Each Honda City in our fleet is cared for as a labour of love, so you will feel welcomed when loading the car. And our drivers are not only drivers, they are trained professionals, and they not only know every road and shortcut as a professional, but as residents, so you can sit back and relax. We want to provide you with an effortless travel experience - whether you're exiting the city or travelling a few miles out of town. Let's start with an unforgettable experience.`,
};

export default function HondaCity() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });
  const [activeTab, setActiveTab] = useState("local");
    const [mainImage, setMainImage] = useState("/ourFleet/Sedan/hondacity/1.jpg");

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
          Honda City
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            {/* <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%", height: "579px" }}
            >
              <img
                src="/ourFleet/Sedan/hondacity/1.jpg"
                alt="Main Car"
                className="object-contain h-full "
              />
            </div> */}
            <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%",  }}
            >
              <img
                src={mainImage}
                alt="Main Car"
                className="object-contain h-full transition-all duration-300"
              />
            </div>

            <div className="flex items-center justify-between w-full">
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
                  "/ourFleet/Sedan/hondacity/1.jpg",
                  "/ourFleet/Sedan/hondacity/2.jpg",
                  "/ourFleet/Sedan/hondacity/3.jpg",
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
      <VehicleDetailInfoSection {...hondaCityConfig} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}
