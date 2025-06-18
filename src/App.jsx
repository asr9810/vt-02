import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import VendorApplication from "./pages/VendorApplication";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OurFleet from "./pages/OurFleet";
import Services from "./pages/Services";
import OurClient from "./pages/OurClient";
import FleetCarDetail from "./components/FleetCarDetail";
import CarDetail from "./pages/CarDetail";
import Sedan from "./pages/Sedan";
import SuvMuv from "./pages/SuvMuv";
import LuxuryCars from "./pages/LuxuryCars";
import Van from "./pages/Van";
import EvCar from "./pages/EvCar";
import LuxuryBus from "./pages/LuxuryBus";
import SwiftDzire from "./pages/SwiftDzire";

import HyundaiAura from "./pages/HyundaiAura";
import HondaAmaze from "./pages/HondaAmaze";
import HondaCity from "./pages/HondaCity";
import MarutiSuzukiCiaz from "./pages/MarutiSuzukiCiaz";

import MarutiSuzukiErtiga from "./pages/MarutiSuzukiErtiga";
import ToyotaRumion from "./pages/ToyotaRumion";
import InnovaCrysta from "./pages/InnovaCrysta";
import InnovaHycross from "./pages/InnovaHycross";
import MarutiSuzukiInvicto from "./pages/MarutiSuzukiInvicto";
import ToyotaFortuner from "./pages/ToyotaFortuner";
import KiaCarnival from "./pages/KiaCarnival";
import KiaCarens from "./pages/KiaCarens";

import ToyotaCamry from "./pages/ToyotaCamry";
import MercedesEClass from "./pages/MercedesEClass";
import MercedesSClass from "./pages/MercedesSClass";
import BMW7Series from "./pages/BMW7Series";
import JaguarXF from "./pages/JaguarXF";
import MercedesViano from "./pages/MercedesViano";
import LandRoverDefender from "./pages/LandRoverDefender";
import ToyotaVellfire from "./pages/ToyotaVellfire";

import LuxuryMaharajaTempoTraveller from "./pages/LuxuryMaharajaTempoTraveller";
import TempoTravellers2x1 from "./pages/TempoTravellers2x1";
import UrbaniaModified from "./pages/UrbaniaModified";
import Urbania2x1 from "./pages/Urbania2x1";

import TataTigor from "./pages/TataTigor";
import TataNexon from "./pages/TataNexon";
import MGZSEV from "./pages/MGZSEV";
import Ioniq5 from "./pages/Ioniq5";

import MiniBusCoach from "./pages/MiniBusCoach";
import LuxuryCoach from "./pages/LuxuryCoach";
import ScaniaVolvoBus from "./pages/ScaniaVolvoBus";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col w-full">
        <NavBar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-fleet" element={<OurFleet />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/clients" element={<OurClient />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/car-details" element={<FleetCarDetail />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/vendor-application" element={<VendorApplication />} />
            <Route path="/contact-us" element={<Contact />} />

            <Route path="/sedans" element={<Sedan carType="Sedans" />} />
            <Route path="/suv-muvs" element={<SuvMuv carType="SUV/MUVs" />} />
            <Route
              path="/luxury-cars-4-7-seater"
              element={<LuxuryCars carType="Luxury Cars (4-7 Seater)" />}
            />
            <Route path="/van" element={<Van carType="Van" />} />
            <Route path="/ev-cars" element={<EvCar carType="EV Cars" />} />
            <Route
              path="/luxury-buses"
              element={<LuxuryBus carType="Luxury Buses" />}
            />

            <Route path="/swift-dzire" element={<SwiftDzire />} />
            <Route path="/hyundai-aura" element={<HyundaiAura />} />
            <Route path="/honda-amaze" element={<HondaAmaze />} />
            <Route path="/honda-city" element={<HondaCity />} />
            <Route path="/maruti-suzuki-ciaz" element={<MarutiSuzukiCiaz />} />

            <Route
              path="/maruti-suzuki-ertiga"
              element={<MarutiSuzukiErtiga />}
            />
            <Route path="/toyota-rumion" element={<ToyotaRumion />} />
            <Route path="/innova-crysta" element={<InnovaCrysta />} />
            <Route path="/innova-hycross" element={<InnovaHycross />} />
            <Route
              path="/maruti-suzuki-invicto"
              element={<MarutiSuzukiInvicto />}
            />
            <Route path="/toyota-fortuner" element={<ToyotaFortuner />} />
            <Route path="/kia-carnival" element={<KiaCarnival />} />
            <Route path="/kia-carens" element={<KiaCarens />} />

            <Route path="/toyota-camry" element={<ToyotaCamry />} />
            <Route path="/mercedes-e-class" element={<MercedesEClass />} />
            <Route path="/mercedes-s-class" element={<MercedesSClass />} />
            <Route path="/bmw-7-series" element={<BMW7Series />} />
            <Route path="/jaguar-xf" element={<JaguarXF />} />
            <Route path="/mercedes-viano" element={<MercedesViano />} />
            <Route
              path="/land-rover-defender"
              element={<LandRoverDefender />}
            />
            <Route path="/toyota-vellfire" element={<ToyotaVellfire />} />

            <Route
              path="/luxury-maharaja-tempo-traveller"
              element={<LuxuryMaharajaTempoTraveller />}
            />
            <Route
              path="/tempo-travellers-2x1"
              element={<TempoTravellers2x1 />}
            />
            <Route path="/urbania-modified" element={<UrbaniaModified />} />
            <Route path="/urbania-2x1" element={<Urbania2x1 />} />

            <Route path="/tata-tigor" element={<TataTigor />} />
            <Route path="/tata-nexon" element={<TataNexon />} />
            <Route path="/mg-zs-ev" element={<MGZSEV />} />
            <Route path="/ioniq-5" element={<Ioniq5 />} />

            <Route path="/mini-bus-coach" element={<MiniBusCoach />} />
            <Route path="/luxury-coach" element={<LuxuryCoach />} />
            <Route path="/scania-volvo-bus" element={<ScaniaVolvoBus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
