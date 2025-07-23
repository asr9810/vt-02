import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CarOffersSection({ isVisible, onClose }) {
  const [activeCategory, setActiveCategory] = useState("sedans");
  const [offerCount, setOfferCount] = useState(
    Math.floor(Math.random() * 41) + 10
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const categoryCarNames = {
    sedans: [
      "Maruti Suzuki Dzire",
      "Hyundai Aura",
      "Honda Amaze",
      "Honda City",
      "Maruti Ciaz",
    ],
    "suv-muv": [
      "Maruti Suzuki Ertiga",
      "Toyota Ruminon",
      "Innova Crysta",
      "Innova Hycross",
      "Maruti Suzuki Invicto",
      "Toyota Fortuner",
      "Kia Carnival",
      "Kia Carens",
    ],
    "luxury-cars": [
      "Toyota Camry",
      "Mercedes E-Class",
      "Mercedes S-Class",
      "BMW 7 Series",
      "Jaguar XF",
      "Land Rover Defender",
      "Toyota Vellfire",
    ],
    "tempo-travellers": [
      "Luxury Maharaja Tempo Traveller",
      "Tempo Travellers 2x1",
      "Urbania - Modified",
      "Urbania 2x1",
    ],
    "ev-cars": ["Tata Tigor", "Tata Nexon", "MG ZsEV", "Ioniq 5"],
    "luxury-buses": ["Mini Bus", "Luxury Coach", "Scania/Volvo Bus"],
  };

  const carDetails = {
    "Maruti Suzuki Dzire": {
      seats: 4,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Hyundai Aura": {
      seats: 4,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Honda Amaze": {
      seats: 4,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Honda City": {
      seats: 4,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Maruti Ciaz": {
      seats: 4,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },

    "Maruti Suzuki Ertiga": {
      seats: 7,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Toyota Ruminon": {
      seats: 7,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Innova Crysta": {
      seats: 7,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Innova Hycross": {
      seats: 7,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Maruti Suzuki Invicto": {
      seats: 7,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Toyota Fortuner": {
      seats: 7,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Kia Carnival": {
      seats: 7,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Kia Carens": {
      seats: 7,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },

    "Toyota Camry": { seats: 5, features: [] },
    "Mercedes E-Class": {
      seats: 5,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Mercedes S-Class": { seats: 5, features: [] },
    "BMW 7 Series": { seats: 5, features: [] },
    "Jaguar XF": { seats: 5, features: [] },
    "Land Rover Defender": { seats: 8, features: [] },
    "Toyota Vellfire": { seats: 7, features: [] },

    "Luxury Maharaja Tempo Traveller": {
      seats: 12,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
        "Ample Luggage Space",
      ],
    },
    "Tempo Travellers 2x1": { seats: '15/17', features: [] },
    "Urbania - Modified": { seats: '10/11/14', features: [] },
    "Urbania 2x1": { seats: 16, features: [] },

    "Tata Tigor": {
      seats: 5,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
      ],
    },
    "Tata Nexon": { seats: 5, features: [] },
    "MG ZsEV": { seats: 5, features: [] },
    "Ioniq 5": { seats: 5, features: [] },

    "Mini Bus": {
      seats: 26,
      features: [
        "Seating Capacity",
        "GPS Tracking",
        "Infotainment System",
        "Air Condition",
        "Ample Luggage Space",
      ],
    },
    "Luxury Coach": { seats: '35/41/45', features: [] },
    "Scania/Volvo Bus": { seats: '39/41/45', features: [] },
  };

  // const carImages = {
  //   "Maruti Suzuki Dzire": "/ourFleet/Sedan/dzire/1.jpg",
  //   "Hyundai Aura": "/ourFleet/Sedan/aura/1.jpg",
  //   "Honda Amaze": "/ourFleet/Sedan/amaze/1.jpg",
  //   "Honda City": "/ourFleet/Sedan/hondacity/1.jpg",
  //   "Maruti Ciaz": "/ourFleet/Sedan/ciaz/1.jpg",

  //   "Maruti Suzuki Ertiga": "/ourFleet/SUV-MUV/ertiga/1.jpg",
  //   "Toyota Ruminon": "/ourFleet/SUV-MUV/rumino/1.jpg",
  //   "Innova Crysta": "/ourFleet/SUV-MUV/crysta/1.jpg",
  //   "Innova Hycross": "/ourFleet/SUV-MUV/hycross/1.jpg",
  //   "Maruti Suzuki Invicto": "/ourFleet/SUV-MUV/invicto/1.jpg",
  //   "Toyota Fortuner": "/ourFleet/SUV-MUV/fortuner/1.jpg",
  //   "Kia Carnival": "/ourFleet/SUV-MUV/carnival/1.jpg",
  //   "Kia Carens": "/ourFleet/SUV-MUV/carens/1.jpg",

  //   "Toyota Camry": "/ourFleet/Luxury/Camry/1.jpg",
  //   "Mercedes E-Class": "/ourFleet/Luxury/eclass/1.jpg",
  //   "Mercedes S-Class": "/ourFleet/Luxury/sclass/1.jpg",
  //   "BMW 7 Series": "/ourFleet/Luxury/bmw/1.jpg",
  //   "Jaguar XF": "/ourFleet/Luxury/jfx/1.jpg",
  //   "Land Rover Defender": "/ourFleet/Luxury/Defendor/1.jpg",
  //   "Toyota Vellfire": "/ourFleet/Luxury/vellfire/1.jpg",

  //   "Luxury Maharaja Tempo Traveller": "/ourFleet/TT/TT/1.jpg",
  //   "Tempo Travellers 2x1r": "/ourFleet/TT/TT/1.jpg",
  //   "Force Urbania": "/ourFleet/TT/Urbania/1.jpg",
  //   "Urbania - Modified": "/ourFleet/TT/Urbania/1.jpg",
  //   "Urbania 2x1": "/ourFleet/TT/Urbania/1.jpg",

  //   "Tata Tigor": "/ourFleet/EV/tigore/1.jpg",
  //   "Tata Nexon": "/ourFleet/EV/nexon/1.jpg",
  //   "MG ZsEV": "/ourFleet/EV/mg/1.jpg",
  //   "Ioniq 5": "/ourFleet/EV/ioniq5/1.jpg",

  //   "Bharat Benz Mini Bus": "/ourFleet/Buses/mb/1.jpg",
  //   "Ashok Leyland": "/ourFleet/Buses/coach/1.jpg",
  //   Volvo: "/ourFleet/Buses/volvo/1.jpg",
  // };

  const carImages = {
    "Maruti Suzuki Dzire": [
      "/ourFleet/Sedan/dzire/1.jpg",
      "/ourFleet/Sedan/dzire/2.jpg",
      "/ourFleet/Sedan/dzire/3.jpg",
    ],
    "Hyundai Aura": [
      "/ourFleet/Sedan/aura/1.jpg",
      "/ourFleet/Sedan/aura/2.jpg",
      "/ourFleet/Sedan/aura/3.jpg",
    ],
    "Honda Amaze": [
      "/ourFleet/Sedan/amaze/1.jpg",
      "/ourFleet/Sedan/amaze/2.jpg",
      "/ourFleet/Sedan/amaze/3.jpg",
    ],
    "Honda City": [
      "/ourFleet/Sedan/hondacity/1.jpg",
      "/ourFleet/Sedan/hondacity/2.jpg",
      "/ourFleet/Sedan/hondacity/3.jpg",
    ],
    "Maruti Ciaz": [
      "/ourFleet/Sedan/ciaz/1.jpg",
      "/ourFleet/Sedan/ciaz/2.jpg",
      "/ourFleet/Sedan/ciaz/3.jpg",
    ],

    "Maruti Suzuki Ertiga": [
      "/ourFleet/SUV-MUV/ertiga/1.jpg",
      "/ourFleet/SUV-MUV/ertiga/2.jpg",
      "/ourFleet/SUV-MUV/ertiga/3.jpg",
    ],
    "Toyota Ruminon": [
      "/ourFleet/SUV-MUV/rumino/1.jpg",
      "/ourFleet/SUV-MUV/rumino/2.jpg",
      "/ourFleet/SUV-MUV/rumino/3.jpg",
    ],
    "Innova Crysta": [
      "/ourFleet/SUV-MUV/crysta/1.jpg",
      "/ourFleet/SUV-MUV/crysta/2.jpg",
      "/ourFleet/SUV-MUV/crysta/3.jpg",
    ],
    "Innova Hycross": [
      "/ourFleet/SUV-MUV/hycross/1.jpg",
      "/ourFleet/SUV-MUV/hycross/2.jpg",
      "/ourFleet/SUV-MUV/hycross/3.jpg",
    ],
    "Maruti Suzuki Invicto": [
      "/ourFleet/SUV-MUV/invicto/1.jpg",
      "/ourFleet/SUV-MUV/invicto/2.jpg",
      "/ourFleet/SUV-MUV/invicto/3.jpg",
    ],
    "Toyota Fortuner": [
      "/ourFleet/SUV-MUV/fortuner/1.jpg",
      "/ourFleet/SUV-MUV/fortuner/2.jpg",
      "/ourFleet/SUV-MUV/fortuner/3.jpg",
    ],
    "Kia Carnival": [
      "/ourFleet/SUV-MUV/carnival/1.jpg",
      "/ourFleet/SUV-MUV/carnival/2.jpg",
      "/ourFleet/SUV-MUV/carnival/3.jpg",
    ],
    "Kia Carens": [
      "/ourFleet/SUV-MUV/carens/1.jpg",
      "/ourFleet/SUV-MUV/carens/2.jpg",
      "/ourFleet/SUV-MUV/carens/3.jpg",
    ],

    "Toyota Camry": [
      "/ourFleet/Luxury/Camry/1.jpg",
      "/ourFleet/Luxury/Camry/2.jpg",
      "/ourFleet/Luxury/Camry/3.jpg",
    ],
    "Mercedes E-Class": [
      "/ourFleet/Luxury/eclass/1.jpg",
      "/ourFleet/Luxury/eclass/2.jpg",
      "/ourFleet/Luxury/eclass/3.jpg",
    ],
    "Mercedes S-Class": [
      "/ourFleet/Luxury/sclass/1.jpg",
      "/ourFleet/Luxury/sclass/2.jpg",
      "/ourFleet/Luxury/sclass/3.jpg",
    ],
    "BMW 7 Series": [
      "/ourFleet/Luxury/bmw/1.jpg",
      "/ourFleet/Luxury/bmw/2.jpg",
      "/ourFleet/Luxury/bmw/3.jpg",
    ],
    "Jaguar XF": [
      "/ourFleet/Luxury/jfx/1.jpg",
      "/ourFleet/Luxury/jfx/2.jpg",
      "/ourFleet/Luxury/jfx/3.jpg",
    ],
    "Land Rover Defender": [
      "/ourFleet/Luxury/Defendor/1.jpg",
      "/ourFleet/Luxury/Defendor/2.jpg",
      "/ourFleet/Luxury/Defendor/3.jpg",
    ],
    "Toyota Vellfire": [
      "/ourFleet/Luxury/vellfire/1.jpg",
      "/ourFleet/Luxury/vellfire/2.jpg",
      "/ourFleet/Luxury/vellfire/3.jpg",
    ],

    "Luxury Maharaja Tempo Traveller": [
      "/ourFleet/TT/TT/1.jpg",
      "/ourFleet/TT/TT/2.jpg",
      "/ourFleet/TT/TT/3.jpg",
    ],
    
    "Tempo Travellers 2x1": [
      "/ourFleet/TT/TT/1.jpg",
      "//ourFleet/TT/TT/4.jpg",
      "/ourFleet/TT/TT/3.jpg",
    ],
    "Urbania - Modified": [
      "/ourFleet/TT/Urbania/1.jpg",
      "/ourFleet/TT/Urbania/3.jpg",
    ],
    "Urbania 2x1": ["/ourFleet/TT/Urbania/1.jpg", "/ourFleet/TT/Urbania/2.jpg"],

    "Tata Tigor": ["/ourFleet/EV/tigore/1.jpg", "/ourFleet/EV/tigore/2.jpg"],
    "Tata Nexon": ["/ourFleet/EV/nexon/1.jpg", "/ourFleet/EV/nexon/2.jpg"],
    "MG ZsEV": ["/ourFleet/EV/mg/1.jpg", "/ourFleet/EV/mg/2.jpg"],
    "Ioniq 5": ["/ourFleet/EV/ioniq5/1.jpg", "/ourFleet/EV/ioniq5/2.jpg"],

    "Mini Bus": [
      "/ourFleet/Buses/mb/1.jpg",
      "/ourFleet/Buses/mb/2.jpg",
    ],
    "Luxury Coach": [
      "/ourFleet/Buses/coach/1.jpg",
      "/ourFleet/Buses/coach/2.jpg",
    ],
    "Scania/Volvo Bus" : ["/ourFleet/Buses/volvo/1.jpg", "/ourFleet/Buses/volvo/2.jpg"],
  };

  const cars = categoryCarNames[activeCategory].map((name, index) => ({
    id: index + 1,
    name,
    image: Array.isArray(carImages[name])
      ? carImages[name][0]
      : carImages[name], // ✅ this line fixed
    seats: carDetails[name]?.seats || 6,
    features: carDetails[name]?.features?.length
      ? carDetails[name].features
      : ["Air Conditioned", "Infotainment System", "GPS Enabled"],
    isQuoteRequested: false,
  }));

  const [quoteState, setQuoteState] = useState({});

  const categories = [
    { id: "sedans", label: "Sedans" },
    { id: "suv-muv", label: "SUV / MUV" },
    { id: "luxury-cars", label: "Luxury Cars" },
    { id: "tempo-travellers", label: "VAN" },
    { id: "ev-cars", label: "EV Cars" },
    { id: "luxury-buses", label: "Luxury Buses" },
  ];

  const handleGetQuote = (carId) => {
    setQuoteState({ ...quoteState, [carId]: true });
  };

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=919650627278", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919650627278", "_blank");
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [modalOpen]);

  if (!isVisible) return null;

  return (
    <>
      <div className="w-full max-w-[1291px] mx-auto px-2">
        <div className="w-full max-w-[825px] mx-auto bg-white rounded-[10px] shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-[#3D3E98] text-white px-4 md:px-[67px] py-4 md:py-[28px] min-h-[120px] md:h-[151px]">
            <div className="flex flex-col items-start justify-between h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
                We found 32 offers
              </h2>
              <div className="flex gap-2 md:gap-[15px] flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOfferCount(Math.floor(Math.random() * 41) + 10);
                    }}
                    className={`px-2 md:px-4 py-1 md:py-2 rounded-lg  transition-colors font-dmSans font-semibold text-[13px] h-[35px] md:h-[49.37px] ${
                      activeCategory === category.id
                        ? "bg-white text-[#3D3E98]"
                        : "text-white hover:bg-white/10 bg-[#28282826]"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cars List Section */}
          <div
            className="px-2 md:px-4 space-y-1 "
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            {cars.map((car) => (
              <div
                key={car.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 p-2 border-b border-gray-100 last:border-b-0 min-h-[200px] md:h-[160px]"
              >
                {/* Car Image */}
                <div className="flex-shrink-0 w-full md:w-auto ">
                  <div className="relative">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="rounded-t-lg md:w-[150px]  md:h-[118px] "
                      style={{
                        borderTopLeftRadius: "8.39px",
                        borderTopRightRadius: "8.39px",
                      }}
                    />
                    {/* <button className="absolute bottom-[-28px]  border  border-black md:left-9 transform -translate-x-1/2 md:transform-none bg-white px-3 rounded text-sm text-gray-700 hover:bg-gray-50">
                    See More Photos
                  </button> */}
                    {/* <button className="font-['Montserrat'] bottom-[-20px] border border-black ml-[20px] bg-white px-3 rounded text-sm text-gray-700  cursor-pointer hover:bg-[#3D3E98] hover:text-white">
                      See More Photos
                    </button> */}

                    <button
                      className="font-['Montserrat'] bottom-[-20px] border border-black ml-[20px] bg-white px-3 rounded text-sm text-gray-700 cursor-pointer hover:bg-[#3D3E98] hover:text-white"
                      onClick={() => {
                        setModalImages(carImages[car.name] || []);
                        setModalOpen(true);
                      }}
                    >
                      See More Photos
                    </button>
                  </div>
                </div>

                {/* Car Details */}
                <div className="flex-1 w-full md:w-[380px] p-2 md:p-[12px_0]">
                  <h3 className="font-bold text-[#3D3E98] capitalize mb-3 md:mb-4 text-lg md:text-[24px] font-['Montserrat']">
                    {car.name}
                  </h3>
                  <div className="grid grid-cols-2 md:flex md:items-center gap-3 md:gap-6 text-sm text-gray-600">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <img src="/chair.png" alt="Seats" className="w-4 h-4" />
                        <span className="font-['Montserrat']">
                          {car.seats} Seats
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="/ac.png" alt="AC" className="w-4 h-4" />
                        <span className="font-['Montserrat']">
                          Air Conditioned
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <img src="/music.png" alt="Music" className="w-4 h-4" />
                        <span className="font-['Montserrat']">
                          Infotainment System
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="/gioloc.png" alt="GPS" className="w-4 h-4" />
                        <span className="font-['Montserrat']">GPS Enabled</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                  {!quoteState[car.id] ? (
                    <button
                      onClick={() => handleGetQuote(car.id)}
                      className="bg-[#3D3E98] hover:bg-[#2d2e7a] text-white px-4 md:px-6 py-2 rounded-lg font-medium w-full md:w-auto"
                    >
                      Get Quote
                    </button>
                  ) : (
                    <div className="flex gap-2 items-center justify-center md:justify-end w-full md:w-auto">
                      <button
                        onClick={handleWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleCall}
                        className="border border-blue-500 text-blue-500 p-2 rounded-full hover:bg-blue-100"
                      >
                        <FaPhoneAlt className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
{modalOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    onClick={() => {
      setModalOpen(false);
      document.body.style.overflow = "auto";
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white rounded-xl w-[90%] max-w-[800px] sm:max-w-[60%] max-h-[40vh]  overflow-hidden shadow-lg flex flex-col"
    >
      {/* Close Button */}
      <button
        className="absolute top-3 right-4 text-black font-bold text-2xl hover:text-gray-600 z-10"
        onClick={() => {
          setModalOpen(false);
          document.body.style.overflow = "auto";
        }}
      >
        ×
      </button>

      {/* Scrollable Content */}
      <div className="overflow-y-auto px-4 pt-10 pb-4 h-full">
        <div className="flex flex-col sm:flex-col md:flex-row gap-4 justify-center items-center">
          {modalImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Car image ${idx + 1}`}
              className="w-[90%] sm:w-[150px] md:w-[250px] h-auto rounded-lg object-cover shadow"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)}




    </>
  );
}
