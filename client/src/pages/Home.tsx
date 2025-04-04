import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfluencerSection from '@/components/InfluencerSection';
import GrowthSection from '@/components/GrowthSection';
import ServicesSection from '@/components/ServicesSection';
import ApproachSection from '@/components/ApproachSection';
import JoinSection from '@/components/JoinSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfluencerSection />
      <GrowthSection />
      <ServicesSection />
      <ApproachSection />
      <JoinSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default Home;
