// import React from "react";

const ConnectingLine = ({ left }) => (
  <div
    style={{
      position: "absolute",
      top: "40px",
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

// const StepBlock = ({ iconSrc, title, description }) => (
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       width: "227px",
//     }}
//   >
//     <div
//       style={{
//         width: "100px",
//         height: "80px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginBottom: "47px",
//       }}
//     >
//       <img
//         src={iconSrc}
//         alt="Step Icon"
//         style={{ width: "100%", height: "100%" }}
//       />
//     </div>
//     <div style={{ textAlign: "center"  ,     width: "267px", }}>
//       <div
//         style={{
//           fontFamily: "'DM Sans', sans-serif",
//           fontWeight: 700,
//           fontSize: "20px",
//           lineHeight: "20px",
//           textAlign: "center",
//           color: "#3D3E98",
//           marginBottom: "13px",
//                   //  border:'1px solid black'
//         }}
//       >
//         {title}
//       </div>
//       <div
//         style={{
//           // width: "267px",
//           fontFamily: "'DM Sans', sans-serif",
//           fontWeight: 500,
//           fontSize: "14px",
//           lineHeight: "14px",
//           textAlign: "center",
//           color: "rgba(0, 0, 0, 0.7)",
//           // marginLeft: "-20px",
//           minHeight: "30px",
//           // border:'1px solid black'
//         }}
//       >
//         {description}
//       </div>
//     </div>
//   </div>
// );

// export default function StepsSectionDesktop() {
//   return (
//     <div
//       className="hidden md:flex"
//       style={{
//         // width: "1033.5px",
//         // height: "303px",
//         flexDirection: "column",
//         alignItems: "center",
//         position: "relative",
//         margin: "0 auto",
//         paddingTop: "100px",
//         // border:'1px solid black',
//         paddingBottom:'135px'
//       }}
//     >
//       <div
//         style={{
//           height: "28px",
//           fontFamily: "'DM Sans', sans-serif",
//           fontWeight: 700,
//           fontSize: "40px",
//           lineHeight: "20px",
//           textAlign: "center",
//           color: "#000000",
//           marginBottom: "95px",
//         }}
//       >
//         Book Your Ride, Just Like That!
//       </div>

//       <div
//         style={{
//           width: "1033.5px",
//           height: "180px",
//           display: "flex",
//           justifyContent: "space-between",
//           position: "relative",
//         }}
//       >
//         <StepBlock
//           iconSrc="/calender.svg"
//           title="Your Journey, Your Way"
//           description="Set your pick-up, drop-off, and ride. Just the way you want."
//         />

//         <StepBlock
//           iconSrc="/cars.svg"
//           title="Select Your Vehicle"

//           description={
//             <>
//              Select the ideal vehicle
//               <br />
//               for your travel needs.
//             </>
//           }
//         />

//         <StepBlock
//           iconSrc="/money.svg"
//           title="Get The Best Rates"
//           description={
//             <>
//               Choose to pay by card,
//               <br /> net banking, or UPI.
//             </>
//           }
//         />

//         <StepBlock
//           iconSrc="/routes.svg"
//           title="Enjoy Your Trip"
//           description={
//             <>
//              Enjoy a smooth and
//               <br /> hassle-free journey.
//             </>
//           }
//         />

//         <ConnectingLine left={194.75} />
//         <ConnectingLine left={455.5} />
//         <ConnectingLine left={740.25} />
//       </div>
//     </div>
//   );
// }

import React from "react";

const desktopSteps = [
  {
    step: "STEP 1",
    iconSrc: "/calender.svg",
    title: "Your Journey, Your Way",
    description: "Set your pick-up, drop-off, and ride. Just the way you want.",
  },
  {
    step: "STEP 2",
    iconSrc: "/cars.svg",
    title: "Select Your Vehicle",
    description: "Select the ideal vehicle\nfor your travel needs.",
  },
  {
    step: "STEP 3",
    iconSrc: "/money.svg",
    title: "Get The Best Rates",
    description: "Choose to pay by card,\nnet banking, or UPI.",
  },
  {
    step: "STEP 4",
    iconSrc: "/routes.svg",
    title: "Enjoy Your Trip",
    description: "Enjoy a smooth and\nhassle-free journey.",
  },
];

// const ConnectingLine = ({ left }) => (
//   <div
//     style={{
//       position: "absolute",
//       top: "88px",
//       left: `${left}px`,
//       width: "100px",
//       height: "1px",
//       backgroundColor: "#5152A3",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     }}
//   >
//     <div
//       style={{
//         width: "8px",
//         height: "8px",
//         borderRadius: "50%",
//         background: "#5152A3",
//       }}
//     />
//     <div
//       style={{
//         width: "8px",
//         height: "8px",
//         borderRadius: "50%",
//         background: "#5152A3",
//       }}
//     />
//   </div>
// );

const StepBlock = ({ stepLabel, iconSrc, title, description }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "227px",
    }}
  >
    {/* Icon */}
    <div
      style={{
        width: "100px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
      }}
    >
      <img src={iconSrc} alt={title} style={{ width: "100%", height: "100%" }} />
    </div>

    {/* STEP label — ADDED (minimal, does not change other spacing) */}
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "14px",
        textTransform: "uppercase",
        color: "#000000",
        marginBottom: "12px",
      }}
    >
      {stepLabel}
    </div>

    {/* Title (kept identical to your previous design) */}
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "20px",
        textAlign: "center",
        color: "#3D3E98",
        marginBottom: "13px",
        width: "267px",
      }}
    >
      {title}
    </div>

    {/* Description (kept identical) */}
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "18px",
        textAlign: "center",
        color: "rgba(0, 0, 0, 0.7)",
        minHeight: "30px",
        whiteSpace: "pre-line",
      }}
    >
      {description}
    </div>
  </div>
);

export default function StepsSectionDesktop() {
  // widths & left positions tuned for the container width 1033.5
  const containerWidth = 1033.5;
  // approximate left offsets for connecting lines between Step blocks
  const leftPositions = [194.75, 455.5, 740.25];

  return (
    <div
      className="hidden md:flex"
      style={{
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        margin: "0 auto",
        paddingTop: "100px",
        paddingBottom: "135px",
      }}
    >
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

      <div
        style={{
          width: `${containerWidth}px`,
          height: "220px",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          // border:'1px solid black'
        }}
      >
        {/* Render step blocks */}
        {desktopSteps.map((s, i) => (
          <StepBlock
            key={i}
            stepLabel={s.step}
            iconSrc={s.iconSrc}
            title={s.title}
            description={s.description}
          />
        ))}

        {/* Connecting lines placed between steps */}
             <ConnectingLine left={194.75} />
         <ConnectingLine left={455.5} />
         <ConnectingLine left={740.25} />
      </div>
    </div>
  );
}
