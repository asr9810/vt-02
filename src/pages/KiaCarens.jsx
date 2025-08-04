import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";

const KiaCarensConfig = {
  vehicleName: `Kia Carens Rental Service`,
  introText: `We offer immaculate, well-kept Kia Carens that are provided for all of your travel experiences - family vacation, airport ride, business trip, or enjoying a long drive in a city. Our office is located in Delhi, so we understand what's most important: travel that instills confidence and it is affordable. You can travel comfortably without stressing about your bottom-line.`,
  rentalIntroText: ` 
 	
The Kia Carens is the perfect combination of practicality and sophistication - large enough to accommodate the whole family, stylish enough to leave an impression. The Carens provides premium interiors, high-end aesthetics and good gas mileage to ensure your travels are smooth and refined. Whether it is family - time, important business meetings, or flying away, there is still more room for all of your family, friends and luggage. At Vivek Travels, our conscientious drivers will look after you and everything else so you can pay attention to what's most important or only focus on getting to the airport on time.`,

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
 	
Book a Kia Carens today with Vivek Travels for your travel needs from Delhi NCR to all over India! Each booking includes a professional, experienced driver who will genuinely care about getting your journey off smoothly, on time, and in safety. Whether you need a Kia Carens for the day or extended travel, you will find our fleet of Kia Carens are well maintained, exceptionally spacious, and with features designed with your comfort in mind. Choose Vivek Travels to provide you travel whether you think you are looking at days, or planning an overnight trip with the Kia Carens - the quality, comfort, and reliability is always on duty with us. Interested? Ready to plan? Get in touch - we are here to help.
`,

  vehicleSpecs: [
    ["Air conditioning", "yes"],
    ["Mileage", "15.34 to 19.54 kmpl"],
    ["Seats", "6 passengers+ driver"],
    ["Engine", "1482 cc"],
  ],

  vehicleParagraph: `Every Kia Carens has been cared for lovingly and is ready to welcome you and your family. Our drivers are more than just experienced, but really kind and genuine people who know every route inside and out, so you can simply sit back and enjoy real-time together. Whether you need a simple trip to pick something in the city or an unforgettable family vacation, we are here to make your family travels seamless and enjoyable.`,
};

export default function KiaCarens() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });
  const [activeTab, setActiveTab] = useState("local");
  const [mainImage, setMainImage] = useState("/ourFleet/SUV-MUV/carens/1.jpg");

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
          Kia Carens
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%",}}
            >
              <img
                src="/ourFleet/SUV-MUV/carens/1.jpg"
                alt="Main Car"
                className="object-contain h-full "
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
                  "/ourFleet/SUV-MUV/carens/1.jpg",
                  "/ourFleet/SUV-MUV/carens/2.jpg",
                  "/ourFleet/SUV-MUV/carens/3.jpg",
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
      <VehicleDetailInfoSection {...KiaCarensConfig} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}
