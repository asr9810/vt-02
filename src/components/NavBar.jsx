// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { TiArrowSortedDown } from "react-icons/ti";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // const [isFleetOpen, setIsFleetOpen] = useState(false);
//   // const fleetTimeout = useRef(null);

//   const [isFleetOpen, setIsFleetOpen] = useState(false);
//   const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);
//   const fleetTimeout = useRef(null);
//   const submenuTimeout = useRef(null);

//   // const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [isFleetMobileOpen, setIsFleetMobileOpen] = useState(false);
//   // const [openFleetCategoryIndex, setOpenFleetCategoryIndex] = useState(null);

//   const [isFleetMobileOpen, setIsFleetMobileOpen] = useState(false); // Controls main Fleet toggle
//   const [openFleetCategoryIndex, setOpenFleetCategoryIndex] = useState(null); // Controls subcategory open

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isMenuOpen]);

//   const fleetCategories = [
//     {
//       title: "Sedans",
//       title_url: "sedans",
//       cars: [
//         { name: "Swift Dzire", url: "swift-dzire" },
//         { name: "Hyundai Aura", url: "hyundai-aura" },
//         { name: "Honda Amaze", url: "honda-amaze" },
//         { name: "Honda City", url: "honda-city" },
//         { name: "Maruti Suzuki Ciaz", url: "maruti-suzuki-ciaz" },
//       ],
//     },
//     {
//       title: "SUV/MUVs",
//       title_url: "suv-muvs",
//       cars: [
//         { name: "Maruti Suzuki Ertiga", url: "maruti-suzuki-ertiga" },
//         { name: "Toyota Rumion", url: "toyota-rumion" },
//         { name: "Innova Crysta", url: "innova-crysta" },
//         { name: "Innova Hycross", url: "innova-hycross" },
//         { name: "Maruti Suzuki Invicto", url: "maruti-suzuki-invicto" },
//         { name: "Toyota Fortuner", url: "toyota-fortuner" },
//         { name: "Kia Carnival", url: "kia-carnival" },
//         { name: "Kia Carens", url: "kia-carens" },
//       ],
//     },
//     {
//       title: "Luxury Cars (4-7 seater)",
//       title_url: "luxury-cars-4-7-seater",
//       cars: [
//         { name: "Toyota Camry", url: "toyota-camry" },
//         { name: "Mercedes E-Class", url: "mercedes-e-class" },
//         { name: "Mercedes S-Class", url: "mercedes-s-class" },
//         { name: "BMW 7 Series", url: "bmw-7-series" },
//         { name: "Jaguar XF", url: "jaguar-xf" },
//         { name: "Mercedes Viano", url: "mercedes-viano" },
//         { name: "Land Rover Defender", url: "land-rover-defender" },
//         { name: "Toyota Vellfire", url: "toyota-vellfire" },
//       ],
//     },
//     {
//       title: "Van",
//       title_url: "van",
//       cars: [
//         {
//           name: "Luxury Maharaja Tempo Traveller",
//           url: "luxury-maharaja-tempo-traveller",
//         },
//         { name: "Tempo Travellers 2x1", url: "tempo-travellers-2x1" },
//         { name: "Urbania - Modified", url: "urbania-modified" },
//         { name: "Urbania 2x1", url: "urbania-2x1" },
//       ],
//     },
//     {
//       title: "EV Cars",
//       title_url: "ev-cars",
//       cars: [
//         { name: "Tata Tigor", url: "tata-tigor" },
//         { name: "Tata Nexon", url: "tata-nexon" },
//         { name: "MG ZS EV", url: "mg-zs-ev" },
//         { name: "Ioniq 5", url: "ioniq-5" },
//       ],
//     },
//     {
//       title: "Luxury Buses",
//       title_url: "luxury-buses",
//       cars: [
//         { name: "Mini Bus Coach", url: "mini-bus-coach" },
//         { name: "Luxury Coach", url: "luxury-coach" },
//         { name: "Scania/Volvo Bus", url: "scania-volvo-bus" },
//       ],
//     },
//   ];

//   return (
//   <div className="sticky top-0 z-50 w-full  shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-white">

//       {/* Main Navigation */}
//       <div className="bg-white h-[100px] px-1  md:px-8 py-[30px] flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <Link to="/">
//             <img
//               src="/logo.png"
//               alt="Vivek Travels Logo"
//                className="h-auto w-[200px] md:w-[267px] object-contain"
//             />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-[#3D3E98] p-2"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Desktop Navigation Links */}
// {/* 
//         <div className="hidden md:flex items-center justify-between flex-1 overflow-x-auto  ">
//         <ul className="flex overflow-x-auto gap-2 md:gap-5  scrollbar-hide px-2 "> */}

