// import { useState, useEffect } from "react";
// import { Star } from "lucide-react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// export default function CustomerTestimonials() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const slideInterval = 2000;
//   const slideTransitionDuration = 800;

//   const testimonials = [
//     {
//       name: "Priya S.",
//       location: "New Delhi",
//       rating: 5,
//       review:
//         "Vivek Travels was the best choice for rental service in Delhi NCR, our family's trip. The chauffeur was extremely professional, and the car was immaculate. It felt like our comfort was paramount!",
//     },
//     {
//       name: "Rohan G.",
//       location: "Mumbai",
//       rating: 5,
//       review:
//         "As an executive traveler, I value reliability and punctuality. I've never had an issue with Vivek Travels in either. Their quality of service is excellent, and their vehicles are always in great condition.",
//     },
//     {
//       name: "Anjali M.",
//       location: "Bangalore",
//       rating: 5,
//       review:
//         "Hired a luxury car for my wedding. The attention to detail was impressive—from the car being perfectly decorated to our driver being polite and respectable, they made our day even better!",
//     },
//     {
//       name: "Vikram K.",
//       location: "Chennai",
//       rating: 4,
//       review:
//         "Used their tempo traveller for a corporate trip. The traveller was big, clean, and our driver was very accommodating. Very easy booking process and their customer service was extremely responsive.",
//     },
//     {
//       name: "Meera P.",
//       location: "Pune",
//       rating: 5,
//       review:
//         "Excellent service for airport transfers! They are always on-time, provide professional drivers, and have new and clean vehicles. I have used them for the last 2 years and will continue to!",
//     },
//     {
//       name: "Arjun T.",
//       location: "Hyderabad",
//       rating: 4,
//       review:
//         "Had a great experience with their bus rental service for our college reunion. The seats were comfortable for the trip, I thought the fares were fair, and our driver was very accommodating.",
//     },
//     {
//       name: "Neha S.",
//       location: "Gurgaon",
//       rating: 5,
//       review:
//         "For a weekend getaway, I booked their car rental in Delhi NCR — the vehicle was super clean, a smooth ride, and the driver was on time and polite. I will definitely use Vivek Travels again!!",
//     },
//     {
//       name: "Rohit M.",
//       location: "Noida",
//       rating: 5,
//       review:
//         "I hired their car rental service in the Delhi NCR for a business engagement. The car was immaculate, the driver well-dressed, everything was running on time. What a great experience!",
//     },
//     {
//       name: "Ananya K.",
//       location: "South Delhi",
//       rating: 5,
//       review:
//         "Rented a car for an airport drop — ride was flawless, booking was quick, and the team were very accommodating. Highly recommend car rentals in the Delhi NCR area.",
//     },
//     {
//       name: "Vikram S.",
//       location: "Faridabad",
//       rating: 4,
//       review:
//         "Used Vivek Travels for a short outstation trip. Their chauffeur driven car rental in Delhi NCR is exactly what we needed — clean, cheap, and comfy seats. Will use them again!",
//     },
//   ];

//   // Corporate clients auto-scroll state
//   const [currentClientSlide, setCurrentClientSlide] = useState(0);
//   const [isClientHovering, setIsClientHovering] = useState(false);
//   const clientSlideInterval = 4000;
//   const clientTransitionDuration = 800;

//   // Corporate clients data
//   const corporateClients = [
//     { name: "Patanjali", logo: "/placeholder.png?height=100&width=100" },
//     {
//       name: "Reliance Industries Limited",
//       logo: "/reliance.png?height=100&width=100",
//     },
//     { name: "The LaLit", logo: "/lalit.png?height=100&width=100" },
//     { name: "RR Kabel", logo: "/rrkabel.png?height=100&width=100" },
//     { name: "Samsung", logo: "/samsung.png?height=100&width=100" },
//     { name: "Air India", logo: "/Air-India-Logo.png?height=100&width=100" },
//     { name: "Bisleri", logo: "/bisleri.png?height=100&width=100" },
//     { name: "Tata Motors", logo: "/placeholder.png?height=100&width=100" },
//     { name: "HDFC Bank", logo: "/reliance.png?height=100&width=100" },
//     { name: "Wipro", logo: "/Air-India-Logo.png?height=100&width=100" },
//     { name: "Infosys", logo: "/rrkabel.png?height=100&width=100" },
//     { name: "Mahindra", logo: "/samsung.png?height=100&width=100" },
//   ];

