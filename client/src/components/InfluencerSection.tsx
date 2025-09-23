import React from "react";
import { ArrowRight } from "lucide-react";

const InfluencerSection: React.FC = () => {
  return (
    <section className="relative py-8 overflow-hidden sm:py-12 lg:py-20">
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
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 lg:gap-12 lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black italic leading-tight mb-4 sm:mb-6 lg:mb-8 tracking-tight">
              The premier
            </h2>
            <p className="mb-2 text-lg sm:mb-4 sm:text-xl md:text-2xl lg:text-3xl">
              Switch to Smarter Influencer Marketing with{" "}
              <span className="italic">The Digital Pillar</span>
            </p>
            <p className="mb-6 text-lg sm:mb-8 lg:mb-12 sm:text-xl md:text-2xl lg:text-3xl">
              Unlock Scalable, Data-Driven Campaigns for{" "}
              <span className="italic">Real Results</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-6">
              <button className="bg-[#1F2937] text-white px-6 sm:px-8 lg:px-16 py-3 sm:py-4 lg:py-8 rounded-full hover:bg-[#374151] transition-all text-sm sm:text-base lg:text-2xl font-medium hover:scale-105 transform duration-200 shadow-lg">
                I'm a brand
              </button>
              <button className="bg-[#1F2937] text-white px-6 sm:px-8 lg:px-16 py-3 sm:py-4 lg:py-8 rounded-full hover:bg-[#374151] transition-all text-sm sm:text-base lg:text-2xl font-medium hover:scale-105 transform duration-200 shadow-lg">
                I'm a creator
              </button>
            </div>
          </div>

          {/* Right Content - Video Player */}
          <div className="relative w-full lg:w-1/2">
            {/* Top Left Arrow */}
            <div className="absolute transform -rotate-45 -left-4 sm:-left-8 lg:-left-16 -top-4 sm:-top-8 lg:-top-16">
              <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#1F2937] sm:w-[75px] sm:h-[75px] lg:w-[100px] lg:h-[100px]"
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
            <div className="absolute transform -right-4 sm:-right-8 lg:-right-16 -bottom-4 sm:-bottom-8 lg:-bottom-16 rotate-135">
              <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#1F2937] sm:w-[75px] sm:h-[75px] lg:w-[100px] lg:h-[100px]"
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
                  className="object-cover w-full h-full rounded-t-2xl"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-2xl">
                  <button className="flex items-center justify-center w-12 h-12 transition-transform transform bg-white rounded-full sm:w-14 sm:h-14 lg:w-16 lg:h-16 hover:scale-110">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="sm:w-6 sm:h-6 lg:w-6 lg:h-6"
                    >
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Controls */}
              <div className="p-2 text-white sm:p-3 lg:p-4">
                {/* Progress Bar */}
                <div className="relative h-1 mb-2 rounded-full sm:mb-3 lg:mb-4 bg-white/20">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-[#00B37E] rounded-full"></div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <button className="hover:text-[#00B37E] transition-colors">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                      >
                        <path
                          d="M5 5v14l7-7-7-7z M12 5v14l7-7-7-7z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <span className="text-xs sm:text-sm opacity-80">
                      1:23 / 3:45
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <button className="hover:text-[#00B37E] transition-colors">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                      >
                        <path
                          d="M11 5v14l-7-7 7-7z M18 5v14l-7-7 7-7z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-[#00B37E] transition-colors">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
            <div className="absolute -left-2 sm:-left-4 lg:-left-8 top-1/4 animate-bounce-slow">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#00B37E] rounded-full flex items-center justify-center shadow-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
            <div className="absolute delay-300 -right-2 sm:-right-4 lg:-right-8 top-2/3 animate-bounce-slow">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#00B37E] rounded-full flex items-center justify-center shadow-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
            <div className="absolute delay-150 right-1/4 -top-2 sm:-top-4 lg:-top-8 animate-bounce-slow">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#00B37E] rounded-full flex items-center justify-center shadow-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
        <div className="mt-8 overflow-hidden sm:mt-12 lg:mt-20">
          {/* First row - moves left */}
          <div
            className="flex py-4 mb-6 space-x-12 sm:py-6 lg:py-8 sm:mb-8 lg:mb-12 sm:space-x-16 lg:space-x-24 logo-carousel-left"
            style={{ width: "max-content" }}
          >
            {/* First set of logos */}
            <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-24">
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                >
                  <path d="M35 0L0 35L35 70L70 35L35 0Z" fill="black" />
                  <path d="M35 15L15 35L35 55L55 35L35 15Z" fill="white" />
                </svg>
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  CREATIVE DESIGN
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
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
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  COMPANY TAB LINE
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                >
                  <circle cx="20" cy="35" r="10" fill="black" />
                  <circle cx="50" cy="35" r="10" fill="black" />
                </svg>
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  EXCLUSIVE BRAND
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                >
                  <rect x="10" y="10" width="20" height="50" fill="black" />
                  <rect x="40" y="10" width="20" height="50" fill="black" />
                </svg>
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  NEW BRAND
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
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
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  BRAND
                </p>
              </div>
            </div>
          </div>

          {/* Second row - moves right */}
          <div
            className="flex py-4 space-x-8 sm:py-6 lg:py-8 sm:space-x-12 md:space-x-16 lg:space-x-24 logo-carousel-right"
            style={{ width: "max-content" }}
          >
            {/* First set of logos */}
            <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-24">
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
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
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  COMPANY
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                >
                  <circle cx="25" cy="45" r="15" fill="black" />
                  <circle cx="45" cy="25" r="15" fill="black" />
                </svg>
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  COMPANY
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                >
                  <path d="M35 15L15 55H55L35 15Z" fill="black" />
                  <path d="M25 35L35 55L45 35L35 15L25 35Z" fill="white" />
                </svg>
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  BRAND
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
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
                    fontSize="16"
                    textAnchor="middle"
                    fill="black"
                    className="sm:text-lg md:text-xl lg:text-2xl"
                  >
                    A&C
                  </text>
                </svg>
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  ARTS & CRAFTS
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-opacity opacity-90 hover:opacity-100 sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
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
                <p className="mt-2 text-xs font-bold tracking-wider text-black sm:mt-3 sm:text-sm">
                  CREATIVE DESIGN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 mt-8 text-center text-white sm:mt-12 lg:mt-20">
          <h2 className="mb-4 text-2xl font-bold sm:mb-6 lg:mb-8 sm:text-3xl md:text-4xl lg:text-6xl">
            Design, Marketing, Branding,
            <br />
            Development & more.
            <ArrowRight className="inline-block w-6 h-6 ml-2 sm:ml-3 lg:ml-4 sm:h-8 sm:w-8 lg:h-14 lg:w-14" />
          </h2>

          {/* Book Meeting Button */}
          <a
            href="#"
            className="relative inline-flex items-center gap-2 px-6 py-3 mt-6 text-white sm:gap-3 sm:px-8 lg:px-10 sm:py-4 sm:mt-8 lg:mt-10 group"
          >
            <span className="relative">
              <span className="text-sm tracking-wider uppercase sm:text-base lg:text-lg">
                Book a meeting
              </span>
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 bg-white"></span>
            </span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#7DD3FC] rounded-full flex items-center justify-center transform transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#1F2937]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;
