import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const VideoEditing: React.FC = () => {
  const [activeCard, setActiveCard] = React.useState(1); // 0, 1, 2
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Timeline scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById("timeline-section");
      if (!timelineSection) return;

      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate progress based on scroll position
      let progress = 0;

      // When section enters viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate how much of the section has been scrolled through
        const scrolledThrough = Math.max(0, windowHeight - rect.top);
        const totalScrollable = sectionHeight + windowHeight;

        // Start animation when section is 30% visible
        const startOffset = sectionHeight * 0.3;
        const adjustedScrolledThrough = Math.max(
          0,
          scrolledThrough - startOffset
        );
        const adjustedTotalScrollable = totalScrollable - startOffset;

        // Make dot reach end at 80% of section scroll instead of 100%
        const earlyCompletion = 0.8;
        progress = Math.min(
          adjustedScrolledThrough / adjustedTotalScrollable / earlyCompletion,
          1
        );
      }

      setTimelineProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardClick = (cardIndex: number) => {
    if (isTransitioning || cardIndex === activeCard) return;

    setIsTransitioning(true);
    setActiveCard(cardIndex);

    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const getCardTransform = (index: number) => {
    const cardWidth = 450; // Bigger base width
    const centerOffset = 0;
    const sideOffset = cardWidth * 0.7; // Distance between cards

    if (index === activeCard) {
      // Center card - active
      return {
        transform: `translate3d(${centerOffset}px, 0px, 0px) rotateZ(0deg) scale(1)`,
        zIndex: 5,
        opacity: 1,
        width: `${cardWidth}px`,
        height: "500px",
      };
    } else if (index < activeCard) {
      // Left side cards
      const distance = (activeCard - index) * sideOffset;
      const rotation = (activeCard - index) * -2;
      const scale = 1; // Same size for all cards
      const zIndex = 5 - (activeCard - index);

      return {
        transform: `translate3d(calc(-${distance}px - ${sideOffset}px), 0px, -${
          (activeCard - index) * 50
        }px) rotateZ(${rotation}deg) scale(${scale})`,
        zIndex: Math.max(1, zIndex),
        opacity: Math.max(0.4, 1 - (activeCard - index) * 0.2),
        width: `${cardWidth}px`,
        height: "500px",
      };
    } else {
      // Right side cards
      const distance = (index - activeCard) * sideOffset;
      const rotation = (index - activeCard) * 2;
      const scale = 1; // Same size for all cards
      const zIndex = 5 - (index - activeCard);

      return {
        transform: `translate3d(calc(${distance}px + ${sideOffset}px), 0px, -${
          (index - activeCard) * 50
        }px) rotateZ(${rotation}deg) scale(${scale})`,
        zIndex: Math.max(1, zIndex),
        opacity: Math.max(0.4, 1 - (index - activeCard) * 0.2),
        width: `${cardWidth}px`,
        height: "500px",
      };
    }
  };
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#0F2D40] overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Grid Dots */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }, (_, i) =>
              Array.from({ length: 30 }, (_, j) => (
                <div
                  key={`${i}-${j}`}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                  style={{
                    left: `${j * 40 + 20}px`,
                    top: `${i * 40 + 20}px`,
                  }}
                />
              ))
            )}
          </div>
        </div>

        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Section - Main Content */}
            <div className="text-white">
              <h1 className="mb-6 text-6xl font-bold leading-tight md:text-8xl">
                Unlimited video
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold italic leading-tight mb-8 text-[#F4B41A]">
                editing service
              </h2>
              <p className="max-w-lg text-xl leading-relaxed md:text-2xl text-white/90">
                Optimized for modern video editing—so you can focus on creating,
                not managing.
              </p>
            </div>

            {/* Right Section - Before/After Comparison */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1F2937] to-[#0F2D40] rounded-3xl p-8 shadow-2xl border border-white/10">
                {/* AFTER Section */}
                <div className="relative mb-8">
                  <div className="mb-4 text-center">
                    <span className="text-2xl font-bold text-white">AFTER</span>
                  </div>

                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face"
                      alt="After - Woman with glasses reading"
                      className="object-cover w-full h-80 rounded-2xl grayscale"
                    />

                    {/* Yellow Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-[#F4B41A]/20 pointer-events-none"></div>

                    {/* Text Overlay */}
                    <div className="absolute text-center transform -translate-x-1/2 bottom-8 left-1/2">
                      <div className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-sm">
                        <span className="text-lg font-bold text-white">
                          READING
                        </span>
                        <br />
                        <span className="text-[#F4B41A] font-bold text-lg">
                          BOOKS?
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BEFORE Section */}
                <div className="relative">
                  <div className="mb-4 text-center">
                    <span className="text-2xl font-bold text-white">
                      BEFORE
                    </span>
                  </div>

                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                      alt="Before - Woman smiling without glasses"
                      className="object-cover w-48 h-48 mx-auto rounded-2xl grayscale"
                    />
                  </div>
                </div>

                {/* Video Editing Interface Mockup */}
                <div className="mt-8 bg-[#0F2D40] rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-sm text-white/60">
                      Video Editor
                    </span>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/20">
                      <div className="h-full w-1/3 bg-[#F4B41A] rounded-full"></div>
                    </div>
                    <div className="h-2 rounded-full bg-white/20">
                      <div className="h-full w-2/3 bg-[#6B46C1] rounded-full"></div>
                    </div>
                    <div className="h-2 rounded-full bg-white/20">
                      <div className="h-full w-1/2 bg-[#F4B41A] rounded-full"></div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </button>
                    </div>
                    <span className="text-sm text-white/60">00:45 / 02:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 bg-gradient-to-b from-[#0F2D40] via-[#1F2937] to-[#2B1247]">
        <div className="container grid grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-3">
          {/* Left large thumbnail */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="/images/service showcase.jpg"
                alt="Video editing showcase"
                className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover object-center"
              />
              {/* Overlay with video editing elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute text-white bottom-6 left-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-sm">Video Editor</span>
                </div>
                <h3 className="text-2xl font-bold">
                  Professional Video Editing
                </h3>
                <p className="text-sm opacity-90">
                  Transform your content into viral videos
                </p>
              </div>
            </div>
          </div>

          {/* Right trust card + stats */}
          <div className="flex flex-col gap-8">
            {/* Trust card */}
            <div className="relative rounded-2xl bg-[#7C83FF] text-white p-10 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="text-4xl font-semibold">Trusted by many!</div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/48?img=${i}`}
                      className="w-16 h-16 border-2 rounded-full border-white/80"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Ratings row between cards */}
            <div>
              <p className="text-lg font-medium text-white">
                4.6 • Reviews 55+ • Excellent
              </p>
              <div className="flex items-center gap-1 mt-3">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <svg
                    key={`full-${idx}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="text-[#22c55e]"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="text-[#22c55e]/70"
                  fill="currentColor"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2v15.27z" />
                  <path
                    d="M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2z"
                    opacity=".2"
                  />
                </svg>
              </div>
            </div>

            {/* Stats bar */}
            <div className="rounded-2xl bg-[#E8E7FF] p-10 text-[#111827] shadow-xl">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-6xl font-extrabold">70 +</div>
                  <div className="mt-3 text-base text-[#6B7280]">
                    Monthly clients
                  </div>
                </div>
                <div>
                  <div className="text-6xl font-extrabold">12 k</div>
                  <div className="mt-3 text-base text-[#6B7280]">
                    Videos edited
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by hundreds section */}
      <section className="py-16 bg-gradient-to-b from-[#2B1247] via-[#1F2937] to-[#0F2D40]">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold text-white">
              Trusted by hundreds
            </h2>
          </div>

          {/* Logo Grid */}
          <div className="space-y-12">
            {/* First Row - 6 Logos */}
            <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6">
              {/* Logo 1 - Nike */}
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                    alt="Nike Logo"
                    className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/120x60/FFFFFF/000000?text=NIKE";
                    }}
                  />
                </div>
              </div>

              {/* Logo 2 - Apple */}
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple Logo"
                    className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/120x60/FFFFFF/000000?text=APPLE";
                    }}
                  />
                </div>
              </div>

              {/* Logo 3 - Google */}
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google Logo"
                    className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/120x60/FFFFFF/000000?text=GOOGLE";
                    }}
                  />
                </div>
              </div>

              {/* Logo 4 - Microsoft */}
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft Logo"
                    className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/120x60/FFFFFF/000000?text=MICROSOFT";
                    }}
                  />
                </div>
              </div>

              {/* Logo 5 - Amazon */}
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon Logo"
                    className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/120x60/FFFFFF/000000?text=AMAZON";
                    }}
                  />
                </div>
              </div>

              {/* Logo 6 - Tesla */}
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
                    alt="Tesla Logo"
                    className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/120x60/FFFFFF/000000?text=TESLA";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Second Row - 6 Logos */}
            <div className="flex justify-center">
              <div className="grid max-w-6xl grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6">
                {/* Logo 7 - Netflix */}
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                      alt="Netflix Logo"
                      className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/120x60/FFFFFF/000000?text=NETFLIX";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 8 - Spotify */}
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                      alt="Spotify Logo"
                      className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/120x60/FFFFFF/000000?text=SPOTIFY";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 9 - Adobe */}
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg"
                      alt="Adobe Logo"
                      className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/120x60/FFFFFF/000000?text=ADOBE";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 10 - Facebook */}
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                      alt="Facebook Logo"
                      className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/120x60/FFFFFF/000000?text=FACEBOOK";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 11 - Uber */}
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.png"
                      alt="Uber Logo"
                      className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/120x60/FFFFFF/000000?text=UBER";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 12 - Airbnb */}
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                      alt="Airbnb Logo"
                      className="object-contain w-auto h-16 transition-opacity duration-300 filter brightness-0 invert opacity-70 hover:opacity-100"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/120x60/FFFFFF/000000?text=AIRBNB";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You Create We Edit Section */}
      <section className="py-32 bg-gradient-to-b from-[#0F2D40] via-[#1F2937] to-[#2B1247]">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h2 className="mb-8 text-6xl font-bold leading-tight text-white md:text-8xl">
              You create.
            </h2>
            <h3 className="mb-12 text-6xl font-bold leading-tight text-white md:text-8xl">
              we edit.
            </h3>
            <p className="max-w-4xl mx-auto text-xl font-normal leading-relaxed text-white md:text-2xl">
              Seamless and smooth—taking one more task off your hands.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Decisions Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#2B1247] via-[#1F2937] to-[#0F2D40] overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                 linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
               `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
                Creative decisions
              </h2>
              <p className="text-xl leading-relaxed md:text-2xl text-white/90">
                Get editors who create engaging and trendy videos in any style
              </p>
            </div>

            {/* Right Side - 3D Sliding Carousel */}
            <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
              {/* Carousel Container */}
              <div
                className="relative flex items-center justify-center w-full h-full"
                style={{ perspective: "1000px" }}
              >
                {/* Card 1 - Professional Editing */}
                <div
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    ...getCardTransform(0),
                    transitionDuration: isTransitioning ? "700ms" : "0ms",
                  }}
                  onClick={() => handleCardClick(0)}
                >
                  <div className="bg-gradient-to-br from-[#1F2937] to-[#0F2D40] rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
                    <div className="mb-4 text-center">
                      <span className="text-sm text-white">Professional</span>
                      <h3 className="text-2xl font-bold text-[#F4B41A] leading-tight">
                        Editing
                      </h3>
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop&crop=face"
                        alt="Professional editor"
                        className="object-cover w-full h-80 rounded-2xl"
                      />
                      <div className="absolute top-2 left-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-lg shadow-lg">
                          <span className="text-xs font-bold text-white">
                            Pr
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Make Edit 15X Faster */}
                <div
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    ...getCardTransform(1),
                    transitionDuration: isTransitioning ? "700ms" : "0ms",
                  }}
                  onClick={() => handleCardClick(1)}
                >
                  <div className="bg-gradient-to-br from-[#1F2937] to-[#0F2D40] rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
                    <div className="mb-6 text-center">
                      <span className="text-lg text-white">Make Edit</span>
                      <div className="relative">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#F4B41A] leading-tight">
                          15X Faster
                        </h3>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-[#F4B41A]/20 rounded-full blur-xl"></div>
                        </div>
                      </div>
                    </div>
                    <div className="relative mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                        alt="Content creator with microphone"
                        className="object-cover w-full h-80 rounded-2xl"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg shadow-lg">
                          <span className="text-sm font-bold text-white">
                            Pr
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg shadow-lg">
                          <span className="text-sm font-bold text-white">
                            Ae
                          </span>
                        </div>
                      </div>
                      <div className="absolute transform -translate-x-1/2 bottom-20 left-1/2">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg shadow-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
                          <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-blue-500"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute flex gap-1 bottom-2 left-2 right-2">
                          <div className="w-8 h-2 bg-green-500 rounded"></div>
                          <div className="w-12 h-2 bg-blue-500 rounded"></div>
                          <div className="w-6 h-2 bg-yellow-500 rounded"></div>
                          <div className="w-10 h-2 bg-red-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Creative Solutions */}
                <div
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    ...getCardTransform(2),
                    transitionDuration: isTransitioning ? "700ms" : "0ms",
                  }}
                  onClick={() => handleCardClick(2)}
                >
                  <div className="bg-gradient-to-br from-[#1F2937] to-[#0F2D40] rounded-3xl p-8 shadow-2xl border border-white/10 h-full">
                    <div className="mb-4 text-center">
                      <span className="text-sm text-white">Creative</span>
                      <h3 className="text-2xl font-bold text-[#F4B41A] leading-tight">
                        Solutions
                      </h3>
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face"
                        alt="Creative solutions"
                        className="object-cover w-full h-80 rounded-2xl"
                      />
                      <div className="absolute top-2 right-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg shadow-lg">
                          <span className="text-xs font-bold text-white">
                            Ae
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
                <button
                  className={`w-3 h-3 rounded-full transition-opacity ${
                    activeCard === 0
                      ? "bg-[#F4B41A]"
                      : "bg-white opacity-50 hover:opacity-100"
                  }`}
                  onClick={() => handleCardClick(0)}
                ></button>
                <button
                  className={`w-3 h-3 rounded-full transition-opacity ${
                    activeCard === 1
                      ? "bg-[#F4B41A]"
                      : "bg-white opacity-50 hover:opacity-100"
                  }`}
                  onClick={() => handleCardClick(1)}
                ></button>
                <button
                  className={`w-3 h-3 rounded-full transition-opacity ${
                    activeCard === 2
                      ? "bg-[#F4B41A]"
                      : "bg-white opacity-50 hover:opacity-100"
                  }`}
                  onClick={() => handleCardClick(2)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-b from-[#0F2D40] via-[#1F2937] to-[#2B1247]">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column - Video Files List */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#1F2937] to-[#0F2D40] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      {/* Video Thumbnail */}
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                          alt="Video thumbnail"
                          className="object-cover w-12 h-12 rounded-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="flex-1">
                        <p className="font-medium text-white">Video.mp4</p>
                      </div>

                      {/* Download Icon */}
                      <button className="p-2 transition-colors rounded-lg hover:bg-white/10">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Section - YouTube Promotion */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-[#1F2937] to-[#0F2D40] rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-lg font-medium text-white">
                    JOIN US ON
                  </h3>
                  <h2
                    className="mb-4 text-6xl font-bold text-white md:text-7xl"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    YouTube
                  </h2>
                  <p className="text-lg text-white/80">
                    https://youtube.com/@jrgraphics24
                  </p>
                </div>

                {/* 3D Character */}
                <div className="relative w-full max-w-md mx-auto">
                  <div className="relative">
                    {/* Character Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

                    {/* Character Image */}
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                      alt="JR Graphics Character"
                      className="relative object-cover w-full h-80 rounded-2xl"
                    />

                    {/* Overlay Elements */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="p-3 rounded-lg bg-black/60 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="ml-2 text-sm text-white">
                            JR Graphics Studio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Marketing Text */}
            <div className="lg:col-span-3">
              <div className="text-center lg:text-left">
                <h3 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  Accelerated timelines
                </h3>
                <p className="text-xl leading-relaxed text-white/90">
                  Get your videos delivered on time.
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] hover:from-[#7C3AED] hover:to-[#A855F7] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-purple-400/30">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                Download 4 files
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Optimized Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-[#2B1247] via-[#1F2937] to-[#3D1A6B]">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Section - Text Content */}
            <div className="text-white">
              <h2 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
                Optimized workflow
              </h2>
              <p className="text-xl leading-relaxed md:text-2xl text-white/90">
                Minimize time spent editing for each platform—stay focused on
                growing your business.
              </p>
            </div>

            {/* Right Section - Visual Graphic */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-3xl p-8 overflow-hidden">
                {/* Woman Character */}
                <div className="relative z-10 flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face"
                    alt="Woman stepping through digital gateway"
                    className="object-cover w-64 shadow-2xl h-96 rounded-2xl"
                  />
                </div>

                {/* Digital Gateway Elements */}
                <div className="absolute inset-0 flex items-center justify-between">
                  {/* Left Keyboard/Buttons */}
                  <div className="absolute transform -translate-y-1/2 left-8 top-1/2">
                    <div className="space-y-2">
                      {Array.from({ length: 6 }, (_, i) => (
                        <div
                          key={i}
                          className="w-16 h-4 border rounded bg-white/20 border-white/40 backdrop-blur-sm"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Right Doorway */}
                  <div className="absolute transform -translate-y-1/2 right-8 top-1/2">
                    <div className="relative">
                      {/* Doorway Frame */}
                      <div className="w-32 h-64 border-2 rounded-lg border-white/60 backdrop-blur-sm bg-white/10"></div>

                      {/* Door to Digital World Text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <div className="text-sm font-bold leading-tight text-white">
                          <div>Door to</div>
                          <div>Digital</div>
                          <div>World</div>
                        </div>
                      </div>

                      {/* Abstract Digital Elements */}
                      <div className="absolute transform -translate-x-1/2 -top-8 left-1/2">
                        <div className="flex space-x-2">
                          {Array.from({ length: 3 }, (_, i) => (
                            <div
                              key={i}
                              className="w-2 h-8 rounded-full bg-white/40"
                              style={{
                                animationDelay: `${i * 0.2}s`,
                                animation: "pulse 2s infinite",
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plant in Bottom Left */}
                <div className="absolute bottom-4 left-4">
                  <div className="relative">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                    <div className="absolute transform -translate-x-1/2 -top-2 left-1/2">
                      <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-16">
            <div className="flex space-x-6">
              {/* Instagram */}
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 hover:scale-110">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>

              {/* YouTube */}
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-red-600 rounded-full hover:scale-110">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-blue-600 rounded-full hover:scale-110">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-green-500 rounded-full hover:scale-110">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>

              {/* Twitter */}
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-blue-400 rounded-full hover:scale-110">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>

              {/* Snapchat */}
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-yellow-400 rounded-full hover:scale-110">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </div>

              {/* Facebook */}
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-blue-800 rounded-full hover:scale-110">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section
        id="timeline-section"
        className="py-20 bg-gradient-to-b from-[#3D1A6B] via-[#2B1247] to-[#1F2937]"
      >
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              How it works
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line - Extended to White Box */}
            <div
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6] rounded-full hidden lg:block transform -translate-x-1/2"
              style={{ height: "calc(100% + 80px)" }}
            ></div>

            {/* Animated Progress Line */}
            <div
              className="absolute left-1/2 top-0 w-1 transition-all duration-75 ease-out bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6] rounded-full hidden lg:block transform -translate-x-1/2"
              style={{ height: `${timelineProgress * 100}%` }}
            ></div>

            {/* Leading Pulsing Circle */}
            <div
              className="absolute hidden w-6 h-6 transition-all duration-75 ease-out -translate-x-1/2 -translate-y-1/2 left-1/2 lg:block"
              style={{ top: `${timelineProgress * 100}%` }}
            >
              <div className="relative w-full h-full">
                {/* Outer pulsing ring */}
                <div
                  className="absolute inset-0 bg-[#3B82F6] rounded-full opacity-75 animate-ping"
                  style={{ animationDuration: "1.5s" }}
                ></div>
                {/* Inner solid circle */}
                <div className="absolute bg-[#3B82F6] rounded-full inset-1"></div>
                {/* Center dot */}
                <div className="absolute w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2"></div>
              </div>
            </div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <div className="text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-lg flex items-center justify-center relative z-10">
                      <span className="text-lg font-bold text-white">01</span>
                    </div>
                    <h3 className="text-3xl font-bold md:text-4xl">
                      Share Your Vision
                    </h3>
                  </div>
                  <p className="text-xl leading-relaxed text-white/90">
                    Share your footage, brand assets, and vision. We'll handle
                    the editing from there.
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="p-6 overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=face"
                      alt="Person sharing vision"
                      className="object-cover w-full h-80 rounded-xl"
                    />
                    {/* Mirror Effect Overlay */}
                    <div className="absolute inset-6 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Left Image */}
                <div className="relative lg:order-1">
                  <div className="p-6 overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop"
                      alt="Video editing team"
                      className="object-cover w-full h-80 rounded-xl"
                    />
                    {/* Video Editing Interface Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="p-4 rounded-lg bg-black/60 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="ml-2 text-sm text-white">
                            Video Editor
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-1 rounded-full bg-white/20">
                            <div className="w-2/3 h-full bg-blue-400 rounded-full"></div>
                          </div>
                          <div className="h-1 rounded-full bg-white/20">
                            <div className="w-1/2 h-full bg-purple-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="text-white lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-lg flex items-center justify-center relative z-10">
                      <span className="text-lg font-bold text-white">02</span>
                    </div>
                    <h3 className="text-3xl font-bold md:text-4xl">
                      We Edit & Customize
                    </h3>
                  </div>
                  <p className="text-xl leading-relaxed text-white/90">
                    Crafted by experts, made for your audience. From cuts to
                    captions, every detail fits your brand and platform.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <div className="text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-lg flex items-center justify-center relative z-10">
                      <span className="text-lg font-bold text-white">03</span>
                    </div>
                    <h3 className="text-3xl font-bold md:text-4xl">
                      Review & Revise
                    </h3>
                  </div>
                  <p className="text-xl leading-relaxed text-white/90">
                    We keep it collaborative and quick. You give feedback, we
                    revise—simple as that.
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="p-6 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop"
                      alt="Review process"
                      className="object-cover w-full h-80 rounded-xl"
                    />
                    {/* Mobile Interface Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className="p-3 rounded-lg shadow-lg bg-white/90 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-medium text-gray-800">
                            Review
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                          <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    {/* Floating Icons */}
                    <div className="absolute top-12 left-6">
                      <div className="flex space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 bg-green-400 rounded-full">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Left Image */}
                <div className="relative lg:order-1">
                  <div className="p-6 overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=400&fit=crop"
                      alt="Final delivery"
                      className="object-cover w-full h-80 rounded-xl"
                    />
                    {/* Success Elements Overlay */}
                    <div className="absolute inset-6 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                    <div className="absolute top-6 left-6">
                      <div className="flex space-x-2">
                        <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full">
                          <span className="text-xs font-bold text-white">
                            ↑
                          </span>
                        </div>
                        <div className="flex items-center justify-center w-6 h-6 bg-green-400 rounded-full">
                          <span className="text-xs font-bold text-white">
                            ↑
                          </span>
                        </div>
                        <div className="flex items-center justify-center w-6 h-6 bg-blue-400 rounded-full">
                          <span className="text-xs font-bold text-white">
                            ↑
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Flag Element */}
                    <div className="absolute top-8 right-8">
                      <div className="flex items-center justify-center w-8 h-6 bg-red-500 rounded-sm">
                        <span className="text-xs font-bold text-white">🏁</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="text-white lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-lg flex items-center justify-center relative z-10">
                      <span className="text-lg font-bold text-white">04</span>
                    </div>
                    <h3 className="text-3xl font-bold md:text-4xl">
                      Final Delivery
                    </h3>
                  </div>
                  <p className="text-xl leading-relaxed text-white/90">
                    Your video, fully packaged and ready to go. Delivered in
                    multiple formats with all the extras—no loose ends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edits Pay Off Section */}
      <section className="py-20 bg-gradient-to-b from-[#1F2937] via-[#0F2D40] via-[#2D3748] to-white">
        <div className="container px-4 mx-auto">
          {/* White Box Container */}
          <div className="p-12 bg-white shadow-2xl rounded-3xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
                Edits pay off
              </h2>
              <p className="text-xl text-gray-600">
                Real people. Real business. Real results.
              </p>
            </div>

            {/* Success Cards Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="p-6 transition-all duration-300 border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:border-gray-300">
                <div className="text-center">
                  {/* Profile Picture */}
                  <div className="mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                      alt="Anita Dange"
                      className="object-cover w-20 h-20 mx-auto rounded-full"
                    />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-800">
                      3 M Views
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    Went from 200 to 3M reel views and managed to increase his
                    posting to 4-5 videos daily.
                  </p>

                  {/* Call to Action */}
                  <div className="flex items-center justify-center gap-2 text-gray-700 transition-colors cursor-pointer hover:text-gray-900">
                    <span className="text-sm">Anita dange story</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Content creator</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 transition-all duration-300 border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:border-gray-300">
                <div className="text-center">
                  {/* Profile Picture */}
                  <div className="mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                      alt="Sarah Johnson"
                      className="object-cover w-20 h-20 mx-auto rounded-full"
                    />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-800">
                      ₹ 30 K Donation
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    Went from 200 to 3M reel views and managed to increase his
                    posting to 4-5 videos daily.
                  </p>

                  {/* Call to Action */}
                  <div className="flex items-center justify-center gap-2 text-gray-700 transition-colors cursor-pointer hover:text-gray-900">
                    <span className="text-sm">Sarah Johnson story</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Content creator</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 transition-all duration-300 border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:border-gray-300">
                <div className="text-center">
                  {/* Profile Picture */}
                  <div className="mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                      alt="Emma Wilson"
                      className="object-cover w-20 h-20 mx-auto rounded-full"
                    />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-800">
                      3 M Views
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    Went from 200 to 3M reel views and managed to increase his
                    posting to 4-5 videos daily.
                  </p>

                  {/* Call to Action */}
                  <div className="flex items-center justify-center gap-2 text-gray-700 transition-colors cursor-pointer hover:text-gray-900">
                    <span className="text-sm">Emma Wilson story</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Content creator</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 transition-all duration-300 border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:border-gray-300">
                <div className="text-center">
                  {/* Profile Picture */}
                  <div className="mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                      alt="Michael Chen"
                      className="object-cover w-20 h-20 mx-auto rounded-full"
                    />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-800">
                      3 M Views
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    Went from 200 to 3M reel views and managed to increase his
                    posting to 4-5 videos daily.
                  </p>

                  {/* Call to Action */}
                  <div className="flex items-center justify-center gap-2 text-gray-700 transition-colors cursor-pointer hover:text-gray-900">
                    <span className="text-sm">Michael Chen story</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Content creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-16 text-center">
              <h2 className="text-[#0F2D40] text-5xl font-medium mb-4">
                Frequently Asked{" "}
                <span className="italic font-playfair">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our video editing
                services and processes.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-0">
              {[
                "What video editing services do you offer?",
                "How long does a typical video editing project take?",
                "What is your video editing process like?",
                "Do you offer revisions and support after delivery?",
                "How do you handle video editing project pricing?",
              ].map((question, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex items-center justify-between w-full py-8 text-left"
                    onClick={() =>
                      setOpenFAQIndex(openFAQIndex === index ? null : index)
                    }
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#0F2D40] flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-[#0F2D40] text-xl">{question}</span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#0F2D40] transition-transform ${
                        openFAQIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQIndex === index ? "max-h-96 pb-8" : "max-h-0"
                    }`}
                  >
                    <div className="pl-10 text-gray-600">
                      We offer comprehensive video editing services including
                      raw footage editing, color correction, audio enhancement,
                      motion graphics, and multi-platform optimization. Our team
                      specializes in creating engaging content for social media,
                      corporate videos, and marketing campaigns.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Got Questions Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Pictures */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex -space-x-4">
                {/* Profile 1 */}
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
                      alt="Creative team member"
                      className="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                </div>

                {/* Profile 2 */}
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 bg-pink-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
                      alt="Creative team member"
                      className="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                </div>

                {/* Profile 3 */}
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                      alt="Creative team member"
                      className="object-cover rounded-full w-14 h-14"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="mb-6 text-5xl font-bold text-gray-800 md:text-6xl">
              Got questions?
            </h2>

            {/* Descriptive Text */}
            <div className="mb-8 space-y-2">
              <p className="text-xl text-gray-600">
                Book a Chat with one of our awesome creatives.
              </p>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                No sales pitch, just the answers you need, so we can match you
                with the ideal subscription plan and perfect video editor.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <button className="flex items-center gap-3 px-6 py-4 text-white transition-colors duration-300 bg-blue-500 hover:bg-blue-600 rounded-xl">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </button>
              <span className="text-xl font-semibold text-gray-800">
                BOOK A FREE CALL NOW
              </span>
            </div>

            {/* Customer Rating */}
            <div className="flex items-center justify-center gap-3">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Rating Text */}
              <span className="font-medium text-gray-600">
                4.6 • Reviews 55+ • Excellent
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoEditing;