//   const totalPages = Math.ceil(testimonials.length / 2);

//   // Auto-slide functionality with hover pause
//   // useEffect(() => {
//   //   if (isHovering) return;

//   //   const timer = setInterval(() => {
//   //     setCurrentPage((prev) => (prev + 1) % totalPages);
//   //   }, slideInterval);

//   //   return () => clearInterval(timer);
//   // }, [totalPages, isHovering, slideInterval]);

//   // Corporate clients auto-slide functionality
//   useEffect(() => {
//     if (isClientHovering) return;

//     const timer = setInterval(() => {
//       setCurrentClientSlide(
//         (prev) => (prev + 1) % Math.ceil(corporateClients.length / 4)
//       );
//     }, clientSlideInterval);

//     return () => clearInterval(timer);
//   }, [corporateClients.length, isClientHovering, clientSlideInterval]);

//   const getCurrentTestimonials = () => {
//     const startIndex = currentPage * 2;
//     return testimonials.slice(startIndex, startIndex + 2);
//   };

//   const goToPrevPage = () => {
//     setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
//   };

//   const goToNextPage = () => {
//     setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
//   };

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         size={12.4}
//         className={
//           index < rating ? "text-[#FF9500] fill-[#FF9500]" : "text-gray-300"
//         }
//       />
//     ));
//   };

//   useEffect(() => {
//     if (isHovering) return;
//     const timer = setInterval(() => {
//       setCurrentPage((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [isHovering, testimonials.length]);

//   // Auto-slide for mobile corporate clients
//   useEffect(() => {
//     if (isClientHovering) return;
//     const totalSlides = Math.ceil(corporateClients.length / 2);
//     const timer = setInterval(() => {
//       setCurrentClientSlide((prev) => (prev + 1) % totalSlides);
//     }, 3000); // 3 seconds per slide
//     return () => clearInterval(timer);
//   }, [isClientHovering, corporateClients.length]);

//   return (
//     <section className="gap-[22px] flex flex-col margin-0 auto ">
//       {/* From Our Customers Section */}
//       <div className="mx-auto ">
//         {/* Desktop Header */}
//         <div className="hidden md:block text-center mb-10">
//           <h2
//             style={{
//               height: "27.95px",
//               fontFamily: "'DM Sans', sans-serif",
//               fontWeight: 700,
//               fontSize: "40px",
//               lineHeight: "20px",
//               letterSpacing: "0%",
//               textAlign: "center",
//               verticalAlign: "middle",
//               color: "#000000",
//               marginBottom: "30px",
//             }}
//           >
//             From Our Customers
//           </h2>
//         </div>

//         {/* Mobile Header */}
//         {/* <div className="block md:hidden text-center mb-6">
//           <h2
//             style={{
//               width: "344px",
//               height: "14px",
//               fontFamily: "DM Sans",
//               fontWeight: 700,
//               fontSize: "22px",
//               lineHeight: "9.6px",
//               letterSpacing: "0%",
//               textAlign: "center",
//               verticalAlign: "middle",
//               color: "#000000",
//               margin: "0 auto",
//             }}
//           >
//             From Our Customers
//           </h2>
//         </div> */}

