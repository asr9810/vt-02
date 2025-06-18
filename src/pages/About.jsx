import aboutImg1 from "../assets/aboutHeroImg.png";
import aboutImg2 from "../assets/aboutImg2.png";
import aboutImg3 from "../assets/aboutImg3.png";
import roadImage from "../assets/aboutImg4.png";
import vivek from "../assets/vivekBhatiaImage.png";
import vistrit from "../assets/vistritBhatiaImg.png";
import eyesImg from "../assets/eyes.png";
import visionImg from "../assets/vision.png";
// import visionImg from "../assets/vision2.svg";
import diamondImg from "../assets/diamond.png";
import dummyImg from "../assets/dummy.png";

import { useEffect, useRef } from "react";

export default function About() {
  // Timeline data for Our Journey section
  const cardImages = {
    MISSION: visionImg,
    VISION: eyesImg,
    VALUES: diamondImg,
  };

  // const scrollRef = useRef(null);
  const awardsScrollRef = useRef(null);

  useEffect(() => {
    const container = awardsScrollRef.current;

    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // px per interval
    const scrollInterval = 200; // ms

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0; // Reset to beginning
      } else {
        container.scrollLeft += scrollStep;
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  const awardImages = [
    "/awards/aw1.jpg",
    "/awards/aw2.jpg",
    "/awards/aw3.jpg",
    "/awards/aw4.jpg",
    "/awards/aw5.jpg",
    "/awards/aw6.jpg",
    "/awards/aw7.jpg",
  ]; // Replace with actual image imports

  useEffect(() => {
    const scrollContainer = document.querySelector(".overflow-x-auto");
    const bus = document.getElementById("bus-icon");

    if (!scrollContainer || !bus) return;

    let animationFrameId;
    let scrollLeft = 0;

    const scrollSpeed = 1.5;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const busMaxLeft = scrollContainer.scrollWidth - 180; // adjust based on bus width

    const animate = () => {
      scrollLeft += scrollSpeed;

      // Scroll the container only till it can scroll
      if (scrollLeft <= maxScroll) {
        scrollContainer.scrollLeft = scrollLeft;
      }

      // Move the bus independently (bus continues past scroll end)
      bus.style.left = `${scrollLeft + 100}px`;

      // If bus reaches the very end of the container width
      if (scrollLeft >= busMaxLeft) {
        // reset
        scrollLeft = 0;
        scrollContainer.scrollLeft = 0;
        bus.style.left = `100px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const timelineData = {
    topRow: [
      {
        year: "1969",
        content:
          "Vivek Travels began its journey with sending its bus for the first time to Katra.",
        image: "/timeline/1969 b.png",
      },
      {
        year: "1985",
        content:
          "Vivek Travels got its first government tender from Ministry of Railways for buses.",
        image: "/timeline/1985.png",
      },
      {
        year: "1998",
        content:
          "Vivek Travels stepped in domain of student transportation for schools.",
        image: "/timeline/1998.png",
      },
      {
        year: "2015",
        content:
          "Vistrit Bhatia joined the business, bringing innovation, digital strategy and a future-forward vision for Vivek Travels.",
        image: "/timeline/2015.png",
      },
      {
        year: "2017",
        content:
          "Vivek Travels bought 11 Scania multi axle high-end luxury buses for UPSRTC, inaugurated by CM Yogi Adityanath.",
        image: "/timeline/2017 b.png",
      },

      {
        year: "2021",
        content:
          "In consortium with JBM Auto, 90 electric buses started operation for Ahmedabad Janmarg Ltd.",
        image: "/timeline/2021 a.png",
      },
      {
        year: "2022",
        content:
          "Achieved 1000+ car fleet milestone, establishing Vivek Travels as a top fleet operator.",
        image: "/timeline/2022 c.png",
      },
      {
        year: "2024",
        content:
          "Vivek Travels partnered with FlixBus and introduced 6 Bharat Benz Sleeper buses for long-distance interstate routes.",
        image: "/timeline/Neugo.png",
      },
      {
        year: "2024",
        content:
          "Partnered with ZingBus and introduced new Volvo Sleeper buses for interstate operations.",
        image: "/timeline/Zing b.png",
      },
      {
        year: "2025",
        content:
          "Vivek Travels launched VT Bus brand for interstate travel, now bookable via Redbus, Yatra and more.",
        image: "/timeline/VT Bus.png",
      },
    ],
    bottomRow: [
      {
        year: "1969",
        content:
          "Vivek Travels was founded by Mr Baldev Raj Bhatia in September 1969 with a vision for seamless customer experience.",
        image: "/timeline/baldev.png",
      },
      {
        year: "1982",
        content:
          "Mr. Vivek Bhatia assumed leadership, expanding operations and strengthening the company foundation.",
        image: "/timeline/1982.png",
      },
      {
        year: "1994",
        content:
          "Secured its first government car rental tender — beginning the car rental journey.",
        image: "/timeline/1994.png",
      },
      {
        year: "2009",
        content: "Vivek Travels crossed the fleet size of 100 vehicles.",
        image: "/timeline/2009a.png",
      },
      {
        year: "2016",
        content:
          "Purchased 3 Volvo luxury buses for Himachal Road Transport Corporation (HRTC).",
        image: "/timeline/2016.png",
      },
      {
        year: "2017",
        content:
          "Awarded 'Best School Bus Transporter' at the Prawaas Awards 2017.",
        image: "/timeline/2017 c.png",
      },
      {
        year: "2019",
        content:
          "Entered electric mobility with 3 electric cars for sustainable transport.",
        image: "/timeline/2019.png",
      },
      {
        year: "2022",
        content:
          "Bagged first independent contract for 50 electric buses for Delhi Metro Rail Corporation.",
        image: "/timeline/2022 a.png",
      },
      {
        year: "2024",
        content:
          "Crossed a fleet size of 200 electric cars for clients across India.",
        image: "/timeline/2024 200 Cars MS.png",
      },
      {
        year: "2024",
        content:
          "Became operational partner for Neugo and launched electric buses on various interstate routes.",
        image: "/timeline/Neugo.png",
      },
      {
        year: "2025",
        content:
          "Commenced operations of 500 electric buses in Delhi with JBM Auto.",
        image: "/timeline/JBM Buses.png",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <section className="relative w-full overflow-hidden h-[200px] sm:h-[300px] md:h-[450px] lg:h-[646px]">
        <iframe
          src="https://www.youtube.com/embed/macFLjs7hjI?autoplay=1&mute=1&loop=1&playlist=macFLjs7hjI"
          title="Vivek Travels - About Us"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full"
        ></iframe>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white ">
        <div className="flex justify-center">
          <div
            style={{
              width: "1262px",
              height: "77px",
              gap: "72px",
            }}
          >
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "22px",
                letterSpacing: "0",
                textAlign: "justify",
                color: "#000000",
                width: "100%",
                maxWidth: "1262px",
                height: "auto",
                margin: "0 auto",
                padding: "0 16px",
              }}
            >
              Having a history of over 55 years, Vivek Travels is a trusted and
              well-known name in the car and bus rental business. We are
              determined to provide a safe, reliable and comfortable travel
              service tailored to the requirements of individuals, families and
              corporate clients alike. We boast years of experience, we invest
              in quality, maintain our fleet of vehicles to ensure customer
              satisfaction and every chauffeur we trained understand and
              appreciates our commitment to providing value-based service with
              punctuality that delights our customers. From a short city commute
              to a long distance drive, we strive to ensure every journey taken
              with Vivek Travels is seamless, worry-free and extraordinary.
              "Trusted by all, shaped by experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-white  md:mx-10 mt-[250px] md:mt-0">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "100%",
              letterSpacing: "1%",
              color: "#3D3E98",
            }}
          >
            Our Journey
          </h2>
        </div>

        {/* Scrollable Timeline Container */}
        <div
          className="overflow-x-auto "
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          <div
            className="relative"
            style={{
              width: `calc(${timelineData.topRow.length * 250}px + 250px)`,
              height: "900px",
              backgroundColor: "#F2F2F2",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Top Row */}
            {/* Top Row */}
            <div className="absolute top-8 left-0 flex gap-[96px] px-10">
              {timelineData.topRow.map((item, index) => (
                <div
                  key={`top-${index}`}
                  className="flex flex-col items-center relative"
                  style={{ width: "151px", gap: "16px" }}
                >
                  {/* Image */}
                  <div style={{ width: "150px", height: "150px" }}>
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#000",
                      textAlign: "justify",
                      height: "50px",
                    }}
                  >
                    {item.content}
                  </p>

                  {/* Year */}
                  <div
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                      fontSize: "35px",
                      lineHeight: "100%",
                      color: "#000",
                    }}
                  >
                    {item.year}
                  </div>

                  {/* Connector Line BELOW year */}
                  <div
                    style={{
                      width: "2px",
                      height: "60px",
                      backgroundColor: "#000",
                      marginTop: "10px",
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Road */}
            <div
              className="absolute left-0"
              style={{
                top: "420px",
                width: "100%",
                height: "80px",
                overflow: "visible",
              }}
            >
              <img
                src={aboutImg3}
                className="w-full h-full object-cover"
                alt="road"
              />
            </div>

            {/* Sticky Bus */}
            {/* Moving Bus */}
            <div
              id="bus-icon"
              style={{
                position: "absolute",
                top: "390px",
                left: "0px", // Will be updated dynamically
                width: "180px",
                height: "80px",
                zIndex: 10,
              }}
            >
              <img
                src="/bus-icon.png"
                alt="Bus"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Bottom Row */}
            {/* Bottom Row */}
            <div className="absolute bottom-5 left-0 flex gap-[96px] px-10 ">
              {timelineData.bottomRow.map((item, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex flex-col items-center relative"
                  style={{ width: "151px", gap: "16px", paddingTop: "60px" }}
                >
                  {/* Connector Line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "2px",
                      height: "60px",
                      backgroundColor: "#000",
                    }}
                  ></div>

                  {/* Year */}
                  <div
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                      fontSize: "35px",
                      lineHeight: "100%",
                      color: "#000",
                    }}
                  >
                    {item.year}
                  </div>

                  {/* Content */}
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#000",
                      textAlign: "justify",
                      height: "50px",
                    }}
                  >
                    {item.content}
                  </p>

                  {/* Image */}
                  <div style={{ width: "150px", height: "150px" }}>
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-16 bg-white">
        <div className="flex justify-center px-4 sm:px-6 lg:px-0">
          <div className="max-w-[1272px] w-full flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-[#3D3E98] font-[DM Sans]">
                Our Leadership
              </h2>
              <p className="text-[15px] leading-[22px] text-black font-[Montserrat] text-justify max-w-full">
                At Vivek Travels, our leadership blends decades of experience
                with forward-thinking vision. Committed to service excellence
                and innovation, they've transformed a legacy brand into a
                modern, reliable transport partner. Their dedication to trust,
                safety, and customer-first values continues to drive every
                journey we deliver.
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Card 1 */}
              <div className="bg-[#F2F2F2] p-5 flex flex-col gap-6 w-full lg:w-1/2">
                <div className="w-full h-[240px] sm:h-[300px] md:h-[400px]">
                  <img
                    src={vivek || "/placeholder.svg"}
                    alt="Mr. Vivek Bhatia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] sm:text-[28px] md:text-[35px] font-semibold text-black font-[Montserrat]">
                    Mr. Vivek Bhatia
                  </h3>
                  <p className="text-[15px] font-semibold text-black font-[Montserrat] capitalize">
                    Director At Vivek Travels Pvt. Ltd.
                  </p>
                </div>
                <p className="text-[15px] leading-[22px] text-black font-[Montserrat] text-justify">
                  A visionary with decades of experience, Mr. Vivek Bhatia has
                  been the driving force behind Vivek Travels' strong reputation
                  for reliability and service excellence. Under his leadership,
                  the company has grown from a humble beginning into a trusted
                  name in the transport industry. His values of integrity,
                  punctuality, and customer-first service continue to guide the
                  brand's foundation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F2F2F2] p-5 flex flex-col gap-6 w-full lg:w-1/2">
                <div className="w-full h-[240px] sm:h-[300px] md:h-[400px]">
                  <img
                    src={vistrit || "/placeholder.svg"}
                    alt="Mr. Vistrit Bhatia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] sm:text-[28px] md:text-[35px] font-semibold text-black font-[Montserrat]">
                    Mr. Vistrit Bhatia
                  </h3>
                  <p className="text-[15px] font-semibold text-black font-[Montserrat] capitalize">
                    Managing Director At Vivek Travels Pvt. Ltd.
                  </p>
                </div>
                <p className="text-[15px] leading-[22px] text-black font-[Montserrat] text-justify">
                  Mr. Vistrit Bhatia represents the next generation of
                  leadership at Vivek Travels. With a focus on innovation,
                  operational efficiency, and enhanced customer experience, he
                  is spearheading the brand's transformation in a changing
                  travel landscape. His dynamic approach ensures Vivek Travels
                  remains relevant, future-ready, and firmly rooted in trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision And Values Section */}

      <section className="py-16 bg-white">
  <div className="max-w-[1108px] mx-auto px-4 flex flex-col items-center gap-14">
    <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-[#3D3E98] text-center capitalize font-[DM Sans]">
      Mission Vision And Values
    </h2>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
      {[
        {
          title: "MISSION",
          desc: "To Provide Safe, Reliable, And Flexible Vehicle Rental Solutions Through Exceptional Service, High-Quality Vehicles, And A Seamless Experience. All While Promoting Affordability, Innovation, And Sustainability, And Ensuring Customer Satisfaction.",
        },
        {
          title: "VISION",
          desc: "To Revolutionize Travel With Safe, Reliable, And Sustainable Road Transport That Enhances Accessibility And Customer Experience Aiming To Lead In Passenger Transport Through Innovation, Efficiency, Environmental Responsibility, And Excellence.",
        },
        {
          title: "VALUES",
          desc: "We Value Safety, Reliability, Innovation, Sustainability, And Customer Delight—Delivering Accessible, Affordable, And Flexible Mobility Solutions Through Operational Excellence, Integrity, Collaboration, And A Commitment To Future-Forward Transport.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="group relative w-[300px] sm:w-[320px] md:w-[340px] lg:w-[349px] h-[360px] flex flex-col border border-[#3D3E98] bg-white transition-all duration-300 hover:bg-[#3D3E98] px-6 pt-6 pr-8 pb-12"
        >
          {/* Icon */}
          <div className="w-[62px] h-[62px] mb-6">
            <img
              src={cardImages[card.title] || dummyImg}
              alt={`${card.title} Icon`}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition"
            />
          </div>

          {/* Title */}
          <h3 className="text-[28px] sm:text-[30px] font-semibold font-[DM Sans] uppercase mb-3 text-[#3D3E98] group-hover:text-white transition">
            {card.title}
          </h3>

          {/* Divider */}
          <div className="h-[1px] w-full mb-4 bg-[#3D3E98] group-hover:bg-white transition" />

          {/* Description */}
          <p className="text-[11px] leading-[16px] tracking-wide text-justify font-medium font-[DM Sans] text-[#3D3E98] group-hover:text-white transition">
            {card.desc}
          </p>

          {/* Arrow */}
          <div className="absolute bottom-4 right-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="2"
                x2="38"
                y2="38"
                className="stroke-[#3D3E98] group-hover:stroke-white transition"
                strokeWidth="2"
              />
              <polyline
                points="25,38 38,38 38,25"
                fill="none"
                className="stroke-[#3D3E98] group-hover:stroke-white transition"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Awards & Recognition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 flex flex-col items-center gap-10">
          {/* Section Title */}
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-[#3D3E98] text-center font-[DM Sans]">
            Awards & Recognition
          </h2>

          {/* Horizontal Scrollable Awards Container */}
          <div
            ref={awardsScrollRef}
            style={{
              overflowX: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE and Edge
            }}
            className="flex gap-5 scroll-smooth w-full"
          >
            {awardImages.map((img, i) => (
              <div
                key={i}
                className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] h-[200px] md:h-[300px] flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Award ${i + 1}`}
                  className="w-full h-full object-cover rounded shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}