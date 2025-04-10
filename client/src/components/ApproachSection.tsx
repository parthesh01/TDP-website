import React from "react";
import { ArrowUpRight } from "lucide-react";

const ApproachSection: React.FC = () => {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0F2D40] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#0F2D40] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center gap-20">
          {/* Heading */}
          <div className="max-w-4xl">
            <h2 className="text-[#0F2D40] text-5xl sm:text-[64px] font-medium leading-[1.1]">
              Our approach is{" "}
              <span className="font-playfair italic">different</span>
              <br />
              than other agencies.
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-20 max-w-2xl">
            <p className="text-[#0F2D40] text-xl leading-relaxed">
              The traditional agency model is flawed. Marketing agencies
              typically place a group of talent around managing your account,
              with one goal in mind, get you to renew your contract. We do the
              opposite by focusing on precisely what your goals are, and placing
              the best team around to accomplish those goals.
            </p>

            {/* Book a Meeting Button */}
            <div className="flex items-center gap-3">
              <button className="bg-[#0F2D40] text-white px-8 py-4 rounded-full flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <span className="text-[#0F2D40] font-medium tracking-[0.2em] uppercase text-sm">
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
