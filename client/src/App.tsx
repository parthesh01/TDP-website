import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfluencerSection from "./components/InfluencerSection";
import ApproachSection from "./components/ApproachSection";
import GrowthSection from "./components/GrowthSection";
import ServicesSection from "./components/ServicesSection";
import FAQSection from "./components/FAQSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import CreatorsSection from "./components/CreatorsSection";
import CallToAction from "./components/CallToAction";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Loader isLoading={isLoading} />
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />
        <Hero />
        <InfluencerSection />
        <GrowthSection />
        <ServicesSection />
        <ApproachSection />
        <CreatorsSection />
        <BlogSection />
        <CallToAction />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
