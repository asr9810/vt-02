const ConnectingLine = ({ left }) => (
  <div
    style={{
      position: "absolute",
      top: "40px", // Centered vertically relative to 80px icon box
      left: `${left}px`,
      width: "100px",
      height: "1px",
      backgroundColor: "#5152A3",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "#5152A3",
      }}
    />
    <div
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "#5152A3",
      }}
    />
  </div>
);

const StepBlock = ({ iconSrc, title, description }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "227px",
    }}
  >
    <div
      style={{
        width: "100px",
        height: "80px",
        // borderRadius: "10px",
        // borderWidth: "2px",
        // borderStyle: "solid",
        // borderColor: "rgba(61, 62, 152, 0.5)",
        // background: "#F5F2F3",
        // border:'1px solid black',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "47px",
      }}
    >
      <img
        src={iconSrc}
        alt="Step Icon"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          // width: "227px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "20px",
          textAlign: "center",
          color: "#3D3E98",
          marginBottom: "13px",
        }}
      >
        {title}
      </div>
      <div
        className=""
        style={{
          width: "267px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "14px",
          textAlign: "center",
          color: "rgba(0, 0, 0, 0.7)",
          marginLeft: "-20px",
          minHeight: "30px",
        }}
      >
        {description}
      </div>
    </div>
  </div>
);

