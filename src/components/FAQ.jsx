
import { useState } from "react"
import { Plus } from "lucide-react"
import faqBusImg from "../assets/faqImg.png"

const FAQ = () => {
 const faqData = [
  {
    id: 1,
    question: "How do I get in contact with customer service?",
    answer: `Customer service is available via telephone, email or via the contact form on our website anytime.\n\nGeneral Enquiries: 011 4708 0808\n24/7 Operations Support: 98111 68814\nEmail: operations@vivektravels.com\n\nOur agents are available 24/7 to assist with all your travel requirements.`,
  },
  {
    id: 2,
    question: "What do I do in the unlikely event the vehicle breaks down during the trip?",
    answer: `If you happen to fall victim to a breakdown, worry not — we have a very quick replacement process and backup vehicles will be on standby. We want to get you back on the road in the least amount of time possible.`,
  },
  {
    id: 3,
    question: "How do you make sure that the driver is on time?",
    answer: `We have a central dispatch and use GPS which allows us to track all our vehicles. Drivers must report 15–30 minutes before pickup.`,
  },
  {
    id: 4,
    question: "What do I do if I want to cancel or reschedule the booking?",
    answer: `We have a set reschedule and cancellation policy. Simply give our team a call at 011 47080808 or email operations@vivektravels.com. If your booking is changed ahead of time we will always do our best to fit your needs.`,
  },
  {
    id: 5,
    question: "What do I really get for the rental price? Is there any hidden costs?",
    answer: `We are happy to promote that the rental rates you receive from us are all-inclusive of chauffeur service, fuel, tolls and taxes. There are no hidden costs — just transparent pricing.`,
  },
];


  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-16 bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="mx-auto"
            style={{
              width: "1110px",
              height: "28px",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "20px",
              letterSpacing: "0%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#000000",
            }}
          >
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Container */}
        <div
          className="flex mx-auto"
          style={{
            width: "1110px",
            height: "382px",
            paddingRight: "572px",
            paddingLeft: "0px",
            position: "relative",
          }}
        >
          {/* FAQ Questions */}
          <div className="w-full">
            {faqData.map((faq) => (
              <div key={faq.id} className="mb-4">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex items-center justify-between w-full text-left"
                  style={{
                    background: "#F6F6F6",
                    width: "521px",
                    height: "60px",
                    borderRadius: "8.73px",
                    gap: "154px",
                    paddingTop: "16px",
                    paddingRight: "40px",
                    paddingBottom: "16px",
                    paddingLeft: "40px",
                  }}
                >
                  <span
                    style={{
                      width: "264px",
                      height: "28px",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                      fontSize: "13.09px",
                      lineHeight: "18.85px",
                      letterSpacing: "0px",
                      verticalAlign: "middle",
                      color: "#000000",
                      display: "inline-block",
                    }}
                  >
                    {faq.question}
                  </span>

                  <Plus className="text-[#3D3E98] flex-shrink-0" />
                </button>

                {/* Answer */}
                {openFAQ === faq.id && (
                  <div className="px-6 py-4 bg-white text-gray-700 rounded-b-lg mt-1 ml-4 mr-4 shadow-sm">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bus Image */}
          <div
            className="absolute right-0 top-0"
            style={{
              width: "572px",
              height: "382px",
            }}
          >
            <img
              src={faqBusImg || "/placeholder.svg"}
              alt="Vivek Travels Team with Bus"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-black">Frequently asked questions</h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex items-center justify-between w-full text-left bg-[#F6F6F6] p-4 rounded-lg"
              >
                <span className="text-sm font-medium text-black pr-4">{faq.question}</span>
                <Plus className="text-[#3D3E98] flex-shrink-0 w-5 h-5" />
              </button>

              {openFAQ === faq.id && (
                <div className="px-4 py-3 bg-white text-gray-700 text-sm mt-1 rounded-b-lg shadow-sm">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ;
