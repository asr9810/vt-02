// import React, { useState } from "react";

// export default function VehicleDetailInfoSection() {
//   const [activeTab, setActiveTab] = useState("Rental Details");

//   const specData = [
//     ["Air Conditioning", "Yes"],
//     ["Seats", "5"],
//     ["Engine (CC)", "1197"],
//     ["Mileage", "23.26 km/l"],
//   ];

//   const rentalDetails = {
//     inclusions: [
//       "Charges applicable from garage to garage",
//       "Night charges applicable after 11:00 PM IST",
//       "Fuel, toll, state tax, and driver charges included",
//       "Parking and GST charges extra",
//     ],
//     amenities: [
//       "Water bottle",
//       "Air conditioned",
//       "GPS Tracker",
//       "Chauffeur",
//       "Ample Luggage Area",
//     ],
//     features: [
//       "Safety features like seatbelt reminders, high-speed alerts, and rear parking sensors.",
//       "The spacious cabin to make every journey feel effortless.",
//       "The SmartPlay infotainment system to keep entertained.",
//     ],
//   };

//   return (
//     <div className="w-full max-w-[1228px] mx-auto px-4 py-12 flex flex-col gap-[56px] font-['DM_Sans']">
//       {/* Header */}
//       <div className="w-full">
//         <h2 className="text-[#3D3E98] font-semibold text-[26px] sm:text-[30px] leading-[1.1]">
//           Maruti Suzuki Dzire Rental Service
//         </h2>
//         <p className="text-black text-[16px] sm:text-[20px] leading-[1.3] mt-6">
//           We provide well-maintained, high-quality Swift Dzire cars on
//           rent—ideal for outstation trips, airport pickup and drop, intercity
//           travel, group travel, or just pick-up and drop services. Whether
//           you're on a weekend trip or just require a safe drive around the city,
//           we've got you covered.
//           <br />
//           <br />
//           We are based in Delhi and ensuring each trip with us is a comfortable,
//           hassle-free, and economical experience.
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="flex flex-col sm:flex-row gap-4 border-b-2 border-[#3D3E98] pb-4">
//         {["Rental Details", "Vehicle Details"].map((tab) => (
//           <button
//             key={tab}
//             className={`h-[56px] sm:h-[69px] border border-[#3D3E98] px-4 sm:px-6 py-3 text-[18px] sm:text-[24px] font-medium rounded ${
//               activeTab === tab
//                 ? "bg-[#3D3E98] text-white"
//                 : "bg-transparent text-[#3D3E98]"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {activeTab === "Vehicle Details" && (
//         <>
//           {/* Specs */}
//           <div className="flex flex-col gap-4">
//             {[0, 2].map((startIndex) => (
//               <div key={startIndex} className="flex flex-col sm:flex-row gap-4">
//                 {[specData[startIndex], specData[startIndex + 1]].map(
//                   ([label, value], idx) => (
//                     <div
//                       key={idx}
//                       className="flex flex-col sm:flex-row gap-4 w-full sm:w-1/2"
//                     >
//                       <div className="bg-[#F7F7F7] border text-center flex items-center justify-center text-[16px] px-4 py-4 w-full sm:w-1/2 h-[61px]">
//                         {label}
//                       </div>
//                       <div className="border border-[#3D3E98] text-center flex items-center justify-center text-[16px] px-4 py-4 w-full sm:w-1/2 h-[61px] font-bold">
//                         {value}
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Paragraph */}
//           <div className="mt-12">
//             <p className="text-black text-[16px] sm:text-[20px] leading-[1.3]">
//               Every Swift Dzire in our fleet is spotless, well-maintained, and
//               set for a cozy trip. Our drivers have plenty of experience, good
//               manners, and know their way around, so you can relax and take in
//               the ride. For quick jaunts or extended journeys, we aim to make
//               your travel easy and worry-free.
//             </p>
//           </div>
//         </>
//       )}

//       {activeTab === "Rental Details" && (
//         <>
//           {/* Rental Intro */}
//           <div className="flex flex-col gap-6">
//             <h3 className="text-[#3D3E98] text-[26px] sm:text-[30px] font-semibold">
//               Maruti Suzuki Dzire Rental Service
//             </h3>
//             <p className="text-black text-[16px] sm:text-[20px] leading-[1.3]">
//               Elegant, efficient, and simply comfortable — the Swift Dzire is
//               the ideal sedan for those who value convenience alongside class.
//               Oozing luxury in its plush interiors, sophisticated exterior
//               design, and excellent mileage, the car provides a smooth travel
//               experience. Best suited for business travel, family excursions, or
//               airport runs, the Dzire is the trusted companion.
//               <br /> <br />
//               At Vivek Travles, we provide chauffeur-driven cars so that you can
//               sit back, relax, and enjoy a hassle-free ride from beginning to
//               end.
//             </p>
//           </div>

//           {/* Rental Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[56px] mt-8">
//             {[
//               { title: "Travel Inclusions", items: rentalDetails.inclusions },
//               { title: "Amenities", items: rentalDetails.amenities },
//               { title: "Features", items: rentalDetails.features },
//             ].map((section, idx) => (
//               <div key={idx} className="bg-[#F8F8F8] p-6 w-full h-auto">
//                 <h3 className="text-[#3D3E98] text-[22px] sm:text-[30px] font-semibold mb-4 sm:mb-6">
//                   {section.title}
//                 </h3>
//                 <ul className="list-disc pl-4 space-y-2 text-[16px] text-black">
//                   {section.items.map((item, id) => (
//                     <li key={id}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Final Paragraph */}
//           <div className="mt-12">
//             <p className="text-black text-[16px] sm:text-[20px] leading-[1.3]">
//               Vivek Travels offers Swift Dzire on rent from Delhi NCR for local
//               and intercity travel across India. Each booking comes with a
//               courteous, experienced chauffeur who ensures your journey is
//               smooth, timely, and safe.
//               <br />
//               <br />
//               Select Vivek Travels for a dependable, easy-going, and high-end
//               travel with Maruti Swift Dzire. For bookings and availability,
//               contact us today.
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

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
      <div className="w-full">
        <h2 className="text-[#3D3E98] font-semibold text-[26px] sm:text-[30px] leading-[1.1]">
          {vehicleName}
        </h2>
        <p className="text-black text-[16px] sm:text-[20px] leading-[1.3] mt-6">
          {introText}
        </p>
      </div>

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
            <p className="text-black text-[16px] sm:text-[20px] leading-[1.3]">
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
            <p className="text-black text-[16px] sm:text-[20px] leading-[1.3]">
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
            <p className="text-black text-[16px] sm:text-[20px] leading-[1.3]">
              {rentalClosingParagraph}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
