import React from "react";
import { ArrowUpRight } from "lucide-react";

const ApproachSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-[#0F2D40] blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full bg-[#0F2D40] blur-3xl" />
      </div>

      <div className="container relative px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 text-center">
          {/* Heading */}
          <div className="max-w-4xl">
            <h2 className="text-[#0F2D40] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[1.1]">
              Our approach is{" "}
              <span className="italic font-playfair">different</span>
              <br />
              than other agencies.
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center max-w-2xl gap-12 sm:gap-16 lg:gap-20">
            <p className="text-[#0F2D40] text-base sm:text-lg lg:text-xl leading-relaxed px-4">
              The traditional agency model is flawed. Marketing agencies
              typically place a group of talent around managing your account,
              with one goal in mind, get you to renew your contract. We do the
              opposite by focusing on precisely what your goals are, and placing
              the best team around to accomplish those goals.
            </p>

            {/* Book a Meeting Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="bg-[#0F2D40] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <span className="text-[#0F2D40] font-medium tracking-[0.2em] uppercase text-xs sm:text-sm">
                Book a Meeting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
