import React from "react";
import CircleText from "@/components/CircleText";
import { Play } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-white relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Darts image */}
      <div className="absolute bottom-0 left-0 z-10">
        <div className="relative w-[600px]">
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-white via-transparent to-transparent" />
          <img
            src="/darts.jpeg"
            alt="Purple darts hitting target"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative z-20 px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-9xl lg:text-[5.5rem] font-bold text-[#6B46C1] leading-[1.4] font-sora text-center">
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
                className="absolute left-0 w-full h-auto -bottom-28"
              />
              .
            </span>
          </h1>

          {/* Agency Introduction */}
          <div className="mt-10 mb-8 max-w-[800px] text-left text-[26px] leading-[1.4] font-jakarta ml-80">
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
          <div className="flex items-center justify-center gap-16">
            {/* Book Meeting Button */}
            <a href="#" className="group">
              <div className="bg-[#1F2937] text-white px-10 py-5 rounded-2xl flex items-center gap-3 hover:bg-[#374151] transition-colors">
                <svg
                  width="24"
                  height="24"
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
                <span className="text-sm font-medium tracking-wider">
                  BOOK A MEETING
                </span>
              </div>
            </a>

            {/* Showreel Button */}
            <div className="relative transition-transform duration-300 cursor-pointer group hover:scale-105">
              <div className="flex items-center justify-center w-24 h-24 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-md group-hover:shadow-lg">
                <div className="w-12 h-12 bg-[#6B46C1] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7c5ac9]">
                  <Play className="w-6 h-6 text-white transition-transform duration-300 fill-current group-hover:scale-110" />
                </div>
              </div>
              <div className="absolute inset-0">
                <CircleText text="AGENCY SHOWREEL • WATCH NOW •" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
