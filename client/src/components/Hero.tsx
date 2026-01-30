import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white">
      {/* Darts image - Responsive visibility */}
      <div className="absolute bottom-0 left-0 z-10">
        <div className="relative w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-white via-transparent to-transparent" />
          <img
            src="/darts.jpeg"
            alt="Purple darts hitting target"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 py-4 mx-auto sm:py-10 lg:py-20">
        <div className="max-w-4xl mx-auto lg:ml-80">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[5.5rem] font-bold text-[#6B46C1] leading-[1.2] sm:leading-[1.4] font-sora text-center">
            Create the{" "}
            <span className="italic font-normal font-playfair">growth</span>
            <br />
            your company is
            <br />
            <span className="relative inline-block italic font-normal font-playfair">
              capable of
              <img
                src="images/decorative-underline.png"
                alt="Decorative underline"
                className="absolute left-0 w-full h-auto -bottom-8 sm:-bottom-16 lg:-bottom-28"
              />
              .
            </span>
          </h1>

          {/* Agency Introduction */}
          <div className="mt-2 sm:mt-4 lg:mt-16 mb-6 sm:mb-8 max-w-[650px] mx-auto sm:ml-auto text-center sm:text-right text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.4] font-jakarta">
            <p className="mb-1">
              We are{" "}
              <span className="font-bold border-b-2 border-[#1F2937]">
                The Digital Pillar
              </span>
              {""}, a full-service marketing agency
            </p>
            <p className="mb-1">based in Pune. We work with believers & big</p>
            <p>dreamers to help them achieve their vision.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8 lg:gap-16">
            {/* Book Meeting Button */}
            <a href="#" className="w-full group sm:w-auto">
              <div className="bg-[#1F2937] text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#374151] transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transform rotate-45 sm:w-6 sm:h-6"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-medium tracking-wider sm:text-sm">
                  BOOK A MEETING
                </span>
              </div>
            </a>

           {/* Showreel Button */}
            {/* <div className="relative transition-transform duration-300 cursor-pointer group hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-md sm:w-20 sm:h-20 lg:w-24 lg:h-24 group-hover:shadow-lg">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#6B46C1] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7c5ac9]">
                  <Play className="w-4 h-4 text-white transition-transform duration-300 fill-current sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110" />
                </div>
              </div>
              <div className="absolute inset-0 hidden sm:block">
                <CircleText text="AGENCY SHOWREEL • WATCH NOW •" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
