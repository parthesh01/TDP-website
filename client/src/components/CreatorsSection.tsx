import React from "react";

const CreatorsSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#006B7D] via-[#1B1464] to-[#006B7D] py-32 overflow-hidden rounded-[48px]">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-white text-5xl sm:text-[64px] font-medium leading-[1.1] mb-4">
              join 450+
              <br />
              creators and
              <br />
              brands
            </h2>
          </div>

          {/* Right Side - Images */}
          <div className="relative h-[500px]">
            {/* Top Image */}
            <div className="absolute right-0 top-0 w-[400px] h-[300px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=800"
                alt="Fashion creator"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div className="absolute left-0 bottom-0 w-[400px] h-[300px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800"
                alt="Food photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-20 text-center">
          <h3 className="text-white text-4xl font-medium flex items-center justify-center gap-4">
            Powering Brands
            <span className="text-yellow-400 inline-block">✨</span>
            Empowering Creators
            <span className="inline-block">💪</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
