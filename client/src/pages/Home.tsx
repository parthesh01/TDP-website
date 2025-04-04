import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfluencerSection from '@/components/InfluencerSection';
import ServicesBanner from '@/components/ServicesBanner';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfluencerSection />
      <ServicesBanner />
    </div>
  );
};

export default Home;
