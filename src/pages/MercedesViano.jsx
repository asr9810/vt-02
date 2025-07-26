import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";



const MercedesVianoConfig = {
  vehicleName: `Mercedes Viano Rental Service`,
  introText: `Our fleet of Mercedes Viano vans is built around the things that matter to you — space, comfort, style all in one ride! Whether it be for a group outing, holiday, airport transfer, or executive travel across Delhi NCR and beyond, we will provide you with a group travel experience that equals the way it should feel. `,
  rentalIntroText: `The Mercedes Viano is spacious, smooth, and quietly luxurious - offering you generous seating, quality interiors and a very stable driving experience. Great for small groups travelling together who do not want to compromise on comfort or style. At Vivek Travels, we pair every Viano with a polite, respectful and experienced chauffeur so you can concentrate on the journey - or even conversing.`,

  rentalDetails: [{'title': 'Travel Inclusions', 'items': ['Charges applicable from garage to garage', 'Night charges applicable after 11:00 PM IST', 'Fuel, toll, state tax, and driver charges included', 'Parking and GST charges extra']}, {'title': 'Amenities', 'items': ['Air conditioned', 'GPS Tracker', 'Chauffeur', 'Ample Luggage Area']}, {'title': 'Features', 'items': ['Safety features like seatbelt reminders, high-speed alerts, and rear parking sensors.', 'The spacious cabin to make every journey feel effortless. ', 'The SmartPlay infotainment system to keep entertained.']}],

  rentalClosingParagraph: `Looking for premium group transport in Delhi NCR? The Mercedes Viano is at your service. Book with Vivek Travels for chauffeur-driven comfort across the Indian subcontinent. Every trip comes with a clean, well-maintained car plus a driver that knows your needs. `,

  vehicleSpecs: [['Air conditioning', 'yes'], ['Mileage', '13 kmpl'], ['Seats', '7 and 9'], ['Engine', '3500 cc']],

  vehicleParagraph: `Each Mercedes Viano in our fleet is regularly serviced and qualified for group transport that is relaxed and easy. Whatever your plans, whether a weekend trip or a corporate roadshow, we will ensure your whole party travels in comfort and style together.`
};

export default function MercedesViano() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });
  const [activeTab, setActiveTab] = useState("local");
  const [mainImage, setMainImage] = useState("");

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
          Mercedes Viano
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%"}}
            >
              <img
                src={carImage}
                alt="Main Car"
                className="object-contain h-full "
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <button
                className="cursor-pointer w-6 h-6 flex items-center justify-center rotate-180 text-[#3D3E98]"
                onClick={() => scrollCarousel("left")}
              >
                <TfiArrowCircleRight size={24} />
              </button>

              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto flex-nowrap max-w-[680px] px-2 scrollbar-hide sm:h-[220px] cursor-pointer"
                style={{ scrollbarWidth: "none"}}
              >
                {[dummy1, dummy2, dummy2, dummy2].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Car ${idx}`}
                    onClick={() => setMainImage(img)}
                    className="w-[120px] h-[80px] sm:w-[200px] sm:h-[140px] md:w-[320px] md:h-[200px] object-cover rounded border p-1 sm:p-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  />
                ))}
              </div>

              <button
                className="cursor-pointer w-6 h-6 flex items-center justify-center text-[#3D3E98]"
                onClick={() => scrollCarousel("right")}
              >
                <TfiArrowCircleRight size={24} />
              </button>
            </div>
          </div>

          <div className="h-[80%] w-full lg:w-[460px] border border-black bg-[#3D3E98] text-white rounded-[10px] px-6 py-8 flex flex-col gap-4">
            <div className="flex mb-4">
              <button
                onClick={() => setActiveTab("local")}
                className={`flex-1 py-2 md:py-3 px-2 md:px-4 rounded-l-lg font-medium transition-colors text-sm md:text-[20px] ${activeTab === "local" ? "bg-white text-[#3D3E98]" : "bg-[#4A3FA3] text-white hover:bg-[#3F3498]"}`}
              >
                Local / Airport
              </button>
              <button
                onClick={() => setActiveTab("outstation")}
                className={`flex-1 py-2 md:py-3 px-2 md:px-4 rounded-r-lg font-medium transition-colors text-sm md:text-[20px] ${activeTab === "outstation" ? "bg-white text-[#3D3E98]" : "bg-[#4A3FA3] text-white hover:bg-[#3F3498]"}`}
              >
                Outstation
              </button>
            </div>

            <form className="flex flex-col gap-4 text-sm">
              {["from", "destination", "dateTime", "name", "contact"].map((field, idx) => (
                <div key={idx}>
                  <label className="block mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace("Time", " & Time")}
                  </label>
                  <input
                    type={field === "dateTime" ? "datetime-local" : field === "contact" ? "tel" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={field === "contact" ? "+91 1234567890" : `Enter ${field}`}
                    className="placeholder:text-white placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                  />
                </div>
              ))}
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
      <VehicleDetailInfoSection {...MercedesVianoConfig} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}