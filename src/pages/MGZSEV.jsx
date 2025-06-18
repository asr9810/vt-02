import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";

export default function MGZSEV() {
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

  const KiaCarnivalConfig = {
  vehicleName: `MG ZS EV rentals in Delhi NCR`,
  introText: `Want to travel comfortably while being environmentally conscious as well? We offer an ideal solution for traveling sustainability in style with space - our MG ZS EV rentals, whether using it for city drives, airport transfer or outstation trips from Delhi NCR. `,
  rentalIntroText: `The MG ZS EV is more than eco-friendly option, with its beautiful design, spacious interior for your family or luggage, and its silent electric drive you can guarantee a truly enjoyable experience whether you're travelling to work, attending meetings or getting you away for a short break, the MG ZS EV will give you a smooth and premium experience every time. For every travels with Vivek Travels, your ride will be chauffeur driven so all you'll have to do is relax.`,

  rentalDetails: [{'title': 'Travel Inclusions', 'items': ['Charges applicable from garage to garage', 'Night charges applicable after 11:00 PM IST', 'Fuel, toll, state tax, and driver charges included', 'Parking and GST charges extra']}, {'title': 'Amenities', 'items': ['Air conditioned', 'GPS Tracker', 'Chauffeur', 'Ample Luggage Area']}, {'title': 'Features', 'items': ['Safety features like seatbelt reminders, high-speed alerts, and rear parking sensors.', 'The spacious cabin to make every journey feel effortless. ', 'The SmartPlay infotainment system to keep entertained.']}],

  rentalClosingParagraph: `If you're thinking about transitioning your driving to electric, an MG ZS EV is the perfect first choice. Book Vivek Travels and travel clean, comfortably, and responsibly - without losing any comfort or good looks.`,

  vehicleSpecs: [['Air conditioning', 'yes'], ['Motor Power', '129 kW'], ['Seats', '4 passengers+ driver'], ['Batter Capacity', '50.3 kWh']],

  vehicleParagraph: `All our ZS EVs are cleaned and maintained to the highest standards, and you will find them fully charged and ready to answer whatever journey you have in store. With us, it's easy to go electric - it's always fun.`
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
          MG ZS EV
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%", height: "579px"}}
            >
              <img
                src="/ourFleet/EV/mg/1.jpg"
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
                {["/ourFleet/EV/mg/1.jpg", "/ourFleet/EV/mg/2.jpg","/ourFleet/EV/mg/3.jpg"].map((img, idx) => (
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
      <VehicleDetailInfoSection {...KiaCarnivalConfig}/>
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}