//         {/* Desktop Testimonials Container */}
//         <div className="hidden md:block">
//           <div
//             style={{
//               // width: "1275px",
//               height: "374.11px",
//               borderRadius: "10px",
//               paddingTop: "50px",
//               paddingRight: "42.5px",
//               paddingBottom: "50px",
//               paddingLeft: "42.5px",
//               background: "#FFFFFF",
//               margin: "0 auto",
//             }}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <div
//               style={{
//                 width: "1109px",
//                 height: "274.83px",
//                 gap: "10px",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <div
//                 style={{
//                   width: "1109px",
//                   height: "201.08px",
//                   gap: "26.56px",
//                   display: "flex",
//                   overflowX: "hidden",
//                   position: "relative",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: "26.56px",
//                     transition: `transform ${slideTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
//                     transform: `translateX(-${
//                       currentPage * (761.46 + 26.56)
//                     }px)`,
//                     width: `${testimonials.length * (761.46 + 26.56)}px`,
//                   }}
//                 >
//                   {testimonials.map((testimonial, index) => (
//                     <div
//                       key={index}
//                       style={{
//                         width: "761.46px",
//                         height: "201.08px",
//                         borderRadius: "20px",
//                         padding: "35.42px",
//                         background: "#F6F6F6",
//                         flexShrink: 0,
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: "690.63px",
//                           height: "64.25px",
//                           gap: "14.17px",
//                           paddingBottom: "17.71px",
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <div
//                           style={{
//                             width: "690.63px",
//                             height: "46.54px",
//                             gap: "17.71px",
//                             display: "flex",
//                             flexDirection: "column",
//                           }}
//                         >
//                           <div
//                             style={{
//                               width: "596.77px",
//                               height: "46.54px",
//                               gap: "3.54px",
//                               display: "flex",
//                               flexDirection: "column",
//                             }}
//                           >
//                             <div className="w-[596.77px] h-[21px] gap-[8.85px] flex items-center">
//                               <span
//                                 className="font-inter font-bold text-[17.71px] leading-[120%] tracking-[0px] align-middle text-black"
//                                 style={{ fontFamily: "DM Sans, sans-serif" }}
//                               >
//                                 {testimonial.name}
//                               </span>
//                             </div>
//                             <div className="w-[596.77px] h-[22px] gap-[5.31px] flex items-start justify-start">
//                               <span
//                                 className="font-inter font-normal text-[15.94px] leading-[100%] text-[#3C3C43D9] underline underline-offset-[2px]"
//                                 style={{ fontFamily: "DM Sans, sans-serif" }}
//                               >
//                                 {testimonial.location}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           style={{
//                             width: "76.15px",
//                             height: "46.54px",
//                             gap: "3.54px",
//                             paddingTop: "5.31px",
//                             display: "flex",
//                           }}
//                         >
//                           {renderStars(testimonial.rating)}
//                         </div>
//                       </div>
//                       <div className="pr-5 h-[66px]">
//                         <p
//                           className="font-inter font-normal text-[15.94px] leading-[140%] tracking-[0px] text-black"
//                           style={{ fontFamily: "DM Sans, sans-serif" }}
//                         >
//                           {testimonial.review}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: "16px",
//                   marginTop: "24px",
//                 }}
//               >
//                 <button
//                   onClick={goToPrevPage}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     borderRadius: "50%",
//                     backgroundColor: "#3D3E98",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     border: "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M15 18L9 12L15 6"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>

//                 <span
//                   style={{
//                     fontFamily: "Inter",
//                     fontWeight: 500,
//                     fontSize: "16px",
//                   }}
//                 >
//                   {currentPage + 1} / {totalPages}
//                 </span>

//                 <button
//                   onClick={goToNextPage}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     borderRadius: "50%",
//                     backgroundColor: "#3D3E98",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     border: "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M9 6L15 12L9 18"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Testimonials */}
//         <div className="block md:hidden w-full  justify-center px-4">
//           <div className="w-[342px] overflow-hidden">
//             {/* Header */}
//             <div className="text-center mb-4">
//               <h2
//                 className="text-[22px] font-bold text-black"
//                 style={{ fontFamily: "DM Sans" }}
//               >
//                 From Our Customers
//               </h2>
//             </div>

