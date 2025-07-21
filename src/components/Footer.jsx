import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6"; // use FaXTwitter from react-icons v6+

const Footer = () => {
  return (
    <footer className="h-auto">
      {/* Desktop Footer */}
      <div className="hidden md:block h-[428px]">
        {/* Main Footer Section */}
        <div className="h-[408px] bg-[#ECECF5] px-[104px] pt-[39px] pb-[80px] " >
          <div className="flex justify-between items-start">
            {/* Left Section - Logo and Menu */}
            <div className="flex flex-col">
              {/* Logo */}
              <div className="mb-[95px] ">
                <Link to="/">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VivekTravel%20logo%20png%201-M0wxdcCtuYNIdbeFDpapLT3F4OUvRG.png"
                    alt="Vivek Travels Logo"
                    className="w-[187px] h-[87px] object-contain"
                  />
                </Link>
              </div>

              {/* Menu */}
              <div className="h-[24px]">
                <ul className="flex gap-[42px]">
                  <li>
                    <Link
                      to="/about"
                      className="text-[#3D3E98] font-jost font-normal text-[16px] leading-[24px] tracking-[0.3px] hover:text-[#2D2E78] transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/careers"
                      className="text-[#3D3E98] font-jost font-normal text-[16px] leading-[24px] tracking-[0.3px] hover:text-[#2D2E78] transition-colors"
                    >
                      Careers
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to="/clients"
                      className="text-[#3D3E98] font-jost font-normal text-[16px] leading-[24px] tracking-[0.3px] hover:text-[#2D2E78] transition-colors"
                    >
                      Clients
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/our-services"
                      className="text-[#3D3E98] font-jost font-normal text-[16px] leading-[24px] tracking-[0.3px] hover:text-[#2D2E78] transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section - Newsletter */}
            <div className="w-[401px] h-[82px] mt-[10px] ">
              {/* Social Media Icons */}
          {/* <div className="flex gap-[16px] items-center mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path fill="#3D3E98" d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path fill="#3D3E98" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path fill="#3D3E98" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path fill="#3D3E98" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path fill="#3D3E98" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div> */}
          <div className="flex gap-4 mt-[40px]">
  {[ 
    { href: "https://facebook.com", icon: <FaFacebookF /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://twitter.com", icon: <FaXTwitter /> },
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[32px] h-[32px] bg-white text-[#3D3E98] rounded-full flex items-center justify-center hover:bg-[#F3F3F3] transition-colors"
    >
      <span className="text-[16px]">{social.icon}</span>
    </a>
  ))}
</div>

              {/* Newsletter Description */}
              <div className="w-[400px] h-[24px] mb-[18px] mt-[20px]">
                <p className="text-[#3D3E98] font-jost font-normal text-[16px] leading-[24px] tracking-[0.3px]">
                  Get the freshest news from us
                </p>
              </div>

              {/* Input & Button Container */}
              <div className="w-[400px] h-[40px] flex">
                {/* Input Field */}
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="w-[272px] h-[40px] px-4 border bg-white border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#3D3E98] font-jost text-[14px]"
                />
                {/* Subscribe Button */}
                <button className="w-[120px] h-[40px] bg-[#3D3E98] text-white rounded-r-md hover:bg-[#2D2E78] transition-colors font-jost font-medium text-[16px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="h-[2px] border-t border-gray-300 mt-[80px] mb-[16px]"></div>

          {/* Bottom Section - Terms and Copyright */}
          <div className="flex justify-between items-center">
            {/* Terms & Conditions Links */}
            <div className="flex gap-[24px] text-gray-500 items-center">
              <Link
                to="/terms"
                className="font-jost font-normal text-[12px] hover:text-[#3D3E98] transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/privacy"
                className="font-jost font-normal text-[12px] hover:text-[#3D3E98] transition-colors"
              >
                Privacy Policy
              </Link>

            </div>

            {/* Copyright */}
            <div className="text-gray-500 font-jost font-normal text-[12px]">
              Design with love © vivektravels 2024. All right reserved
            </div>
          </div>
        </div>

        {/* Bottom Blue Strip */}
        <div className="h-[20px] bg-[#3D3E98]"></div>
      </div>

      {/* Mobile Footer */}
      {/* Mobile Footer */}
      <div className="block md:hidden w-full">
        {/* Logo Section */}
        <div className="bg-white px-4 py-6 flex justify-center items-center  ">
          <Link to="/">
            <img
              src="/footlogo.png"
              alt="Vivek Travels Logo"
              className="w-[267px] h-[109px] object-contain"
            />
          </Link>
        </div>

        {/* Mobile Menu Bar */}
        <div className="bg-[#3D3E98] border-b-2 border-[#EB1C25] px-3 py-2">
          <ul className="flex flex-wrap justify-between items-center gap-x-[10px]">
            {[
              { to: "/about", label: "About Us" },
              { to: "/our-fleet", label: "Our Fleet" },
              { to: "/our-services", label: "Our Services" },
              { to: "/clients", label: "Clients" },
              { to: "/blogs", label: "Blogs" },
              { to: "/contact-us", label: "Contact Us" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[10px] font-bold text-white text-center block"
                  style={{
                    fontFamily: "dm Sans",
                    lineHeight: "20px",
                    textTransform: "capitalize",
                    // minWidth: "60px",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="bg-white flex justify-end items-center px-8 py-2">
          <p
            className="text-[6px] text-black text-center font-medium opacity-50 leading-[21.6px]"
            style={{ fontFamily: "Montserrat" }}
          >
            Design with love © vivektravels 2024. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
