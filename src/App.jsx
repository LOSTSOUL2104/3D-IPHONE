import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Footer from "./components/Footer";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import { SpeedInsights } from "@vercel/speed-insights/react";
const App = () => {
  return (
    <main className="bg-black will-change-scroll">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      <SpeedInsights />
    </main>
  );
};

export default App;