//             {/* Slider */}
//             <div className="relative overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-700 ease-in-out"
//                 style={{
//                   transform: `translateX(-${currentPage * 352}px)`,
//                   width: `${testimonials.length * 352}px`,
//                 }}
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <div
//                     key={index}
//                     className="flex-shrink-0"
//                     style={{ width: "352px" }}
//                   >
//                     <div className="bg-[#F6F6F6] rounded-[12px] px-4 py-3">
//                       {/* Header */}
//                       <div className="flex justify-between items-start mb-[6px]">
//                         <div>
//                           <div
//                             className="text-[12px] font-bold leading-[14px] text-black"
//                             style={{ fontFamily: "DM Sans" }}
//                           >
//                             {testimonial.name}
//                           </div>
//                           <div
//                             className="text-[10px] text-[#3C3C43D9] underline"
//                             style={{
//                               fontFamily: "DM Sans",
//                               lineHeight: "12px",
//                             }}
//                           >
//                             {testimonial.location}
//                           </div>
//                         </div>
//                         <div className="flex gap-[2px] mt-[2px]">
//                           {renderStars(testimonial.rating)}
//                         </div>
//                       </div>

//                       {/* Review */}
//                       <p
//                         className="text-[10.5px] text-black leading-[14px]"
//                         style={{ fontFamily: "DM Sans" }}
//                       >
//                         {testimonial.review}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrows Navigation */}

//             <div className="flex justify-center items-center gap-6 mt-4 md:hidden">
//               {/* Left Arrow */}
//               <button
//                 onClick={() =>
//                   setCurrentPage((prev) =>
//                     prev === 0 ? testimonials.length - 1 : prev - 1
//                   )
//                 }
//                 className="w-[32px] h-[32px] rounded-full bg-[#3D3E98] flex items-center justify-center shadow-md"
//               >
//                 <FiChevronLeft className="text-white text-[18px]" />
//               </button>

//               {/* Count */}
//               <span
//                 className="text-[12px] font-semibold text-black"
//                 style={{ fontFamily: "DM Sans" }}
//               >
//                 {currentPage + 1} / {testimonials.length}
//               </span>

//               {/* Right Arrow */}
//               <button
//                 onClick={() =>
//                   setCurrentPage((prev) => (prev + 1) % testimonials.length)
//                 }
//                 className="w-[32px] h-[32px] rounded-full bg-[#3D3E98] flex items-center justify-center shadow-md"
//               >
//                 <FiChevronRight className="text-white text-[18px]" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Our Corporate Clients Section */}
//       <div className="py-12  bg-[#3D3E98]">
//         {/* Desktop Header */}
//         <div className="hidden md:block text-center mb-12">
//           <h2
//             style={{
//               width: "1080px",
//               height: "28px",
//               fontFamily: "'DM Sans', sans-serif",
//               fontWeight: 700,
//               fontSize: "40px",
//               lineHeight: "20px",
//               letterSpacing: "2%",
//               textAlign: "center",
//               verticalAlign: "middle",
//               color: "#ffff",
//               margin: "0 auto",
//             }}
//           >
//             Our Corporate Clients
//           </h2>
//         </div>

//         {/* Mobile Header */}
//         <div className="block md:hidden text-center mb-6">
//           <h2
//             style={{
//               // width: "518.52px",
//               height: "15px",
//               fontFamily: "DM Sans",
//               fontWeight: 700,
//               fontSize: "22px",
//               lineHeight: "9.6px",
//               letterSpacing: "2%",
//               textAlign: "center",
//               verticalAlign: "middle",
//               color: "white",
//               margin: "0 auto",
//             }}
//           >
//             Our Corporate Clients
//           </h2>
//         </div>

