import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfluencerSection from '@/components/InfluencerSection';
import GrowthSection from '@/components/GrowthSection';
import ServicesSection from '@/components/ServicesSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfluencerSection />
      <GrowthSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
