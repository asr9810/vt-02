const sectors = {
  PSU: [
    { id: "rec", src: "/rec.jpg" },
    { id: "irctc", src: "/irctc.jpg" },
    { id: "dmrc", src: "/dmrc.jpg" },
    { id: "powergrid", src: "/powergrid.jpg" },
    { id: "nhai", src: "/nhai.jpg" },
    { id: "eil", src: "/eil.jpg" },
    { id: "aadhaar", src: "/aadhaar.jpg" },
    { id: "iocl", src: "/iocl.jpg" },
    // { id: "rites", src: "/rites.jpg" },
  ],
  'Private Sector': [
    { id: "samsung", src: "/samsung.jpg" },
    { id: "rrkabel", src: "/rrkabel.jpg" },
    { id: "airindia", src: "/airindia.jpg" },
    { id: "lalit", src: "/lalit.png" },
    { id: "bisleri", src: "/bisleri.jpg" },
    { id: "patanjali", src: "/patanjali.jpg" },
    { id: "avp", src: "/avp.jpg" },
  ],
  'Public Administration': [
    { id: "cabinet", src: "/cabinet.jpg" },
    { id: "home", src: "/home.jpg" },
    { id: "finance", src: "/finance.jpg" },
    { id: "external", src: "/external.jpg" },
    { id: "rural", src: "/rural.jpg" },
    { id: "communications", src: "/communications.jpg" },
    { id: "railway", src: "/railway.jpg" },
    // { id: "ntpc", src: "/ntpc.jpg" },
    { id: "obc", src: "/obc.jpg" },
  ],
  "Education Institutes": [
    { id: "iitdelhi", src: "/education/iitdelhi.png" },
    { id: "heritage", src: "/education/heritage.png" },
    { id: "iilm", src: "/education/iilm.png" },
    { id: "balbharati", src: "/education/balbharati.png" },
    { id: "sau", src: "/education/sau.png" },
    { id: "cbse", src: "/education/cbse.png" },
  ],
};

// Section title
const SectionTitle = ({ title }) => (
  <h2 className="text-[36px] font-semibold text-black leading-none h-[25px] mb-[30px]  text-center">
    {title}
  </h2>
);

// Image card
const ImageCard = ({ src, alt }) => (
  <div className="w-full sm:w-[261.31px] h-[132.66px] border border-black flex items-center justify-center px-[40px] py-[16px] bg-white">
    <img
      src={src}
      alt={alt}
      className="w-[139.99px] h-[78.17px] object-contain"
      onError={(e) => {
        if (!e.target.src.includes("placeholder.jpg")) {
          e.target.src = "/placeholder.jpg";
          console.error(`Image not found: ${src}`);
        }
      }}
    />
  </div>
);

// Main component
const OurClient = () => {
  return (
    <div className="w-full max-w-[1084.43px] px-4 sm:px-0 flex flex-col gap-[64px] py-[40px] justify-center mx-auto bg-white ">
      <div className="text-center">
        <h1
          className="font-['DM Sans'] font-bold text-[24px] md:text-[48px] leading-[110%] tracking-[1%] text-[#3D3E98] text-center"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Our Corporate Clients
        </h1>
      </div>
      {Object.entries(sectors).map(([sector, clients]) => (
        <div key={sector}>
          <SectionTitle title={sector === "PSU" ? "PSU’s" : sector} />
          <div className="grid grid-cols-2 gap-[13px] sm:flex sm:flex-wrap sm:justify-center sm:gap-[13px] sm:grid-cols-none ">
            {clients.map(({ id, src }) => (
              <ImageCard key={id} src={src} alt={id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurClient;
