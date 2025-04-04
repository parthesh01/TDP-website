import React from 'react';
import { Button } from '@/components/ui/button';

const GrowthSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Main heading with italic text */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-800 mb-12 max-w-5xl mx-auto">
          We help ambitious companies meet & exceed their <span className="font-serif italic font-normal">growth goals</span>.
        </h2>
        
        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Testimonial card - 6 columns */}
          <div className="lg:col-span-6 bg-teal-800 rounded-lg overflow-hidden text-white p-8 relative">
            <div className="flex items-start">
              {/* Character image */}
              <div className="w-32 h-32 flex-shrink-0">
                <img 
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/business-man-giving-thumbs-up-5706946-4755382.png" 
                  alt="Happy business character" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="ml-4">
                {/* Quote icon */}
                <div className="bg-sky-300 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H4.5C3.83696 12 3.20107 11.7366 2.73223 11.2678C2.26339 10.7989 2 10.163 2 9.5C2 8.83696 2.26339 8.20108 2.73223 7.73223C3.20107 7.26339 3.83696 7 4.5 7H5C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5V4.5C7 3.83696 7.26339 3.20108 7.73223 2.73223C8.20107 2.26339 8.83696 2 9.5 2C10.163 2 10.7989 2.26339 11.2678 2.73223C11.7366 3.20108 12 3.83696 12 4.5V8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12ZM20 12H16.5C15.8369 12 15.2011 11.7366 14.7322 11.2678C14.2634 10.7989 14 10.163 14 9.5C14 8.83696 14.2634 8.20108 14.7322 7.73223C15.2011 7.26339 15.8369 7 16.5 7H17C17.5304 7 18.0391 6.78929 18.4142 6.41421C18.7893 6.03914 19 5.53043 19 5V4.5C19 3.83696 19.2634 3.20108 19.7322 2.73223C20.2011 2.26339 20.8369 2 21.5 2C22.163 2 22.7989 2.26339 23.2678 2.73223C23.7366 3.20108 24 3.83696 24 4.5V8C24 9.06087 23.5786 10.0783 22.8284 10.8284C22.0782 11.5786 21.0609 12 20 12Z" fill="#134e4a"/>
                  </svg>
                </div>
                
                {/* Testimonial text */}
                <p className="text-xl mb-4">
                  "Efficient, knowledgeable, & smooth experience. Highly recommended"
                </p>
                
                {/* Stars */}
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mission card - 6 columns */}
          <div className="lg:col-span-6 bg-sky-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-700 mb-2">
              To ensure long-term success for our companies, we strive diligently to combine the best of digital
              & traditional marketing strategies.
            </p>
          </div>
        </div>
        
        {/* Bottom cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Vision card - 4 columns */}
          <div className="lg:col-span-4 bg-sky-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-700">
              We are an independent creative marketing agency with a vision to set new standards & create history.
            </p>
          </div>
          
          {/* About card - 8 columns split into who we are and metrics */}
          <div className="lg:col-span-8 bg-sky-50 rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">We'r TDP</h3>
              <p className="text-gray-700 mb-4">
                A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
              </p>
              
              <Button 
                variant="link" 
                className="text-gray-800 pl-0 flex items-center group"
              >
                Learn More
                <span className="ml-2 bg-gray-800 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Button>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-5xl font-bold text-gray-800">110 <span className="text-3xl">+</span></h4>
                <p className="text-gray-700">Successful Projects</p>
              </div>
              
              <div>
                <h4 className="text-5xl font-bold text-gray-800">1.2 <span className="text-3xl">x</span></h4>
                <p className="text-gray-700">Rapid growth</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom navigation bar */}
        <div className="mt-16 bg-yellow-400 rounded-lg py-4 px-6 flex justify-between overflow-x-auto">
          {["NEW IDEAS", "GO VIRAL", "JOIN US", "TDP", "GROWTH"].map((item, index) => (
            <div key={index} className="flex items-center px-2 sm:px-4">
              <div className="hidden sm:block">
                <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="4" height="32" rx="2" fill="#6B4713"/>
                </svg>
              </div>
              <span className="font-bold text-gray-800 px-2">{item}</span>
              <div className="hidden sm:block">
                <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="4" height="32" rx="2" fill="#6B4713"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;