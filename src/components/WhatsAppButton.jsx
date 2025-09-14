// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppButton = () => {
//   return (
//     <a
//       href="https://wa.me/919650627278" // change to your number
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
//     >
//       <FaWhatsapp size={28} />
//     </a>
//   );
// };

// export default WhatsAppButton;


import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "919650627278"; // with country code
const PREFILL_TEXT = encodeURIComponent("Hi Vivek Travels, I need help with a booking.");

export default function WhatsAppButton() {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check how far from bottom user is
      const scrollPos = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;
      const buffer = 120; // distance (px) before bottom to trigger shift

      setIsNearBottom(scrollPos >= pageHeight - buffer);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-5 z-50 transition-all duration-300 ease-in-out
        ${isNearBottom ? "bottom-24" : "bottom-5"} 
      `}
    >
      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=${PREFILL_TEXT}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center gap-3 rounded-full shadow-lg px-3 py-2 bg-white hover:shadow-xl transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        {/* Label: visible only on small screens */}
        <span className="text-sm font-semibold text-[#0F5132] whitespace-nowrap block md:hidden">
          Chat with us
        </span>

        {/* Icon circle */}
        <span
          className="flex items-center justify-center rounded-full"
          style={{
            width: 44,
            height: 44,
            background: "#25D366",
            boxShadow: "0 6px 16px rgba(37,211,102,0.25)",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          <FaWhatsapp size={22} color="#ffffff" />
        </span>
      </a>
    </div>
  );
}