//         <div className="hidden md:flex items-center justify-between flex-1 min-w-0 pl-auto">
//         <ul className="flex flex-wrap items-center gap-4 lg:gap-7 text-[15px] min-w-0 whitespace-nowrap overflow-hidden  ml-auto ">

//             <li>
//               <Link
//                 to="/about"
//                 className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/gallery"
//                 className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
//               >
//                 Gallery
//               </Link>
//             </li>

//             <li
//               className="relative group"
//               onMouseEnter={() => {
//                 clearTimeout(fleetTimeout.current);
//                 fleetTimeout.current = setTimeout(
//                   () => setIsFleetOpen(true),
//                   100
//                 );
//               }}
//               onMouseLeave={() => {
//                 clearTimeout(fleetTimeout.current);
//                 fleetTimeout.current = setTimeout(() => {
//                   setIsFleetOpen(false);
//                   setHoveredCategoryIndex(null);
//                 }, 150);
//               }}
//             >
//               <span
//                 className={`flex items-center font-semibold text-[16px] leading-[21.6px] text-center capitalize cursor-pointer transition-colors ${
//                   isFleetOpen
//                     ? "text-[#2D2E78]"
//                     : "text-[#3D3E98] hover:text-[#2D2E78]"
//                 }`}
//               >
//                 Our Fleet <TiArrowSortedDown className="ml-1" />
//               </span>

//               {isFleetOpen && (
//                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 z-50 w-[240px]">
//                   <ul className="text-[#3D3E98] text-[15px] py-2">
//                     {fleetCategories.map((category, index) => (
//                       <li
//                         key={index}
//                         className="relative px-4 py-2 cursor-pointer hover:bg-gray-100"
//                         onMouseEnter={() => {
//                           clearTimeout(submenuTimeout.current);
//                           submenuTimeout.current = setTimeout(
//                             () => setHoveredCategoryIndex(index),
//                             100
//                           );
//                         }}
//                         onMouseLeave={() => {
//                           clearTimeout(submenuTimeout.current);
//                           submenuTimeout.current = setTimeout(
//                             () => setHoveredCategoryIndex(null),
//                             150
//                           );
//                         }}
//                       >
//                         <Link
//                           className="flex justify-between items-center"
//                           to={`/${category.title_url}`}
//                         >
//                           {category.title}{" "}
//                           <TiArrowSortedDown className="transform rotate-[-90deg] ml-1" />
//                         </Link>
//                         {hoveredCategoryIndex === index && (
//                           <div className="absolute top-0 left-full ml-1 bg-white shadow-md rounded-md w-[220px]">
//                             <ul className="py-2">
//                               {category.cars.map((car, idx) => (
//                                 <li
//                                   key={idx}
//                                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                 >
//                                   <Link
//                                     to={`/${car.url}`}
//                                     className="block w-full"
//                                   >
//                                     {car.name}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>

//             <li>
//               <Link
//                 to="/our-services"
//                 className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
//               >
//                 Our Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/clients"
//                 className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
//               >
//                 Clients
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/blogs"
//                 className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
//               >
//                 Blogs
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/vendor-application"
//                 className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
//                 // style={{fontWeight:'600'}}
//               >
//                 Vendor Application
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact-us"
//                 className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
//               >
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               {/* <Link> */}
//                 <div className="flex items-center w-[240px]  rounded-[8px] overflow-hidden ">
             
//               <a href="tel:01147080808">
//                 <div className="w-[54px]  bg-white flex items-center justify-center rounded-l-[8px] ">
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       stroke="#3D3E98"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </a>
  
//               <div className="flex-1 flex items-center justify-start">
//                 <span className="text-black font-['Montserrat'] font-medium text-[16px] leading-[14.62px] text-center capitalize">
//                   <a href="tel:01147080808">(011) 4708 0808</a>
//                 </span>
//               </div>
//             </div>
//               {/* </Link> */}
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Side Drawer */}
//       <div
//         className={`fixed inset-y-0 left-0 bg-white w-64 transform z-50 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <Link to="/">
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VT%20Logo%20%282%29-VYqB2UbSoACSw4ebFWXLYD1rKc0bEv.png"
//               alt="Logo"
//               className="w-[140px]"
//             />
//           </Link>
//           <button onClick={() => setIsMenuOpen(false)}>
//             <X className="h-6 w-6 text-[#3D3E98]" />
//           </button>
//         </div>

