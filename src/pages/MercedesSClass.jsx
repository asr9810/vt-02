import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";



const MercedesSClassConfig = {
  vehicleName: `Mercedes S-Class Rental Service`,
  introText: `You'll find a fleet of luxurious, impeccably maintained Mercedes S-Class vehicles awaiting every special journey — whether that's a high-profile meeting, airport transfer, city travel, or outstation drive. We operate out of Delhi, and we know that premium travel is about more than getting from point A to B; it's also about how you feel along the way. We'll guarantee every ride is smooth, dignified, and memorable.`,
  rentalIntroText: `The Mercedes S-Class is sophisticated, spacious, and drives like a dream — it's a vehicle for those who expect the very best. The ultra-luxurious interiors, whisper-quiet drive, and luxurious features all contribute to a level of comfort and prestige that is unmatched. At Vivek Travels, our professional chauffeurs are trained to mirror the vehicle's standard, and they provide courteous, discreet service along the way.`,

  rentalDetails: [{'title': 'Travel Inclusions', 'items': ['Charges applicable from garage to garage', 'Night charges applicable after 11:00 PM IST', 'Fuel, toll, state tax, and driver charges included', 'Parking and GST charges extra']}, {'title': 'Amenities', 'items': ['Air conditioned', 'GPS Tracker', 'Chauffeur', 'Ample Luggage Area']}, {'title': 'Features', 'items': ['Safety features like seatbelt reminders, high-speed alerts, and rear parking sensors.', 'The spacious cabin to make every journey feel effortless. ', 'The SmartPlay infotainment system to keep entertained.']}],

  rentalClosingParagraph: `You’ve found luxury travel in Delhi NCR if you are looking for it! Book a Mercedes S Class on Vivek Travels for high-end chauffeur-driven travel anywhere in India. Each journey comes with a perfect, premium vehicle and an experienced and polite driver. The S-Class ensures that every moment you are in the car feels special, from the minute you get in to the drop off.`,

  vehicleSpecs: [['Air conditioning', 'yes'], ['Mileage', '12 and 18 kmpl'], ['Seats', '4 passengers+ driver'], ['Engine', '2999 cc']],

  vehicleParagraph: `Each S-Class in our fleet is immaculate and will always be prepared to provide an experience that is elegant, comfortable, and above all, first rate. Whether it is a short trip or a long one, you’ll arrive in comfort and style and never fail to leave a lasting impression.`
};

export default function MercedesSClass() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });
  const [activeTab, setActiveTab] = useState("local");
  const [mainImage, setMainImage] = useState("/ourFleet/Luxury/sclass/1.jpg");
  

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
          Mercedes S-Class
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            {/* <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%", height: "579px"}}
            >
              <img
                src="/ourFleet/Luxury/sclass/1.jpg"
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
              <button
                className="cursor-pointer w-6 h-6 flex items-center justify-center rotate-180 text-[#3D3E98]"
                onClick={() => scrollCarousel("left")}
              >
                <TfiArrowCircleRight size={24} />
              </button>

              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto flex-nowrap max-w-[680px] px-2 scrollbar-hide cursor-pointer"
                style={{ scrollbarWidth: "none"}}
              >
                {["/ourFleet/Luxury/sclass/1.jpg",
      "/ourFleet/Luxury/sclass/2.jpg",
      "/ourFleet/Luxury/sclass/3.jpg",].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Car ${idx}`}
                     onClick={() => setMainImage(img)}
                    className="w-[320px] h-[251px] object-cover rounded border p-2 flex-shrink-0"
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
      <VehicleDetailInfoSection {...MercedesSClassConfig} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}