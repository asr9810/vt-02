import { useState, useEffect } from "react";
import busImg1 from "../assets/busImg1.png";
import busImg2 from "../assets/busImg2.png";
import ceremonyImg from "../assets/ceremonyImg.png";

const NewsInsights = () => {
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  const newsData = [
    {
      id: 1,
      image: busImg1,
      title: `Travel Smarter: What Most People Overlook When Booking a Rental Vehicle`,
      readMoreLink: "#",
    },
    {
      id: 3,
      image: ceremonyImg,
      title: `Luxury on the Highway: Inside Our Premium Intercity Bus Experience`,
      readMoreLink: "#",
    },
    {
      id: 2,
      image: busImg2,
      title: `The Road to Green: How Vivek Travels is Powering the Future with EVs`,
      readMoreLink: "#",
    },
  ];

  // Mobile auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % newsData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [newsData.length]);

  return (
    <>
    <section className="py-16 bg-white w-full">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black">News & Insights</h2>
        </div>

        {/* Cards Container */}
        <div className="flex justify-center gap-6 max-w-[1142px] mx-auto">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden flex flex-col w-[350px] h-[394px]"
            >
              {/* Card Image */}
              <div className="w-full h-[240px]">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt="News"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-between flex-grow px-4 py-4">
                <h3 className="text-black font-bold text-lg leading-5 mb-4">
                  {item.title}
                </h3>

                <button
                  className="w-[140px] h-[36px] bg-[#3D3E98] text-white font-medium rounded hover:opacity-90 transition-opacity"
                  onClick={() => window.open(item.readMoreLink, "_blank")}
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Auto sliding */}

    </section>

    {/* Mobile view */}
      <div className="block md:hidden w-full overflow-hidden">
        {/* Header */}
        <div className="text-center mb-6 px-4">
          <h2 className="text-[22px] font-bold text-black leading-none">
            News & Insights
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${newsData.length * 100}%`,
              transform: `translateX(-${
                (100 / newsData.length) * currentMobileSlide
              }%)`,
            }}
          >
            {newsData.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 flex justify-center px-4"
                style={{ width: `${100 / newsData.length}%` }}
              >
                <div className="bg-white rounded-lg shadow-md w-full max-w-[360px]">
                  {/* Image */}
                  <div className="w-full h-[220px] overflow-hidden rounded-t-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt="News"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-black font-bold text-base mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <button
                      className="w-[140px] h-[36px] bg-[#3D3E98] text-white text-sm font-medium rounded hover:opacity-90 transition-opacity"
                      onClick={() => window.open(item.readMoreLink, "_blank")}
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {/* <div className="flex justify-center mt-4 space-x-2">
          {newsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMobileSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentMobileSlide ? "bg-[#3D3E98]" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default NewsInsights;
