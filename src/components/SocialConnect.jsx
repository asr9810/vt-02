import { useState, useEffect } from "react";
import scImg1 from "../assets/sbus1.png";
import scImg2 from "../assets/scImg2.png";
import scImg3 from "../assets/scImg3.png";
import scImg5 from "../assets/vt-mem.png";

const SocialConnect = () => {
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  const socialPosts = [
    {
      id: 1,
      image: scImg1,
      alt: "Vivek Travels Social Post 1",
    },
    {
      id: 4,
      image: scImg5,
      alt: "Vivek Travels Social Post 4",
    },
    {
      id: 3,
      image: scImg3,
      alt: "Vivek Travels Social Post 3",
    },
    {
      id: 2,
      image: scImg2,
      alt: "Vivek Travels Social Post 2",
    },
    {
      id: 5,
      image: "/bmw.png",
      alt: "Vivek Travels Social Post 5",
    },
  ];

  // Mobile auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % socialPosts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [socialPosts.length]);

  return (
    <>
      <section className=" hidden md:block py-16 bg-white">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2
              className="mx-auto"
              style={{
                width: "1240px",
                height: "28px",
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "20px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                color: "#000000",
              }}
            >
              Social Connect
            </h2>
          </div>

          {/* Social Posts Grid */}
          <div className="flex justify-center">
            <div
              className="flex justify-center"
              style={{
                width: "1240px",
                height: "232px",
                gap: "20px",
              }}
            >
              {socialPosts.map((post) => (
                <div
                  key={post.id}
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "232px",
                    height: "232px",
                  }}
                >
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt}
                    className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Auto sliding */}
      </section>
    <div className="block md:hidden w-full overflow-hidden py-4">
  {/* Header */}
  <div className="text-center mb-6">
    <h2 className="text-xl font-bold text-black">Social Connect</h2>
  </div>

  {/* Carousel Container */}
  <div className="relative w-full overflow-hidden">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        width: `${socialPosts.length * 72}vw`, // each slide is 72vw
        transform: `translateX(calc(-${currentMobileSlide * 72}vw - ${currentMobileSlide * 4}px))`, // 4px gap per card
        gap: "8px",
        paddingLeft: "14vw", // creates peek effect
      }}
    >
      {socialPosts.map((post, index) => (
        <div
          key={index}
          className="flex-shrink-0"
          style={{ width: "72vw" }} // center card full, others peek
        >
          <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default SocialConnect;
