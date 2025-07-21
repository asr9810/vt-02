import aboutImg1 from "../assets/aboutHeroImg.png";
import aboutImg2 from "../assets/aboutImg2.png";
import aboutImg3 from "../assets/aboutImg3.png";
// import roadImage from "../assets/aboutImg4.png";
import vivek from "../assets/vivekBhatiaImage.png";
import vistrit from "../assets/vistritBhatiaImg.png";
import eyesImg from "../assets/eyes.png";
import visionImg from "../assets/vision.png";
// import visionImg from "../assets/vision2.svg";
import diamondImg from "../assets/diamond.png";
import dummyImg from "../assets/dummy.png";

// import busImage from "../assets/bus-top-view.png";

import { useEffect, useRef } from "react";

import roadImage from "../assets/roadvert1.png";
import busImage from "../assets/bus-top-view.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function About() {
  // Timeline data for Our Journey section
  const cardImages = {
    MISSION: visionImg,
    VISION: eyesImg,
    VALUES: diamondImg,
  };

  const busRef = useRef(null);
  const sectionRef = useRef(null);

   const awardsScrollRef = useRef(null);

  const scrollLeft = () => {
    if (awardsScrollRef.current) {
      awardsScrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (awardsScrollRef.current) {
      awardsScrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!busRef.current || !sectionRef.current) return;
  //     const sectionTop = sectionRef.current.getBoundingClientRect().top;
  //     const scrollY = window.scrollY || window.pageYOffset;
  //     const offset = Math.max(0, scrollY - sectionRef.current.offsetTop);
  //     busRef.current.style.transform = `translate(-50%, ${offset}px)`;
  //   };
  

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollRef = useRef(null);
  // const awardsScrollRef = useRef(null);

  // useEffect(() => {
  //   const container = awardsScrollRef.current;

  //   if (!container) return;

  //   let scrollAmount = 0;
  //   const scrollStep = 1; // px per interval
  //   const scrollInterval = 200; // ms

  //   const interval = setInterval(() => {
  //     if (
  //       container.scrollLeft + container.clientWidth >=
  //       container.scrollWidth
  //     ) {
  //       container.scrollLeft = 0; // Reset to beginning
  //     } else {
  //       container.scrollLeft += scrollStep;
  //     }
  //   }, scrollInterval);

  //   return () => clearInterval(interval);
  // }, []);

  const awardImages = [
    "/awards/aw1.jpg",
    "/awards/aw2.jpg",
    "/awards/aw3.jpg",
    "/awards/aw4.jpg",
    "/awards/aw5.jpg",
    "/awards/aw6.jpg",
    "/awards/aw7.jpg",
  ]; // Replace with actual image imports

  // useEffect(() => {
  //   const scrollContainer = document.querySelector(".overflow-x-auto");
  //   const bus = document.getElementById("bus-icon");

  //   if (!scrollContainer || !bus) return;

  //   let animationFrameId;
  //   let scrollLeft = 0;

  //   const scrollSpeed = 1.5;
  //   const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  //   const busMaxLeft = scrollContainer.scrollWidth - 180; // adjust based on bus width

  //   const animate = () => {
  //     scrollLeft += scrollSpeed;

  //     // Scroll the container only till it can scroll
  //     if (scrollLeft <= maxScroll) {
  //       scrollContainer.scrollLeft = scrollLeft;
  //     }

  //     // Move the bus independently (bus continues past scroll end)
  //     bus.style.left = `${scrollLeft + 100}px`;

  //     // If bus reaches the very end of the container width
  //     if (scrollLeft >= busMaxLeft) {
  //       // reset
  //       scrollLeft = 0;
  //       scrollContainer.scrollLeft = 0;
  //       bus.style.left = `100px`;
  //     }

  //     animationFrameId = requestAnimationFrame(animate);
  //   };

  //   animate();

  //   return () => cancelAnimationFrame(animationFrameId);
  // }, []);


 useEffect(() => {
    const bus = busRef.current;
    const section = sectionRef.current;
    if (!bus || !section) return;

    let latestScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      latestScrollY = window.scrollY;
      requestTick();
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    const updatePosition = () => {
      const sectionTop = section.offsetTop;
      const maxTravel = 3971 - 198;
      let offset = latestScrollY - sectionTop;
      if (offset < 0) offset = 0;
      if (offset > maxTravel) offset = maxTravel;

      bus.style.transform = `translate(-50%, ${offset}px)`;
      ticking = false;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



const timelineLeft = [
    { year: "1969", image: "/timeline/baldev.png", content: "Vivek Travels was founded by Mr Baldev Raj Bhatia in September 1969 with a passion and vision to provide seamless customer experience." },
    { year: "1982", image: "/timeline/1982.png", content: "Mr. Vivek Bhatia assumed leadership of Vivek Travels, expanding operations and strengthening its transport service foundation." },
    { year: "1994", image: "/timeline/1994.png", content: "Vivek Travels got its first government tender for cars and since then it kept expanding the domain of car rentals." },
    { year: "2009", image: "/timeline/2009a.png", content: "Vivek Travels crossed the fleet of 100 vehicles." },
    { year: "2016", image: "/timeline/2016.png", content: "Vivek Travels bought 3 Volvo high-end luxury buses for Himachal Road Transport Corporation." },
    { year: "2017", image: "/timeline/2017 c.png", content: "Vivek Travels was awarded with the best transport for school buses award at Prawaas Awards 2017." },
    { year: "2019", image: "/timeline/2019.png", content: "Entered electric mobility with three electric cars, marking a major step toward sustainable and eco friendly transport solutions for its clients." },
    { year: "2022", image: "/timeline/2022 a.png", content: "Vivek Travels bagged its first independent contract for 50 Electric buses for Delhi Metro Rail Corporation in Delhi." },
     { year: "2024", image: "/timeline/Neugo.png", content: "Vivek Travels became operational partner for Neugo and commenced the operations of electric buses on various interstate routes." },
    { year: "2025", image: "/timeline/VT Bus.png", content: "Vivek Travels launched its own brand with the name of VT Bus for interstate commute of passengers. The seats can be booked through Redbus, Yatra.com and other prominent platforms." },
    { year: "2025", image: "/timeline/Zing b.png", content: "Vivek Travels Partnered with ZingBus bought brand new Volvo Buses and Sleeper buses to operate on interstate routes." }
  ];

  const timelineRight = [
    { year: "1969", image: "/timeline/1969 b.png", content: "Vivek Travels began its journey with sending its bus for the first time to Katra." },
    { year: "1985", image: "/timeline/1985.png", content: "Vivek Travels got its first government tender from Ministry of Railways for buses." },
    { year: "1998", image: "/timeline/1998.png", content: "Vivek Travels stepped in domain of student transportation for schools." },
    { year: "2015", image: "/timeline/2015.png", content: "Vistrit Bhatia joined the business, bringing innovation, digital strategy and a future-forward vision for Vivek Travels." },
    { year: "2017", image: "/timeline/2017 b.png", content: "Vivek Travels bought 11 Scania multi axle high-end luxury buses for Uttar Pradesh Road Transport Corporation which were inaugurate by the Chief Minister of Uttar Pradesh Shri Yogi Adityanath." },
    { year: "2021", image: "/timeline/2021 a.png", content: "In consortium with JBM Auto, Vivek Travels commenced the operation of 90 electric buses for Ahmedabad Janmarg Ltd. In Ahmedabad Gujrat." },
    { year: "2022", image: "/timeline/2022 c.png", content: "Achieved 1000+ car fleet milestone, establishing Vivek Travels as a leading ground mobility service provider and fleet operator." },
    { year: "2024", image: "/timeline/2024 200 Cars MS.png", content: "Crossed a fleet size of 200 electric cars." },
    { year: "2024", image: "/timeline/2025 a.png", content: "Vivek Travels partnered with FlixBus and got 6 Bharat Benz Sleeper buses to operate on long distance interstate routes." },
    { year: "2025", image: "/timeline/JBM Buses.png", content: "Vivek Travels commenced the operations of 500 electric buses in Delhi as operational partner with JBM Auto." }
  ];


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
      <section ref={sectionRef} className="w-[968px] mx-auto relative py-10" style={{ height: '4133px' }}>
        <h2 className="text-white text-center text-[40px] font-bold mb-20">Our Journey</h2>

        <div className="relative flex justify-center">
          <img
            src={roadImage}
            alt="Road"
            className="absolute top-0 h-[3971px] w-[164px] z-10"
          />

          <img
            ref={busRef}
            src={busImage}
            alt="Bus"
            className="absolute left-[510px] transform -translate-x-1/2 z-20"
            style={{ width: '56px', height: '198px', transition: 'transform 0.3s ease-out' }}
          />

          <div className="flex justify-between w-full px-[60px]">
            <div className="flex flex-col gap-[80px] pt-0 ">
              {timelineLeft.map((item, index) => (
                <div key={index} className="relative w-[200px] h-[296px] bg-white p-3 flex flex-col items-center text-center ">
                  <img src={item.image} alt="Timeline" className="w-full h-[150px] object-cover mb-2" />
                  <h3 className="text-[20px] font-semibold mb-2" style={{fontFamily: "DM Sans, sans-serif",}}>{item.year}</h3>
                  <p className="text-[12px] leading-[16px] text-black text-justify font-dmSans" style={{fontFamily: "DM Sans, sans-serif",}}>{item.content}</p>
                  <div className="absolute border-2 w-[5vw] left-[100%] top-[50%]"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[80px] pt-[40px]">
              {timelineRight.map((item, index) => (
                <div key={index} className=" relative w-[200px] h-[296px] bg-white p-3 flex flex-col items-center text-center">
                  <img src={item.image} alt="Timeline" className="w-full h-[150px] object-cover mb-2" />
                  <h3 className="text-[20px] font-semibold mb-2" style={{fontFamily: "DM Sans, sans-serif",}}>{item.year}</h3>
                  <p className="text-[12px] leading-[16px] text-black text-justify font-dmSans" style={{fontFamily: "DM Sans, sans-serif",}}>{item.content}</p>
                  <div className="absolute border-2 w-[5vw] right-[100%] top-[50%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* <section
  ref={sectionRef}
  className="relative w-full max-w-[968px] mx-auto py-10 overflow-hidden"
  style={{ height: '4133px' }}
>
  <h2 className="text-white text-center text-[32px] sm:text-[40px] font-bold mb-20">
    Our Journey
  </h2>

  <div className="relative flex justify-center">
    
    <img
      src={roadImage}
      alt="Road"
      className="absolute top-0 h-[3971px] w-[30px] sm:w-[164px] z-10"
    />


    <img
      ref={busRef}
      src={busImage}
      alt="Bus"
      className="absolute left-1/2 transform -translate-x-1/2 z-20"
      style={{
        width: "20px", // smaller bus to fit inside 30px road
        height: "auto",
        transition: "transform 0.3s ease-out",
      }}
    />

    <div className="w-full relative z-30">
      {[...Array(Math.max(timelineLeft.length, timelineRight.length))].map((_, index) => {
        const isLeft = index % 2 === 0;
        const item = isLeft ? timelineLeft[index] : timelineRight[index];
        if (!item) return null;

        return (
          <div
            key={index}
            className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'} items-center mb-[50px] px-1 sm:px-[60px]`}
          >
          
            <div className="hidden sm:block sm:w-[40px]" />

      
            <div
              className="bg-white w-[35vw] sm:w-[200px] h-[220px] p-2 sm:p-3 flex flex-col items-center text-center shadow"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <img
                src={item.image}
                alt="Timeline"
                className="w-full h-[90px] object-cover mb-2"
              />
              <h3 className="text-[13px] sm:text-[20px] font-semibold mb-1">
                {item.year}
              </h3>
              <p className="text-[10px] sm:text-[12px] leading-[14px] text-black text-justify">
                {item.content}
              </p>
              <div
                className={`absolute border-2 w-[10px] sm:w-[5vw] top-1/2 ${isLeft ? 'left-full' : 'right-full'}`}
              ></div>
            </div>

            {isLeft ? null : <div className="w-[12px] sm:hidden" />}
          </div>
        );
      })}
    </div>
  </div>
</section> */}






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
      {/* <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 flex flex-col items-center gap-10">
         
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-[#3D3E98] text-center font-[DM Sans]">
            Awards & Recognition
          </h2>

        
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
      </section> */}

       <section className="py-16 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col items-center gap-10">
        {/* Section Title */}
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-[#3D3E98] text-center font-[DM Sans]">
          Awards & Recognition
        </h2>

        {/* Carousel Area */}
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hidden sm:flex"
          >
            <FaChevronLeft size={20} className="text-[#3D3E98]" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={awardsScrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth w-full no-scrollbar px-8"
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

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-3 hidden sm:flex"
          >
            <FaChevronRight size={20} className="text-[#3D3E98]" />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}














