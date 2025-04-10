import React from "react";
import { ArrowUpRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-32 bg-[#EEF4F8]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[#0F2D40] text-5xl sm:text-6xl font-medium leading-[1.1] max-w-4xl mb-12">
            Start making the most of your company's{" "}
            <span className="font-playfair italic">potential</span>.
          </h2>
          <button className="bg-[#0F2D40] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:gap-4 transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
