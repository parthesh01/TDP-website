import React from 'react';
import { Button } from '@/components/ui/button';
import CircleText from '@/components/CircleText';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pt-10 pb-20">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Side with Visual Elements */}
        <div className="w-full lg:w-2/5 mb-10 lg:mb-0 relative">
          <div className="relative transform -rotate-5">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 border-8 border-gray-300 border-t-transparent rounded-full transform -rotate-45"></div>
            
            {/* Purple Darts/Arrows */}
            <div className="relative z-10">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* First dart */}
                <g transform="translate(80, 60) rotate(25)">
                  <path d="M20 120L40 160L0 160L20 120Z" fill="#7F55C9" />
                  <rect x="17" y="20" width="6" height="100" fill="#7F55C9" />
                  <circle cx="20" cy="10" r="10" fill="#7F55C9" />
                  <rect x="15" y="40" width="10" height="15" fill="#E5E5E5" />
                  <rect x="15" y="70" width="10" height="15" fill="#E5E5E5" />
                </g>
                
                {/* Second dart */}
                <g transform="translate(120, 40) rotate(15)">
                  <path d="M20 120L40 160L0 160L20 120Z" fill="#7F55C9" />
                  <rect x="17" y="20" width="6" height="100" fill="#7F55C9" />
                  <circle cx="20" cy="10" r="10" fill="#7F55C9" />
                  <rect x="15" y="40" width="10" height="15" fill="#E5E5E5" />
                  <rect x="15" y="70" width="10" height="15" fill="#E5E5E5" />
                </g>
                
                {/* Third dart */}
                <g transform="translate(160, 20) rotate(5)">
                  <path d="M20 120L40 160L0 160L20 120Z" fill="#7F55C9" />
                  <rect x="17" y="20" width="6" height="100" fill="#7F55C9" />
                  <circle cx="20" cy="10" r="10" fill="#7F55C9" />
                  <rect x="15" y="40" width="10" height="15" fill="#E5E5E5" />
                  <rect x="15" y="70" width="10" height="15" fill="#E5E5E5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Right Side with Text Content */}
        <div className="w-full lg:w-3/5 lg:pl-10">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">
            Create the <span className="font-serif italic font-normal">growth</span>
            <br />
            your company is
            <br />
            <span className="font-serif italic font-normal relative curved-underline">capable of.</span>
          </h1>
          
          {/* Agency Introduction */}
          <div className="mt-10 mb-8 text-lg">
            <p>We are <span className="font-bold">The Digital Pillar</span>, a full-service marketing agency</p>
            <p>based in Pune. We work with believers & big</p>
            <p>dreamers to help them achieve their vision.</p>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <Button variant="dark" size="xl" className="inline-flex items-center">
              <ArrowRight className="h-6 w-6 mr-2" />
              BOOK A MEETING
            </Button>
            
            {/* Circular Agency Showreel Button */}
            <div className="ml-16 relative">
              <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md group cursor-pointer">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 text-white fill-current" />
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <CircleText text="Agency Showreel • Watch Our Work •" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
