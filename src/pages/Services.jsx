import ReservationBanner from "@/components/ReservationBanner";
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

// const services = [
//   {
//     title: "Chauffeured Car Rentals",
//     image: "/suv.png",
//     description:
//       "Choose from Vivek Travels’ extensive fleet of 900+ vehicles including Hatchbacks like WagonR i10 Swift i20 Sedans like Dzire Etios Xcent Ciaz City Verna Civic Altis SUVs and MUVs like Ertiga Marrazo Innova Crysta Fortuner and Luxury Cars like Audi A4 A6 A8 BMW 3 Series 5 Series 7 Series Mercedes C Class E Class S Class Experience professional chauffeur-driven service with well-trained drivers for travel across Delhi NCR and all outstation destinations Flexible rental packages include 4 hours 40 kms 8 hours 80 kms and 12 hours 120 kms or personalized holiday trips",
//     reverse: false,
//   },
//   {
//     title: "Luxury & Corporate Bus Rentals",
//     image: "/bus.png",
//     description:
//       "Experience premium group travel with Vivek Travels’ wide fleet of over 100 luxury and corporate buses designed for comfort and safety Choose from Tempo Travellers Non-AC Buses Deluxe AC Buses Super Deluxe Buses Volvo-Type Coaches and top-tier Volvo Buses ideal for weddings corporate events school trips or family vacations our services offer complete flexibility based on your group size Vivek Travels proudly operates the largest fleet of Scania Buses in North India known as India’s most luxurious buses Relive the joy of travelling together just like in classic Bollywood films with easy booking and exceptional service every time",
//     reverse: true,
//   },
//   {
//     title: "Wedding Transportation Solutions",
//     image: "/tourister.png",
//     description:
//       " Vivek Travels offers seamless wedding transportation across states with a premium fleet of cars and buses for your guests Our expert team ensures smooth travel experiences for your friends and family from arrival to departure Choose from luxury sedans spacious SUVs tempo travellers and high-end buses including Volvo and Scania options Customized packages are available for baraat groom and bride side travel and guest shuttles across cities Celebrate stress-free while we manage the logistics Call us today for tailor-made wedding transport packages designed to match your unique celebration and create unforgettable memories for you and your loved ones",
//     reverse: false,
//   },
//   {
//     title: "VIP & Delegate Travel Services",
//     image: "/luxdelux.png",
//     description:
//       "Vivek Travels offers premium road transport solutions tailored for high-security dignitaries and international delegates With extensive experience in handling VVIP movements we ensure complete safety discretion and professionalism Our fleet includes luxury sedans SUVs and high-end buses equipped for secure travel We have proudly partnered with the Government of India on multiple occasions delivering trusted and world-class service for national and international events Our trained chauffeurs and support staff are experienced in protocol and security coordination making us a preferred choice for VIP travel across India Experience unmatched service standards with Vivek Travels for your most important journeys",
//     reverse: true,
//   },
//   {
//     title: "MICE Transport Services",
//     image: "/merc.png",
//     description:
//       "Vivek Travels offers reliable transport solutions for Meetings Incentives Conferences and Exhibitions across Delhi NCR and beyond We provide daily office commute services for corporate employees with a wide range of cars and coaches to suit every requirement From executive sedans to large-capacity buses our fleet ensures safe and timely travel for your team We also offer corporate rentals for events offsites and business travel along with flexible packages and special offers Partner with Vivek Travels for seamless professional transport support and ensure your business moves efficiently every day Connect with us today for customized MICE travel solutions",
//     reverse: false,
//   },
// ];

