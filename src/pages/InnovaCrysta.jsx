import React, { useRef, useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import carImage from "../assets/carlogo.png";
import dummy1 from "../assets/carlogo.png";
import dummy2 from "../assets/carlogo.png";
import VehicleDetailInfoSection from "../components/VehicleDetailInfoSection";
import WhyRideSection from "../components/Why-ride-section";
import ReservationBanner from "../components/ReservationBanner";

const InnovaCrystaConfig = {
  vehicleName: `Innova Crysta Rental Service`,
  introText: `We provide a well-kept fleet of Toyota Innova Crysta to meet your every travel need. Whether you are going on a family road trip, requiring an airport transfer, going on a corporate travel schedule or seeking comfort when travelling in the city, we have you covered. Based in Delhi, we appreciate that space and comfort are not luxuries when employed with loved ones or colleagues; they are a necessity.
`,
  rentalIntroText: `The Toyota Innova Crysta closes the gap between people who like space and people who want a refined experience. Spacious enough for the whole family, refined enough for business clients. Great for family events, business meetings or group trips, the Crysta just becomes your car to return home in. Our drivers at Vivek travels are trained to get you from point A to point B relaxed and ready, no matter the distance.`,

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

  rentalClosingParagraph: `Vivek Travels is the best way to experience travel from Delhi NCR, and anywhere in India, on a Toyota Innova Crysta. When you book from us, you will always have a friendly, experienced driver who has your travel experience at heart, ensuring that your travel is pleasant, on-time, and safe. Travel together with ViveK Travels and enjoy comfortable, reliable group travel with Toyota Innova Crysta. Are you ready to book your trip? Get in touch with us today.`,

  vehicleSpecs: [
    ["Air conditioning", "yes"],
    ["Mileage", "around 13.68 kmpl"],
    ["Seats", "6 passengers+ driver"],
    ["Engine", "2393 cc"],
  ],

  vehicleParagraph: `All of our Toyota Innova Crysta vehicles are clean, kept in excellent condition, and ready to provide and up-close and personal travel experience. Whether it is a short family trip, or long-awaited family vacation, we are here to make sure that your travel is effortless and enjoyable.`,
};

export default function InnovaCrysta() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });
  const [activeTab, setActiveTab] = useState("local");
  const [mainImage, setMainImage] = useState("/ourFleet/SUV-MUV/crysta/1.jpg");

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
          Innova Crysta
        </h1>

        <div className="w-full max-w-[1228px] flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[738px] flex flex-col gap-[14px]">
            {/* <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%", height: "579px" }}
            >
              <img
                src="/ourFleet/SUV-MUV/crysta/1.jpg"
                alt="Main Car"
                className="object-contain h-full "
              />
            </div> */}

            <div
              className="border rounded-md flex justify-center items-center"
              style={{ width: "100%" }}
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
                className="flex gap-4 overflow-x-auto flex-nowrap max-w-[680px] px-2 scrollbar-hide  sm:h-[220px] cursor-pointer"
                style={{ scrollbarWidth: "none" }}
              >
                {[
                  "/ourFleet/SUV-MUV/crysta/1.jpg",
                  "/ourFleet/SUV-MUV/crysta/2.jpg",
                  "/ourFleet/SUV-MUV/crysta/3.jpg",
                ].map((img, idx) => (
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
      <VehicleDetailInfoSection {...InnovaCrystaConfig} />
      <WhyRideSection />
      <br className="block md:hidden" />
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </>
  );
}
