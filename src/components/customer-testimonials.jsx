import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CustomerTestimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slideInterval = 2000;
  const slideTransitionDuration = 800;

  const testimonials = [
   
    {
      name: "Priya S.",
      location: "New Delhi",
      rating: 5,
      review:
        "Vivek Travels was the best choice for rental service in Delhi NCR, our family's trip. The chauffeur was extremely professional, and the car was immaculate. It felt like our comfort was paramount!",
    },
    {
      name: "Rohan G.",
      location: "Mumbai",
      rating: 5,
      review:
        "As an executive traveler, I value reliability and punctuality. I've never had an issue with Vivek Travels in either. Their quality of service is excellent, and their vehicles are always in great condition.",
    },
    {
      name: "Anjali M.",
      location: "Bangalore",
      rating: 5,
      review:
        "Hired a luxury car for my wedding. The attention to detail was impressive—from the car being perfectly decorated to our driver being polite and respectable, they made our day even better!",
    },
    {
      name: "Vikram K.",
      location: "Chennai",
      rating: 4,
      review:
        "Used their tempo traveller for a corporate trip. The traveller was big, clean, and our driver was very accommodating. Very easy booking process and their customer service was extremely responsive.",
    },
    {
      name: "Meera P.",
      location: "Pune",
      rating: 5,
      review:
        "Excellent service for airport transfers! They are always on-time, provide professional drivers, and have new and clean vehicles. I have used them for the last 2 years and will continue to!",
    },
    {
      name: "Arjun T.",
      location: "Hyderabad",
      rating: 4,
      review:
        "Had a great experience with their bus rental service for our college reunion. The seats were comfortable for the trip, I thought the fares were fair, and our driver was very accommodating.",
    },
    {
      name: "Neha S.",
      location: "Gurgaon",
      rating: 5,
      review:
        "For a weekend getaway, I booked their car rental in Delhi NCR — the vehicle was super clean, a smooth ride, and the driver was on time and polite. I will definitely use Vivek Travels again!!",
    },
    {
      name: "Rohit M.",
      location: "Noida",
      rating: 5,
      review:
        "I hired their car rental service in the Delhi NCR for a business engagement. The car was immaculate, the driver well-dressed, everything was running on time. What a great experience!",
    },
    {
      name: "Ananya K.",
      location: "South Delhi",
      rating: 5,
      review:
        "Rented a car for an airport drop — ride was flawless, booking was quick, and the team were very accommodating. Highly recommend car rentals in the Delhi NCR area.",
    },
    {
      name: "Vikram S.",
      location: "Faridabad",
      rating: 4,
      review:
        "Used Vivek Travels for a short outstation trip. Their chauffeur driven car rental in Delhi NCR is exactly what we needed — clean, cheap, and comfy seats. Will use them again!",
    },
  ];

  // Corporate clients auto-scroll state
  const [currentClientSlide, setCurrentClientSlide] = useState(0);
  const [isClientHovering, setIsClientHovering] = useState(false);
  const clientSlideInterval = 4000;
  const clientTransitionDuration = 800;

  // Corporate clients data
  const corporateClients = [
    { name: "Patanjali", logo: "/placeholder.png?height=100&width=100" },
    {
      name: "Reliance Industries Limited",
      logo: "/reliance.png?height=100&width=100",
    },
    { name: "The LaLit", logo: "/lalit.png?height=100&width=100" },
    { name: "RR Kabel", logo: "/rrkabel.png?height=100&width=100" },
    { name: "Samsung", logo: "/samsung.png?height=100&width=100" },
    { name: "Air India", logo: "/Air-India-Logo.png?height=100&width=100" },
    { name: "Bisleri", logo: "/bisleri.png?height=100&width=100" },
    { name: "Tata Motors", logo: "/placeholder.png?height=100&width=100" },
    { name: "HDFC Bank", logo: "/reliance.png?height=100&width=100" },
    { name: "Wipro", logo: "/Air-India-Logo.png?height=100&width=100" },
    { name: "Infosys", logo: "/rrkabel.png?height=100&width=100" },
    { name: "Mahindra", logo: "/samsung.png?height=100&width=100" },
  ];

  const totalPages = Math.ceil(testimonials.length / 2);

  // Auto-slide functionality with hover pause
  // useEffect(() => {
  //   if (isHovering) return;

  //   const timer = setInterval(() => {
  //     setCurrentPage((prev) => (prev + 1) % totalPages);
  //   }, slideInterval);

  //   return () => clearInterval(timer);
  // }, [totalPages, isHovering, slideInterval]);

  // Corporate clients auto-slide functionality
  useEffect(() => {
    if (isClientHovering) return;

    const timer = setInterval(() => {
      setCurrentClientSlide(
        (prev) => (prev + 1) % Math.ceil(corporateClients.length / 4)
      );
    }, clientSlideInterval);

    return () => clearInterval(timer);
  }, [corporateClients.length, isClientHovering, clientSlideInterval]);

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={12.4}
        className={
          index < rating ? "text-[#FF9500] fill-[#FF9500]" : "text-gray-300"
        }
      />
    ));
  };

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovering, testimonials.length]);

  return (
    <section className="gap-[72px] flex flex-col margin-0 auto ">
      {/* From Our Customers Section */}
      <div className="mx-auto ">
        {/* Desktop Header */}
        <div className="hidden md:block text-center mb-10">
          <h2
            style={{
              height: "27.95px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "20px",
              letterSpacing: "0%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#000000",
              marginBottom: "30px",
            }}
          >
            From Our Customers
          </h2>
        </div>

        {/* Mobile Header */}
        {/* <div className="block md:hidden text-center mb-6">
          <h2
            style={{
              width: "344px",
              height: "14px",
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "9.6px",
              letterSpacing: "0%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#000000",
              margin: "0 auto",
            }}
          >
            From Our Customers
          </h2>
        </div> */}

        {/* Desktop Testimonials Container */}
        <div className="hidden md:block">
          <div
            style={{
              // width: "1275px",
              height: "374.11px",
              borderRadius: "10px",
              paddingTop: "50px",
              paddingRight: "42.5px",
              paddingBottom: "50px",
              paddingLeft: "42.5px",
              background: "#FFFFFF",
              margin: "0 auto",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              style={{
                width: "1109px",
                height: "274.83px",
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "1109px",
                  height: "201.08px",
                  gap: "26.56px",
                  display: "flex",
                  overflowX: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "26.56px",
                    transition: `transform ${slideTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                    transform: `translateX(-${
                      currentPage * (761.46 + 26.56)
                    }px)`,
                    width: `${testimonials.length * (761.46 + 26.56)}px`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      style={{
                        width: "761.46px",
                        height: "201.08px",
                        borderRadius: "20px",
                        padding: "35.42px",
                        background: "#F6F6F6",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "690.63px",
                          height: "64.25px",
                          gap: "14.17px",
                          paddingBottom: "17.71px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: "690.63px",
                            height: "46.54px",
                            gap: "17.71px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              width: "596.77px",
                              height: "46.54px",
                              gap: "3.54px",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <div className="w-[596.77px] h-[21px] gap-[8.85px] flex items-center">
                              <span
                                className="font-inter font-bold text-[17.71px] leading-[120%] tracking-[0px] align-middle text-black"
                                style={{ fontFamily: "DM Sans, sans-serif" }}
                              >
                                {testimonial.name}
                              </span>
                            </div>
                            <div className="w-[596.77px] h-[22px] gap-[5.31px] flex items-start justify-start">
                              <span
                                className="font-inter font-normal text-[15.94px] leading-[100%] text-[#3C3C43D9] underline underline-offset-[2px]"
                                style={{ fontFamily: "DM Sans, sans-serif" }}
                              >
                                {testimonial.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "76.15px",
                            height: "46.54px",
                            gap: "3.54px",
                            paddingTop: "5.31px",
                            display: "flex",
                          }}
                        >
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <div className="pr-5 h-[66px]">
                        <p
                          className="font-inter font-normal text-[15.94px] leading-[140%] tracking-[0px] text-black"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        >
                          {testimonial.review}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                  marginTop: "24px",
                }}
              >
                <button
                  onClick={goToPrevPage}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#3D3E98",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  {currentPage + 1} / {totalPages}
                </span>

                <button
                  onClick={goToNextPage}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#3D3E98",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Testimonials */}
        <div className="block md:hidden w-full  justify-center px-4">
          <div className="w-[342px] overflow-hidden">
            {/* Header */}
            <div className="text-center mb-4">
              <h2
                className="text-[22px] font-bold text-black"
                style={{ fontFamily: "DM Sans" }}
              >
                From Our Customers
              </h2>
            </div>

            {/* Slider */}
            <div className="relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentPage * 352}px)`,
                  width: `${testimonials.length * 352}px`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: "352px" }}
                  >
                    <div className="bg-[#F6F6F6] rounded-[12px] px-4 py-3">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-[6px]">
                        <div>
                          <div
                            className="text-[12px] font-bold leading-[14px] text-black"
                            style={{ fontFamily: "DM Sans" }}
                          >
                            {testimonial.name}
                          </div>
                          <div
                            className="text-[10px] text-[#3C3C43D9] underline"
                            style={{
                              fontFamily: "DM Sans",
                              lineHeight: "12px",
                            }}
                          >
                            {testimonial.location}
                          </div>
                        </div>
                        <div className="flex gap-[2px] mt-[2px]">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Review */}
                      <p
                        className="text-[10.5px] text-black leading-[14px]"
                        style={{ fontFamily: "DM Sans" }}
                      >
                        {testimonial.review}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows Navigation */}

            <div className="flex justify-center items-center gap-6 mt-4 md:hidden">
              {/* Left Arrow */}
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="w-[32px] h-[32px] rounded-full bg-[#3D3E98] flex items-center justify-center shadow-md"
              >
                <FiChevronLeft className="text-white text-[18px]" />
              </button>

              {/* Count */}
              <span
                className="text-[12px] font-semibold text-black"
                style={{ fontFamily: "DM Sans" }}
              >
                {currentPage + 1} / {testimonials.length}
              </span>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => (prev + 1) % testimonials.length)
                }
                className="w-[32px] h-[32px] rounded-full bg-[#3D3E98] flex items-center justify-center shadow-md"
              >
                <FiChevronRight className="text-white text-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Corporate Clients Section */}
      <div className="mx-auto">
        {/* Desktop Header */}
        <div className="hidden md:block text-center mb-12">
          <h2
            style={{
              width: "1080px",
              height: "28px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "20px",
              letterSpacing: "2%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#000000",
              margin: "0 auto",
            }}
          >
            Our Corporate Clients
          </h2>
        </div>

        {/* Mobile Header */}
        {/* <div className="block md:hidden text-center mb-6">
          <h2
            style={{
              width: "518.52px",
              height: "15px",
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "9.6px",
              letterSpacing: "2%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#000000",
              margin: "0 auto",
            }}
          >
            Our Corporate Clients
          </h2>
        </div> */}

        {/* Desktop Corporate Clients */}
        <div className="hidden md:block">
          <div
            style={{
              width: "1080px",
              height: "366px",
              gap: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "1080px",
                height: "299px",
                overflowX: "hidden",
                position: "relative",
              }}
              onMouseEnter={() => setIsClientHovering(true)}
              onMouseLeave={() => setIsClientHovering(false)}
            >
              <div
                style={{
                  width: "1080px",
                  height: "279px",
                  gap: "13px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "1080px",
                    height: "133px",
                    overflowX: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "1898px",
                      height: "133px",
                      gap: "13px",
                      display: "flex",
                      transition: `transform ${clientTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                      transform: `translateX(-${
                        currentClientSlide * (260 + 13) * 4
                      }px)`,
                    }}
                  >
                    {corporateClients.map((client, index) => (
                      <div
                        key={index}
                        style={{
                          width: "260px",
                          height: "132px",
                          paddingTop: "8px",
                          paddingRight: "20px",
                          paddingBottom: "8px",
                          paddingLeft: "20px",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderColor: "#000000",
                          background: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {/* <img
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          style={{
                            width: "100%",
                            // height: "120px",
                            objectFit: "contain",
                            border:'1px solid black'
                          }}
                        /> */}
                        <img
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          style={{
                            width: "140px",
                            height: "90px",
                            objectFit: "contain",

                          }}
                        />

                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    width: "1080px",
                    height: "133px",
                    overflowX: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "1898px",
                      height: "133px",
                      gap: "13px",
                      display: "flex",
                      transition: `transform ${clientTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                      transform: `translateX(-${
                        currentClientSlide * (260 + 13) * 4
                      }px)`,
                    }}
                  >
                    {corporateClients
                      .slice(4)
                      .concat(corporateClients.slice(0, 4))
                      .map((client, index) => (
                        <div
                          key={`row2-${index}`}
                          style={{
                            width: "260px",
                            height: "132px",
                            paddingTop: "8px",
                            paddingRight: "20px",
                            paddingBottom: "8px",
                            paddingLeft: "20px",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "#000000",
                            background: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            style={{
                              width: "140px",
                              height: "90px",
                              objectFit: "contain",
                             
                            }}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <a
  href="/clients"
  className="px-6 flex justify-center items-center"
  style={{
    height: "43px",
    borderRadius: "8px",
    background: "#3D3E98",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.3em",
    color: "#FFFFFF",
    textDecoration: "none",
  }}
>
  VIEW MORE
</a>

          </div>
        </div>

        {/* Mobile Corporate Clients */}

        <div className="block md:hidden w-full px-4">
          <div className="w-full  space-y-4">
            {/* Grid of client logos */}
            <div className="grid grid-cols-3 gap-2">
              {corporateClients.slice(0, 6).map((client, index) => (
                <div
                  key={index}
                  className="bg-white border border-black flex items-center justify-center"
                  style={{
                    height: "64px",
                    padding: "8px",
                    width: "120px",
                  }}
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="w-[48px] h-[48px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* View More button */}
            <button
              className="flex justify-center items-center mx-auto bg-[#3D3E98] text-white py-2 px-4 rounded font-bold text-sm w-1/2"
              style={{ borderRadius: "8px" }}
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
