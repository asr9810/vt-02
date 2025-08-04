import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";

const BMW7SeriesConfig = {
  vehicleName: `BMW 7-Series Rental Service`,
  introText: `A fleet of pristine BMW 7 series sedans is available for every situation on your travels - from business trips, to VIP airport transfers, to city rides, and outstation trips. We are based in Delhi, and we know that when you travel in luxury, you do so to maintain comfort and class. With each trip, we strive to provide an effortless, refined, and memorable experience.`,
  rentalIntroText: ` 
 	
Refined, spacious, and unbelievably smooth, our BMW 7 Series sedans are for those who desire the very best. With their stunning interiors, sophisticated features, and commanding presence - the BMW 7 Series sedans do not just offer a ride, but an experience. At Vivek Travels, we pair this luxury sedan with professional, articulate, and discreet chauffeurs who prioritize punctuality and service - so you can focus on what is truly important.
`,

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
 	
If you need executive-style travel in Delhi NCR, you’ve come to the right place. Book a BMW 7 Series with Vivek Travels for professional chauffeur-driven experiences throughout India. Each experience consists of a luxury, clean vehicle and trained chauffeur to ensure you travel in total comfort.`,

  vehicleSpecs: [
    ["Air conditioning", "yes"],
    ["Mileage", "8-12.1 kmpl"],
    ["Seats", "4 passengers+ driver"],
    ["Engine", "2998 cc"],
  ],

  vehicleParagraph: `Each BMW 7 Series in our fleet is maintained to brand-new quality for our clients, all ready to deliver you an exceptional experience. Whether it's an important meeting or a special event, we’re here to ensure you arrive in style - relaxed, confident, and on-time.`,
};

export default function BMW7Series() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });
  const [activeTab, setActiveTab] = useState("local");

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
          className="text-[#3D3E98] text-center mb-10 text-[28px] sm:text-[46px]"
          style={{
            fontFamily: "DM Sans",
            fontWeight: 500,
            lineHeight: "1.1",
          }}
        >
          BMW 7 Series
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            <div
              className="border rounded-md flex justify-center items-center h-[300px] sm:h-[579px]"
              style={{ width: "100%" }}
            >
              <img
                src="/ourFleet/Luxury/bmw/1.jpg"
                alt="Main Car"
                className="object-contain h-full"
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
                  "/ourFleet/Luxury/bmw/1.jpg",
                  "/ourFleet/Luxury/bmw/2.jpg",
                  "/ourFleet/Luxury/bmw/3.jpg",
                ].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Car ${idx}`}
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

          <div className="w-full lg:w-[460px] h-[80%] border border-black bg-[#3D3E98] text-white rounded-[10px] px-6 py-8 flex flex-col gap-4">
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
      <VehicleDetailInfoSection {...BMW7SeriesConfig} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}
