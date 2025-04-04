import React from 'react';
import { Button } from '@/components/ui/button';

const ApproachSection: React.FC = () => {
  return (
    <section className="bg-white py-20 border-b border-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Our approach is <span className="font-serif italic font-normal">different</span> 
              <br />than other agencies.
            </h2>
          </div>
          
          {/* Right side - Text content */}
          <div>
            <p className="text-lg text-gray-700 mb-12">
              The traditional agency model is flawed. Marketing agencies 
              typically place a group of talent around managing your account, 
              with one goal in mind, get you to renew your contract. We do the 
              opposite by focusing on precisely what your goals are, and 
              placing the best team around to accomplish those goals.
            </p>
            
            <div className="flex items-center">
              <Button
                className="bg-teal-900 hover:bg-teal-800 text-white rounded-full px-6 py-6 flex items-center gap-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <span className="ml-4 text-gray-700 uppercase text-sm tracking-wider">Book a meeting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;