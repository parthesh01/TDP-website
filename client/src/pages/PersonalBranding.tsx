import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollingBanner from "@/components/ScrollingBanner";
import { ChevronDown } from "lucide-react";

const Services: React.FC = () => {
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

        // Start animation when section is 60% visible
        const startOffset = sectionHeight * 0.6;
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2B1247] via-[#3D1A6B] to-[#1C0F33] min-h-[80vh] md:min-h-[90vh] lg:min-h-[100vh] flex items-center">
        <div className="container h-full px-4 pb-0 mx-auto -mt-20 sm:-mt-24 lg:-mt-28">
          <div className="grid items-center h-full grid-cols-1 gap-0 sm:gap-2 lg:gap-8 lg:grid-cols-2">
            {/* Text */}
            <div className="order-1 text-center text-white -mb-52 lg:text-left lg:order-1 sm:-mb-2 lg:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight px-2 sm:px-0">
                build a personal brand
                <br /> that gets noticed, gets
                <br />{" "}
                <span className="italic font-normal font-playfair">
                  paid and gets results.
                </span>
              </h1>
              <p className="max-w-full px-2 mx-auto mt-4 text-sm leading-relaxed sm:max-w-xl lg:mx-0 sm:mt-6 sm:text-base md:text-lg opacity-90 sm:px-0">
                Personal Branding & Social Media for Founders, CEOs and
                Entrepreneurs
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[115vh] flex items-end justify-center lg:justify-end overflow-hidden order-2 lg:order-2 lg:-mr-32 xl:-mr-56">
              <img
                src="/images/personal-branding-cutout (2).png"
                alt="Personal Branding Hero"
                className="object-contain object-bottom w-full h-full lg:w-auto lg:max-w-none"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&w=900&h=700&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling banner under hero */}
      <ScrollingBanner />

      {/* Social proof section styled like the reference */}
      <section className="py-8 bg-gradient-to-b from-[#2B1247] via-[#3D1A6B] to-[#1C0F33]">
        <div className="container grid grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-3">
          {/* Left large thumbnail */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="/images/service showcase.jpg"
                alt="Service showcase"
                className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover object-top"
              />
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
              <p className="text-lg font-medium text-[#111827]">
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

      {/* Second scrolling banner positioned at the end of background */}
      <div className="bg-gradient-to-b from-[#1C0F33] to-transparent">
        <ScrollingBanner />
      </div>

      {/* Two Column Section - We Don't Just Advise. We Execute. */}
      <section className="relative py-20 bg-gray-100">
        {/* Purple Donut Icon */}
        <div className="absolute z-10 w-32 h-32 -translate-x-8 -translate-y-8 top-8 left-8">
          <div className="flex items-center justify-center w-full h-full bg-purple-600 rounded-full shadow-2xl">
            <div className="w-20 h-20 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Top-Left Card - Text Content (Wider) */}
            <div className="relative p-12 overflow-hidden text-white rounded-2xl bg-gradient-to-b from-blue-400 to-purple-600 lg:col-span-2">
              <div className="relative z-10">
                <h2 className="mb-6 text-5xl font-bold">
                  We Don't Just Advise.
                  <br />
                  <span className="italic font-normal">We Execute.</span>
                </h2>

                <div className="space-y-6 text-xl leading-relaxed">
                  <p>
                    While many personal branding consultants offer guidance and
                    leave the rest to you, our agency provides full-service
                    support. From strategy to implementation, we manage every
                    part of the process so you can focus on leading your
                    business.
                  </p>
                  <p>
                    Another key difference is access. you work directly with
                    senior strategists who understand your goals and oversee
                    your brand from the start. Once your strategy is defined.
                  </p>
                </div>
              </div>
            </div>

            {/* Top-Right Card - Before/After Comparison (Narrower) */}
            <div className="relative p-6 overflow-hidden bg-gray-900 rounded-2xl lg:col-span-1">
              <div className="flex justify-between mb-4">
                <span className="text-sm font-medium text-white">BEFORE</span>
                <span className="text-sm font-medium text-white">AFTER</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 mb-2 bg-gray-700 rounded-lg">
                    <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center w-20 h-20 mb-2 bg-gray-700 rounded-lg">
                    <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-yellow-400 rounded-lg bg-opacity-20"></div>
                    <span className="absolute text-xs font-bold text-yellow-400 bottom-1 left-1">
                      READING BOOKS?
                    </span>
                  </div>
                </div>
              </div>

              {/* Video Timeline */}
              <div className="space-y-2">
                <div className="h-2 bg-gray-600 rounded"></div>
                <div className="w-3/4 h-2 bg-green-500 rounded"></div>
                <div className="w-1/2 h-2 bg-purple-500 rounded"></div>
                <div className="w-5/6 h-2 bg-gray-500 rounded"></div>
              </div>
            </div>

            {/* Bottom-Left Card - Before/After Comparison (Duplicate) */}
            <div className="relative p-6 overflow-hidden bg-gray-900 rounded-2xl lg:col-span-1">
              <div className="flex justify-between mb-4">
                <span className="text-sm font-medium text-white">BEFORE</span>
                <span className="text-sm font-medium text-white">AFTER</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 mb-2 bg-gray-700 rounded-lg">
                    <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center w-20 h-20 mb-2 bg-gray-700 rounded-lg">
                    <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-yellow-400 rounded-lg bg-opacity-20"></div>
                    <span className="absolute text-xs font-bold text-yellow-400 bottom-1 left-1">
                      READING BOOKS?
                    </span>
                  </div>
                </div>
              </div>

              {/* Video Timeline */}
              <div className="space-y-2">
                <div className="h-2 bg-gray-600 rounded"></div>
                <div className="w-3/4 h-2 bg-green-500 rounded"></div>
                <div className="w-1/2 h-2 bg-purple-500 rounded"></div>
                <div className="w-5/6 h-2 bg-gray-500 rounded"></div>
              </div>
            </div>

            {/* Bottom-Right Card - Text Content (Wider) */}
            <div className="relative p-12 overflow-hidden text-white rounded-2xl bg-gradient-to-b from-blue-400 to-purple-600 lg:col-span-2">
              <div className="relative z-10">
                <h2 className="mb-6 text-5xl font-bold">
                  Our Clients Are
                  <br />
                  <span className="italic font-normal">
                    Remembered, Not Just
                  </span>
                  <br />
                  Noticed.
                </h2>

                <div className="space-y-6 text-xl leading-relaxed">
                  <p>
                    we focus on building personal brands that clearly
                    communicate who you are, what you stand for, and why your
                    perspective matters. Led by personal brand strategist Claire
                    Bahn, our team helps differentiate you from others in your
                    space by developing a presence that is both credible and
                    uniquely yours.
                  </p>
                  <p>
                    A personal brand is not just a logo or a polished website.
                    It is the perception others form based on every interaction
                    with your content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section - We centre everything we do around people */}
      <section className="relative py-4 bg-white">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
            {/* Background Pattern - More Spheres */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute w-16 h-16 rounded-full top-8 left-8 bg-white/20"></div>
              <div className="absolute w-12 h-12 rounded-full top-24 right-16 bg-white/20"></div>
              <div className="absolute w-20 h-20 rounded-full bottom-16 left-24 bg-white/20"></div>
              <div className="absolute w-8 h-8 rounded-full bottom-32 right-8 bg-white/20"></div>
              <div className="absolute rounded-full w-14 h-14 top-48 left-1/2 bg-white/20"></div>
              <div className="absolute w-10 h-10 rounded-full bottom-48 right-1/3 bg-white/20"></div>
              <div className="absolute rounded-full w-18 h-18 top-32 right-1/2 bg-white/20"></div>
              <div className="absolute w-12 h-12 rounded-full bottom-8 left-1/3 bg-white/20"></div>
              <div className="absolute w-6 h-6 rounded-full top-16 left-1/4 bg-white/20"></div>
              <div className="absolute rounded-full w-22 h-22 bottom-24 right-1/4 bg-white/20"></div>
              <div className="absolute w-8 h-8 rounded-full top-40 left-3/4 bg-white/20"></div>
              <div className="absolute w-16 h-16 rounded-full bottom-40 left-1/2 bg-white/20"></div>
            </div>

            <div className="relative grid grid-cols-1 gap-6 p-6 lg:grid-cols-5 lg:p-8">
              {/* Left Side - Image */}
              <div className="relative order-2 lg:order-1 lg:col-span-1">
                <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Professional man in studio"
                    className="w-full h-[250px] md:h-[300px] lg:h-[250px] object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&h=600&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Text Content and CTA */}
              <div className="flex flex-col justify-center order-1 ml-24 text-white lg:order-2 lg:col-span-4">
                <h2 className="mb-6 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                  We centre everything we do around people
                </h2>

                <p className="mb-8 text-sm leading-relaxed md:text-base lg:text-lg opacity-90">
                  People purchase goods from other people. For this reason,
                  compared to company brands,
                  <br />
                  personal brands receive eight times more online engagement and
                  561% more reach.
                </p>

                {/* Call to Action */}
                <div className="flex items-center justify-end gap-4">
                  <button className="px-8 py-3 text-sm font-medium text-black transition-all duration-200 bg-white rounded-full hover:bg-gray-50">
                    Get started
                  </button>

                  <div className="flex items-center justify-center w-12 h-12 transition-all duration-200 bg-white rounded-full cursor-pointer hover:bg-gray-50">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#1a1a2e]"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Here's How We Build Your Visibility Section */}
      <section className="relative py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Side - Title */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl">
                Here's How
                <br />
                We Build Your
                <br />
                <span className="italic font-normal">Visibility</span>
              </h2>
            </div>

            {/* Right Side - Steps Container */}
            <div className="relative -mr-16 lg:-mr-32 xl:-mr-64">
              <div className="relative overflow-hidden rounded-l-[3rem] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
                {/* Steps Container */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Step 01 */}
                  <div className="text-center">
                    {/* Target Icon */}
                    <div className="flex justify-center mb-4">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                        <line
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="6"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="12"
                          y1="18"
                          x2="12"
                          y2="22"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="2"
                          y1="12"
                          x2="6"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="18"
                          y1="12"
                          x2="22"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    <div className="mb-4 text-white">Step 01/</div>
                    <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                      Uncover Your Potential
                    </h3>

                    <div className="space-y-4 text-sm leading-relaxed text-white md:text-base">
                      <p>
                        We begin with Discovery and Research, where we delve
                        into the essence of your expertise. Through in-depth
                        SWOT analysis, we uncover your unique value
                        proposition—what sets you apart and makes you
                        indispensable.
                      </p>
                      <p>
                        By understanding your audience's desires and
                        preferences, we pave the way for targeted strategies
                        that resonate deeply.
                      </p>
                    </div>
                  </div>

                  {/* Step 02 */}
                  <div className="text-center">
                    {/* Target Icon */}
                    <div className="flex justify-center mb-4">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                        <line
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="6"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="12"
                          y1="18"
                          x2="12"
                          y2="22"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="2"
                          y1="12"
                          x2="6"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="18"
                          y1="12"
                          x2="22"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    <div className="mb-4 text-white">Step 02/</div>
                    <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                      Craft Your Identity
                    </h3>

                    <div className="space-y-4 text-sm leading-relaxed text-white md:text-base">
                      <p>
                        Next, in Brand Identity Creation, we craft a compelling
                        persona that reflects your authentic self. From a
                        distinct visual identity comprising logos and colour
                        palettes to a content strategy that captivates, every
                        element is meticulously designed to amplify your voice
                        and attract attention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-16 bg-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            Why Us?
          </h2>
          <h3 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            We craft <span className="italic lowercase">"your"</span> tale
          </h3>
        </div>

        {/* Timeline Section */}
        <div
          id="timeline-section"
          className="container min-h-screen px-4 py-16 mx-auto mt-24"
        >
          <div className="relative">
            {/* Vertical Line Background (Black) - Extended - Hidden on mobile */}
            <div
              className="absolute top-0 hidden w-1 -translate-x-1/2 bg-gray-800 lg:block left-1/2"
              style={{ height: "calc(100% + 200px)" }}
            ></div>

            {/* Animated Blue Line - Hidden on mobile */}
            <div
              className="absolute top-0 hidden w-1 transition-all duration-75 ease-out -translate-x-1/2 bg-blue-500 lg:block left-1/2"
              style={{ height: `${timelineProgress * 120}%` }}
            ></div>

            {/* Leading Pulsing Circle - Hidden on mobile */}
            <div
              className="absolute hidden w-6 h-6 transition-all duration-75 ease-out -translate-x-1/2 -translate-y-1/2 lg:block left-1/2"
              style={{ top: `${timelineProgress * 120}%` }}
            >
              <div className="relative w-full h-full">
                {/* Outer pulsing ring */}
                <div
                  className="absolute inset-0 bg-blue-500 rounded-full opacity-75 animate-ping"
                  style={{ animationDuration: "1.5s" }}
                ></div>
                {/* Inner solid circle */}
                <div className="absolute bg-blue-500 rounded-full inset-1"></div>
                {/* Center dot */}
                <div className="absolute w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2"></div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-24">
                {/* Custom Offerings */}
                <div className="relative">
                  <div className="pr-8 text-center">
                    <h4 className="mb-4 text-2xl font-bold text-black">
                      Custom Offerings
                    </h4>
                    <p className="text-base leading-relaxed text-black">
                      We meticulously build your authority and influence,
                      tailoring strategies that align with your unique goals and
                      aspirations.
                    </p>
                  </div>
                </div>

                {/* Add Consistency */}
                <div className="relative">
                  <div className="pr-8 text-center">
                    <h4 className="mb-4 text-2xl font-bold text-black">
                      Add Consistency
                    </h4>
                    <p className="text-base leading-relaxed text-black">
                      By meticulously planning and executing, we ensure a
                      coherent and impactful communication strategy that
                      resonates consistently.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-24 lg:mt-0">
                {/* Full Service */}
                <div className="relative">
                  <div className="pl-8 text-center">
                    <h4 className="mb-4 text-2xl font-bold text-black">
                      Full Service
                    </h4>
                    <p className="text-base leading-relaxed text-black">
                      From strategy development to implementation, we offer
                      comprehensive solutions that leave no stone unturned.
                    </p>
                  </div>
                </div>

                {/* Tell Your Story */}
                <div className="relative">
                  <div className="pl-8 text-center">
                    <h4 className="mb-4 text-2xl font-bold text-black">
                      Tell Your Story
                    </h4>
                    <p className="text-base leading-relaxed text-black">
                      We unearth your essence within the industry landscape,
                      transforming your strengths into a compelling narrative
                      that captivates your audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 gap-20 mt-24 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-24">
                {/* Results-Driven */}
                <div className="relative">
                  <div className="pr-8 text-center">
                    <h4 className="mb-4 text-2xl font-bold text-black">
                      Results-Driven
                    </h4>
                    <p className="text-base leading-relaxed text-black">
                      We meticulously build your authority and influence,
                      tailoring strategies that align with your unique goals and
                      aspirations.
                    </p>
                  </div>
                </div>

                {/* Drive Conversations */}
                <div className="relative">
                  <div className="pr-8 text-center">
                    <h4 className="mb-4 text-2xl font-bold text-black">
                      Drive Conversations
                    </h4>
                    <p className="text-base leading-relaxed text-black">
                      Engage your audience with meaningful discussions and
                      thought-provoking content that sparks dialogue and fosters
                      connections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-24 lg:mt-0">
                {/* Make It Genuine */}
                <div className="relative">
                  <div className="pl-8 text-center">
                    <h4 className="mb-4 text-2xl font-bold text-black">
                      Make It Genuine
                    </h4>
                    <p className="text-base leading-relaxed text-black">
                      Authenticity forms the core of your digital footprint—we
                      highlight your beliefs, expertise, and unique perspective
                      to build an authentic personal brand.
                    </p>
                  </div>
                </div>

                {/* Measure Results */}
                <div className="relative">
                  <div className="pl-8 text-center">
                    <h4 className="mb-4 text-2xl font-bold text-black">
                      Measure Results
                    </h4>
                    <p className="text-base leading-relaxed text-black">
                      Whether you aim to lead conversations or drive business
                      growth, we implement and monitor strategies that deliver
                      measurable success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Numbered Markers - Hidden on mobile */}
            <div className="absolute flex items-center justify-center hidden w-8 h-8 -translate-x-1/2 bg-gray-800 rounded-sm lg:flex left-1/2 top-32">
              <span className="text-sm font-bold text-white">01</span>
            </div>
            <div className="absolute flex items-center justify-center hidden w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-sm lg:flex left-1/2 top-1/2">
              <span className="text-sm font-bold text-white">02</span>
            </div>
            <div className="absolute flex items-center justify-center hidden w-8 h-8 -translate-x-1/2 bg-gray-800 rounded-sm lg:flex left-1/2 bottom-32">
              <span className="text-sm font-bold text-white">03</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section - Extended to join timeline */}
      <section className="relative bg-blue-900 rounded-b-[2rem] -mt-16">
        <div className="container px-4 py-16 mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Title */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Who <span className="italic text-yellow-400">we work</span> with
              </h2>
            </div>

            {/* Right Side - Target Audiences */}
            <div className="space-y-8">
              {/* CEOs, Executives, and Entrepreneurs */}
              <div>
                <h3 className="mb-3 text-xl font-bold text-yellow-400">
                  CEOs, Executives, and Entrepreneurs
                </h3>
                <p className="leading-relaxed text-white">
                  CEOs, executives, and entrepreneurs ready to increase their
                  visibility and influence
                </p>
              </div>

              {/* Industry Leaders & Experts */}
              <div>
                <h3 className="mb-3 text-xl font-bold text-yellow-400">
                  Industry Leaders & Experts
                </h3>
                <p className="leading-relaxed text-white">
                  Experts preparing for a book launch, podcast, or speaking tour
                </p>
              </div>

              {/* Founders */}
              <div>
                <h3 className="mb-3 text-xl font-bold text-yellow-400">
                  Founders
                </h3>
                <p className="leading-relaxed text-white">
                  Founders seeking to elevate their authority ahead of a raise,
                  acquisition, or major brand expansion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by hundreds section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Trusted by hundreds
            </h2>
          </div>

          {/* Logo Grid */}
          <div className="space-y-8">
            {/* First Row - 5 Logos */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              {/* Logo 1 - Nike */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                    alt="Nike Logo"
                    className="object-contain w-auto h-10"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/80x40/000000/FFFFFF?text=NIKE";
                    }}
                  />
                </div>
              </div>

              {/* Logo 2 - Apple */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple Logo"
                    className="object-contain w-auto h-10"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/80x40/000000/FFFFFF?text=APPLE";
                    }}
                  />
                </div>
              </div>

              {/* Logo 3 - Google */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google Logo"
                    className="object-contain w-auto h-10"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/80x40/000000/FFFFFF?text=GOOGLE";
                    }}
                  />
                </div>
              </div>

              {/* Logo 4 - Microsoft */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft Logo"
                    className="object-contain w-auto h-10"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/80x40/000000/FFFFFF?text=MICROSOFT";
                    }}
                  />
                </div>
              </div>

              {/* Logo 5 - Amazon */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon Logo"
                    className="object-contain w-auto h-10"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/80x40/000000/FFFFFF?text=AMAZON";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Second Row - 5 Logos */}
            <div className="flex justify-center">
              <div className="grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                {/* Logo 7 - Tesla */}
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="mb-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
                      alt="Tesla Logo"
                      className="object-contain w-auto h-10"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/80x40/000000/FFFFFF?text=TESLA";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 8 - Netflix */}
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="mb-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                      alt="Netflix Logo"
                      className="object-contain w-auto h-10"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/80x40/000000/FFFFFF?text=NETFLIX";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 9 - Spotify */}
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="mb-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                      alt="Spotify Logo"
                      className="object-contain w-auto h-10"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/80x40/000000/FFFFFF?text=SPOTIFY";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 10 - Adobe */}
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="mb-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg"
                      alt="Adobe Logo"
                      className="object-contain w-auto h-10"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/80x40/000000/FFFFFF?text=ADOBE";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 11 - Facebook */}
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="mb-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                      alt="Facebook Logo"
                      className="object-contain w-auto h-10"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/80x40/000000/FFFFFF?text=FACEBOOK";
                      }}
                    />
                  </div>
                </div>

                {/* Logo 12 - Uber */}
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="mb-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.png"
                      alt="Uber Logo"
                      className="object-contain w-auto h-10"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://via.placeholder.com/80x40/000000/FFFFFF?text=UBER";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-16 bg-gray-900 rounded-[2rem] mx-4">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column - Profile Card */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative mb-6 overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80"
                  alt="Amit Trivedi"
                  className="object-cover w-80 h-96"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80";
                  }}
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  Amit Trivedi
                </h3>
                <p className="text-lg text-white opacity-90">
                  Head of SEO Department
                </p>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                You'll be working expert in personal brand strategist & public
                relations
              </h2>

              <div className="space-y-6 text-white">
                <p className="text-lg leading-relaxed opacity-90">
                  Founded by alumni from IIT Bombay and IIT Kharagpur, Gushwork
                  has been featured in top media outlets such as TechCrunch,
                  Financial Express, and CBInsights. Our SEO strategy is
                  spearheaded by Tushar, who has successfully led campaigns for
                  prominent Indian brands like Puma, Nykaa, Groww, and
                  Turtlemint.
                </p>

                <p className="text-lg leading-relaxed opacity-90">
                  By combining our technical background with tried-and-true SEO
                  strategies, we aim to deliver results that make a real
                  difference for your website.
                </p>
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
                Find answers to common questions about our services and
                processes.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-0">
              {[
                "What services does your agency offer?",
                "How long does a typical project take to complete?",
                "What is your design process like?",
                "Do you offer maintenance and support after launch?",
                "How do you handle project pricing?",
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
