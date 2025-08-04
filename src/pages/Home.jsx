import { useState, useEffect } from "react";
import NewsInsights from "../components/NewsInsights";
import CarOffersSection from "../components/car-offers-section";
import FAQ from "../components/FAQ";
import bannerImg from "../assets/banner.png";

import vectorImg from "../assets/vectorImg.svg";
import vector1Img from "../assets/vector_check.png";
import fi2153499Img from "../assets/facts.png";

import frame923Img from "../assets/24by7.svg";
import rectangle44Img from "../assets/carlogo.png";
import frame918Img from "../assets/Frame-918.png";
import frame919Img from "../assets/Frame-919.png";
import frame9201Img from "../assets/Frame-920.png";
import frame921Img from "../assets/Frame-921.png";
import frame922Img from "../assets/Frame-922.png";
import frame880Img from "../assets/Frame-880.png";
import frame881Img from "../assets/Frame-881.png";
import frame882Img from "../assets/Frame-882.png";
import frame883Img from "../assets/Frame-883.png";
import frame884Img from "../assets/Frame-884.png";
import frame885Img from "../assets/Frame-885.png";
import frame886Img from "../assets/Frame-886.png";
import SocialConnect from "@/components/SocialConnect";
import ReservationBanner from "@/components/ReservationBanner";
import WhyRideSection from "@/components/Why-ride-section";
import CustomerTestimonials from "@/components/customer-testimonials";
import WhatWeOffer from "@/components/what-we-offer";

import { useNavigate } from "react-router-dom";

import banner1 from "../assets/hb1.jpg";
import banner2 from "../assets/hb2.jpg";
import banner3 from "../assets/hb3.jpg";
import BookYourRideMobile from "@/components/BookYourRideMobile";
import OurFleetsSection from "@/components/OurFleetsSection";
import OurFleetsMobile from "@/components/OurFleetsMobile";
import { useIsMobile } from "@/hook/useIsMobile";
import { StepsSection } from "../components/Why-ride-section";
import StepsSectionDesktop from "../components/StepSectionDesctop";
// import banner3 from "../assets/hero3.png";

