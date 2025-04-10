import React from "react";
import { ShoppingCart } from "lucide-react";

const Services = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#F4B41A] via-[#88D1D1] to-[#1F4E5F] overflow-hidden">
      {/* Top Content */}
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading and CTAs */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div className="max-w-2xl">
              <h2 className="text-[64px] font-black italic mb-4">
                The premier
              </h2>
              <p className="text-xl mb-2">
                Switch to Smarter Influencer Marketing with{" "}
                <span className="italic">The Digital Pillar</span>
              </p>
              <p className="text-xl mb-8">
                Unlock Scalable, Data-Driven Campaigns for{" "}
                <span className="italic">Real Results</span>
              </p>
              <div className="flex gap-4">
                <button className="bg-[#1A2E35] text-white px-8 py-3 rounded-full hover:bg-[#2A3E45] transition-colors">
                  I'm a brand
                </button>
                <button className="bg-[#1A2E35] text-white px-8 py-3 rounded-full hover:bg-[#2A3E45] transition-colors">
                  I'm a creator
                </button>
              </div>
            </div>

            {/* Video Player Mockup */}
            <div className="relative mt-10 md:mt-0">
              <div className="w-[500px] h-[300px] bg-[#1A2E35] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/influencer-video.jpg"
                    alt="Influencer Marketing"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <div className="flex items-center gap-4">
                    <button className="text-white">⏸</button>
                    <div className="h-1 flex-1 bg-white/30 rounded-full">
                      <div className="h-full w-1/3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white text-sm">1:23 / 3:45</span>
                  </div>
                </div>
                {/* Shopping Cart Icons */}
                <div className="absolute top-4 right-4">
                  <ShoppingCart className="text-[#22C55E] w-8 h-8" />
                </div>
                <div className="absolute top-20 right-[-20px]">
                  <ShoppingCart className="text-[#22C55E] w-8 h-8" />
                </div>
                <div className="absolute bottom-20 right-[-10px]">
                  <ShoppingCart className="text-[#22C55E] w-8 h-8" />
                </div>
              </div>
              {/* Curved Arrows */}
              <svg
                className="absolute -top-20 -left-20"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <path
                  d="M80 50C80 20 20 20 20 50"
                  stroke="#1A2E35"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="absolute -bottom-20 -right-20"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <path
                  d="M20 50C20 80 80 80 80 50"
                  stroke="#1A2E35"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Logo Showcase */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-32 opacity-80">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src={`/logo-${i + 1}.svg`}
                  alt={`Partner Logo ${i + 1}`}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>

          {/* Bottom Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-white">
              Design, Marketing, Branding,
              <br />
              Development & more.
              <span className="inline-block ml-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h2>
            <button className="bg-[#7CC2FF] text-[#1A2E35] px-8 py-4 rounded-full hover:bg-[#90CDFF] transition-colors flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transform rotate-45"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              BOOK A MEETING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
