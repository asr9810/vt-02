// import React from "react";

// const mobileSteps = [
//   {
//     step: "STEP 1",
//     title: "Your Journey, Your Way",
//     description: "Customize your trip: pick-up, drop-off, and vehicle, your way!",
//     icon: "/calender.svg",
//   },
//   {
//     step: "STEP 2",
//     title: "Select Your Vehicle",
//     description: "Customize your trip: pick-up, drop-off, and vehicle, your way!",
//     icon: "/cars.svg",
//   },
//   {
//     step: "STEP 3",
//     title: "Get The Best Rates",
//     description: "Customize your trip: pick-up, drop-off, and vehicle, your way!",
//     icon: "/money.svg",
//   },
//   {
//     step: "STEP 4",
//     title: "Enjoy Your Trip",
//     description: "Customize your trip: pick-up, drop-off, and vehicle, your way!",
//     icon: "/routes.svg",
//   },
// ];

// export default function BookYourRideMobile() {
//   return (
//     <div className="block md:hidden pt-6 pb-10  bg-white">
//       {/* Title */}
//       <h2
//         style={{
//           width: 364,
//           height: 22,
//           fontFamily: "DM Sans",
//           fontWeight: 700,
//           fontSize: 22,
//           lineHeight: "22px",
//           textAlign: "center",
//           color: "#000000",
//           margin: "0 auto 20px auto",
//         }}
//       >
//         Book Your Ride, Just Like That!
//       </h2>

//       {/* Steps */}
//       <div
//         style={{
//           width: 332,
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: "17.66px",
//         }}
//       >
//         {mobileSteps.map((step, idx) => (
//           <div
//             key={idx}
//             style={{
//               width: 332,
//               height: 84.76,
//               display: "flex",
//               gap: "14.13px",
//               borderRadius: "3.53px",
//             }}
//           >
//             {/* Icon box */}
//             <div
//             >
//               <img
//                 src={step.icon}
//                 alt={step.title}
//               />
//             </div>

//             {/* Content */}
//             <div
//               style={{
//                 width: 233.1,
//                 height: 80.08,
//                 padding: 14.13,
//                 borderRadius: "3.53px",
//                 backgroundColor: "#F7F7F7",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 gap: "8.83px",
//               }}
//             >
//               {/* Step + Title */}
//               <div>
//                 <div
//                   style={{
//                     fontFamily: "DM Sans",
//                     fontSize: "12px",
//                     fontWeight: 700,
//                     lineHeight: "17.66px",
//                     textTransform: "uppercase",
//                     color: "#000000",
//                   }}
//                 >
//                   {step.step}
//                 </div>
//                 <div
//                   style={{
//                     fontFamily: "DM Sans",
//                     fontSize: "17.66px",
//                     fontWeight: 700,
//                     lineHeight: "17.66px",
//                     color: "#3D3E98",
//                   }}
//                 >
//                   {step.title}
//                 </div>
//               </div>

//               {/* Description */}
//               <div
//                 style={{
//                   fontFamily: "DM Sans",
//                   fontSize: "8.83px",
//                   fontWeight: 500,
//                   lineHeight: "10.6px",
//                   color: "#000000B2",
//                 }}
//               >
//                 {step.description}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useInView } from "react-intersection-observer";

const mobileSteps = [
  {
    step: "STEP 1",
    title: "Your Journey, Your Way",
    description: "Customize your trip: pick-up, drop-off, and vehicle, your way!",
    icon: "/calender.svg",
  },
  {
    step: "STEP 2",
    title: "Select Your Vehicle",
    description: "Customize your trip: pick-up, drop-off, and vehicle, your way!",
    icon: "/cars.svg",
  },
  {
    step: "STEP 3",
    title: "Get The Best Rates",
    description: "Customize your trip: pick-up, drop-off, and vehicle, your way!",
    icon: "/money.svg",
  },
  {
    step: "STEP 4",
    title: "Enjoy Your Trip",
    description: "Customize your trip: pick-up, drop-off, and vehicle, your way!",
    icon: "/routes.svg",
  },
];

export default function BookYourRideMobile() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="block md:hidden pt-6 pb-10 bg-white" ref={ref}>
      {/* Title */}
      <h2
        style={{
          width: 364,
          height: 22,
          fontFamily: "DM Sans",
          fontWeight: 700,
          fontSize: 22,
          lineHeight: "22px",
          textAlign: "center",
          color: "#000000",
          margin: "0 auto 20px auto",
        }}
      >
        Book Your Ride, Just Like That!
      </h2>

      {/* Steps */}
      <div
        style={{
          width: 332,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "17.66px",
        }}
      >
        {mobileSteps.map((step, idx) => (
          <div
            key={idx}
            style={{
              width: 332,
              height: 84.76,
              display: "flex",
              gap: "14.13px",
              borderRadius: "3.53px",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0px)" : "translateY(20px)",
              transition: `all 600ms ease-out`,
              transitionDelay: `${idx * 400}ms`,
            }}
          >
            {/* Icon box */}
            <div>
              <img src={step.icon} alt={step.title} />
            </div>

            {/* Content */}
            <div
              style={{
                width: 233.1,
                height: 80.08,
                padding: 14.13,
                borderRadius: "3.53px",
                backgroundColor: "#F7F7F7",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "8.83px",
              }}
            >
              {/* Step + Title */}
              <div>
                <div
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "12px",
                    fontWeight: 700,
                    lineHeight: "17.66px",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                >
                  {step.step}
                </div>
                <div
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "17.66px",
                    fontWeight: 700,
                    lineHeight: "17.66px",
                    color: "#3D3E98",
                  }}
                >
                  {step.title}
                </div>
              </div>

              {/* Description */}
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "8.83px",
                  fontWeight: 500,
                  lineHeight: "10.6px",
                  color: "#000000B2",
                }}
              >
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
