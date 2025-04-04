import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-sky-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 max-w-4xl mx-auto">
          Start making the most of your company's <span className="font-serif italic font-normal">potential</span>.
        </h2>
        
        <Button
          className="bg-teal-900 hover:bg-teal-800 text-white rounded-full px-6 py-6 mt-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;