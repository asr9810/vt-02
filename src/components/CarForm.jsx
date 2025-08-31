
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_4jiyrgd";
const TEMPLATE_ID = "template_l5esbo8";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""; // put your public key here if you want

const CarForm = ({ carName = "Unknown Car" }) => {
  const [activeTab, setActiveTab] = useState("local");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    dateTime: "",
    name: "",
    contact: "",
  });

  // Optional init – not required if you pass the 4th arg to send()
  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      // Only digits, max 10
      if (/^\d{0,10}$/.test(value)) {
        setFormData((prev) => ({ ...prev, contact: value }));
      }
      return;
    }
    if (name === "name") {
      // Only alphabets + spaces
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData((prev) => ({ ...prev, name: value }));
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("");

    // Silent guards (no UI errors — just console logs so you can debug)
    if (!formData.from.trim()) {
      console.warn("[CarForm] Blocked send: 'from' is empty");
      return;
    }
    if (!formData.destination.trim()) {
      console.warn("[CarForm] Blocked send: 'destination' is empty");
      return;
    }
    if (!formData.dateTime) {
      console.warn("[CarForm] Blocked send: 'dateTime' is empty");
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      console.warn(
        "[CarForm] Blocked send: 'name' must be letters/spaces only"
      );
      return;
    }
    if (formData.contact.length !== 10) {
      console.warn(
        "[CarForm] Blocked send: 'contact' must be exactly 10 digits"
      );
      return;
    }

    console.log("submit button call");

    // Build template params – names must match your EmailJS template!
    const params = {
      // template variables used above:
      car_name: carName,
      active_tab: activeTab,
      from_name: formData.name,
      phone: formData.contact,
      trip_from: formData.from,
      trip_destination: formData.destination,
      trip_datetime: formData.dateTime,
      page_url: typeof window !== "undefined" ? window.location.href : "",
      message: "-", // default value so the template never breaks

      // aliases (in case your template still references old names)
      name: formData.name,
      contact: formData.contact,
      from: formData.from,
      destination: formData.destination,
      dateTime: formData.dateTime,
    };

    try {
      setSending(true);
      console.log("[CarForm] Sending…", params);

      // Pass PUBLIC_KEY as 4th arg to guarantee the call even if init() didn’t run
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);

      console.log("[CarForm] EmailJS send success");
      setSubmissionStatus("Enquiry sent! We’ll contact you shortly.");
      setFormData({
        from: "",
        destination: "",
        dateTime: "",
        name: "",
        contact: "",
      });
      alert('Enquiry sent! We’ll contact you shortly.')
    } catch (err) {
      console.error("[CarForm] EmailJS send failed", err);
      setSubmissionStatus("Could not send right now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="flex mb-4">
        <button
          type="button"
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
          type="button"
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

      <form
        className="relative flex flex-col gap-4 text-sm"
        onSubmit={handleSubmit}
      >
        {["from", "destination", "dateTime", "name", "contact"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-['DM_Sans'] md:text-[20px] text-[15px]">
              {field.charAt(0).toUpperCase() +
                field.slice(1).replace("Time", " & Time")}
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
                field === "contact" ? "+91 1234567890" : `Enter ${field}`
              }
              className="placeholder:text-white placeholder:text-[14px] placeholder:font-['Montserrat'] placeholder:text-center w-full px-3 py-2 rounded-lg bg-[#4A3FA3] text-white border border-[#D9D9D9] h-[40px] text-sm md:text-base"
              inputMode={field === "contact" ? "numeric" : undefined}
              maxLength={field === "contact" ? 10 : undefined}
              autoComplete={field === "name" ? "name" : "off"}
            />
          </div>
        ))}

        {/* Submit button with loader */}
        <button
          type="submit"
          disabled={sending}
          className={`w-full mt-2 py-2 rounded-lg font-semibold transition-colors text-base md:text-[18px] flex items-center justify-center gap-2 ${
            sending
              ? "bg-gray-300 text-gray-600"
              : "bg-white text-[#3D3E98] hover:bg-gray-100"
          }`}
        >
          {sending && (
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          )}
          {sending ? "Sending…" : "Submit"}
        </button>

        {/* {submissionStatus && (
          <div className="mt-4 text-center text-sm text-gray-700">
            {submissionStatus}
          </div>
        )} */}
      </form>
    </>
  );
};

export default CarForm;
