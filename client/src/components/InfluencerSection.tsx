import React from 'react';
import { Button } from '@/components/ui/button';
import LogoCarousel from '@/components/LogoCarousel';

const InfluencerSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background that transitions from yellow to teal */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--secondary)), hsl(var(--secondary)), hsl(186, 100%, 50%), hsl(var(--teal-400)))'
        }}
      ></div>
      
      {/* Top section - Influencer Marketing */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4 italic">
              The premier
            </h2>
            <p className="text-xl mb-2">
              Switch to Smarter Influencer Marketing with <span className="font-bold">The Digital Pillar</span>
            </p>
            <p className="text-xl mb-8">
              Unlock Scalable, Data-Driven Campaigns for <span className="font-serif italic">Real Results</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="dark" className="rounded-full px-8 py-6 text-lg">
                I'm a brand
              </Button>
              <Button variant="dark" className="rounded-full px-8 py-6 text-lg">
                I'm a creator
              </Button>
            </div>
          </div>
          
          {/* Right side - Video player */}
          <div className="relative">
            {/* Curved arrows */}
            <svg className="absolute -left-16 top-1/4 w-20 h-40 text-black" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100" stroke="currentColor" strokeWidth="2"/>
              <path d="M40 10L50 0L40 -10" stroke="currentColor" strokeWidth="2" transform="translate(0 10)"/>
            </svg>
            
            <svg className="absolute -right-16 bottom-1/4 w-20 h-40 rotate-180 text-black" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100" stroke="currentColor" strokeWidth="2"/>
              <path d="M40 10L50 0L40 -10" stroke="currentColor" strokeWidth="2" transform="translate(0 10)"/>
            </svg>
            
            {/* Video player */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border-4 border-white shadow-xl relative">
              {/* Video thumbnail with product person */}
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-900 opacity-50"></div>
                  <div className="absolute w-4/5 h-4/5 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    {/* This would be the person image in a real implementation */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Product Demo</span>
                    </div>
                  </div>
                </div>
                
                {/* Shopping cart icons */}
                <div className="absolute top-10 right-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-10 left-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute right-20 bottom-20">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Video controls */}
              <div className="flex items-center justify-between px-4 py-2 bg-black bg-opacity-70 text-white">
                <div className="flex items-center space-x-2">
                  <button className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  <button className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 017.072 0m-9.9-2.828a9 9 0 0112.728 0" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>
                  <button className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Client logos carousel */}
        <LogoCarousel />
      </div>
      
      {/* Services Banner Section */}
      <div className="container mx-auto px-4 relative z-10 text-center py-32">
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
      <div className="relative h-24">
        <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 42.7C840 53.3 960 74.7 1080 74.7C1200 74.7 1320 53.3 1380 42.7L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default InfluencerSection;