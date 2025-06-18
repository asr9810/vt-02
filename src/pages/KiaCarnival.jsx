import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";





const KiaCarnivalConfig = {
  vehicleName: `Kia Carnival Rental Service`,
  introText: `We provide clean, reputable Kia Carnival cars that are ideal for all forms of travel - as a family, airport transfer, group trip, or corporate travel throughout Delhi. We understand that when traveling with more people, comfort and space become even more important. This is why we make sure your travel experience is comfortable, stress-free and incredibly affordable. `,
  rentalIntroText: `Where luxury meets practicality is in the Kia Carnival - enough space for you and your entire crew, which is luxury enough to turn heads as you traverse through Delhi. With luxurious interiors, the bold presence of the Kia Carnival and careful design, every new journey feels like the first time. Whether travelling for a special family celebration, business delegation, or heading off on a group trip away, the Kia Carnival quickly becomes your next new adventure and favorite travel vehicle. Seeing as our professional drivers care for everything, it makes it easier for you`,

  rentalDetails: [{'title': 'Travel Inclusions', 'items': ['Charges applicable from garage to garage', 'Night charges applicable after 11:00 PM IST', 'Fuel, toll, state tax, and driver charges included', 'Parking and GST charges extra']}, {'title': 'Amenities', 'items': ['Air conditioned', 'GPS Tracker', 'Chauffeur', 'Ample Luggage Area']}, {'title': 'Features', 'items': ['Safety features like seatbelt reminders, high-speed alerts, and rear parking sensors.', 'The spacious cabin to make every journey feel effortless. ', 'The SmartPlay infotainment system to keep entertained.']}],

  rentalClosingParagraph: `Rent a Kia Carnival from Vivek Travels for premium group travel in Delhi NCR and anywhere in India. Each booking includes a courteous, experienced driver who considers the safety and comfort of your group his main task. Our fleet of Carnivals is spotless, well-equipped, spacious, and outfitted with amenities that make the ride enjoyable for everyone. Choose Vivek Travels for dependable, comfortable and premium group travels. Ready to plan your group trip? Contact us today.`,

  vehicleSpecs: [['Air conditioning', 'yes'], ['Mileage', '14.85 kmpl'], ['Seats', '6 passengers+ driver'], ['Engine', '2151 cc']],

  vehicleParagraph: `All of our Kia Carnivals are in excellent condition and are ready for your entire group travel in comfort. Our drivers are no only experienced, they are genuine professionals that understand how to work within group dynamics and that all routes have to be traversed, so your group can sit back together and enjoy the ride. When it comes to group travel, we make it seamless - from family reunions to corporate events, we make every trip worthwhile`
};

export default function KiaCarnival() {
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
          className="text-[#3D3E98] text-center mb-10"
          style={{
            fontFamily: "DM Sans",
            fontWeight: 500,
            fontSize: "46px",
            lineHeight: "1.1",
          }}
        >
          Kia Carnival
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%", height: "579px"}}
            >
              <img
                src="/ourFleet/SUV-MUV/carnival/1.jpg"
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
                className="flex gap-4 overflow-x-auto flex-nowrap max-w-[680px] px-2 scrollbar-hide"
                style={{ scrollbarWidth: "none"}}
              >
                {["/ourFleet/SUV-MUV/carnival/1.jpg",
      "/ourFleet/SUV-MUV/carnival/2.jpg",
      "/ourFleet/SUV-MUV/carnival/3.jpg",].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Car ${idx}`}
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
      <VehicleDetailInfoSection {...KiaCarnivalConfig} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}