//         {/* Desktop Corporate Clients */}
//         <div className="hidden md:block">
//           <div
//             style={{
//               width: "1080px",
//               height: "366px",
//               gap: "24px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               margin: "0 auto",
//             }}
//           >
//             <div
//               style={{
//                 width: "1080px",
//                 height: "299px",
//                 overflowX: "hidden",
//                 position: "relative",
//               }}
//               onMouseEnter={() => setIsClientHovering(true)}
//               onMouseLeave={() => setIsClientHovering(false)}
//             >
//               <div
//                 style={{
//                   width: "1080px",
//                   height: "279px",
//                   gap: "13px",
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "1080px",
//                     height: "133px",
//                     overflowX: "hidden",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "1898px",
//                       height: "133px",
//                       gap: "13px",
//                       display: "flex",
//                       transition: `transform ${clientTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
//                       transform: `translateX(-${
//                         currentClientSlide * (260 + 13) * 4
//                       }px)`,
//                     }}
//                   >
//                     {corporateClients.map((client, index) => (
//                       <div
//                         key={index}
//                         style={{
//                           width: "260px",
//                           height: "132px",
//                           paddingTop: "8px",
//                           paddingRight: "20px",
//                           paddingBottom: "8px",
//                           paddingLeft: "20px",
//                           borderWidth: "1px",
//                           borderStyle: "solid",
//                           borderColor: "#000000",
//                           background: "#FFFFFF",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           flexShrink: 0,
//                         }}
//                       >
//                         <img
//                           src={client.logo || "/placeholder.svg"}
//                           alt={client.name}
//                           style={{
//                             width: "140px",
//                             height: "90px",
//                             objectFit: "contain",
//                           }}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div
//                   style={{
//                     width: "1080px",
//                     height: "133px",
//                     overflowX: "hidden",
//                     position: "relative",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "1898px",
//                       height: "133px",
//                       gap: "13px",
//                       display: "flex",
//                       transition: `transform ${clientTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
//                       transform: `translateX(-${
//                         currentClientSlide * (260 + 13) * 4
//                       }px)`,
//                     }}
//                   >
//                     {corporateClients
//                       .slice(4)
//                       .concat(corporateClients.slice(0, 4))
//                       .map((client, index) => (
//                         <div
//                           key={`row2-${index}`}
//                           style={{
//                             width: "260px",
//                             height: "132px",
//                             paddingTop: "8px",
//                             paddingRight: "20px",
//                             paddingBottom: "8px",
//                             paddingLeft: "20px",
//                             borderWidth: "1px",
//                             borderStyle: "solid",
//                             borderColor: "#000000",
//                             background: "#FFFFFF",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             flexShrink: 0,
//                           }}
//                         >
//                           <img
//                             src={client.logo || "/placeholder.svg"}
//                             alt={client.name}
//                             style={{
//                               width: "140px",
//                               height: "90px",
//                               objectFit: "contain",
//                             }}
//                           />
//                         </div>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <a
//               href="/clients"
//               className="px-6 flex justify-center items-center "
//               style={{
//                 height: "43px",
//                 borderRadius: "8px",
//                 background: "#3D3E98",
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontWeight: 800,
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 letterSpacing: "0.2em",
//                 // color: "#FFFFFF",
//                 color: "#3D3E98",
//                 backgroundColor: "white",
//                 textDecoration: "none",
//               }}
//             >
//               VIEW MORE
//             </a>
//           </div>
//         </div>
//         {/* Mobile Corporate Clients */}
//         <div className="block md:hidden w-full px-4">
//           <div className="grid grid-cols-2 gap-2">
//             {corporateClients.slice(0, 4).map((client, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-black flex items-center justify-center"
//                 style={{
//                   height: "80px",
//                   padding: "8px",
//                 }}
//               >
//                 <img
//                   src={client.logo || "/placeholder.svg"}
//                   alt={client.name}
//                   className="w-[60px] h-[60px] object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CustomerTestimonials() {
  const [currentClientSlide, setCurrentClientSlide] = useState(0);
  const [isClientHovering, setIsClientHovering] = useState(false);
  const clientSlideInterval = 4000;
  const clientTransitionDuration = 800;

  const corporateClients = [
    { name: "Patanjali", logo: "/placeholder.png?height=100&width=100" },
    {
      name: "Reliance Industries Limited",
      logo: "/reliance.png?height=100&width=100",
    },
    { name: "The LaLit", logo: "/lalit.png?height=100&width=100" },
    { name: "RR Kabel", logo: "/rrkabel.png?height=100&width=100" },
    { name: "Samsung", logo: "/samsung.png?height=100&width=100" },
    { name: "Air India", logo: "/Air-India-Logo.png?height=100&width=100" },
    { name: "Bisleri", logo: "/bisleri.png?height=100&width=100" },
    { name: "Tata Motors", logo: "/placeholder.png?height=100&width=100" },
    { name: "HDFC Bank", logo: "/reliance.png?height=100&width=100" },
    { name: "Wipro", logo: "/Air-India-Logo.png?height=100&width=100" },
    { name: "Infosys", logo: "/rrkabel.png?height=100&width=100" },
    { name: "Mahindra", logo: "/samsung.png?height=100&width=100" },
  ];

  useEffect(() => {
    if (isClientHovering) return;
    const timer = setInterval(() => {
      setCurrentClientSlide(
        (prev) => (prev + 1) % Math.ceil(corporateClients.length / 4)
      );
    }, clientSlideInterval);

    return () => clearInterval(timer);
  }, [corporateClients.length, isClientHovering, clientSlideInterval]);

  useEffect(() => {
    if (!document.getElementById("featurable-script")) {
      const script = document.createElement("script");
      script.id = "featurable-script";
      script.src = "https://featurable.com/assets/bundle.js";
      script.defer = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);
    }
  }, []);