//         <ul className="p-4 space-y-3 overflow-y-auto h-[calc(100%-64px)]">
//           <li>
//             <Link
//               to="/about"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-[#3D3E98] font-semibold"
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/gallery"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-[#3D3E98] font-semibold"
//             >
//               Gallery
//             </Link>
//           </li>
//           <li>
//             <button
//               onClick={() => setIsFleetMobileOpen(!isFleetMobileOpen)}
//               className="w-full text-left text-[#3D3E98] font-semibold flex justify-between items-center"
//             >
//               Our Fleet{" "}
//               <TiArrowSortedDown
//                 className={`transform transition-transform ${
//                   isFleetMobileOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               />
//             </button>

//             {isFleetMobileOpen && (
//               <ul className="pl-4 mt-2 space-y-2">
//                 {fleetCategories.map((category, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() =>
//                         setOpenFleetCategoryIndex(
//                           openFleetCategoryIndex === index ? null : index
//                         )
//                       }
//                       className="w-full text-left text-[#3D3E98] font-medium flex justify-between items-center"
//                     >
//                       {category.title}
//                       <TiArrowSortedDown
//                         className={`transform transition-transform ${
//                           openFleetCategoryIndex === index
//                             ? "rotate-180"
//                             : "rotate-0"
//                         }`}
//                       />
//                     </button>

//                     {openFleetCategoryIndex === index && (
//                       <ul className="pl-4 mt-1 space-y-1">
//                         {category.cars.map((car, idx) => (
//                           <li key={idx}>
//                             <Link
//                               to={`/${car.url}`}
//                               onClick={() => setIsMenuOpen(false)}
//                               className="text-sm text-[#3D3E98] hover:underline block"
//                             >
//                               {car.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link
//               to="/our-services"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-[#3D3E98] font-semibold"
//             >
//               Our Services
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/clients"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-[#3D3E98] font-semibold"
//             >
//               Clients
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/blogs"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-[#3D3E98] font-semibold"
//             >
//               Blogs
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/vendor-application"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-[#3D3E98] font-semibold"
//             >
//               Vendor Application
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact-us"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-[#3D3E98] font-semibold"
//             >
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
//           onClick={() => setIsMenuOpen(false)}
//         ></div>
//       )}

//       {/* Contact Bar - Hidden on mobile */}
//       {/* <div className="hidden md:block bg-[#3D3E98] h-[50px] px-20 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.6)]">
//         <div className="flex items-center justify-end h-full">
    
//           <div className="flex items-center pr-9 h-[40px] gap-[32px]">

//             <div className="flex items-center w-[280px] h-[40px] border border-white rounded-[8px] overflow-hidden">
             
//               <a href="tel:01147080808">
//                 <div className="w-[72px] h-[40px] bg-white flex items-center justify-center rounded-l-[8px]">
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       stroke="#3D3E98"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </a>
  
//               <div className="flex-1 flex items-center justify-center pr-6">
//                 <span className="text-white font-['Montserrat'] font-medium text-[20px] leading-[14.62px] text-center capitalize">
//                   <a href="tel:01147080808">(011) 4708 0808</a>
//                 </span>
//               </div>
//             </div>
//           </div>

        
//           <div className="flex gap-[16px] items-center">
//             <a
//               href="https://facebook.com"
//               className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
//                   fill="#3D3E98"
//                 />
//               </svg>
//             </a>
//             <a
//               href="https://instagram.com"
//               className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
//                   fill="#3D3E98"
//                 />
//               </svg>
//             </a>
//             <a
//               href="https://linkedin.com"
//               className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
//                   fill="#3D3E98"
//                 />
//               </svg>
//             </a>
//             <a
//               href="https://youtube.com"
//               className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
//                   fill="#3D3E98"
//                 />
//               </svg>
//             </a>
//             <a
//               href="https://twitter.com"
//               className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
//             >
//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
//                   fill="#3D3E98"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div> */}

//       <div className="flex md:hidden bg-[#3D3E98] px-[18px] py-[5px] h-[30.648649215698242px] justify-between items-center">
//         {/* Phone container */}
//         <div className="flex items-center h-[20.648649215698242px] pr-[12.39px] gap-[6.19px] rounded-[4.13px] border-[0.52px] border-white ">
//           <a href="tel:01147080808" className="flex items-center gap-[4px]">
//             <div className="w-[34px] h-[20px] bg-white flex items-center justify-center rounded-l-[4.13px]">
//               <svg
//                 width="12"
//                 height="12"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   stroke="#3D3E98"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//             <span className="text-white text-[10px] font-semibold">
//               (011) 4708 0808
//             </span>
//           </a>
//         </div>

