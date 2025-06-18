import React, { useEffect } from "react";

const EnquiryModal = ({
  isOpen,
  onClose,
  formData,
  setFormData,
  activeTab,
  setActiveTab,
  handleInputChange,
}) => {
  // ✅ Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // reset on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 py-6">
<div className="relative w-full max-w-[460px] shadow-xl bg-[#3D3E98] text-white rounded-[10px] px-4 sm:px-6 py-12 flex flex-col gap-4 max-h-[90vh] overflow-hidden">

        {/* Close Button */}
<button
  onClick={onClose}
  className="absolute top-1 right-1 text-2xl text-white bg-[#4A3FA3] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#3F3498] transition"
  aria-label="Close"
>
  ×
</button>


        {/* Tabs */}
        <div className="flex mb-2">
          <button
            onClick={() => setActiveTab("local")}
            className={`flex-1 py-2 md:py-3 px-2 md:px-4 rounded-l-lg font-medium transition-colors text-sm md:text-[20px] ${
              activeTab === "local"
                ? "bg-white text-[#3D3E98]"
                : "bg-[#4A3FA3] text-white hover:bg-[#3F3498]"
            }`}
          >
            Local / Airport
          </button>
          <button
            onClick={() => setActiveTab("outstation")}
            className={`flex-1 py-2 md:py-3 px-2 md:px-4 rounded-r-lg font-medium transition-colors text-sm md:text-[20px] ${
              activeTab === "outstation"
                ? "bg-white text-[#3D3E98]"
                : "bg-[#4A3FA3] text-white hover:bg-[#3F3498]"
            }`}
          >
            Outstation
          </button>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4 text-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          {["from", "destination", "dateTime", "name", "contact"].map(
            (field, idx) => (
              <div key={idx}>
                <label className="block mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
                  {field
                    .charAt(0)
                    .toUpperCase() + field.slice(1).replace("Time", " & Time")}
                </label>
                <input
                  type={
                    field === "dateTime"
                      ? "datetime-local"
                      : field === "contact"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={
                    field === "contact"
                      ? "+91 1234567890"
                      : `Enter ${field}`
                  }
                  className="placeholder:text-white placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
                />
              </div>
            )
          )}
          <button
            type="submit"
            className="w-full mt-2 bg-white text-[#3D3E98] py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base md:text-[18px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
