import { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";
import emailjs from "emailjs-com";

export default function SwiftDzire() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });

  const [activeTab, setActiveTab] = useState("local");
  const [mainImage, setMainImage] = useState("/ourFleet/Sedan/dzire/1.jpg");

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

  const config = {
    vehicleName: `Swift Dzire Rental Service`,
    introText: `We provide well-maintained, high-quality Swift Dzire cars on rent—ideal for outstation trips, airport pickup and drop, intercity travel, group travel, or just pick-up and drop services. Whether you're on a weekend trip or just require a safe drive around the city, we've got you covered.

We are based in Delhi and ensuring each trip with us is a comfortable, hassle-free, and economical experience.`,
    rentalIntroText: ` 
 	
Bold, luxurious, and strong; the Land Rover Defender provides rugged performance with a sophisticated interior, resulting in a driving experience that has no comparison. At Vivek Travels, every booking of a Defender includes an excellent trained chauffeur who will provide a smooth, safe, and stress-free journey.`,

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
 	
Are you looking to experience India in a manner that is both an adventure and luxurious? In that case, you will want the Land Rover Defender. Only with Vivek Travels will you have the opportunity to chauffeur-driven travel that is not so traditional.`,

    vehicleSpecs: [
      ["Air conditioning", "yes"],
      ["Mileage", "around 22.41 KMPL"],
      ["Seats", "4 passengers+ driver"],
      ["Engine", "1197 cc"],
    ],

    vehicleParagraph: `Every Swift Dzire in our fleet is spotless well-maintained, and set for a cozy trip. Our drivers have plenty of experience good manners, and know their way around — so you can relax and take in the ride. For quick jaunts or extended journeys, we aim to make your travel easy and worry-free.`,
  };
  return (
    <>
      <div className="w-full px-4 py-10 flex flex-col items-center ">
        <h1
          className="text-[#3D3E98] text-center mb-10 text-[28px] sm:text-[46px]"
          style={{
            fontFamily: "DM Sans",
            fontWeight: 500,
            lineHeight: "1.1",
          }}
        >
          Swift Dzire
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            {/* <div
              className="border rounded-md flex justify-center items-center h-[300px] sm:h-[579px] "
              style={{ width: "100%" }}
            >
              <img
                src="/ourFleet/Sedan/dzire/1.jpg"
                alt="Main Car"
                className="object-contain h-full"
              />
            </div> */}
            <div
              className="border rounded-md flex justify-center items-center h-[300px] sm:h-[579px]"
              style={{ width: "100%" }}
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
              {/* 
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto flex-nowrap max-w-[680px] px-2 scrollbar-hide  sm:h-[251px] cursor-pointer "
                style={{ scrollbarWidth: "none" }}
              > */}
              <div
                ref={carouselRef}
                className="flex gap-2 overflow-x-auto flex-nowrap w-full justify-center sm:h-[160px] cursor-pointer "
                style={{ scrollbarWidth: "none" }}
              >
                {[
                  "/ourFleet/Sedan/dzire/1.jpg",
                  "/ourFleet/Sedan/dzire/2.jpg",
                  "/ourFleet/Sedan/dzire/3.jpg",
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
          <div className="w-full lg:w-[460px]  h-[80%] border border-black bg-[#3D3E98] text-white rounded-[10px] px-6 py-8 flex flex-col gap-4">
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
      <VehicleDetailInfoSection {...config} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}
