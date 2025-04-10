import React from "react";
import CircleText from "@/components/CircleText";
import { Play } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-white relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Darts image */}
      <div className="absolute bottom-0 left-0 z-10">
        <div className="relative w-[600px]">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-20" />
          <img
            src="/darts.jpeg"
            alt="Purple darts hitting target"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-9xl lg:text-[5.5rem] font-bold text-[#6B46C1] leading-[1.4] font-sora text-center">
            Create the{" "}
            <span className="font-playfair italic font-normal">growth</span>
            <br />
            your company is
            <br />
            <span className="font-playfair italic font-normal relative inline-block">
              capable of
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#1F2937]" />
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
                <span className="font-medium tracking-wider text-sm">
                  BOOK A MEETING
                </span>
              </div>
            </a>

            {/* Showreel Button */}
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md cursor-pointer">
                <div className="w-12 h-12 bg-[#6B46C1] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 text-white fill-current" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-slow group-hover:animate-spin-slower">
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
