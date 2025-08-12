import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", lineHeight: "1.6" }}>
      <h1>Privacy Policy</h1>
      <p style={{ color: "#666" }}>Last updated: 12 August 2025 • Applies to: Vivek Travels</p>

      <p>
        A Privacy Policy is a legal statement that outlines how a business collects, uses, stores, and
        protects user data. It also explains the rights that individuals have in relation to their personal
        data and how they can exercise those rights. For us at Vivek Travels, this policy is part of our
        commitment to full transparency and customer trust. We believe you should know what information we
        collect, why we collect it, and how we keep it secure.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>
        This Privacy Policy applies to all users of Vivek Travels — including individual customers,
        corporate clients, travel partners, and website visitors — who use our services, make bookings, or
        contact us through our website or customer care channels. By using our website or services, you
        consent to the collection and use of your information as described in this policy.
      </p>

      <h2 id="data-collection">Data or Information Collection</h2>
      <p>We collect various types of information, including personal and travel-related data. This may include:</p>
      <ul>
        <li><strong>Identity &amp; Contact:</strong> Full name, mobile number, email address, residential address, government identification details.</li>
        <li><strong>Payments:</strong> Payment-related information processed via secure third-party gateways.</li>
        <li><strong>Travel Details:</strong> Pickup and drop-off locations, date and time of travel, vehicle type, number of passengers, special requests.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device details, and location data if GPS is enabled.</li>
        <li><strong>Communications:</strong> Emails, call recordings, and feedback for service improvement.</li>
      </ul>

      <h2 id="how-we-collect">We May Collect Data or Information in Different Ways</h2>
      <ul>
        <li><strong>Directly from you:</strong> When you fill out a booking form, contact customer care, or send an inquiry.</li>
        <li><strong>Automatically:</strong> Via cookies, web analytics tools, and similar technologies when you visit our website.</li>
        <li><strong>From third parties:</strong> Trusted providers such as payment gateways, map services, and customer verification systems to ensure a seamless and secure user experience.</li>
      </ul>

      <h2 id="use-of-data">Use of Data or Information</h2>
      <p>The data we collect is used to:</p>
      <ul>
        <li>Fulfill rental requests, confirm and manage bookings, process payments, and communicate relevant updates.</li>
        <li>Coordinate with drivers and provide a smooth travel experience.</li>
        <li>Maintain service quality, send reminders or promotional content (if opted in), and improve our website and operations.</li>
        <li>Analyze aggregated and anonymized data for internal analytics, vehicle fleet planning, and logistics management.</li>
      </ul>

      <h2 id="sharing">Sharing of Information with Third Parties</h2>
      <p>
        We do not sell or rent your personal information to third parties. We may share your data with select
        trusted partners who assist in delivering our services, such as payment processors, driver partners,
        or legal authorities if required by law. These third parties are obligated to maintain the
        confidentiality and security of your data and are only allowed to use it for service-related
        purposes.
      </p>

      <h2 id="security-retention">Data Security &amp; Retention</h2>
      <p>
        Your data security is important to us. We use industry-standard security measures such as encryption,
        firewalls, secure servers, and limited access protocols to protect your data. Our team is trained to
        handle sensitive information with care. We retain your personal data only as long as necessary for
        fulfilling bookings, complying with legal or regulatory requirements, or resolving disputes. After
        the required period, data is securely deleted or anonymized.
      </p>

      <h2 id="your-rights">Your Rights</h2>
      <p>You have full rights concerning your personal data, including the right to:</p>
      <ul>
        <li>Access the data we hold about you.</li>
        <li>Correct inaccurate details.</li>
        <li>Request deletion (where legally permissible).</li>
        <li>Withdraw previously granted consent.</li>
        <li>Opt out of promotional communications.</li>
      </ul>
      <p>
        To exercise these rights, contact us using the details below, clearly stating your request, name,
        contact information, and booking reference for faster processing.
      </p>

      <h2 id="request-requirements">Your Request Must</h2>
      <ul>
        <li>Use the same contact details (email or phone) used during the booking.</li>
        <li>Clearly specify the nature of your request — data access, correction, or deletion.</li>
      </ul>
      <p>We aim to respond to all verified requests within 15 to 30 business days.</p>

      <h2 id="minors">Use of This Site by Minors</h2>
      <p>
        Our services are intended only for users aged 18 and above. We do not knowingly collect data from
        minors. If a parent or guardian believes that their child has shared personal data with us, they
        should contact us immediately so we can remove the data from our systems.
      </p>

      <h2 id="contact">Contact Us</h2>
      <p>If you have any concerns, questions, or feedback related to our Privacy Policy or how we handle your personal data, you can reach out to us directly.</p>
      <address>
        <strong>Address:</strong> SD Block, 22, Main Road, DDA Market, Block SD, Dakshini Pitampura, Pitampura, New Delhi, Delhi, 110088
        <br />
        <strong>Phone:</strong> <a href="tel:+919650627278">+91 96506 27278</a>
        <br />
        <strong>Email:</strong> <a href="mailto:sales@vivektravels.com">sales@vivektravels.com</a>
      </address>

      <h2 id="governing-law">Governing Laws &amp; Jurisdiction</h2>
      <p>
        By accessing this website or using our services, you agree to this Privacy Policy. Any disputes
        arising from the use of your data will be governed by the laws of India. The courts located in New
        Delhi shall have exclusive jurisdiction over any matters concerning this Privacy Policy.
      </p>

      <footer style={{ marginTop: "2rem", borderTop: "1px solid #ddd", paddingTop: "1rem" }}>
        <p>&copy; {new Date().getFullYear()} Vivek Travels. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