export function StepsSection() {
  return (
    <div
      style={{
        width: "1033.5px",
        height: "303px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: "28px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "20px",
          textAlign: "center",
          color: "#000000",
          marginBottom: "95px",
        }}
      >
        Book Your Ride, Just Like That!
      </div>

      {/* Steps */}
      <div
        style={{
          width: "1033.5px",
          height: "180px",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <StepBlock
          iconSrc="/calender.svg"
          title="Your Journey, Your Way"
          description="Set your pick-up, drop-off, and ride. Just the way you want."
        />

        <StepBlock
          iconSrc="/cars.svg"
          title="Select Your Vehicle"
          description={
            <>
              Select the ideal vehicle
              <br />
              for your travel needs
            </>
          }
        />

        <StepBlock
          iconSrc="/money.svg"
          title="Get The Best Rates"
          // description="Pay your way: credit card, debit card, net banking, or UPI."
          description={
          <>Choose to pay by card, <br /> net banking, or UPI.</>
          }
        />

        <StepBlock
          iconSrc="/routes.svg"
          title="Enjoy Your Trip"
          // description="Enjoy a smooth and hassle-free journey."
          description={
            <>
              Enjoy a smooth and
              <br />
              hassle-free journey.
            </>
          }
        />

        {/* Connecting lines */}
        <ConnectingLine left={194.75} />
        <ConnectingLine left={455.5} />
        <ConnectingLine left={740.25} />
      </div>
    </div>
  );
}

// updated WhyRideSection.js
import { useState, useEffect } from "react";

// Import images from assets
import { useRef } from "react";
import vectorImg from "../assets/vectorImg.svg";
import vector1Img from "../assets/vector_check.svg";
import fi2153499Img from "../assets/facts.svg";
import frame923Img from "../assets/24by7.svg";

export default function WhyRideSection({isHome=false}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slideInterval = 5000;
  const slideTransitionDuration = 800;
  const cardWidth = 250;
  const gap = 20;


const scrollRef = useRef(null);
const mobileCardWidth = 290 + 20; // card width + gap
let mobileIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      mobileIndex++;
      if (mobileIndex >= features.length) {
        mobileIndex = 0;
      }

      scrollRef.current.scrollTo({
        left: mobileIndex * mobileCardWidth,
        behavior: "smooth",
      });
    }, 3000); // Every 3 seconds

    return () => clearInterval(interval);
  }, []);


  const features = [
    {
      icon: vectorImg,
      title: "Professionally Trained Chauffeurs",
      description: `Our chauffeurs are background-
verified, medically screened, and
trained in hospitality, ensuring a
safe, comfortable, and courteous
journey every time.`,
    },
    {
      icon: vector1Img,
      title: "Spotless, Sanitized & Reliable Fleet",
      description: `Each vehicle is thoroughly cleaned,quality-checked, & prepared before every trip. Enjoy cool AC, comfortable seating,
and spotless interiors, just the way It
should be.`,
    },
    {
      icon: fi2153499Img,
      title: "One—Stop Transport for Every Occasion",
      description: `We can take you anywhere! Weddings, airport drops, school runs, weekend trips or corporate events; we have the right vehicle for every event.`,
    },
    {
      icon: frame923Img,
      title: "24/7 Customer Support",
      description: `If your plans change or you have a question along your journey, our team is available by calling or on WhatsApp anytime; day or night.`,
    },
    {
      icon: "/watch.svg",
      title: `Punctual Pickups, Always on Time`,
      description: `With GPS tracked vehicles, smart dispatch systems, & local chauffeurs who are always early, you can start your journey knowing that you’ll arrive where you are going on time.`,
    },
    {
      icon: "/handshake.svg",
      title: `Trusted by Fortune 500 & Govt bodies`,
      description: `From Fortune 500 companies, to government bodies, we’re their travel partner because they know we’ll show up!`,
      sizes:true
    },
  ];

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, slideInterval);
    return () => clearInterval(timer);
  }, [features.length, isHovering, slideInterval]);

  return (
    <>
      <section
        className="py-8 bg-gray-50 hidden md:block"
        style={{ paddingTop: "60px", }}
      >
        <div
          className="mx-auto"
          style={{
            width: "1076px",
            // height: "823px",
            gap: "70px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              textAlign: "center",
              color: "#000000",
            }}
          >
            Why Ride with Vivek Travels?
          </div>

          <div
            style={{
              width: "1076px",
              height: "440px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + features.length) % features.length
                )
              }
              style={{
                cursor: "pointer",
                position: "absolute",
                left: "-70px",
                top: "35%",
                transform: "translateY(-50%)",
                background: "white",
                borderRadius: "50%",
                padding: "10px",
                boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
              }}
            >
              <svg
                className="w-6 h-6 text-[#3D3E98]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % features.length)
              }
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "-70px",
                top: "35%",
                transform: "translateY(-50%)",
                background: "white",
                borderRadius: "50%",
                padding: "10px",
                boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
              }}
            >
              <svg
                className="w-6 h-6 text-[#3D3E98]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </button>

            {/* Carousel */}
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                width: "1080px",
                height: "340px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "fit-content",
                  height: "300px",
                  padding: "0 10px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  transition: `transform ${slideTransitionDuration}ms ease-in-out`,
                  transform: `translateX(-${
                    currentSlide * (cardWidth + gap)
                  }px)`,
                }}
              >
                {[...features, ...features].map((feature, index) => (
                  <div
                    key={`slide-${index}`}
                    style={{
                      width: "250px",
                      height: "300px",
                      borderRadius: "8px",
                      padding: "45px 20px",
                      background: "#F6F5FA",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {typeof feature.icon === "string" ? (
                        <img
                          src={feature.icon || "/placeholder.svg"}
                          alt={feature.title}
                          style={{ width: feature?.sizes == true? '90px':'67px', height: "80px",}}
                        />
                      ) : (
                        <div>{feature.icon}</div>
                      )}
                    </div>
                    <div
                      style={{
                        width: "210px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          marginTop: "35px",
                          fontWeight: 700,
                          fontSize: "18px",
                          textAlign: "center",
                          color: "#3D3E98",
                          marginBottom: "20px",
                          // border:'1px solid black',
                          height: "60px",
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        {feature.title}
                      </div>
                      <div
                        style={{
                          width: "210px",
                          fontWeight: 400,
                          fontSize: "12px",
                          textAlign: "justify",
                          color: "#000000",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 6,
                          WebkitBoxOrient: "vertical",
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#5B4FBF]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        {/* { isHome &&  <StepsSection /> }  */}
        </div>
      </section>

      {/* === MOBILE ONLY SECTION === */}
      <div
        className="block md:hidden px-2 pt-8 bg-white overflow-hidden "
        style={{ width: "100%", maxWidth: "412px", margin: "0 auto" }}
      >
        {/* Header */}
        <div
          style={{
            // width: "314px",
            height: "15px",
            margin: "0 auto 30px auto",
            fontFamily: "DM Sans",
            fontWeight: 700,
            fontSize: "22px",
            lineHeight: "22px",
            letterSpacing: "0.2px",
            color: "#000",
            textAlign: "center",
          }}
        >
          Why Ride with Vivek Travels?
        </div>

        {/* Carousel */}
        {/* <div
          className="relative overflow-x-auto hide-scrollbar "
          style={{
            width: "100%",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        > */}
        <div
          ref={scrollRef}
          className="relative overflow-x-auto hide-scrollbar"
          style={{
            width: "100%",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
            className="flex"
            style={{
              gap: "20px",
              paddingBottom: "10px",
              paddingLeft: "18px",
              scrollBehavior: "smooth",
            }}
          >
            {features.map((feature, idx) => (
              <div
                key={`feature-${idx}`}
                style={{
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                  width: "calc(100vw - 64px)", // Adjust to make it nicely padded and centered
                  maxWidth: "310px",
                  height: "259px",
                  borderRadius: "10px",
                  padding: "25px 20px",
                  background: "#F6F5FA",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "12px",
                }}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  style={{
                    width: "55px",
                    height: "65px",
                    objectFit: "contain",
                  }}
                />

                <div
                  style={{
                    marginTop: "20px",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#3D3E98",
                    textAlign: "center",
                    fontFamily: "DM Sans",
                    height: "38px",
                  }}
                >
                  {feature.title}
                </div>

                <div
                  style={{
                    marginTop: "12px",
                    fontSize: "10px",
                    lineHeight: "14px",
                    color: "#000",
                    fontFamily: "DM Sans",
                    textAlign: "justify",
                  }}
                >
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-[8px] mt-[16px]">
          {features.slice(0, 3).map((_, idx) => (
            <span
              key={idx}
              className={`w-[6px] h-[6px] rounded-full ${
                idx === 0 ? "bg-[#5B4FBF]" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
