// import { useState } from "react";
// import vendorImage from "../assets/vendorApplication.jpg"; // Replace with your image path

// export default function VendorApplication() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     contactNo: "",
//     vehicle: "",
//     location: "",
//     interestExisting: false,
//     interestNew: false,
//   });

//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-white flex justify-center items-start py-10 px-4">
//       <div className="flex flex-col md:flex-row w-full max-w-[1293px] gap-[5px]">
        
//         {/* Mobile Image */}
//         <div className="block md:hidden w-full mb-6">
//           <img
//             src={vendorImage}
//             alt="Vendor Visual"
//             className="w-full h-[240px] object-cover rounded-[10px]"
//           />
//         </div>

//         {/* Desktop Image */}
//         <div
//           className="bg-[#F8F8F8] hidden md:flex justify-center items-center rounded-[10px]"
//           style={{
//             width: "644px",
//             height: "1043px",
//             padding: "60px 32px",
//           }}
//         >
//           <img
//             src={vendorImage}
//             alt="Vendor Visual"
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Form Section */}
//         <div
//           className="bg-[#F8F8F8] w-full rounded-[10px] py-10 px-4 sm:px-6 flex flex-col"
//           style={{ maxWidth: "645px" }}
//         >
//           <h1
//             className="text-[#3D3E98] text-center mb-8 text-[24px] md:text-[36px] font-bold leading-tight"
//             style={{ fontFamily: "DM Sans" }}
//           >
//             Vendor Application
//           </h1>

//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col gap-6 items-center sm:items-start"
//           >
//             {/* Input Fields */}
//             {[
//               { name: "name", label: "Name" },
//               { name: "email", label: "Email" },
//               { name: "address", label: "Address" },
//               { name: "contactNo", label: "Contact No." },
//               { name: "vehicle", label: "Name of Vehicle" },
//               { name: "location", label: "Location" },
//             ].map((field, idx) => (
//               <div key={idx} className="w-full sm:w-[580px]">
//                 <label
//                   className="block text-[#3D3E98] font-bold mb-1"
//                   style={{
//                     fontSize: "16px",
//                     fontFamily: "DM Sans",
//                   }}
//                 >
//                   {field.label}
//                 </label>
//                 <input
//                   type="text"
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   className="w-full"
//                   style={{
//                     height: "27px",
//                     borderRadius: "2px",
//                     border: "1px solid #3D3E98",
//                     padding: "0 8px",
//                     outline: "none",
//                     fontFamily: "DM Sans",
//                   }}
//                 />
//               </div>
//             ))}

//             {/* Checkboxes */}
//             <div className="w-full sm:w-[580px]">
//               <label
//                 className="block text-[#3D3E98] font-bold mb-2"
//                 style={{ fontSize: "16px", fontFamily: "DM Sans" }}
//               >
//                 Your Interest
//               </label>
//               <div className="flex flex-col gap-4">
//                 <label
//                   className="flex justify-between items-center text-[#3D3E98]"
//                   style={{ fontSize: "16px", fontFamily: "DM Sans" }}
//                 >
//                   <span>Attach an Existing Vehicle</span>
//                   <input
//                     type="checkbox"
//                     name="interestExisting"
//                     checked={formData.interestExisting}
//                     onChange={handleChange}
//                     style={{
//                       width: "18px",
//                       height: "18px",
//                       border: "1px solid #3D3E98",
//                     }}
//                   />
//                 </label>
//                 <label
//                   className="flex justify-between items-center text-[#3D3E98]"
//                   style={{ fontSize: "16px", fontFamily: "DM Sans" }}
//                 >
//                   <span>Purchase & Attach a New Vehicle</span>
//                   <input
//                     type="checkbox"
//                     name="interestNew"
//                     checked={formData.interestNew}
//                     onChange={handleChange}
//                     style={{
//                       width: "18px",
//                       height: "18px",
//                       border: "1px solid #3D3E98",
//                     }}
//                   />
//                 </label>
//               </div>
//             </div>

//             {/* Button */}
//             <div className="mt-4 w-full sm:w-[580px]">
//               <button
//                 type="submit"
//                 className="bg-[#3D3E98] text-white font-bold rounded-[6px] w-full py-3 text-[16px] hover:bg-[#2D2E78] transition-colors"
//                 style={{ fontFamily: "DM Sans" }}
//               >
//                 Send Application
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import vendorImage from "../assets/vendorApplication.jpg";
import emailjs from 'emailjs-com';

