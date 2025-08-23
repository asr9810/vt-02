import React from "react";

const PrivacyPolicy = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "data-collection", title: "Data or Information Collection" },
    { id: "how-we-collect", title: "We May Collect Data or Information in Different Ways" },
    { id: "use-of-data", title: "Use of Data or Information" },
    { id: "sharing", title: "Sharing of Information with Third Parties" },
    { id: "security-retention", title: "Data Security & Retention" },
    { id: "your-rights", title: "Your Rights" },
    { id: "request-requirements", title: "Your Request Must" },
    { id: "minors", title: "Use of This Site by Minors" },
    { id: "contact", title: "Contact Us" },
    { id: "governing-law", title: "Governing Laws & Jurisdiction" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: 12 August 2025 • Applies to: Vivek Travels
      </p>

      {/* Table of Contents */}
      {/* <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Contents</h2>
        <ul className="space-y-2 text-green-600 font-medium">
          {sections.map((sec, index) => (
            <li key={sec.id}>
              <a href={`#${sec.id}`} className="hover:underline">
                {index + 1}. {sec.title}
              </a>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Sections */}
      <div className="space-y-10">
        <section id="introduction" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
          <p>
            This Privacy Policy applies to all users of Vivek Travels — including individual customers,
            corporate clients, travel partners, and website visitors — who use our services, make bookings, or
            contact us through our website or customer care channels. By using our website or services, you
            consent to the collection and use of your information as described in this policy.
          </p>
        </section>

        <section id="data-collection" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">2. Data or Information Collection</h2>
          <p>We collect various types of information, including personal and travel-related data:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Identity & Contact:</strong> Full name, mobile number, email, address, government ID.</li>
            <li><strong>Payments:</strong> Payment details via secure third-party gateways.</li>
            <li><strong>Travel Details:</strong> Pickup/drop-off, date/time, vehicle type, passenger count.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device info, location (if GPS enabled).</li>
            <li><strong>Communications:</strong> Emails, call recordings, feedback for service improvement.</li>
          </ul>
        </section>

        <section id="how-we-collect" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">3. We May Collect Data or Information in Different Ways</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Directly from you:</strong> When booking, contacting support, or sending inquiries.</li>
            <li><strong>Automatically:</strong> Via cookies, analytics tools, and similar technologies.</li>
            <li><strong>From third parties:</strong> Payment gateways, map services, verification systems.</li>
          </ul>
        </section>

        <section id="use-of-data" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">4. Use of Data or Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fulfill bookings, process payments, and communicate updates.</li>
            <li>Coordinate with drivers for smooth travel.</li>
            <li>Maintain quality, send reminders/promotions (if opted in).</li>
            <li>Analyze anonymized data for planning and operations.</li>
          </ul>
        </section>

        <section id="sharing" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">5. Sharing of Information with Third Parties</h2>
          <p>
            We do not sell or rent your personal information. Data may be shared with trusted partners such as
            payment processors, driver partners, or legal authorities. These partners must maintain
            confidentiality and use data only for service-related purposes.
          </p>
        </section>

        <section id="security-retention" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">6. Data Security & Retention</h2>
          <p>
            We use encryption, firewalls, secure servers, and strict access controls to safeguard data. Data is
            retained only as long as necessary for bookings, legal compliance, or dispute resolution. After
            that, it is securely deleted or anonymized.
          </p>
        </section>

        <section id="your-rights" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">7. Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your data.</li>
            <li>Correct inaccuracies.</li>
            <li>Request deletion (where legally permissible).</li>
            <li>Withdraw consent.</li>
            <li>Opt out of promotional communications.</li>
          </ul>
        </section>

        <section id="request-requirements" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">8. Your Request Must</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Use the same contact details as used in booking.</li>
            <li>Clearly specify whether request is for access, correction, or deletion.</li>
          </ul>
          <p>We aim to respond to verified requests within 15–30 business days.</p>
        </section>

        <section id="minors" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">9. Use of This Site by Minors</h2>
          <p>
            Our services are intended for users aged 18+. We do not knowingly collect data from minors. If a
            child has shared data, parents/guardians should contact us for removal.
          </p>
        </section>

        <section id="contact" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">10. Contact Us</h2>
          <p>If you have questions or concerns, contact us:</p>
          <address className="not-italic space-y-1">
            <p><strong>Address:</strong> SD Block, 22, Main Road, DDA Market, Block SD, Dakshini Pitampura, Pitampura, New Delhi, Delhi, 110088</p>
            <p><strong>Phone:</strong> <a href="tel:+919650627278" className="text-green-600">+91 96506 27278</a></p>
            <p><strong>Email:</strong> <a href="mailto:sales@vivektravels.com" className="text-green-600">sales@vivektravels.com</a></p>
          </address>
        </section>

        <section id="governing-law" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-3">11. Governing Laws & Jurisdiction</h2>
          <p>
            By using our services, you agree to this Privacy Policy. Any disputes will be governed by Indian
            law. Courts in New Delhi shall have exclusive jurisdiction.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t pt-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Vivek Travels. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
