import React from "react";

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

export default function StepsSectionDesktop() {
  return (
    <div
      className="hidden md:flex"
      style={{
        // width: "1033.5px",
        // height: "303px",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        margin: "0 auto",
        paddingTop: "100px",
        border:'1px solid black',
        paddingBottom:'135px'
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
          description={
            <>
              Choose to pay by card,
              <br /> net banking, or UPI.
            </>
          }
        />

        <StepBlock
          iconSrc="/routes.svg"
          title="Enjoy Your Trip"
          description={
            <>
              Enjoy a smooth and
              <br /> hassle-free journey.
            </>
          }
        />

        <ConnectingLine left={194.75} />
        <ConnectingLine left={455.5} />
        <ConnectingLine left={740.25} />
      </div>
    </div>
  );
}