const services = [
  {
    title: "Car Rental Services",
    image: "/suv.png",
    description:
      "Whether you need a vehicle for a few hours, a full day, or long-term use — our car rental services are designed for comfort, convenience, and affordability. With a wide variety of cars, you can choose amongst hourly, daily and monthly rental option. Our 24x7 support team and GPS enabled cabs are ready to take you places. With operational fleet size of over 1200 Cars, you can choose you ride from:\n• Hatchbacks: WagonR, i10, Swift, i20\n• Sedans: Dzire, Etios, Ciaz, City, Verna\n• SUVs/MUVs: Ertiga, Innova Crysta, Fortuner\n• Luxury Cars: BMW and Mercedes.",
    reverse: false,
  },
  {
    title: "Luxury & Corporate Bus Rentals",
    image: "/bus.png",
    description:
      "We own and operate a wide range of buses suited for all group sizes and travel purposes — from family trips, corporate retreats to educational tours. With operational fleet size of over 200 buses, you can choose your ride depending on the number of passengers from:\n• Tempo travellers and Urbania\n• Luxury Bus ranging from 27 to 49 seater\n• Volvo and Scania Buses ranging from 35 to 52 seater.",
    reverse: true,
  },
  {
    title: "Wedding and Event Transportation Solutions",
    image: "/tourister.png",
    description:
      "We expertise in seamless transport coordination for your big days or grand events — handled with elegance and punctuality.\n• Guest Transfers (Cars, Tempo Travellers, Buses)\n• Luxury Vehicles for VIPs\n• Multi-Location Pickups & Coordination\n• On-site Transport Manager (Optional)",
    reverse: false,
  },
  {
    title: "VIP & Delegate Travel Services",
    image: "/luxdelux.png",
    description:
      "We have immense experience in handling international delegations and are trusted by top Government officials and international delegates. We are proud service providers in the events like G-20 Summit, South African Summit, Annual Functions of many Government Ministries and PSUs. Our protocol-trained drivers for high-security travel have always kept the trust and safety of the passengers as their top priority.",
    reverse: true,
  },
  {
    title: "Corporate Transport Solutions",
    image: "/merc.png",
    description:
      "Trusted by top corporations for reliable and cost-effective employee transportation.\n• Dedicated Fleet Management\n• Daily Pick-Up & Drop Services\n• Real-Time Tracking & Driver Monitoring\n• Custom Routes & Scheduling\n• Compliance with Safety & Hygiene Protocols",
    reverse: false,
  },
];

const ServiceCard = ({
  title,
  description,
  image,
  reverse,
  onEnquireClick,
}) => {
  return (
    <div
      className={`bg-[#F7F7F7] flex items-center justify-between gap-[15px] px-6 py-8
    ${reverse ? "flex-row-reverse" : "flex-row"}
    flex-wrap
    md:flex-nowrap
    h-auto md:h-[364px]
  `}
      style={{ position: "static" }} // force no sticky or fixed
    >
      <div className="w-full md:w-[500px] h-[200px] md:h-[300px] flex items-center justify-center flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain bg-transparent"
        />
      </div>

      <div className="w-full md:w-[720px] flex flex-col justify-between gap-[20px] mt-4 md:mt-0">
        <h2
          className="text-[28px] md:text-[40px] leading-[32px] md:leading-[40px] font-bold font-dmSans text-[#3D3E98] "
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {title}
        </h2>
        {/* <p className="text-[14px] font-light font-['DM Sans'] text-[#000000E5] text-justify leading-[20px]">
          {description}
        </p> */}

        <div
          className="text-[14px] font-light font-dmSans text-[#000000E5] text-justify leading-[20px] whitespace-pre-line"
          style={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {description.split("•").map((line, index) =>
            line.trim() ? (
              <p key={index} className="mb-1">
                {index > 0 ? "• " : ""}
                {line.trim()}
              </p>
            ) : null
          )}
        </div>
        <button
          className="w-full md:w-[211px] h-[50px] md:h-[65px] bg-[#3D3E98] text-white text-[18px] md:text-[24px] font-bold font-['DM Sans']"
          style={{
             fontFamily: "DM Sans, sans-serif",
          }}
          onClick={onEnquireClick}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("local");
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-[60px] bg-white py-12 px-4 md:px-0">
        {/* Our Services Heading */}
        <h1
          className="font-['DM Sans'] font-bold text-[36px] md:text-[60px] leading-[110%] tracking-[1%] text-[#3D3E98] text-center"
          style={{ height: 42,
             fontFamily: "DM Sans, sans-serif",
           }}
        >
          Our Services
        </h1>

        {/* Intro Paragraph */}
        <p
          className="font-['DM Sans'] font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] tracking-[2%] text-[#000000] text-justify max-w-[95vw] md:max-w-[1272px]"
          style={{ 
            height: "auto",
            fontFamily: "DM Sans, sans-serif",
           }}
        >
          At Vivek Travels, we take pride in offering premium transportaton
          solutons tailored to your every need. With one of the largest and most
          diverse fleets in the region, we cater to individuals, corporates,
          insttutons, travel agencies, and event organizers with complete
          flexibility and professionalism
        </p>

        {/* Service Cards */}
        {services.map((item, idx) => (
          <ServiceCard
            key={idx}
            {...item}
            onEnquireClick={() => setIsModalOpen(true)}
          />
        ))}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          formData={formData}
          setFormData={setFormData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleInputChange={handleInputChange}
        />
      </div>
      <ReservationBanner />
      <div className="relative w-full h-[3px] bg-[#EB1C25]"></div>
    </>
  );
};

export default Services;
