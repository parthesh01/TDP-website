import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfluencerSection from "@/components/InfluencerSection";
import GrowthSection from "@/components/GrowthSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfluencerSection />
      <GrowthSection />
      <ServicesSection />
      <ApproachSection />
      <BlogSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
