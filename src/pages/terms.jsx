const Terms = () => {
  const terms = [
    {
      id: "payment-policy",
      title: "Payment Policy",
      points: [
        "An advance payment of 30% is required at the time of booking confirmation.",
        "An additional 50% must be paid at least 2 days prior to the journey.",
        "The remaining 20% is to be handed over to the driver at the time of boarding.",
        "Advance payments can be collected in cash from a location convenient to the client.",
        "All payment responsibilities must be fulfilled as instructed by the Executive.",
      ],
    },
    {
      id: "fuel-tax",
      title: "Fuel & Tax Adjustment Clause",
      points: [
        "The estimate is based on current fuel prices and government taxes.",
        "Any hike in fuel prices or taxes after the booking will be chargeable to the client accordingly.",
      ],
    },
    {
      id: "delay-policy",
      title: "Delay & Late Release Policy",
      points: [
        "Clients must adhere to the scheduled pick-up and drop-off timings.",
        "Delays in releasing the bus beyond 30 minutes will be charged at ₹500 per hour.",
        "If the delay exceeds 1 hour, double booking charges will apply.",
        "A delay of more than 2 hours or any impact on subsequent bookings will result in the bus returning empty, and full settlement amount will be forfeited.",
      ],
    },
    {
      id: "mileage",
      title: "Mileage Policy",
      points: [
        "Bookings are made based on the mileage declared by the hirer.",
        "Any excess mileage will be chargeable as per the rates finalized by the Company Manager.",
      ],
    },
    {
      id: "booking-validity",
      title: "Booking Validity",
      points: [
        "No booking is valid without an advance.",
        "Balance payment must be made at least 2 days prior to the journey.",
        "Failure to pay on time will result in the booking being forfeited without refund.",
      ],
    },
    {
      id: "cancellation",
      title: "Cancellation & Refund Policy",
      points: [
        "2 days before journey: Full refund of booking amount.",
        "1 day before journey: 50% refund.",
        "Less than 1 day before journey: No refund.",
      ],
    },
    {
      id: "breakdown",
      title: "Breakdown Policy",
      points: [
        "In the event of a breakdown, the company will try to arrange an alternate vehicle.",
        "If no vehicle is available, refund for the remaining journey will be issued.",
        "The company holds no liability for delays or inconvenience caused by unforeseen breakdowns.",
      ],
    },
    {
      id: "liability",
      title: "Liability & Indemnity",
      points: [
        "The company is not liable for any injury, loss, or damage to passengers or their belongings.",
        "The hirer is responsible for any damage to the vehicle (e.g., broken windows) caused by passengers.",
        "In case the bus is detained or prosecuted due to carrying prohibited articles, the hirer will indemnify the company for all losses and damages.",
      ],
    },
    {
      id: "usage-route",
      title: "Usage & Route Restrictions",
      points: [
        "The bus is to be used strictly for the purpose declared during booking.",
        "The company reserves the right to use the vehicle for other purposes during idle hours at the destination.",
        "Buses will not operate on unsafe, kacha, or restricted routes.",
        "The hirer must pay for any passenger or vehicle taxes as applicable.",
      ],
    },
    {
      id: "jurisdiction",
      title: "Jurisdiction",
      points: ["All disputes are subject to the jurisdiction of Delhi courts only."],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Terms & Conditions
      </h1>

      {/* Table of Contents */}
      {/* <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Contents</h2>
        <ul className="space-y-2 text-green-600 font-medium">
          {terms.map((section, index) => (
            <li key={index}>
              <a href={`#${section.id}`} className="hover:underline">
                {index + 1}. {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Sections */}
      <div className="space-y-10">
        {terms.map((section, index) => (
          <div key={index} id={section.id} className="scroll-mt-24">
            {/* 👆 scroll-mt-24 = ~96px offset (adjust based on navbar height) */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {index + 1}. {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
