import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-auto">
      {/* Desktop Footer */}
      <div className="hidden md:block h-[428px]">
        {/* Main Footer Section */}
        <div className="h-[408px] bg-[#ECECF5] px-[104px] pt-[39px] pb-[80px]">
          <div className="flex justify-between items-start">
            {/* Left Section - Logo and Menu */}
            <div className="flex flex-col">
              {/* Logo */}
              <div className="mb-[95px]">
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
            <div className="w-[401px] h-[82px] mt-[87px]">
              {/* Newsletter Description */}
              <div className="w-[400px] h-[24px] mb-[18px]">
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