//   useEffect(() => {
//     const widgetId = "featurable-6366619a-14f8-4f58-a8a7-b64fc99071e1";

//     const removeReviewHeader = () => {
//       const root = document.getElementById(widgetId);
//       if (!root) return;

//       // Try to remove the whole header bar (summary + CTA)
//       // This targets the first immediate block inside the widget as a fallback.
//       const possibleHeader =
//         root.querySelector('[class*="header"], [data-featurable-header]') ||
//         root.querySelector(":scope > div > div:first-child");

//       if (possibleHeader) {
//         possibleHeader.remove();
//         return;
//       }

//       // Fallback: remove just the "Write a review" button by text
//       const btn = Array.from(root.querySelectorAll("a,button")).find(
//         (el) => el.textContent?.trim().toLowerCase() === "write a review"
//       );
//       if (btn) (btn.closest("div") || btn).remove();
//     };

//     // Run once and also observe for async render
//     removeReviewHeader();
//     const obs = new MutationObserver(removeReviewHeader);
//     obs.observe(document.getElementById(widgetId) ?? document.body, {
//       childList: true,
//       subtree: true,
//     });

//     return () => obs.disconnect();
//   }, []);

// useEffect(() => {
//   const widgetId = "featurable-6366619a-14f8-4f58-a8a7-b64fc99071e1";
//   const root = document.getElementById(widgetId);
//   if (!root) return;

//   const clean = () => {
//     // 1) Remove the top summary bar (contains the "Write a review" CTA)
//     const writeBtn = Array.from(root.querySelectorAll("a,button")).find((el) =>
//       /write a review/i.test(el.textContent || "")
//     );
//     if (writeBtn) {
//       const bar = writeBtn.closest("header,section,div");
//       if (bar && /google|based on|reviews/i.test(bar.textContent || "")) {
//         bar.remove();
//       }
//     }

