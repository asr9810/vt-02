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

import { useEffect, useRef, useState } from "react";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineLeft = [
    {
      year: "1969",
      image: "/timeline/baldev.png",
      content:
        "Vivek Travels was founded by Mr Baldev Raj Bhatia in September 1969 with a passion and vision to provide seamless customer experience.",
    },
    {
      year: "1982",
      image: "/timeline/1982.png",
      content:
        "Mr. Vivek Bhatia assumed leadership of Vivek Travels, expanding operations and strengthening its transport service foundation.",
    },
    {
      year: "1994",
      image: "/timeline/1994.png",
      content:
        "Vivek Travels got its first government tender for cars and since then it kept expanding the domain of car rentals.",
    },
    {
      year: "2009",
      image: "/timeline/2009a.png",
      content: "Vivek Travels crossed the fleet of 100 vehicles.",
    },
    {
      year: "2016",
      image: "/timeline/2016.png",
      content:
        "Vivek Travels bought 3 Volvo high-end luxury buses for Himachal Road Transport Corporation.",
    },
    {
      year: "2017",
      image: "/timeline/2017 c.png",
      content:
        "Vivek Travels was awarded with the best transport for school buses award at Prawaas Awards 2017.",
    },
    {
      year: "2019",
      image: "/timeline/2019.png",
      content:
        "Entered electric mobility with three electric cars, marking a major step toward sustainable and eco friendly transport solutions for its clients.",
    },
    {
      year: "2022",
      image: "/timeline/2022 a.png",
      content:
        "Vivek Travels bagged its first independent contract for 50 Electric buses for Delhi Metro Rail Corporation in Delhi.",
    },
    {
      year: "2024",
      image: "/timeline/Neugo.png",
      content:
        "Vivek Travels became operational partner for Neugo and commenced the operations of electric buses on various interstate routes.",
    },
    {
      year: "2025",
      image: "/timeline/VT Bus.png",
      content:
        "Vivek Travels launched its own brand with the name of VT Bus for interstate commute of passengers. The seats can be booked through Redbus, Yatra.com and other prominent platforms.",
    },
    {
      year: "2025",
      image: "/timeline/Zing b.png",
      content:
        "Vivek Travels Partnered with ZingBus bought brand new Volvo Buses and Sleeper buses to operate on interstate routes.",
    },
  ];

  const timelineRight = [
    {
      year: "1969",
      image: "/timeline/1969 b.png",
      content:
        "Vivek Travels began its journey with sending its bus for the first time to Katra.",
    },
    {
      year: "1985",
      image: "/timeline/1985.png",
      content:
        "Vivek Travels got its first government tender from Ministry of Railways for buses.",
    },
    {
      year: "1998",
      image: "/timeline/1998.png",
      content:
        "Vivek Travels stepped in domain of student transportation for schools.",
    },
    {
      year: "2015",
      image: "/timeline/2015.png",
      content:
        "Vistrit Bhatia joined the business, bringing innovation, digital strategy and a future-forward vision for Vivek Travels.",
    },
    {
      year: "2017",
      image: "/timeline/2017 b.png",
      content:
        "Vivek Travels bought 11 Scania multi axle high-end luxury buses for Uttar Pradesh Road Transport Corporation which were inaugurate by the Chief Minister of Uttar Pradesh Shri Yogi Adityanath.",
    },
    {
      year: "2021",
      image: "/timeline/2021 a.png",
      content:
        "In consortium with JBM Auto, Vivek Travels commenced the operation of 90 electric buses for Ahmedabad Janmarg Ltd. In Ahmedabad Gujrat.",
    },
    {
      year: "2022",
      image: "/timeline/2022 c.png",
      content:
        "Achieved 1000+ car fleet milestone, establishing Vivek Travels as a leading ground mobility service provider and fleet operator.",
    },
    {
      year: "2024",
      image: "/timeline/2024 200 Cars MS.png",
      content: "Crossed a fleet size of 200 electric cars.",
    },
    {
      year: "2024",
      image: "/timeline/2025 a.png",
      content:
        "Vivek Travels partnered with FlixBus and got 6 Bharat Benz Sleeper buses to operate on long distance interstate routes.",
    },
    {
      year: "2025",
      image: "/timeline/JBM Buses.png",
      content:
        "Vivek Travels commenced the operations of 500 electric buses in Delhi as operational partner with JBM Auto.",
    },
  ];

  const journeyItems = [
    {
      year: 1969,
      heading: "Our Journey Began",
      image: "/timeline/baldev.png", // founding
      content:
        "Founded by Mr. B.R. Bhatia, Vivek Travels began its legacy driven by commitment and vision. Its first ever bus journeyed from Delhi to Katra on a religious pilgrimage.",
      quote: "Rooted in faith. Driven by vision.",
    },
    {
      year: 1982,
      heading: "Leadership That Drives Forward",
      image: "/timeline/1982.png",
      content:
        "Mr. Vivek Bhatia takes the helms and Vivek Travels scaled new heights, expanding its footprint and strengthening its reputation as a trusted name in ground transport.",
      quote: "Legacy evolved. Trust redefined.",
    },
    {
      year: 2000,
      heading: "First Major Corporate Account",
      image: "", // no source image provided
      content:
        "Vivek Travels secured its first large corporate client – Reliance Communication, crossing a fleet strength of 100 vehicles, and cementing its position as a premier ground transport company.",
      quote: "Scaling Heights. Setting Standards.",
    },
    {
      year: 2008,
      heading: "New Horizons: Ambulance Rentals",
      image: "", // no image in original data
      content:
        "Vivek Travels strategically diversified its operations by venturing into the ambulance rental business, aiming to support critical healthcare mobility needs.",
      quote: "Saving lives, one journey at a time.",
    },
    {
      year: 2016,
      heading: "Luxury on the Move: Interstate Bus Operations",
      image: "/timeline/2016.png",
      content:
        "Vivek Travels launches its Interstate Bus Services with 15 premium luxury coaches including Scania & Volvo, serving State Transport Authorities like UPSRTC and HRTC.",
      quote: "Growth with Purpose. Service with Pride.",
    },
    {
      year: 2017,
      heading: "National Recognition for Excellence",
      image: "/timeline/2017 c.png",
      content:
        "Vivek Travels was honoured at the Prawaas Awards 2017 for outstanding performance in school transportation services, earning national acclaim from the ground transport industry.",
      quote: "Where Safety Meets Recognition.",
    },
    {
      year: 2018,
      heading: "The Next Generation of Leadership",
      image: "/timeline/2015.png", // closest proxy (Vistrit Bhatia joined) - swap if you have a newer one
      content:
        "Continuing the legacy, Mr. Vistrit Bhatia joined Vivek Travels, introducing strategic innovation and aligning the company with emerging market trends.",
      quote: "Heritage with a Modern Edge.",
    },
    {
      year: 2020,
      heading: "Driving the Future: Entry into Electric Mobility",
      image: "/timeline/2019.png", // approximate (electric mobility entry) – replace with a 2020 EV image if available
      content:
        "Vivek Travels marks a progressive shift toward sustainability by inducting electric vehicles into its fleet — becoming the first fleet operator in Delhi to introduce EVs for car rental services.",
      quote: "Greener Roads. Smarter Moves.",
    },
    {
      year: 2021,
      heading: "Scaling Sustainable Mobility Nationwide",
      image: "/timeline/2021 a.png",
      content:
        "Vivek Travels commenced operations of 140 electric buses for intracity transportation across multiple cities in India, marking a bold step in nationwide green mobility.",
      quote: "Electrifying Cities. Empowering Commutes.",
    },
    {
      year: 2023,
      heading: "One Milestone. Many Journeys.",
      image: "", // no image provided
      content:
        "Vivek Travels crossed a major landmark by operating over 1,000+ cars on monthly rental contracts, strengthening its presence as a trusted mobility partner across India.",
      quote: "Scale that Serves. Service that Leads.",
    },
    {
      year: 2024,
      heading: "700+ Electric Buses Nationwide",
      image: "", // could use a composite or fleet shot; none directly supplied
      content:
        "Vivek Travels accomplished a remarkable benchmark by operating 700+ electric buses for both intercity and intracity routes across pan-India, reinforcing its role as a leader in sustainable mobility.",
      quote: "Powering Public Transport, the Electric Way.",
    },
    {
      year: 2025,
      heading: "",
      image: "", // summary/hero—optionally supply a brand or fleet image
      content: `We Make Your World Moving
From one bus in 1969
to a nationwide fleet of cars, buses, ambulances & EVs —
we’ve kept India moving forward.

Driven by Innovation
Powered by Purpose
Trusted by Generations`,
      quote: "",
    },
  ];

  // const scrollRef = useRef(null);

  // const scroll = (delta) => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({
  //       left: delta,
  //       behavior: "smooth",
  //     });
  //   }
  // };

    const scrollRef = useRef(null);
  // const busRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const scroll = (delta) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  // Sync bus position to scroll
  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const percent = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setScrollPercent(percent);
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    return () => {
      if (el) el.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Optional: animate bus smoothly when scrollPercent changes
  useEffect(() => {
    if (!busRef.current || !containerRef.current) return;
    const bus = busRef.current;
    const container = containerRef.current;

    // Compute allowable horizontal travel range (inside track width)
    const trackPadding = 16; // adjust if you want margins
    const containerWidth = container.clientWidth;
    const busWidth = bus.clientWidth;
    const travelWidth = containerWidth - busWidth - trackPadding * 2;
    const leftPos = trackPadding + travelWidth * scrollPercent;

    bus.style.transform = `translateX(${leftPos}px)`;
  }, [scrollPercent]);

  return (
    <div className="min-h-screen bg-white ">
      {/* Heading */}
      <section className="h-[80px] bg-white flex items-center justify-center ">
        <h1
          className="text-[#3D3E98] font-semibold text-[36px] text-center m-0"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Get to Know Vivek-Travel
        </h1>
      </section>
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
      {/* <section
        ref={sectionRef}
        className="w-[968px] mx-auto relative py-10"
        style={{ height: "4133px" }}
      >
        <h2 className="text-white text-center text-[40px] font-bold mb-20">
          Our Journey
        </h2>

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
            style={{
              width: "56px",
              height: "198px",
              transition: "transform 0.3s ease-out",
            }}
          />

          <div className="flex justify-between w-full px-[60px]">
            <div className="flex flex-col gap-[80px] pt-0 ">
              {timelineLeft.map((item, index) => (
                <div
                  key={index}
                  className="relative w-[200px] h-[296px] bg-white p-3 flex flex-col items-center text-center "
                >
                  <img
                    src={item.image}
                    alt="Timeline"
                    className="w-full h-[150px] object-cover mb-2"
                  />
                  <h3
                    className="text-[20px] font-semibold mb-2"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.year}
                  </h3>
                  <p
                    className="text-[12px] leading-[16px] text-black text-justify font-dmSans"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.content}
                  </p>
                  <div className="absolute border-2 w-[5vw] left-[100%] top-[50%]"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[80px] pt-[40px]">
              {timelineRight.map((item, index) => (
                <div
                  key={index}
                  className=" relative w-[200px] h-[296px] bg-white p-3 flex flex-col items-center text-center"
                >
                  <img
                    src={item.image}
                    alt="Timeline"
                    className="w-full h-[150px] object-cover mb-2"
                  />
                  <h3
                    className="text-[20px] font-semibold mb-2"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.year}
                  </h3>
                  <p
                    className="text-[12px] leading-[16px] text-black text-justify font-dmSans"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.content}
                  </p>
                  <div className="absolute border-2 w-[5vw] right-[100%] top-[50%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

    <section className="w-full max-w-[1100px] mx-auto py-16 relative bg-white z-10">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <h2
        className="text-center font-bold mb-6 journey-title"
        style={{
          fontFamily: "DM Sans, sans-serif",
          color: "#3D3E98",
          fontSize: "32px",
        }}
      >
        Our Journey
      </h2>

      <div className="relative" ref={containerRef}>
        {/* Carousel + arrows */}
        <button
          aria-label="scroll left"
          onClick={() => scroll(-360)}
          className="absolute top-1/2 transform -translate-y-1/2 bg-[#3D3E98] text-white p-2 rounded-full shadow-md z-30 transition hidden sm:flex"
          style={{ left: "-32px" }}
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-[5rem] overflow-x-auto no-scrollbar px-4 sm:px-8 py-2 snap-x snap-mandatory"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {journeyItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 min-w-0 bg-white rounded-lg p-5 text-center relative flex flex-col snap-center"
              style={{
                fontFamily: "DM Sans, sans-serif",
                width: "min(80vw, 280px)",
              }}
            >
              <div className="text-[18px] font-semibold mb-2">
                {item.year}
              </div>
              {item.image && (
                <div className="w-full h-[140px] mb-3 overflow-hidden rounded">
                  <img
                    src={item.image}
                    alt={item.heading || "timeline image"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1">
                {item.heading && (
                  <h3 className="text-[16px] font-bold mb-2">
                    {item.heading}
                  </h3>
                )}
                <p className="text-[12px] leading-[16px] text-gray-700 whitespace-pre-line flex-1">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="scroll right"
          onClick={() => scroll(360)}
          className="absolute top-1/2 transform -translate-y-1/2 bg-[#3D3E98] text-white p-2 rounded-full shadow-md z-30 transition hidden sm:flex"
          style={{ right: "-32px" }}
        >
          <FaChevronRight className="w-4 h-4" />
        </button>

        {/* Track with moving bus */}
        <div className="relative mt-10 pt-4">
          <div className="w-full overflow-hidden">
            <img
              src="track.png" // track image
              alt="track"
              className="w-full object-contain"
            />
          </div>
          <div
            className="absolute left-0 top-0 pointer-events-none"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className="relative"
              style={{
                height: 0, // we position bus via absolute inside track container
              }}
            >
              <img
                ref={(el) => (busRef.current = el)}
                src="bus-icon.png"
                alt="bus"
                className="absolute bottom-0 w-[120px] h-auto"
                style={{
                  transition: "transform 0.1s ease-out",
                  transform: "translateX(0px)",
                  // adjust initial vertical offset so bus sits on track visually
                  marginBottom: "-45px",
                }}
              />
            </div>
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
