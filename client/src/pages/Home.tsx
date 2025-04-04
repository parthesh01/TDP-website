import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfluencerSection from '@/components/InfluencerSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfluencerSection />
    </div>
  );
};

export default Home;
