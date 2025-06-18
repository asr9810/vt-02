import { Link } from "react-router-dom";
export default function OurFleetsMobile({
  fleetData,
  activeFleetTab,
  setActiveFleetTab,
  fleetImages,
}) {
  return (
    <section className="block md:hidden bg-[#3D3E98] py-[17px] px-[20px] w-full">
      <div className="max-w-[412px] mx-auto">
        <h2
          className="text-[22px] text-white font-bold text-center mb-4"
          style={{ lineHeight: "22px", fontFamily: "DM Sans" }}
        >
          Our Fleet
        </h2>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-[5px] mb-5">
          {Object.entries(fleetData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveFleetTab(key)}
              className={`h-[40px] rounded-[4px] text-[12px] font-semibold flex items-center justify-center transition-colors duration-300 ${
                activeFleetTab === key
                  ? "bg-white text-[#5B4FBF]"
                  : "bg-[#28282826] text-white hover:bg-white hover:text-[#5B4FBF]"
              }`}
              style={{ fontFamily: "DM Sans" }}
            >
              {data.title}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[8px] p-4">
          <h3
            className="text-[#3D3E98] text-[20px] font-bold text-center mb-2"
            style={{ fontFamily: "DM Sans" }}
          >
            {fleetData[activeFleetTab].title}
          </h3>
          <p
            className="text-center text-[#1E1E1E] text-[12px] font-medium mb-3"
            style={{ fontFamily: "DM Sans" }}
          >
            {fleetData[activeFleetTab].description}
          </p>

          <div className="w-full h-[1px] bg-[#3D3E98] mb-4 rounded" />

          {/* Two Column Layout */}
          <div className="flex gap-4">
            {/* Left Side – Ride Options */}
            <div className="w-1/2">
              <h4
                className="text-[#1E1E1E] font-bold text-[14px] mb-2"
                style={{ fontFamily: "DM Sans" }}
              >
                Choose your ride
              </h4>
              <div className="flex flex-col gap-2">
                {fleetData[activeFleetTab].brands.map((brand, index) => (
                  <Link to={`/${brand.url}`} key={index}>
                    <button
                      className="bg-[#3D3E981A] text-[#1E1E1E] text-[12px] font-semibold rounded h-[30px] flex items-center justify-center w-full"
                      style={{ fontFamily: "DM Sans" }}
                    >
                      {brand.carName}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side – Vehicle Image */}
            <div className="w-1/2 flex items-center justify-center">
              <img
                src={fleetImages[activeFleetTab] || "/placeholder.svg"}
                alt={fleetData[activeFleetTab].title}
                className="w-full h-auto object-contain max-h-[140px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