export default function Home() {
  const [activeTab, setActiveTab] = useState("local");
  const [showOffers, setShowOffers] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    time: "",
    name: "",
    contact: "",
    from: "",
    destination: "",
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFleetTab, setActiveFleetTab] = useState("sedans");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isMobile = useIsMobile();

  // Mobile statistics auto-slide state
  const [currentStatsSlide, setCurrentStatsSlide] = useState(0);

  const [currentHeroImg, setCurrentHeroImg] = useState(0);
  const [nextHeroImg, setNextHeroImg] = useState(1);
  const [fade, setFade] = useState(true);

  const heroImages = [banner1, banner2, banner3];

  // 3. Setup background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out

      setTimeout(() => {
        setCurrentHeroImg((prev) => (prev + 1) % heroImages.length);
        // setNextHeroImg((prev) => (prev + 1) % heroImages.length);
        setFade(true); // Fade in the new image
      }, 1000); // Duration of the fade animation
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle URL hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Animated counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration]);

    return count;
  };

  // Counter values
  const carsCount = useCounter(1200);
  const busesCount = useCounter(200);
  const passengersCount = useCounter(3500);
  const ridesCount = useCounter(1000000);
  const yearsCount = useCounter(55);

  // Mobile stats data for sliding
  const mobileStats = [
    { value: `${yearsCount}+`, label: "Years Trust" },
    { value: `${carsCount}+`, label: "Cars" },
    { value: `${busesCount}+`, label: "Buses" },
    { value: `${passengersCount}+`, label: "Daily Passengers" },
    {
      value: ridesCount === 1000000 ? "1M+" : `${ridesCount}+`,
      label: "Happy Rides",
    },
    { value: `${yearsCount}+`, label: "Years Trust" },
  ];

  // Feature cards data with PNG icons
  const features = [
    {
      icon: (
        <img
          src={vectorImg || "/placeholder.svg"}
          alt="Professional Chauffeur"
          className="w-8 h-8"
        />
      ),
      title: "Professionally Trained Chauffeurs",
      description: `Our chauffeurs are background-
verified, medically screened, and
trained in hospitality, ensuring a
safe, comfortable, and courteous
journey every time`,
    },
    {
      icon: (
        <img
          src={vector1Img || "/placeholder.svg"}
          alt="Reliable Fleet"
          className="w-8 h-8"
        />
      ),
      title: "Spotless, Sanitized & Reliable Fleet",
      description:
        "Each vehicle is thoroughly cleaned, quality-checked, and prepared before every trip. Enjoy cool air conditioning, comfortable seating, and spotless interiors—just the way it should be.",
    },
    {
      icon: (
        <img
          src={fi2153499Img || "/placeholder.svg"}
          alt="One-Stop Transport"
          className="w-8 h-8"
        />
      ),
      title: "One-Stop Transport for Every Occasion",
      description:
        "Weddings, airport drops, school runs, weekend getaways, or corporate events—we've got the right ride for everything.",
    },
    {
      icon: <img src={frame923Img || "/placeholder.svg"} alt="24/7 Support" />,
      title: "24/7 Customer Support",
      description:
        "Whether plans change or questions arise mid-journey, our dedicated support team is available 24/7 via call or WhatsApp—ensuring seamless assistance whenever you need it.",
    },
  ];

  const fleetData = {
    sedans: {
      title: "Sedans",
      description: `Fits all your needs for city rides and airport transfers-comfortable seating, fuel economy, and professional service to meet your everyday travel needs.`,
      brands: [
        { carName: "Swift Dzire", url: "swift-dzire" },
        { carName: "Hyundai Aura", url: "hyundai-aura" },
        { carName: "Honda Amaze", url: "honda-amaze" },
        { carName: "Honda City", url: "honda-city" },
        { carName: "Maruti Suzuki Ciaz", url: "maruti-suzuki-ciaz" },
      ],
    },
    "suv-muv": {
      title: "SUV / MUV",
      description: `Large, durable vehicles fit to handle family vacations, family reunions, and group travel have more space and comfort, and safety features, and carry more luggage.`,
      brands: [
        { carName: "Maruti Suzuki Ertiga", url: "maruti-suzuki-ertiga" },
        { carName: "Toyota Rumion", url: "toyota-rumion" },
        { carName: "Innova Crysta", url: "innova-crysta" },
        { carName: "Innova Hycross", url: "innova-hycross" },
        { carName: "Maruti Suzuki Invicto", url: "maruti-suzuki-invicto" },
        { carName: "Toyota Fortuner", url: "toyota-fortuner" },
        { carName: "Kia Carnival", url: "kia-carnival" },
        { carName: "Kia Carens", url: "kia-carens" },
      ],
    },
    "luxury-cars": {
      title: "Luxury Cars",
      description: `Forced for VIP events, vehicle with leather seats, reclining seats, climate control, ambient lighting, and a uniformed chauffeur at your service.`,
      brands: [
        { carName: "Toyota Camry", url: "toyota-camry" },
        { carName: "Mercedes E-Class", url: "mercedes-e-class" },
        { carName: "Mercedes S-Class", url: "mercedes-s-class" },
        { carName: "BMW 7 Series", url: "bmw-7-series" },
        { carName: "Jaguar XF", url: "jaguar-xf" },
        { carName: "Mercedes Viano", url: "mercedes-viano" },
        { carName: "Land Rover Defender", url: "land-rover-defender" },
        { carName: "Toyota Vellfire", url: "toyota-vellfire" },
      ],
    },
    "tempo-travellers": {
      title: "Van",
      description: `Perfect for group outings and corporate events—you can comfortably fit 12-20 passengers with lots of room and comfortable seating and entertainment systems.`,
      brands: [
        {
          carName: "Luxury Maharaja Tempo Traveller",
          url: "luxury-maharaja-tempo-traveller",
        },
        { carName: "Tempo Travellers 2x1", url: "tempo-travellers-2x1" },
        { carName: "Urbania - Modified", url: "urbania-modified" },
        { carName: "Urbania 2x1", url: "urbania-2x1" },
      ],
    },
    "ev-cars": {
      title: "EV Cars",
      description: `Environmentally-friendly electric vehicles for environmentally friendly travel. Zero emissions, silent operation, and leading-edge technology for the eco-conscious rider.`,
      brands: [
        { carName: "Tata Tigor", url: "tata-tigor" },
        { carName: "Tata Nexon", url: "tata-nexon" },
        { carName: "MG ZsEV", url: "mg-zs-ev" },
        { carName: "Ioniq 5", url: "ioniq-5" },
      ],
    },
    "luxury-buses": {
      title: "Luxury Buses",
      description: `Luxury coaches for large groups or long-distance travel—featuring reclining seats, AC, entertainment systems, and professional drivers.`,
      brands: [
        { carName: "Mini Bus Coach", url: "mini-bus-coach" },
        { carName: "Luxury Coach", url: "luxury-coach" },
        { carName: "Scania/Volvo Bus", url: "scania-volvo-bus" },
      ],
    },
  };

  const services = [
    {
      image: frame918Img,
      title: "Car Rentals",
      description: "Stylish sedans to spacious SUVs for any journey needs",
    },
    {
      image: frame919Img,
      title: "Bus Rentals",
      description: "Comfortable buses for groups, tours, and events.",
    },
    {
      image: frame9201Img,
      title: "Wedding Transport",
      description: "Elegant options for a smooth, memorable day.",
    },
    {
      image: frame921Img,
      title: "VIP & Delegate",
      description: "Luxury vehicles for stylish, punctual arrivals.",
    },
    {
      image: frame922Img,
      title: "MICE",
      description: "Stylish sedans to spacious SUVs for any journey needs",
    },
  ];

  // Client logos data
  const clientLogos = [
    { image: frame880Img, alt: "Patanjali" },
    { image: frame881Img, alt: "Reliance Industries Limited" },
    { image: frame882Img, alt: "The LaLit" },
    { image: frame883Img, alt: "RR Kabel" },
    { image: frame884Img, alt: "Samsung" },
    { image: frame885Img, alt: "Air India" },
    { image: frame886Img, alt: "Bisleri" },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [features.length]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    console.log("Search clicked", formData);
    if (formData.location || formData.destination || formData.from) {
      setShowOffers(true);
      const query = new URLSearchParams(formData).toString();
      navigate(`/car-offers?${query}`);
      // setTimeout(() => {
      //   const offersElement = document.getElementById("offers-section");
      //   if (offersElement) {
      //     offersElement.scrollIntoView({ behavior: "smooth", block: "start" });
      //   }
      // }, 100);
    }
  };

  const chunkArrayWithPadding = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      while (chunk.length < size) {
        chunk.push(null); // Add null as placeholder
      }
      chunks.push(chunk);
    }
    return chunks;
  };

  const mobileStatChunks = chunkArrayWithPadding(mobileStats, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatsSlide((prev) => (prev + 1) % mobileStatChunks.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [mobileStatChunks.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner and Booking Form */}
      <section className="relative min-h-screen overflow-visible bg-white pt-8 pb-20">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={heroImages[currentHeroImg]}
            alt="Hero"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={heroImages[nextHeroImg]}
            alt="Hero Next"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Content Container */}
        {/* desktop view */}
        {/* <div
  className="hidden md:block  absolute z-10 rounded-[3px] bg-[#3D3E98] opacity-100 border border-black"
  style={{
    width: "1250px",
    height: "302px",
    top: "-50px",
    left: "136px",
  }}
> */}
        <div
          className="hidden md:flex absolute z-10 bg-[#3D3E98]  rounded-[3px] w-full max-w-[1300px] mx-auto left-1/2 transform -translate-x-1/2"
          style={{
            // top: "-50px",
            height: "302px",
          }}
        >
          <div className="px-[44px] py-[32px] w-full h-full flex flex-col justify-between">
            {/* Heading */}
            <h2
              className="text-white font-bold"
              style={{
                fontFamily: "DM Sans",
                fontSize: "30px",
                lineHeight: "11.17px",
                height: "21px",
                width: "207px",
              }}
            >
              Pick Your Ride
            </h2>

            {/* Tabs */}
            <div
              className="flex space-x-2 mt-[12px]"
              style={{ width: "396px", height: "53px" }}
            >
              <button
                onClick={() => setActiveTab("local")}
                className={`w-[188px] h-[53px] rounded bg-[#FAFAFA] text-[#3D3E98] font-semibold ${
                  activeTab === "local"
                    ? "border-2 border-[#3D3E98]"
                    : "opacity-80"
                }`}
                style={{ fontFamily: "DM Sans" }}
              >
                Local / Airport
              </button>
              <button
                onClick={() => setActiveTab("outstation")}
                className={`w-[188px] h-[53px] rounded bg-[#FAFAFA] text-[#3D3E98] font-semibold ${
                  activeTab === "outstation"
                    ? "border-2 border-[#3D3E98]"
                    : "opacity-80"
                }`}
                style={{ fontFamily: "DM Sans" }}
              >
                Outstation
              </button>
            </div>

            {/* Fields with Labels */}
            {/* <div className="flex items-start mt-6 gap-4"> */}
            <div className="flex flex-wrap lg:flex-nowrap items-start mt-6 gap-4 ">
              {/* Location or From + Destination */}
              {activeTab === "local" ? (
                <div className="flex flex-col">
                  <label
                    className="text-white mb-[6px]"
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "11.17px",
                    }}
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Start typing location name"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-[200px] h-[40px] px-[16px] text-white placeholder:text-[#FFFFFF4D] bg-transparent rounded-[8px] border border-[#D9D9D9] text-sm"
                  />
                </div>
              ) : (
                <>
                  <div className="flex flex-col">
                    <label
                      className="text-white mb-[6px]"
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "11.17px",
                      }}
                    >
                      From
                    </label>
                    <input
                      type="text"
                      name="from"
                      placeholder="From"
                      value={formData.from}
                      onChange={handleInputChange}
                      className="w-[180px] h-[40px] px-[16px] text-white placeholder:text-[#FFFFFF4D]  bg-transparent rounded-[8px] border border-[#D9D9D9] text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-white mb-[6px]"
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "11.17px",
                      }}
                    >
                      Destination
                    </label>
                    <input
                      type="text"
                      name="destination"
                      placeholder="Destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-[180px] h-[40px] px-[16px] text-white placeholder:text-[#FFFFFF4D]  bg-transparent rounded-[8px] border border-[#D9D9D9] text-sm"
                    />
                  </div>
                </>
              )}

              {/* Date & Time */}
              {/* <div className="flex flex-col">
                <label
                  className="text-white mb-[6px]"
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "11.17px",
                  }}
                >
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="datetime"
                  value={`${formData.date}T${formData.time}`}
                  onChange={(e) => {
                    const [date, time] = e.target.value.split("T");
                    setFormData({ ...formData, date, time });
                  }}
                  className="w-[200px] h-[40px] px-[16px] text-white placeholder:text-[#FFFFFF4D]  bg-transparent rounded-[8px] border border-[#D9D9D9] text-sm"
                />
              </div> */}
              <div className="flex flex-col">
                <label
                  className="text-white mb-[6px]"
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "11.17px",
                  }}
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-[170px] h-[40px] px-[16px] text-white placeholder:text-[#FFFFFF4D] bg-transparent rounded-[8px] border border-[#D9D9D9] text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-white mb-[6px]"
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "11.17px",
                  }}
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-[130px] h-[40px] px-[16px] text-white placeholder:text-[#FFFFFF4D] bg-transparent rounded-[8px] border border-[#D9D9D9] text-sm"
                />
              </div>

              {/* Name */}
              <div className="flex flex-col">
                <label
                  className="text-white mb-[6px]"
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "11.17px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-[200px] h-[40px] px-[16px] text-white placeholder:text-[#FFFFFF4D]  bg-transparent rounded-[8px] border border-[#D9D9D9] text-sm"
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col">
                <label
                  className="text-white mb-[6px]"
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "11.17px",
                  }}
                >
                  Contact No.
                </label>
                <input
                  type="tel"
                  name="contact"
                  placeholder="+91 1234567890"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-[150px] h-[40px] px-[8px] text-white placeholder:text-[#FFFFFF4D]  bg-transparent rounded-[8px] border border-[#D9D9D9] text-sm"
                />
              </div>

              {/* Search Button */}
              <div className="flex flex-col justify-end mt-auto">
                <button
                  onClick={handleSearch}
                  className="w-[100px] h-[40px] bg-white text-[#3D3E98] font-semibold rounded-[8px] hover:bg-gray-100 transition"
                >
                  Search
                </button>
              </div>
              {/* {(isMobile && showOffers) || (!isMobile && showOffers) ? (
            <div className="w-full md:w-auto mt-8 md:mt-0 md:ml-6">
              <CarOffersSection
                isVisible={showOffers}
                onClose={() => setShowOffers(false)}
              />
            </div>
          ) : null} */}
            </div>
          </div>
        </div>

        <div className="block md:hidden relative z-10 w-full flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start md:pl-[75px]">
          {/* Pick Your Ride Form */}
          {!isMobile || !showOffers ? (
            <div className="bg-[#3D3E98] text-white shadow-2xl w-[334.04px] md:w-[450px] rounded-[7.42px] md:rounded-[8px] pt-[20.78px] md:pt-[32px] pr-[23.75px] md:pr-[32px] pb-[20.78px] md:pb-[32px] pl-[23.75px] md:pl-[32px] mb-10 md:mb-0 ">
              <h2 className="text-xl md:text-2xl font-bold text-center mb-6 font-sans">
                Pick Your Ride
              </h2>

              {/* Tabs */}
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

              {/* Form Fields */}
              <div className="space-y-4">
                {activeTab === "outstation" && (
                  <>
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
                        className="placeholder:text-[#ffff] placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
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
                        className="placeholder:text-[#ffff] placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                      />
                    </div>
                  </>
                )}

                {activeTab === "local" && (
                  <div>
                    <label className="block text-sm font-bold mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Start typing location name"
                      className="placeholder:text-[#ffff] placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                    Date & Time
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className=" placeholder:text-[#ffff] placeholder:text-[14px] placeholder:font-['Montserrat'] flex-1 px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base placeholder:text-center"
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="flex-1 px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base placeholder:text-center"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="placeholder:text-[#ffff] placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                    Contact No.
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="+91 1234567890"
                    className="placeholder:text-[#ffff] placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                  />
                </div>

                <button
                  onClick={handleSearch}
                  className="w-full bg-white text-[#3D3E98] py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors mt-3 text-base md:text-[18px]"
                >
                  Search
                </button>
              </div>
            </div>
          ) : null}

          {/* Car Offers Section */}
          {(isMobile && showOffers) || (!isMobile && showOffers) ? (
            <div className="w-full md:w-auto mt-8 md:mt-0 md:ml-6">
              <CarOffersSection
                isVisible={showOffers}
                onClose={() => setShowOffers(false)}
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="relative">
        {/* Red strip */}
        <div className="absolute w-full h-[60px] md:h-[105px] bg-[#EB1C25]"></div>

        {/* Stats container - Desktop version */}
        <div className="hidden md:block relative w-full h-[100px] bg-[#3D3E98] mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-[1066px] flex justify-between items-center h-[45px] top-[28px] px-4 md:px-0">
            <div className="text-center flex flex-col gap-1">
              <div className="font-['DM_Sans'] font-bold text-[35px] leading-[21.6px] text-center text-white">
                {yearsCount}+
              </div>
              <div className="font-['DM_Sans'] font-bold text-[15px] leading-[20px] text-center capitalize text-white">
                Years Trust
              </div>
            </div>
            <div className="text-center flex flex-col gap-1">
              <div className="font-['DM_Sans'] font-bold text-[35px] leading-[21.6px] text-center text-white">
                {carsCount}+
              </div>
              <div className="font-['DM_Sans'] font-bold text-[15px] leading-[20px] text-center capitalize text-white">
                Cars
              </div>
            </div>
            <div className="text-center flex flex-col gap-1">
              <div className="font-['DM_Sans'] font-bold text-[35px] leading-[21.6px] text-center text-white">
                {busesCount}+
              </div>
              <div className="font-['DM_Sans'] font-bold text-[15px] leading-[20px] text-center capitalize text-white">
                Buses
              </div>
            </div>
            <div className="text-center flex flex-col gap-1">
              <div className="font-['DM_Sans'] font-bold text-[35px] leading-[21.6px] text-center text-white">
                {passengersCount}+
              </div>
              <div className="font-['DM_Sans'] font-bold text-[15px] leading-[20px] text-center capitalize text-white">
                Daily Passengers
              </div>
            </div>
            <div className="text-center flex flex-col gap-1">
              <div className="font-['DM_Sans'] font-bold text-[35px] leading-[21.6px] text-center text-white">
                {ridesCount === 1000000 ? "1M+" : ridesCount}
              </div>
              <div className="font-['DM_Sans'] font-bold text-[15px] leading-[20px] text-center capitalize text-white">
                Happy Rides
              </div>
            </div>
            {/* <div className="text-center flex flex-col gap-1">
              <div className="font-['DM_Sans'] font-bold text-[35px] leading-[21.6px] text-center text-white">
                {yearsCount}+
              </div>
              <div className="font-['DM_Sans'] font-bold text-[15px] leading-[20px] text-center capitalize text-white">
                Years
              </div>
            </div> */}
          </div>
        </div>

        {/* Mobile Stats - Auto sliding (3 per slide) */}
        <div className="block md:hidden relative w-full h-[57px] bg-[#3D3E98] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentStatsSlide * 100}%)` }}
          >
            {mobileStatChunks.map((chunk, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex items-center justify-around px-4"
              >
                {chunk.map((stat, idx) => (
                  <div key={idx} className="text-center w-1/3">
                    {stat ? (
                      <>
                        <div className="flex flex-col items-center justify-center leading-tight">
                          <div
                            className="font-['DM_Sans'] font-bold text-white capitalize text-[18px]"
                            style={{ lineHeight: "20px", marginBottom: "0px" }} // adjust as needed
                          >
                            {stat.value}
                          </div>
                          <div
                            className="font-['DM_Sans'] font-bold text-white capitalize text-[11px]"
                            style={{ lineHeight: "14px" }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full" /> // Empty placeholder to maintain layout
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <WhyRideSection isHome={true} /> */}
      {true && <StepsSectionDesktop />}
      <BookYourRideMobile />

      {
        <OurFleetsSection
          fleetData={fleetData}
          activeFleetTab={activeFleetTab}
          setActiveFleetTab={setActiveFleetTab}
          fleetImages={{
            "luxury-cars": "/ourFleet/Luxury/BMW.jpg",
            "suv-muv": "/ourFleet/SUV-MUV/invicto.jpg",
            "tempo-travellers": "/ourFleet/TT/Urbania.jpg",
            sedans: "/ourFleet/Sedan/Amaze.jpg",
            "luxury-buses": "/ourFleet/Buses/volvo/1.jpg",
            "ev-cars": "/ourFleet/EV/MG EV.jpg",
          }}
        />
      }

      {
        <OurFleetsMobile
          fleetData={fleetData}
          activeFleetTab={activeFleetTab}
          setActiveFleetTab={setActiveFleetTab}
          fleetImages={{
            "luxury-cars": "/ourFleet/Luxury/BMW.jpg",
            "suv-muv": "/ourFleet/SUV-MUV/invicto.jpg",
            "tempo-travellers": "/ourFleet/TT/Urbania.jpg",
            sedans: "/ourFleet/Sedan/Amaze.jpg",
            "luxury-buses": "/ourFleet/Buses/volvo/1.jpg",
            "ev-cars": "/ourFleet/EV/Tata Tigor.jpg",
          }}
        />
      }
      <WhyRideSection isHome={true} />
      {/* <BookYourRideMobile /> */}

      <div className="py-8 md:py-16">
        <WhatWeOffer />
      </div>

      <CustomerTestimonials />

      {/* News & Insights Section */}
      <NewsInsights />

      {/* FAQ Section */}
      <FAQ />

      {/* Social Connect Section */}
      <SocialConnect />

      {/* Reservation Banner */}
      <ReservationBanner />
      <div className="relative w-full h-[5px] bg-[#EB1C25]"></div>
    </div>
  );
}
