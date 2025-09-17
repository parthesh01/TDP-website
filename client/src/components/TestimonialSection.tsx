import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-white py-32 md:py-48">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-24">
          What our <em className="font-serif italic">client says</em>
        </h2>

        {/* Testimonial Card */}
        <div className="max-w-6xl mx-auto bg-[#0F2D40] rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Character Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src="/images/character/3d-character.png"
                alt="3D Character Testimonial"
                className="w-80 h-auto"
              />
            </div>

            {/* Testimonial Content */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <div className="mb-8 flex justify-center md:justify-start">
                <div className="w-16 h-16 bg-[#B4E4FF] rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.135 7.05c-.825-.9-1.275-1.8-1.275-2.7 0-1.05.45-1.8 1.2-2.4.75-.6 1.575-.9 2.475-.9.9 0 1.725.3 2.475.9.75.6 1.2 1.35 1.2 2.4 0 .9-.45 1.8-1.275 2.7L11.31 9.75v4.5H9.135V7.05zM15.135 7.05c-.825-.9-1.275-1.8-1.275-2.7 0-1.05.45-1.8 1.2-2.4.75-.6 1.575-.9 2.475-.9.9 0 1.725.3 2.475.9.75.6 1.2 1.35 1.2 2.4 0 .9-.45 1.8-1.275 2.7L17.31 9.75v4.5h-2.175V7.05z"
                      fill="#0F2D40"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl md:text-4xl font-semibold mb-8 leading-relaxed">
                "Efficient, knowledgeable, & smooth experience. Highly
                recommended"
              </h3>

              <div className="flex justify-center md:justify-start gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
