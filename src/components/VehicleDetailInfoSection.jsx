
import React, { useState } from "react";

export default function VehicleDetailInfoSection({
  vehicleName,
  introText,
  rentalIntroText,
  rentalDetails,
  vehicleSpecs,
  vehicleParagraph,
  rentalClosingParagraph,
}) {
  const [activeTab, setActiveTab] = useState("Rental Details");

  return (
    <div className="w-full max-w-[1228px] mx-auto px-4 py-12 flex flex-col gap-[56px] font-['DM_Sans']">
      {/* Header */}
      {/* <div className="w-full">
        <h2 className="text-[#3D3E98] font-semibold text-[26px] sm:text-[30px] leading-[1.1]">
          {vehicleName}
        </h2>
        <p className="text-black text-[16px] sm:text-[20px] leading-[1.3] mt-6">
          {introText}
        </p>
      </div> */}

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 border-b-2 border-[#3D3E98] pb-4">
        {["Rental Details", "Vehicle Details"].map((tab) => (
          <button
            key={tab}
            className={`h-[56px] sm:h-[69px] border border-[#3D3E98] px-4 sm:px-6 py-3 text-[18px] sm:text-[24px] font-medium rounded ${
              activeTab === tab
                ? "bg-[#3D3E98] text-white"
                : "bg-transparent text-[#3D3E98]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Vehicle Details" && (
        <>
          {/* Specs */}
          {/* Specs - Row Wise Layout */}
          <div className="flex flex-col gap-4">
            {[0, 2].map((startIndex) => (
              <div key={startIndex} className="flex flex-col sm:flex-row gap-4">
                {[vehicleSpecs[startIndex], vehicleSpecs[startIndex + 1]].map(
                  ([label, value], idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row gap-4 w-full sm:w-1/2"
                    >
                      <div className="bg-[#F7F7F7] border text-center flex items-center justify-center text-[16px] px-4 py-4 w-full sm:w-1/2 h-[61px]">
                        {label}
                      </div>
                      <div className="border border-[#3D3E98] text-center flex items-center justify-center text-[16px] px-4 py-4 w-full sm:w-1/2 h-[61px] font-bold">
                        {value}
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Paragraph */}
          <div className="mt-12">
            <p className="text-black text-[16px] sm:text-[20px] leading-[1.3] text-center">
              {vehicleParagraph}
            </p>
          </div>
        </>
      )}

      {activeTab === "Rental Details" && (
        <>
          {/* Rental Intro */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#3D3E98] text-[26px] sm:text-[30px] font-semibold">
              {vehicleName}
            </h3>
            <p className="text-black text-[16px] sm:text-[20px] leading-[1.3] text-center">
              {rentalIntroText}
            </p>
          </div>

          {/* Rental Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[56px] mt-8">
            {rentalDetails.map((section, idx) => (
              <div key={idx} className="bg-[#F8F8F8] p-6 w-full h-auto">
                <h3 className="text-[#3D3E98] text-[22px] sm:text-[30px] font-semibold mb-4 sm:mb-6">
                  {section.title}
                </h3>
                <ul className="list-disc pl-4 space-y-2 text-[16px] text-black">
                  {section.items.map((item, id) => (
                    <li key={id}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Final Paragraph */}
          <div className="mt-12">
            <p className="text-black text-[16px] sm:text-[20px] leading-[1.3] text-center">
              {rentalClosingParagraph}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