//         {/* Social Media Icons (same as desktop) */}
//         <div className="flex gap-[16.45px] items-center w-[147.5405px] h-[16.3449px]">
//           {[
//             {
//               href: "https://facebook.com",
//               icon: (
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
//                     fill="#3D3E98"
//                   />
//                 </svg>
//               ),
//             },
//             {
//               href: "https://instagram.com",
//               icon: (
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-1.683a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z"
//                     fill="#3D3E98"
//                   />
//                 </svg>
//               ),
//             },
//             {
//               href: "https://linkedin.com",
//               icon: (
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zM7.119 20.452H3.555V9h3.564v11.452z"
//                     fill="#3D3E98"
//                   />
//                 </svg>
//               ),
//             },
//             {
//               href: "https://youtube.com",
//               icon: (
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
//                     fill="#3D3E98"
//                   />
//                 </svg>
//               ),
//             },
//             {
//               href: "https://twitter.com",
//               icon: (
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
//                     fill="#3D3E98"
//                   />
//                 </svg>
//               ),
//             },
//           ].map(({ href, icon }, index) => (
//             <a
//               key={index}
//               href={href}
//               className="w-[18px] h-[18px] bg-white rounded-full flex items-center justify-center"
//             >
//               {icon}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [isFleetOpen, setIsFleetOpen] = useState(false);
  // const fleetTimeout = useRef(null);

  const [isFleetOpen, setIsFleetOpen] = useState(false);
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);
  const fleetTimeout = useRef(null);
  const submenuTimeout = useRef(null);

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isFleetMobileOpen, setIsFleetMobileOpen] = useState(false);
  // const [openFleetCategoryIndex, setOpenFleetCategoryIndex] = useState(null);

  const [isFleetMobileOpen, setIsFleetMobileOpen] = useState(false); // Controls main Fleet toggle
  const [openFleetCategoryIndex, setOpenFleetCategoryIndex] = useState(null); // Controls subcategory open

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const fleetCategories = [
    {
      title: "Sedans",
      title_url: "sedans",
      cars: [
        { name: "Swift Dzire", url: "swift-dzire" },
        { name: "Hyundai Aura", url: "hyundai-aura" },
        { name: "Honda Amaze", url: "honda-amaze" },
        { name: "Honda City", url: "honda-city" },
        { name: "Maruti Suzuki Ciaz", url: "maruti-suzuki-ciaz" },
      ],
    },
    {
      title: "SUV/MUVs",
      title_url: "suv-muvs",
      cars: [
        { name: "Maruti Suzuki Ertiga", url: "maruti-suzuki-ertiga" },
        { name: "Toyota Rumion", url: "toyota-rumion" },
        { name: "Innova Crysta", url: "innova-crysta" },
        { name: "Innova Hycross", url: "innova-hycross" },
        { name: "Maruti Suzuki Invicto", url: "maruti-suzuki-invicto" },
        { name: "Toyota Fortuner", url: "toyota-fortuner" },
        { name: "Kia Carnival", url: "kia-carnival" },
        { name: "Kia Carens", url: "kia-carens" },
      ],
    },
    {
      title: "Luxury Cars (4-7 seater)",
      title_url: "luxury-cars-4-7-seater",
      cars: [
        { name: "Toyota Camry", url: "toyota-camry" },
        { name: "Mercedes E-Class", url: "mercedes-e-class" },
        { name: "Mercedes S-Class", url: "mercedes-s-class" },
        { name: "BMW 7 Series", url: "bmw-7-series" },
        { name: "Jaguar XF", url: "jaguar-xf" },
        { name: "Mercedes Viano", url: "mercedes-viano" },
        { name: "Land Rover Defender", url: "land-rover-defender" },
        { name: "Toyota Vellfire", url: "toyota-vellfire" },
      ],
    },
    {
      title: "Van",
      title_url: "van",
      cars: [
        {
          name: "Luxury Maharaja Tempo Traveller",
          url: "luxury-maharaja-tempo-traveller",
        },
        { name: "Tempo Travellers 2x1", url: "tempo-travellers-2x1" },
        { name: "Urbania - Modified", url: "urbania-modified" },
        { name: "Urbania 2x1", url: "urbania-2x1" },
      ],
    },
    {
      title: "EV Cars",
      title_url: "ev-cars",
      cars: [
        { name: "Tata Tigor", url: "tata-tigor" },
        { name: "Tata Nexon", url: "tata-nexon" },
        { name: "MG ZS EV", url: "mg-zs-ev" },
        { name: "Ioniq 5", url: "ioniq-5" },
      ],
    },
    {
      title: "Luxury Buses",
      title_url: "luxury-buses",
      cars: [
        { name: "Mini Bus Coach", url: "mini-bus-coach" },
        { name: "Luxury Coach", url: "luxury-coach" },
        { name: "Scania/Volvo Bus", url: "scania-volvo-bus" },
      ],
    },
  ];

  return (
  <div className="sticky top-0 z-50 w-full  shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-white">

      {/* Main Navigation */}
      <div className="bg-white h-[100px] px-1  md:px-2 py-[30px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Vivek Travels Logo"
               className="h-auto xl:w-[250px] lg:w-[180px] w-[200px] md:w-[150px] object-contain"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#3D3E98] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-end justify-evenly flex-1 ">
          {/* <ul className="flex gap-[18px]"> */}
          <ul className="flex gap-[18px] lg:gap-[12px] xl:gap-[1.2rem] md:gap-[2px] sm:gap-[8px]  ml-auto">

            <li>
              <Link
                to="/about"
                className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
              >
                Gallery
              </Link>
            </li>

            <li
              className="relative group"
              onMouseEnter={() => {
                clearTimeout(fleetTimeout.current);
                fleetTimeout.current = setTimeout(
                  () => setIsFleetOpen(true),
                  100
                );
              }}
              onMouseLeave={() => {
                clearTimeout(fleetTimeout.current);
                fleetTimeout.current = setTimeout(() => {
                  setIsFleetOpen(false);
                  setHoveredCategoryIndex(null);
                }, 150);
              }}
            >
              <span
                className={`flex items-center font-semibold text-[16px] leading-[21.6px] text-center capitalize cursor-pointer transition-colors ${
                  isFleetOpen
                    ? "text-[#2D2E78]"
                    : "text-[#3D3E98] hover:text-[#2D2E78]"
                }`}
              >
                Our Fleet <TiArrowSortedDown className="ml-1" />
              </span>

              {isFleetOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 z-50 w-[240px]">
                  <ul className="text-[#3D3E98] text-[15px] py-2">
                    {fleetCategories.map((category, index) => (
                      <li
                        key={index}
                        className="relative px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onMouseEnter={() => {
                          clearTimeout(submenuTimeout.current);
                          submenuTimeout.current = setTimeout(
                            () => setHoveredCategoryIndex(index),
                            100
                          );
                        }}
                        onMouseLeave={() => {
                          clearTimeout(submenuTimeout.current);
                          submenuTimeout.current = setTimeout(
                            () => setHoveredCategoryIndex(null),
                            150
                          );
                        }}
                      >
                        <Link
                          className="flex justify-between items-center"
                          to={`/${category.title_url}`}
                        >
                          {category.title}{" "}
                          <TiArrowSortedDown className="transform rotate-[-90deg] ml-1" />
                        </Link>
                        {hoveredCategoryIndex === index && (
                          <div className="absolute top-0 left-full ml-1 bg-white shadow-md rounded-md w-[220px]">
                            <ul className="py-2">
                              {category.cars.map((car, idx) => (
                                <li
                                  key={idx}
                                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                  <Link
                                    to={`/${car.url}`}
                                    className="block w-full"
                                  >
                                    {car.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/our-services"
                className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/clients"
                className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/vendor-application"
                className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
                // style={{fontWeight:'600'}}
              >
                Vendor Application
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-[#3D3E98] font-semibold text-[16px] leading-[21.6px] text-center capitalize hover:text-[#2D2E78] transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              {/* <Link> */}
                <div className="flex items-center w-[200px]  rounded-[8px] overflow-hidden ">
             
              <a href="tel:01147080808">
                <div className="w-[54px]  bg-white flex items-center justify-center rounded-l-[8px] ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      stroke="#3D3E98"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
  
              <div className="flex-1 flex items-center justify-start">
                <span className="text-black font-['Montserrat'] font-medium text-[16px] leading-[14.62px] text-end capitalize">
                  <a href="tel:01147080808">(011) 4708 0808</a>
                </span>
              </div>
            </div>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 transform z-50 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VT%20Logo%20%282%29-VYqB2UbSoACSw4ebFWXLYD1rKc0bEv.png"
              alt="Logo"
              className="w-[140px]"
            />
          </Link>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-[#3D3E98]" />
          </button>
        </div>

        <ul className="p-4 space-y-3 overflow-y-auto h-[calc(100%-64px)]">
          <li>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#3D3E98] font-semibold"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#3D3E98] font-semibold"
            >
              Gallery
            </Link>
          </li>
          <li>
            <button
              onClick={() => setIsFleetMobileOpen(!isFleetMobileOpen)}
              className="w-full text-left text-[#3D3E98] font-semibold flex justify-between items-center"
            >
              Our Fleet{" "}
              <TiArrowSortedDown
                className={`transform transition-transform ${
                  isFleetMobileOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isFleetMobileOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                {fleetCategories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        setOpenFleetCategoryIndex(
                          openFleetCategoryIndex === index ? null : index
                        )
                      }
                      className="w-full text-left text-[#3D3E98] font-medium flex justify-between items-center"
                    >
                      {category.title}
                      <TiArrowSortedDown
                        className={`transform transition-transform ${
                          openFleetCategoryIndex === index
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                    </button>

                    {openFleetCategoryIndex === index && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {category.cars.map((car, idx) => (
                          <li key={idx}>
                            <Link
                              to={`/${car.url}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-sm text-[#3D3E98] hover:underline block"
                            >
                              {car.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/our-services"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#3D3E98] font-semibold"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/clients"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#3D3E98] font-semibold"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#3D3E98] font-semibold"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/vendor-application"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#3D3E98] font-semibold"
            >
              Vendor Application
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#3D3E98] font-semibold"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Contact Bar - Hidden on mobile */}
      {/* <div className="hidden md:block bg-[#3D3E98] h-[50px] px-20 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-end h-full">
    
          <div className="flex items-center pr-9 h-[40px] gap-[32px]">

            <div className="flex items-center w-[280px] h-[40px] border border-white rounded-[8px] overflow-hidden">
             
              <a href="tel:01147080808">
                <div className="w-[72px] h-[40px] bg-white flex items-center justify-center rounded-l-[8px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      stroke="#3D3E98"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
  
              <div className="flex-1 flex items-center justify-center pr-6">
                <span className="text-white font-['Montserrat'] font-medium text-[20px] leading-[14.62px] text-center capitalize">
                  <a href="tel:01147080808">(011) 4708 0808</a>
                </span>
              </div>
            </div>
          </div>

        
          <div className="flex gap-[16px] items-center">
            <a
              href="https://facebook.com"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="#3D3E98"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="#3D3E98"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="#3D3E98"
                />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="#3D3E98"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="#3D3E98"
                />
              </svg>
            </a>
          </div>
        </div>
      </div> */}

      <div className="flex md:hidden bg-[#3D3E98] px-[18px] py-[5px] h-[30.648649215698242px] justify-between items-center">
        {/* Phone container */}
        <div className="flex items-center h-[20.648649215698242px] pr-[12.39px] gap-[6.19px] rounded-[4.13px] border-[0.52px] border-white ">
          <a href="tel:01147080808" className="flex items-center gap-[4px]">
            <div className="w-[34px] h-[20px] bg-white flex items-center justify-center rounded-l-[4.13px]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  stroke="#3D3E98"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-white text-[10px] font-semibold">
              (011) 4708 0808
            </span>
          </a>
        </div>

        {/* Social Media Icons (same as desktop) */}
        <div className="flex gap-[16.45px] items-center w-[147.5405px] h-[16.3449px]">
          {[
            {
              href: "https://facebook.com",
              icon: (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#3D3E98"
                  />
                </svg>
              ),
            },
            {
              href: "https://instagram.com",
              icon: (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-1.683a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z"
                    fill="#3D3E98"
                  />
                </svg>
              ),
            },
            {
              href: "https://linkedin.com",
              icon: (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zM7.119 20.452H3.555V9h3.564v11.452z"
                    fill="#3D3E98"
                  />
                </svg>
              ),
            },
            {
              href: "https://youtube.com",
              icon: (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="#3D3E98"
                  />
                </svg>
              ),
            },
            {
              href: "https://twitter.com",
              icon: (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="#3D3E98"
                  />
                </svg>
              ),
            },
          ].map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              className="w-[18px] h-[18px] bg-white rounded-full flex items-center justify-center"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
