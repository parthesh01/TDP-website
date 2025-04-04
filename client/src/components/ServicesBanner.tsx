import React from 'react';
import { Button } from '@/components/ui/button';

const ServicesBanner: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Teal/turquoise gradient background - using custom colors */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--teal-400)), hsl(var(--teal-600)), hsl(var(--teal-800)))'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Main text */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto">
          Design, Marketing, Branding, Development & more.
          <span className="inline-block ml-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </h2>
        
        {/* CTA Button */}
        <Button 
          className="rounded-full text-lg px-10 py-6 mt-8 group flex items-center justify-center"
          style={{
            background: 'hsl(var(--sky-300))',
            color: 'hsl(var(--teal-900))'
          }}
        >
          <span className="mr-4 group-hover:translate-x-1 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          BOOK A MEETING
        </Button>
      </div>
      
      {/* Bottom curve */}
      <div className="absolute -bottom-12 left-0 right-0 h-24">
        <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 42.7C840 53.3 960 74.7 1080 74.7C1200 74.7 1320 53.3 1380 42.7L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default ServicesBanner;