export default function VendorApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contactNo: "",
    vehicle: "",
    location: "",
    interestExisting: false,
    interestNew: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


 const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, address, contactNo, vehicle, location } = formData;

    if (!name || !email || !address || !contactNo || !vehicle || !location) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsLoading(true);

    emailjs.send(
        'service_m0nv47o',
      'template_ocgk0ch',      // your vendor form template ID
      {
        ...formData,
        interestExisting: formData.interestExisting ? "Yes" : "No",
        interestNew: formData.interestNew ? "Yes" : "No"
      },
      'RUwUlhUU23_UxQkLn'    // your EmailJS public key
    )
      .then((res) => {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          address: "",
          contactNo: "",
          vehicle: "",
          location: "",
          interestExisting: false,
          interestNew: false,
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };



  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-10 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-[1293px] gap-[5px]">
        {/* Mobile Image */}
        <div className="block md:hidden w-full mb-6">
          <img
            src={vendorImage}
            alt="Vendor Visual"
            className="w-full h-[240px] object-cover rounded-[10px]"
          />
        </div>

        {/* Desktop Image */}
        <div
          className=" hidden md:flex justify-center items-center rounded-[10px]"
          style={{
            width: "644px",
            height: "1043px",
            padding: "60px 32px",
          }}
        >
          <img
            src={vendorImage}
            alt="Vendor Visual"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Form Section */}
        <div
          className="w-full rounded-[10px] py-10 px-4 sm:px-6 flex flex-col"
          style={{ maxWidth: "645px" }}
        >
          <h1
            className="text-[#3D3E98] text-center mb-8 text-[24px] md:text-[36px] font-bold leading-tight"
            style={{ fontFamily: "DM Sans" }}
          >
            Vendor Application
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 items-center sm:items-start"
          >
            {[{ name: "name", label: "Name" }, { name: "email", label: "Email" }, { name: "address", label: "Address" }, { name: "contactNo", label: "Contact No." }, { name: "vehicle", label: "Name of Vehicle" }, { name: "location", label: "Location" }].map((field, idx) => (
              <div key={idx} className="w-full sm:w-[580px]">
                <label
                  className="block text-[#3D3E98] font-bold mb-1"
                  style={{ fontSize: "16px", fontFamily: "DM Sans" }}
                >
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full"
                  style={{
                    height: "27px",
                    borderRadius: "2px",
                    border: "1px solid #3D3E98",
                    padding: "0 8px",
                    outline: "none",
                    fontFamily: "DM Sans",
                  }}
                />
              </div>
            ))}

            {/* Checkboxes */}
            <div className="w-full sm:w-[580px]">
              <label
                className="block text-[#3D3E98] font-bold mb-2"
                style={{ fontSize: "16px", fontFamily: "DM Sans" }}
              >
                Your Interest
              </label>
              <div className="flex flex-col gap-4">
                <label
                  className="flex justify-between items-center text-[#3D3E98]"
                  style={{ fontSize: "16px", fontFamily: "DM Sans" }}
                >
                  <span>Attach an Existing Vehicle</span>
                  <input
                    type="checkbox"
                    name="interestExisting"
                    checked={formData.interestExisting}
                    onChange={handleChange}
                    style={{
                      width: "18px",
                      height: "18px",
                      border: "1px solid #3D3E98",
                    }}
                  />
                </label>
                <label
                  className="flex justify-between items-center text-[#3D3E98]"
                  style={{ fontSize: "16px", fontFamily: "DM Sans" }}
                >
                  <span>Purchase & Attach a New Vehicle</span>
                  <input
                    type="checkbox"
                    name="interestNew"
                    checked={formData.interestNew}
                    onChange={handleChange}
                    style={{
                      width: "18px",
                      height: "18px",
                      border: "1px solid #3D3E98",
                    }}
                  />
                </label>
              </div>
            </div>

            {/* Button with loader */}
            <div className="mt-4 w-full sm:w-[580px]">
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#3D3E98] text-white font-bold rounded-[6px] w-full py-3 text-[16px] hover:bg-[#2D2E78] transition-colors flex justify-center ${
                  isLoading ? "opacity-60 cursor-not-allowed" : ""
                }`}
                style={{ fontFamily: "DM Sans" }}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Send Application"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
