import ReservationBanner from "@/components/ReservationBanner";
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

const services = [
  {
    title: "Chauffeured Car Rentals",
    image: "/suv.png",
    description:
      "Choose from Vivek Travels’ extensive fleet of 900+ vehicles including Hatchbacks like WagonR i10 Swift i20 Sedans like Dzire Etios Xcent Ciaz City Verna Civic Altis SUVs and MUVs like Ertiga Marrazo Innova Crysta Fortuner and Luxury Cars like Audi A4 A6 A8 BMW 3 Series 5 Series 7 Series Mercedes C Class E Class S Class Experience professional chauffeur-driven service with well-trained drivers for travel across Delhi NCR and all outstation destinations Flexible rental packages include 4 hours 40 kms 8 hours 80 kms and 12 hours 120 kms or personalized holiday trips",
    reverse: false,
  },
  {
    title: "Luxury & Corporate Bus Rentals",
    image: "/bus.png",
    description:
      "Experience premium group travel with Vivek Travels’ wide fleet of over 100 luxury and corporate buses designed for comfort and safety Choose from Tempo Travellers Non-AC Buses Deluxe AC Buses Super Deluxe Buses Volvo-Type Coaches and top-tier Volvo Buses ideal for weddings corporate events school trips or family vacations our services offer complete flexibility based on your group size Vivek Travels proudly operates the largest fleet of Scania Buses in North India known as India’s most luxurious buses Relive the joy of travelling together just like in classic Bollywood films with easy booking and exceptional service every time",
    reverse: true,
  },
  {
    title: "Wedding Transportation Solutions",
    image: "/tourister.png",
    description:
      " Vivek Travels offers seamless wedding transportation across states with a premium fleet of cars and buses for your guests Our expert team ensures smooth travel experiences for your friends and family from arrival to departure Choose from luxury sedans spacious SUVs tempo travellers and high-end buses including Volvo and Scania options Customized packages are available for baraat groom and bride side travel and guest shuttles across cities Celebrate stress-free while we manage the logistics Call us today for tailor-made wedding transport packages designed to match your unique celebration and create unforgettable memories for you and your loved ones",
    reverse: false,
  },
  {
    title: "VIP & Delegate Travel Services",
    image: "/luxdelux.png",
    description:
      "Vivek Travels offers premium road transport solutions tailored for high-security dignitaries and international delegates With extensive experience in handling VVIP movements we ensure complete safety discretion and professionalism Our fleet includes luxury sedans SUVs and high-end buses equipped for secure travel We have proudly partnered with the Government of India on multiple occasions delivering trusted and world-class service for national and international events Our trained chauffeurs and support staff are experienced in protocol and security coordination making us a preferred choice for VIP travel across India Experience unmatched service standards with Vivek Travels for your most important journeys",
    reverse: true,
  },
  {
    title: "MICE Transport Services",
    image: "/merc.png",
    description:
      "Vivek Travels offers reliable transport solutions for Meetings Incentives Conferences and Exhibitions across Delhi NCR and beyond We provide daily office commute services for corporate employees with a wide range of cars and coaches to suit every requirement From executive sedans to large-capacity buses our fleet ensures safe and timely travel for your team We also offer corporate rentals for events offsites and business travel along with flexible packages and special offers Partner with Vivek Travels for seamless professional transport support and ensure your business moves efficiently every day Connect with us today for customized MICE travel solutions",
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
        <h2 className="text-[28px] md:text-[40px] leading-[32px] md:leading-[40px] font-bold font-['DM Sans'] text-[#3D3E98]">
          {title}
        </h2>
        <p className="text-[14px] font-light font-['DM Sans'] text-[#000000E5] text-justify leading-[20px]">
          {description}
        </p>
        <button
          className="w-full md:w-[211px] h-[50px] md:h-[65px] bg-[#3D3E98] text-white text-[18px] md:text-[24px] font-bold font-['DM Sans']"
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
          style={{ height: 42 }}
        >
          Our Services
        </h1>

        {/* Intro Paragraph */}
        <p
          className="font-['DM Sans'] font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] tracking-[2%] text-[#000000] text-justify max-w-[95vw] md:max-w-[1272px]"
          style={{ height: "auto" }}
        >
          At Vivek Travels, we take pride in offering a comprehensive range of
          transportation solutions designed to meet the diverse needs of our
          customers. Whether you're planning a corporate trip, a personal
          getaway, or need reliable transport for special occasions, we’ve got
          you covered. Our fleet includes everything from executive cars and
          luxury sedans to spacious vans and buses—ensuring comfort, safety, and
          efficiency no matter the journey. With years of experience in the
          travel industry, we understand that every trip is unique. That’s why
          we tailor our services to fit your exact requirements, offering
          flexible booking options, professional drivers, and a seamless travel
          experience.
          <br />
          <br />
          Navigating your transportation needs is now easier than ever with our
          intuitive and easy-to-use platform. In just a few clicks, you can
          browse vehicles, compare features, and book your ride with complete
          confidence. At Vivek Travels, it’s not just about getting from point A
          to point B—it’s about getting there with ease, comfort, and peace of
          mind.
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