//     // 2) Remove "Powered by Featurable" footer/branding
//     const branding = Array.from(
//       root.querySelectorAll("a,div,section,footer")
//     ).filter(
//       (el) =>
//         /powered by/i.test(el.textContent || "") &&
//         /featurable/i.test(el.textContent || "")
//     );
//     branding.forEach((el) => el.remove());

//     // 3) Make review cards equal height
//     // Heuristic: find a container that holds multiple review "cards"
//     const candidateContainers = Array.from(
//       root.querySelectorAll("div,section,article")
//     );
//     const cardContainer = candidateContainers.find((el) => {
//       const items = el.querySelectorAll(
//         'article, [data-review], [class*="card"], [class*="review"]'
//       );
//       return items.length >= 3; // looks like the row with 3 cards
//     });

//     if (cardContainer) {
//       const cards = Array.from(
//         cardContainer.querySelectorAll(
//           'article, [data-review], [class*="card"], [class*="review"]'
//         )
//       ).filter((el) => el.offsetParent !== null);

//       if (cards.length) {
//         // reset then equalize
//         cards.forEach((c) => (c.style.minHeight = "auto"));
//         const maxH = Math.max(...cards.map((c) => c.getBoundingClientRect().height));
//         cards.forEach((c) => (c.style.minHeight = `${Math.ceil(maxH)}px`));
//       }
//     }
//   };

//   // run a few times to catch async render + observe future changes
//   [0, 300, 800, 1500, 3000].forEach((ms) => setTimeout(clean, ms));
//   const obs = new MutationObserver(() => setTimeout(clean, 0));
//   obs.observe(root, { childList: true, subtree: true });
//   window.addEventListener("resize", clean);

//   return () => {
//     obs.disconnect();
//     window.removeEventListener("resize", clean);
//   };
// }, []);


