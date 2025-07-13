

import { useState } from "react";
import mapImage from "../assets/mapImage.png";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    companyName: "",
    requirements: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



const handleSubmit = (e) => {
  e.preventDefault();

  const { name, contactNumber, email, companyName, requirements } = formData;

  if (!name || !contactNumber || !email || !companyName || !requirements) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  setIsLoading(true);

  emailjs.send(
    'service_m0nv47o',
    'template_9ih7o16',
    formData,
    'RUwUlhUU23_UxQkLn'
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Enquiry sent successfully!");
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        companyName: "",
        requirements: "",
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      setIsLoading(false);
    });
};





  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="flex justify-center pt-[70px] pb-16 px-4">
        <div className="w-full max-w-[1080px]">
          {/* Header */}
          <div className="flex justify-center mb-[20px] md:mb-[110]">
          <h1
          className="text-[#3D3E98] text-center text-[40px] md:text-[60px] font-bold leading-none tracking-[0.01em] mx-auto max-w-xs md:max-w-3xl"
          style={{ fontFamily: "DM Sans" }}
        >
          Contact Us
        </h1>

          </div>

          {/* Contact Form */}
<div className="mb-12 px-4 md:px-0">
  <form
    onSubmit={handleSubmit}
    className="flex flex-col md:flex-row gap-6 md:gap-5"
  >
    {/* Left Column */}
    <div className="flex flex-col gap-4 w-full md:w-[530px]">
      {[
        { name: "name", placeholder: "*Enter Your Name" },
        { name: "contactNumber", placeholder: "*Contact Number", type:'number' },
        { name: "email", placeholder: "*Enter Your E-Mail", type: "email" },
        { name: "companyName", placeholder: "*Company Name" },
      ].map((field, idx) => (
        <div
          key={idx}
          className="bg-[#EAEAEA] flex items-center px-4 h-[48px] md:h-[100px]"
        >
          <input
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleInputChange}
            className="w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-600 text-sm md:text-base"
            style={{
              fontFamily: "DM Sans",
            }}
          />
        </div>
      ))}
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-4 w-full md:w-[530px]">
      {/* Requirements */}
      <div className="bg-[#EAEAEA] p-4 h-[150px] md:h-[332px]">
        <textarea
          name="requirements"
          placeholder="*Your Requirements"
          value={formData.requirements}
          onChange={handleInputChange}
          className="w-full h-full bg-transparent border-none outline-none resize-none text-gray-600 placeholder-gray-600 text-sm md:text-base"
          style={{
            fontFamily: "DM Sans",
          }}
        />
      </div>

      {/* Submit Button */}
    <button
  type="submit"
  disabled={isLoading}
  className={`bg-[#3D3E98] text-white flex items-center justify-center hover:bg-[#2D2E78] transition-colors h-[48px] md:h-[100px] text-[16px] md:text-[24px] font-bold tracking-widest w-full px-4 ${
    isLoading ? 'opacity-60 cursor-not-allowed' : ''
  }`}
  style={{
    fontFamily: "DM Sans",
  }}
>
  {isLoading ? (
    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  ) : (
    'SEND ENQUIRY'
  )}
</button>

    </div>
  </form>
</div>


          {/* Office Section */}
<div className="px-4 md:px-0 mt-12">
  {/* Office Header */}
  <div className="flex justify-center mb-10 text-center">
    <h2
      className="text-[#3D3E98] font-bold text-[24px] md:text-[60px] leading-none tracking-[0.01em] max-w-md md:max-w-full"
      style={{ fontFamily: "DM Sans" }}
    >
      Vivek Travels Branch Office
    </h2>
  </div>

  {/* Map + Contact Info */}
  <div className="flex flex-col md:flex-row gap-10">
    {/* Map */}
    <div className="w-full md:w-[530px] h-[240px] md:h-[332px]">
      <img
        src={mapImage}
        alt="Vivek Travels Location Map"
        className="w-full h-full object-cover rounded-md"
      />
    </div>

    {/* Contact Info */}
    <div className="flex flex-col justify-center w-full md:w-[469px] gap-8">
      {/* Address */}
      <div>
        <h3 className="text-[#3D3E98] mb-2 text-lg md:text-[24px] font-bold" style={{ fontFamily: "DM Sans" }}>
          Address
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-[140%]" style={{ fontFamily: "DM Sans" }}>
          SD Block, 22, Main Road, DDA Market, Block SD, Dakshini<br />
          Pitampura, Pitampura, New Delhi, Delhi, 110088
        </p>
        <div className="w-full h-[1px] bg-[#3D3E98] mt-4" />
      </div>

      {/* Contact No */}
      <div>
        <h3 className="text-[#3D3E98] mb-2 text-lg md:text-[24px] font-bold" style={{ fontFamily: "DM Sans" }}>
          Contact No.
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-[140%]" style={{ fontFamily: "DM Sans" }}>
          (011) 4708 0808
        </p>
        <div className="w-full h-[1px] bg-[#3D3E98] mt-4" />
      </div>

      {/* Email */}
      <div>
        <h3 className="text-[#3D3E98] mb-2 text-lg md:text-[24px] font-bold" style={{ fontFamily: "DM Sans" }}>
          E-Mail
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-[140%]" style={{ fontFamily: "DM Sans" }}>
          bookings@vivektravels.com
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>  
    </div>
  );
}

