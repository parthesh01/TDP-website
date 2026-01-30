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
      </div>

      {/* Logo Marquee - full width end-to-end */}
      <div className="w-full mt-8 overflow-hidden sm:mt-12 lg:mt-20" aria-label="Partner logos marquee">
          {(() => {
            const row1Logos: { src: string; alt: string }[] = [
              { src: "/images/partners/Sky%20Furniture-01.png", alt: "Sky Furniture" },
              { src: "/images/partners/SHOTS_SHORBA.png", alt: "Shots & Shorba" },
              { src: "/images/partners/md%20logo-04.png", alt: "Aishwaryam by MD GROUP" },
              { src: "/images/partners/md%20logo-02.png", alt: "MD GROUP" },
              { src: "/images/partners/Logo-01.png", alt: "Kalpataru" },
              { src: "/images/partners/Logo.png", alt: "Partner" },
              { src: "/images/partners/Karan%20Group%20CDR%20logo%202-01.png", alt: "KARAN GROUP" },
              { src: "/images/partners/Evana%20logo-01.png", alt: "EVANA" },
              { src: "/images/partners/DR%20logo.png", alt: "NAKSHATRA" },
              
            ];
            const row2Logos: { src: string; alt: string }[] = [
              { src: "/images/partners/BaV%20Cafe-01.png", alt: "Bookavibe" },
              { src: "/images/partners/AJ%20Cafe%20Final%20Logo____________Illustrator-01.png", alt: "AJ Cafe" },
              { src: "/images/partners/afc-academy.png", alt: "AFC MASTER Academy For Change" },
              { src: "/images/partners/118b09100616847.5f0cd54bd92bf_Artboard%201.png", alt: "Partner" },
              { src: "/images/partners/118b09100616847.5f0cd54bd92bf_Artboard%202.png", alt: "Partner" },
              { src: "/images/partners/Degree%20Wala%20Vadapav%20Logo%20(White).png", alt: "Degree Wala Vadapav" },
              { src: "/images/partners/Chulbul%20Logo.png", alt: "CHULBUL DHABA" },
              { src: "/images/partners/brew-01.png", alt: "Blending Brew" },
            ];
            const logoImgClass =
              "h-[5.5rem] w-auto object-contain transition-opacity opacity-80 hover:opacity-100 sm:h-24 md:h-28 lg:h-32 max-w-[280px] mix-blend-multiply contrast-[0.92] brightness-[0.95]";
            return (
              <>
                <div
                  className="flex py-4 mb-6 sm:py-6 lg:py-8 sm:mb-8 lg:mb-12 marquee-track-left"
                  style={{ width: "max-content" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((copy) => (
                    <div
                      key={copy}
                      className="flex items-center flex-shrink-0 gap-8 pr-8 sm:gap-12 md:gap-16 lg:gap-24 sm:pr-12 md:pr-16 lg:pr-24"
                    >
                      {row1Logos.map(({ src, alt }) => (
                        <div key={alt + copy} className="flex items-center justify-center flex-shrink-0">
                          <img src={src} alt={alt} className={logoImgClass} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div
                  className="flex py-4 sm:py-6 lg:py-8 marquee-track-right"
                  style={{ width: "max-content" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((copy) => (
                    <div
                      key={copy}
                      className="flex items-center flex-shrink-0 gap-8 pr-8 sm:gap-12 md:gap-16 lg:gap-24 sm:pr-12 md:pr-16 lg:pr-24"
                    >
                      {row2Logos.map(({ src, alt }) => (
                        <div key={alt + copy} className="flex items-center justify-center flex-shrink-0">
                          <img src={src} alt={alt} className={logoImgClass} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
      </div>

      {/* Bottom Section */}
      <div className="container relative z-10 px-4 mx-auto mt-8 text-center text-white sm:mt-12 lg:mt-20">
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
    </section>
  );
};

export default InfluencerSection;
