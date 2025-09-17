import React from "react";

const words = [
  "Personal branding",
  "Trending",
  "Personal branding",
  "Trending",
  "Personal branding",
  "Trending",
];

const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    className={className}
    aria-hidden
  >
    <path
      fill="currentColor"
      d="M12 2.75c.4 0 .75.26.86.64l1.2 4.13c.08.27.3.49.57.57l4.13 1.2a.9.9 0 0 1 0 1.72l-4.13 1.2c-.27.08-.49.3-.57.57l-1.2 4.13a.9.9 0 0 1-1.72 0l-1.2-4.13a.96.96 0 0 0-.57-.57l-4.13-1.2a.9.9 0 0 1 0-1.72l4.13-1.2c.27-.08.49-.3.57-.57l1.2-4.13c.11-.38.46-.64.86-.64Z"
    />
  </svg>
);

const ScrollingBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#072b34] text-white">
      <div className="flex whitespace-nowrap">
        {/* Track duplicated twice for seamless loop */}
        <div className="logo-carousel-left flex items-center gap-8 py-3 pr-8 min-w-max">
          {words.map((w, i) => (
            <React.Fragment key={`track1-${i}`}>
              <span className="text-[18px] md:text-[20px] font-medium tracking-wide">
                {w}
              </span>
              <Star className="text-white/90" />
            </React.Fragment>
          ))}
        </div>
        <div
          className="logo-carousel-left flex items-center gap-8 py-3 pr-8 min-w-max"
          aria-hidden
        >
          {words.map((w, i) => (
            <React.Fragment key={`track2-${i}`}>
              <span className="text-[18px] md:text-[20px] font-medium tracking-wide">
                {w}
              </span>
              <Star className="text-white/90" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
