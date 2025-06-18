import { Link } from "react-router-dom";

export default function OurFleetsSection({
  fleetData,
  activeFleetTab,
  setActiveFleetTab,
  fleetImages,
}) {
  return (
    <section
      id="our-fleet"
      className="hidden md:block py-8 md:py-16 bg-[#3D3E98]"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white mb-8 md:mb-12 lg:text-[40px] leading-[20px]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Our Fleets
        </h2>

        {/* Desktop Fleet Tabs */}
        <div className="hidden md:flex md:flex-wrap justify-center gap-5 mb-8">
          {Object.entries(fleetData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveFleetTab(key)}
              className={`px-10 py-3 rounded-lg font-medium text-[18px] transition-colors h-[76px] duration-300 ${
                activeFleetTab === key
                  ? "bg-white text-[#5B4FBF]"
                  : "bg-[#28282826] text-white hover:bg-white hover:text-[#5B4FBF]"
              }`}
            >
              <span
                className="inline-block w-[95px] text-center"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 600,
                  lineHeight: "20px",
                }}
              >
                {data.title}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Fleet Tabs */}
        <div className="block md:hidden mb-6">
          <div className="grid grid-cols-3 gap-2 px-4">
            {Object.entries(fleetData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveFleetTab(key)}
                className={`px-2 py-2 rounded-lg font-medium text-xs transition-colors h-[40px] duration-300 ${
                  activeFleetTab === key
                    ? "bg-white text-[#5B4FBF]"
                    : "bg-[#28282826] text-white hover:bg-white hover:text-[#5B4FBF]"
                }`}
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <span className="inline-block text-center leading-tight">
                  {data.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Content Card */}
        <div className="bg-white rounded-lg p-4 md:p-8 max-w-6xl mx-auto">
          {/* Mobile View */}
          <div className="block md:hidden">
            <div
              style={{ width: "332px", height: "84.77px", gap: "14.13px" }}
              className="mx-auto"
            >
              <h3 className="text-xl font-bold text-[#3D3E98] mb-2">
                {fleetData[activeFleetTab].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {fleetData[activeFleetTab].description}
              </p>

              <h4 className="font-bold text-base text-[#1E1E1E] mb-3">
                Choose your ride
              </h4>

              <div className="grid grid-cols-2 gap-2">
                {fleetData[activeFleetTab].brands.map((brand, index) => (
                  <Link to={`/${brand.url}`} key={index}>
                    <button className="w-full h-[35px] px-4 py-2 rounded bg-[#3D3E981A] text-[#1E1E1E] font-bold text-sm flex items-center justify-center transition-colors">
                      {brand.carName}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="md:ml-[40px] min-h-[440px] flex flex-col justify-start">
              <h3
                className="text-3xl font-bold text-[#3D3E98] mb-4 text-[40px]"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {fleetData[activeFleetTab].title}
              </h3>
              <p
                className="font-medium text-[15px] leading-[15px] tracking-[0] text-gray-600 mb-4 font-dmSans"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {fleetData[activeFleetTab].description}
              </p>
              <div className="w-[350px] h-[2px] rounded-[8px] bg-gradient-to-r from-[#3D3E98] to-[rgba(20,20,50,0)] mb-6"></div>
              <h4
                className="font-dmSans font-bold text-[22px] leading-[15px] tracking-[0.5px] text-[#1E1E1E] mb-4"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Choose your ride
              </h4>
              <div className="grid grid-cols-2 gap-x-[10px] gap-y-[10px]">
                {fleetData[activeFleetTab].brands.map((brand, index) => (
                  <Link to={`/${brand.url}`} key={index}>
                    <button className="w-full px-2 py-4 rounded-[4px] bg-[#3D3E981A] text-[#1E1E1E] font-dmSans font-bold text-[14px] leading-[15px] flex items-center justify-center transition-colors">
                      {brand.carName}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute top-0 right-0 text-6xl font-bold text-gray-200 opacity-50 z-0">
                  VT
                </div>
                <img
                   src={fleetImages[activeFleetTab] || "/placeholder.svg"}
                  alt={fleetData[activeFleetTab].title}
                  className="relative z-10 max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
