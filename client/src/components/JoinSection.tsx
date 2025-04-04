import React from 'react';

const JoinSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(20, 184, 166, 0.8), rgba(25, 120, 160, 0.7), rgba(59, 130, 246, 0.6))',
          backdropFilter: 'blur(30px)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              join 450+
              <br />
              creators and
              <br />
              brands
            </h2>
            
            <div className="mt-16">
              <h3 className="text-3xl text-white font-light mb-2 flex items-center">
                Powering Brands <span className="mx-3">✨</span> Empowering Creators
                <span className="ml-3">💪</span>
              </h3>
              <div className="w-full h-0.5 bg-white/30"></div>
            </div>
          </div>
          
          {/* Right side - Images */}
          <div className="relative">
            {/* Top-right image */}
            <div className="absolute right-0 top-0 w-3/5 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Fashion creator looking at clothing" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom-left image */}
            <div className="absolute left-0 bottom-0 w-2/5 h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Food photography smartphone" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Spacer for proper sizing - not visible */}
            <div className="h-96 w-full"></div>
          </div>
        </div>
      </div>
      
      {/* Rounded bottom */}
      <div className="absolute -bottom-12 left-0 right-0 h-24">
        <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 42.7C840 53.3 960 74.7 1080 74.7C1200 74.7 1320 53.3 1380 42.7L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default JoinSection;