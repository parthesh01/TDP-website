import React from "react";
import { ArrowRight } from "lucide-react";

const InfluencerSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Yellow Background with curved bottom */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFB800] via-[#FFB800] to-[#006D77]" />
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path d="M0 40V20C480 35 960 35 1440 20V40H0Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[80px] font-black italic leading-tight mb-8 tracking-tight">
              The premier
            </h2>
            <p className="text-3xl mb-4">
              Switch to Smarter Influencer Marketing with{" "}
              <span className="italic">The Digital Pillar</span>
            </p>
            <p className="text-3xl mb-12">
              Unlock Scalable, Data-Driven Campaigns for{" "}
              <span className="italic">Real Results</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-6">
              <button className="bg-[#1F2937] text-white px-16 py-8 rounded-full hover:bg-[#374151] transition-all text-2xl font-medium hover:scale-105 transform duration-200 shadow-lg">
                I'm a brand
              </button>
              <button className="bg-[#1F2937] text-white px-16 py-8 rounded-full hover:bg-[#374151] transition-all text-2xl font-medium hover:scale-105 transform duration-200 shadow-lg">
                I'm a creator
              </button>
            </div>
          </div>

          {/* Right Content - Video Player */}
          <div className="w-full lg:w-1/2 relative">
            {/* Top Left Arrow */}
            <div className="absolute -left-16 -top-16 transform -rotate-45">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#1F2937]"
              >
                <path
                  d="M70 30C70 50 30 50 30 70"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Bottom Right Arrow */}
            <div className="absolute -right-16 -bottom-16 transform rotate-135">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#1F2937]"
              >
                <path
                  d="M70 30C70 50 30 50 30 70"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-[#0A2533] shadow-2xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-[16/9]">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800"
                  alt="Influencer Marketing Video"
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-2xl">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform transition-transform hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Controls */}
              <div className="p-4 text-white">
                {/* Progress Bar */}
                <div className="relative h-1 bg-white/20 rounded-full mb-4">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-[#00B37E] rounded-full"></div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="hover:text-[#00B37E] transition-colors">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 6v12M9 6v12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-[#00B37E] transition-colors">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 5v14l7-7-7-7z M12 5v14l7-7-7-7z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <span className="text-sm opacity-80">1:23 / 3:45</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:text-[#00B37E] transition-colors">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11 5v14l-7-7 7-7z M18 5v14l-7-7 7-7z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-[#00B37E] transition-colors">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 9v6h4l5 5V4L7 9H3z M16 7v10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-[#00B37E] transition-colors">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 3h6v6M9 21H3v-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Shopping Cart Icons */}
            <div className="absolute -left-8 top-1/4 animate-bounce-slow">
              <div className="w-12 h-12 bg-[#00B37E] rounded-full flex items-center justify-center shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M4 4h2l2 11h12l2-9H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="20" r="1" fill="currentColor" />
                  <circle cx="18" cy="20" r="1" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="absolute -right-8 top-2/3 animate-bounce-slow delay-300">
              <div className="w-12 h-12 bg-[#00B37E] rounded-full flex items-center justify-center shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M4 4h2l2 11h12l2-9H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="20" r="1" fill="currentColor" />
                  <circle cx="18" cy="20" r="1" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="absolute right-1/4 -top-8 animate-bounce-slow delay-150">
              <div className="w-12 h-12 bg-[#00B37E] rounded-full flex items-center justify-center shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M4 4h2l2 11h12l2-9H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="20" r="1" fill="currentColor" />
                  <circle cx="18" cy="20" r="1" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="mt-20 overflow-hidden">
          {/* First row - moves left */}
          <div
            className="flex space-x-24 py-8 logo-carousel-left mb-12"
            style={{ width: "max-content" }}
          >
            {/* First set of logos */}
            <div className="flex space-x-24">
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <path d="M35 0L0 35L35 70L70 35L35 0Z" fill="black" />
                  <path d="M35 15L15 35L35 55L55 35L35 15Z" fill="white" />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  CREATIVE DESIGN
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <rect
                    x="10"
                    y="10"
                    width="50"
                    height="50"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <rect x="20" y="20" width="30" height="30" fill="black" />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  COMPANY TAB LINE
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <circle cx="20" cy="35" r="10" fill="black" />
                  <circle cx="50" cy="35" r="10" fill="black" />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  EXCLUSIVE BRAND
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <rect x="10" y="10" width="20" height="50" fill="black" />
                  <rect x="40" y="10" width="20" height="50" fill="black" />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  NEW BRAND
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="25"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M20 35C20 25 30 15 50 35C30 55 20 45 20 35Z"
                    fill="black"
                  />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  BRAND
                </p>
              </div>
            </div>
          </div>

          {/* Second row - moves right */}
          <div
            className="flex space-x-24 py-8 logo-carousel-right"
            style={{ width: "max-content" }}
          >
            {/* First set of logos */}
            <div className="flex space-x-24">
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="25"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M25 20C35 30 45 20 45 45C35 35 25 45 25 20Z"
                    fill="black"
                  />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  COMPANY
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <circle cx="25" cy="45" r="15" fill="black" />
                  <circle cx="45" cy="25" r="15" fill="black" />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  COMPANY
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <path d="M35 15L15 55H55L35 15Z" fill="black" />
                  <path d="M25 35L35 55L45 35L35 15L25 35Z" fill="white" />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  BRAND
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <path
                    d="M15 35C15 25 25 15 35 15C45 15 55 25 55 35"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="35"
                    y="50"
                    fontSize="20"
                    textAnchor="middle"
                    fill="black"
                  >
                    A&C
                  </text>
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  ARTS & CRAFTS
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <path
                    d="M10 15H60V55H10V15Z"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M25 15L10 35L25 55M45 15L60 35L45 55"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
                <p className="text-sm mt-3 font-bold text-black tracking-wider">
                  CREATIVE DESIGN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center text-white relative z-10">
          <h2 className="text-6xl font-bold mb-8">
            Design, Marketing, Branding,
            <br />
            Development & more.
            <ArrowRight className="inline-block ml-4 h-14 w-14" />
          </h2>

          {/* Book Meeting Button */}
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-white relative px-10 py-4 mt-10"
          >
            <span className="relative">
              <span className="text-lg uppercase tracking-wider">
                Book a meeting
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"></span>
            </span>
            <div className="w-12 h-12 bg-[#7DD3FC] rounded-full flex items-center justify-center transform transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-6 w-6 text-[#1F2937]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;
