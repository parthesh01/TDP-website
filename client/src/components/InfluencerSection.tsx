import React from 'react';
import { Button } from '@/components/ui/button';

const InfluencerSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-emerald-400 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
        
        {/* Client logos section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 0L0 35L35 70L70 35L35 0Z" fill="black"/>
              <path d="M35 15L15 35L35 55L55 35L35 15Z" fill="white"/>
            </svg>
            <p className="text-xs mt-2 font-bold">CREATIVE DESIGN</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="50" height="50" stroke="black" strokeWidth="2"/>
              <rect x="20" y="20" width="30" height="30" fill="black"/>
            </svg>
            <p className="text-xs mt-2 font-bold">COMPANY TAB LINE</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="35" r="10" fill="black"/>
              <circle cx="50" cy="35" r="10" fill="black"/>
            </svg>
            <p className="text-xs mt-2 font-bold">EXCLUSIVE BRAND</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="20" height="50" fill="black"/>
              <rect x="40" y="10" width="20" height="50" fill="black"/>
            </svg>
            <p className="text-xs mt-2 font-bold">NEW BRAND</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="35" r="25" stroke="black" strokeWidth="2" fill="none"/>
              <path d="M20 35C20 25 30 15 50 35C30 55 20 45 20 35Z" fill="black"/>
            </svg>
            <p className="text-xs mt-2 font-bold">BRAND</p>
          </div>
          
          {/* Row 2 */}
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="35" r="25" fill="none" stroke="black" strokeWidth="2"/>
              <path d="M25 20C35 30 45 20 45 45C35 35 25 45 25 20Z" fill="black"/>
            </svg>
            <p className="text-xs mt-2 font-bold">COMPANY</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="45" r="15" fill="black"/>
              <circle cx="45" cy="25" r="15" fill="black"/>
            </svg>
            <p className="text-xs mt-2 font-bold">COMPANY</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 15L15 55H55L35 15Z" fill="black"/>
              <path d="M25 35L35 55L45 35L35 15L25 35Z" fill="white"/>
            </svg>
            <p className="text-xs mt-2 font-bold">BRAND</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 35C15 25 25 15 35 15C45 15 55 25 55 35" stroke="black" strokeWidth="2" fill="none"/>
              <text x="35" y="50" fontSize="20" textAnchor="middle" fill="black">A&C</text>
            </svg>
            <p className="text-xs mt-2 font-bold">ARTS & CRAFTS</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15H60V55H10V15Z" fill="none" stroke="black" strokeWidth="2"/>
              <path d="M25 15L10 35L25 55M45 15L60 35L45 55" fill="none" stroke="black" strokeWidth="2"/>
            </svg>
            <p className="text-xs mt-2 font-bold">CREATIVE DESIGN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;