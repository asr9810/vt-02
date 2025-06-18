
const BusLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        width: "100%",
      }}
    >
      {/* Road Animation Container */}
      <div
        style={{
          width: "400px",
          height: "200px",
          position: "relative",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        {/* Animated Road */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #666 0%, #666 50%, transparent 50%, transparent 100%)",
            backgroundSize: "40px 4px",
            animation: "roadMove 1s linear infinite",
          }}
        />

        {/* Animated Bus */}
        <div
          style={{
            position: "absolute",
            bottom: "65px",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "busFloat 2s ease-in-out infinite",
          }}
        >
          {/* Bus Body */}
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
            }}
          >
            {/* Bus Main Body */}
            <rect x="10" y="15" width="90" height="35" rx="5" fill="#3D3E98" stroke="#2A2B6B" strokeWidth="2" />

            {/* Bus Front */}
            <rect x="100" y="20" width="15" height="25" rx="3" fill="#3D3E98" stroke="#2A2B6B" strokeWidth="2" />

            {/* Windows */}
            <rect x="15" y="20" width="15" height="12" rx="2" fill="#87CEEB" opacity="0.8" />
            <rect x="35" y="20" width="15" height="12" rx="2" fill="#87CEEB" opacity="0.8" />
            <rect x="55" y="20" width="15" height="12" rx="2" fill="#87CEEB" opacity="0.8" />
            <rect x="75" y="20" width="15" height="12" rx="2" fill="#87CEEB" opacity="0.8" />
            <rect x="103" y="23" width="8" height="8" rx="1" fill="#87CEEB" opacity="0.8" />

            {/* Door */}
            <rect x="20" y="35" width="12" height="15" rx="1" fill="#2A2B6B" />
            <circle cx="30" cy="42" r="1" fill="#FFD700" />

            {/* Wheels */}
            <circle cx="25" cy="52" r="6" fill="#333" stroke="#000" strokeWidth="1" />
            <circle cx="25" cy="52" r="3" fill="#666" />
            <circle cx="85" cy="52" r="6" fill="#333" stroke="#000" strokeWidth="1" />
            <circle cx="85" cy="52" r="3" fill="#666" />

            {/* Vivek Travels Text */}
            <text
              x="55"
              y="42"
              textAnchor="middle"
              fill="white"
              fontSize="8"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
            >
              VIVEK
            </text>

            {/* Headlights */}
            <circle cx="108" cy="35" r="2" fill="#FFD700" opacity="0.9" />
            <circle cx="108" cy="28" r="2" fill="#FFD700" opacity="0.9" />
          </svg>
        </div>

        {/* Animated Clouds */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "0",
            animation: "cloudMove 8s linear infinite",
          }}
        >
          <svg width="60" height="30" viewBox="0 0 60 30">
            <ellipse cx="20" cy="20" rx="15" ry="8" fill="#E6F3FF" opacity="0.7" />
            <ellipse cx="35" cy="18" rx="12" ry="6" fill="#E6F3FF" opacity="0.7" />
            <ellipse cx="25" cy="15" rx="8" ry="5" fill="#E6F3FF" opacity="0.7" />
          </svg>
        </div>

        <div
          style={{
            position: "absolute",
            top: "5px",
            right: "0",
            animation: "cloudMove 12s linear infinite reverse",
          }}
        >
          <svg width="50" height="25" viewBox="0 0 50 25">
            <ellipse cx="15" cy="15" rx="12" ry="6" fill="#E6F3FF" opacity="0.5" />
            <ellipse cx="28" cy="13" rx="10" ry="5" fill="#E6F3FF" opacity="0.5" />
            <ellipse cx="20" cy="10" rx="6" ry="4" fill="#E6F3FF" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Loading Text with Animation */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            color: "#3D3E98",
            margin: "0 0 8px 0",
            animation: "textPulse 2s ease-in-out infinite",
          }}
        >
          Loading Your Journey
        </h3>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#666",
            margin: 0,
          }}
        >
          Please wait while we prepare your travel stories...
        </p>

        {/* Loading Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#3D3E98",
              animation: "dotBounce 1.4s ease-in-out infinite both",
              animationDelay: "0s",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#3D3E98",
              animation: "dotBounce 1.4s ease-in-out infinite both",
              animationDelay: "0.2s",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#3D3E98",
              animation: "dotBounce 1.4s ease-in-out infinite both",
              animationDelay: "0.4s",
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes busFloat {
          0%, 100% {
            transform: translateX(-50%) translateY(0px);
          }
          50% {
            transform: translateX(-50%) translateY(-3px);
          }
        }

        @keyframes roadMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 0;
          }
        }

        @keyframes cloudMove {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(450px);
          }
        }

        @keyframes textPulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default BusLoader