useEffect(() => {
  const WIDGET_ID = "featurable-6366619a-14f8-4f58-a8a7-b64fc99071e1";

  const killIt = () => {
    const root = document.getElementById(WIDGET_ID);
    if (!root) return;

    // 1) Kill the top summary / CTA (matches "Write a review" or "Based on … reviews")
    const headerMatches = document.evaluate(
      './/*[contains(translate(normalize-space(.),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"write a review") or contains(normalize-space(.),"Based on")]',
      root,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
    for (let i = 0; i < headerMatches.snapshotLength; i++) {
      const node = headerMatches.snapshotItem(i);
      const bar = node.closest("header, section, div");
      if (bar) bar.remove();
    }

    // 2) Kill "Powered by Featurable"
    const brandMatches = document.evaluate(
      './/*[contains(translate(normalize-space(.),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"powered by") and contains(translate(normalize-space(.),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"featurable")]',
      root,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
    for (let i = 0; i < brandMatches.snapshotLength; i++) {
      const node = brandMatches.snapshotItem(i);
      const wrap = node.closest("footer, section, div, a") || node;
      if (wrap) wrap.remove();
    }

    // 3) Equalize review card heights
    const items = Array.from(
      root.querySelectorAll(
        'article, [data-review], [class*="card"], [class*="review"]'
      )
    ).filter((el) => el.offsetParent !== null);
    if (items.length >= 3) {
      items.forEach((c) => (c.style.minHeight = "auto"));
      const maxH = Math.max(...items.map((c) => c.getBoundingClientRect().height));
      items.forEach((c) => (c.style.minHeight = `${Math.ceil(maxH)}px`));
      // Ensure inner layout stretches
      items.forEach((c) => {
        c.style.display = "flex";
        c.style.flexDirection = "column";
      });
    }
  };

  // Run a few times + observe ongoing async renders
  [0, 250, 800, 1500, 3000].forEach((t) => setTimeout(killIt, t));
  const root = document.getElementById(WIDGET_ID) ?? document.body;
  const obs = new MutationObserver(() => setTimeout(killIt, 0));
  obs.observe(root, { childList: true, subtree: true });
  window.addEventListener("resize", killIt);

  return () => {
    obs.disconnect();
    window.removeEventListener("resize", killIt);
  };
}, []);


  return (
    <section className="gap-[22px] flex flex-col margin-0 auto ">
      {/* ✅ From Our Customers Section (Google Reviews) */}
      <div className="mx-auto text-center md:mb-10">
        <h2 className="text-[28px] md:text-'[40px] font-bold text-black">
          From Our Customers
        </h2>
      </div>

      {/* Featurable reviews container */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[80%] ">
          <div
            id="featurable-6366619a-14f8-4f58-a8a7-b64fc99071e1"
            data-featurable-async
            className="w-full"
          ></div>
        </div>
      </div>

      {/* ✅ Our Corporate Clients Section */}
      <div className="py-12 bg-[#3D3E98]">
        {/* Desktop Header */}
        <div className="hidden md:block text-center mb-12">
          <h2
            style={{
              width: "1080px",
              height: "28px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "20px",
              letterSpacing: "2%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#ffff",
              margin: "0 auto",
            }}
          >
            Our Corporate Clients
          </h2>
        </div>

        {/* Mobile Header */}
        <div className="block md:hidden text-center mb-6">
          <h2
            style={{
              height: "15px",
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "9.6px",
              letterSpacing: "2%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "white",
              margin: "0 auto",
            }}
          >
            Our Corporate Clients
          </h2>
        </div>

        {/* Desktop Corporate Clients */}
        <div className="hidden md:block">
          <div
            style={{
              width: "1080px",
              height: "366px",
              gap: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "1080px",
                height: "299px",
                overflowX: "hidden",
                position: "relative",
              }}
              onMouseEnter={() => setIsClientHovering(true)}
              onMouseLeave={() => setIsClientHovering(false)}
            >
              <div
                style={{
                  width: "1080px",
                  height: "279px",
                  gap: "13px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Row 1 */}
                <div
                  style={{
                    width: "1080px",
                    height: "133px",
                    overflowX: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "1898px",
                      height: "133px",
                      gap: "13px",
                      display: "flex",
                      transition: `transform ${clientTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                      transform: `translateX(-${
                        currentClientSlide * (260 + 13) * 4
                      }px)`,
                    }}
                  >
                    {corporateClients.map((client, index) => (
                      <div
                        key={index}
                        style={{
                          width: "260px",
                          height: "132px",
                          padding: "8px 20px",
                          border: "1px solid #000",
                          background: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          style={{
                            width: "140px",
                            height: "90px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2 */}
                <div
                  style={{
                    width: "1080px",
                    height: "133px",
                    overflowX: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "1898px",
                      height: "133px",
                      gap: "13px",
                      display: "flex",
                      transition: `transform ${clientTransitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                      transform: `translateX(-${
                        currentClientSlide * (260 + 13) * 4
                      }px)`,
                    }}
                  >
                    {corporateClients
                      .slice(4)
                      .concat(corporateClients.slice(0, 4))
                      .map((client, index) => (
                        <div
                          key={`row2-${index}`}
                          style={{
                            width: "260px",
                            height: "132px",
                            padding: "8px 20px",
                            border: "1px solid #000",
                            background: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            style={{
                              width: "140px",
                              height: "90px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/clients"
              className="px-6 flex justify-center items-center "
              style={{
                height: "43px",
                borderRadius: "8px",
                background: "white",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.2em",
                color: "#3D3E98",
                textDecoration: "none",
              }}
            >
              VIEW MORE
            </a>
          </div>
        </div>

        {/* Mobile Corporate Clients */}
        <div className="block md:hidden w-full px-4">
          <div className="grid grid-cols-2 gap-2">
            {corporateClients.slice(0, 4).map((client, index) => (
              <div
                key={index}
                className="bg-white border border-black flex items-center justify-center"
                style={{ height: "80px", padding: "8px" }}
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
