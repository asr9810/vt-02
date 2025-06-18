import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png"; // Main car image
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "./VehicleDetailInfoSection";
import WhyRideSection from "./Why-ride-section";
import ReservationBanner from "./ReservationBanner";

export default function FleetCarDetail() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });
  const [activeTab, setActiveTab] = useState("local");

  const carouselRef = useRef(null); // for scrolling

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
        {/* Header */}
        <h1
          className="text-[#3D3E98] text-center mb-10"
          style={{
            fontFamily: "DM Sans",
            fontWeight: 500,
            fontSize: "46px",
            lineHeight: "1.1",
          }}
        >
          Maruti Suzuki Dzire
        </h1>

        {/* Main Content Section */}
        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          {/* Left: Car Image + Carousel */}
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            {/* Main Car Image */}
            <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%", height: "579px" }}
            >
              <img
                src={carImage}
                alt="Main Car"
                className="object-contain h-full "
              />
            </div>

            {/* Carousel */}
            <div className="flex items-center justify-between w-full">
              {/* Carousel Images */}
              <div className="flex items-center justify-between w-full">
                {/* Left Arrow */}
                <button
                  className="cursor-pointer w-6 h-6 flex items-center justify-center rotate-180 text-[#3D3E98]"
                  onClick={() => scrollCarousel("left")}
                >
                  <TfiArrowCircleRight size={24} />
                </button>

                {/* Carousel Images */}
                <div
                  ref={carouselRef}
                  className="flex gap-4 overflow-x-auto flex-nowrap max-w-[680px] px-2 scrollbar-hide"
                  style={{ scrollbarWidth: "none" }}
                >
                  {[dummy1, dummy2, dummy2, dummy2].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Car ${idx}`}
                      className="w-[320px] h-[251px] object-cover rounded border p-2 flex-shrink-0"
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  className="cursor-pointer w-6 h-6 flex items-center justify-center text-[#3D3E98]"
                  onClick={() => scrollCarousel("right")}
                >
                  <TfiArrowCircleRight size={24} />
                </button>
              </div>

              {/* Right Arrow */}
              {/* <button className="cursor-pointer w-6 h-6 flex items-center justify-center text-[#3D3E98]">
                <TfiArrowCircleRight size={24} />
              </button> */}
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-[460px] border h-[80%] border-black h-flex bg-[#3D3E98] text-white rounded-[10px] px-6 py-8 flex flex-col gap-4">
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
              <div>
                <label className="block text-sm font-bold mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                  From
                </label>
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  placeholder="Start typing location name"
                  className="placeholder:text-white placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Start typing location name"
                  className="placeholder:text-white placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="placeholder:text-white placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                  Contact No.
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="+91 1234567890"
                  className="placeholder:text-white placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                />
              </div>

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
      <VehicleDetailInfoSection />
      <WhyRideSection />

      {/* Reservation Banner */}
      <br className="block md:hidden" />

      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}
