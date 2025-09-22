import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const SEO: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Matching the photo design */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white">
        <div className="container px-4 py-20 mx-auto">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Section - Text Content */}
            <div className="text-left">
              {/* Main Headline */}
              <h1 className="mb-6 text-5xl font-bold leading-tight text-black md:text-7xl lg:text-8xl">
                Rank on Google's 1st page with{" "}
                <span className="font-serif italic">SEO</span>
              </h1>

              {/* Sub-headline */}
              <p className="max-w-2xl mb-8 text-xl leading-relaxed text-black md:text-2xl">
                Grow online with Pune's Best SEO Agency that drives revenue
                generating traffic to your website.
              </p>

              {/* CTA Section */}
              <div className="flex items-center gap-4">
                {/* Blue Button with Arrow */}
                <button className="bg-[#66D0FF] hover:bg-[#5BC0EF] text-white px-6 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105">
                  <ArrowUpRight className="w-5 h-5" />
                </button>

                {/* BOOK A FREE CALL Link */}
                <a
                  href="#"
                  className="text-lg font-medium text-black underline transition-colors hover:text-gray-700"
                >
                  BOOK A FREE CALL
                </a>
              </div>
            </div>

            {/* Right Section - Circular Design with People */}
            <div className="relative flex items-center justify-center">
              {/* Central Woman */}
              <div className="relative z-10">
                <div className="w-48 h-48 bg-[#FFD9E6] rounded-full flex items-center justify-center">
                  <div className="flex items-center justify-center w-40 h-40 overflow-hidden bg-yellow-300 rounded-full">
                    <div className="flex items-center justify-center w-32 h-32 bg-gray-200 rounded-full">
                      <span className="text-4xl">👩</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbital Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Circle */}
                <div className="w-[500px] h-[500px] border-2 border-[#C0C0F0] rounded-full relative">
                  {/* Connection Lines */}
                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    {/* Horizontal line */}
                    <div className="w-[420px] h-0.5 bg-[#C0C0F0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    {/* Vertical line */}
                    <div className="w-0.5 h-[420px] bg-[#C0C0F0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    {/* Diagonal lines */}
                    <div className="w-[300px] h-0.5 bg-[#C0C0F0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="w-[300px] h-0.5 bg-[#C0C0F0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                  </div>

                  {/* Connection Dots */}
                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="w-4 h-4 bg-[#6A6AFF] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-4 h-4 bg-[#6A6AFF] rounded-full absolute top-1/2 left-1/2 transform rotate-45 translate-x-28 -translate-y-1/2"></div>
                    <div className="w-4 h-4 bg-[#6A6AFF] rounded-full absolute top-1/2 left-1/2 transform rotate-45 -translate-x-28 -translate-y-1/2"></div>
                    <div className="w-4 h-4 bg-[#6A6AFF] rounded-full absolute top-1/2 left-1/2 transform -rotate-45 translate-x-28 -translate-y-1/2"></div>
                    <div className="w-4 h-4 bg-[#6A6AFF] rounded-full absolute top-1/2 left-1/2 transform -rotate-45 -translate-x-28 -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Inner Circle */}
                <div className="w-[380px] h-[380px] border border-[#C0C0F0] rounded-full absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Hundreds Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Trusted by hundreds
            </h2>
          </div>

          <div className="space-y-8">
            {/* First Row - 6 logos */}
            <div className="grid items-center grid-cols-6 gap-8 justify-items-center">
              {/* Logo 1 - Google */}
              <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="w-auto h-8"
                />
              </div>

              {/* Logo 2 - Microsoft */}
              <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft"
                  className="w-auto h-8"
                />
              </div>

              {/* Logo 3 - Amazon */}
              <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="w-auto h-8"
                />
              </div>

              {/* Logo 4 - Netflix */}
              <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  alt="Netflix"
                  className="w-auto h-8"
                />
              </div>

              {/* Logo 5 - Spotify */}
              <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                  alt="Spotify"
                  className="w-auto h-8"
                />
              </div>

              {/* Logo 6 - Airbnb */}
              <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                  alt="Airbnb"
                  className="w-auto h-8"
                />
              </div>
            </div>

            {/* Second Row - 5 logos centered between first row spaces */}
            <div className="flex items-center justify-center">
              <div className="grid items-center max-w-4xl grid-cols-5 gap-8 justify-items-center">
                {/* Logo 7 - Uber */}
                <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber"
                    className="w-auto h-8"
                  />
                </div>

                {/* Logo 8 - Slack */}
                <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
                    alt="Slack"
                    className="w-auto h-8"
                  />
                </div>

                {/* Logo 9 - Dropbox */}
                <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg"
                    alt="Dropbox"
                    className="w-auto h-8"
                  />
                </div>

                {/* Logo 10 - Zoom */}
                <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg"
                    alt="Zoom"
                    className="w-auto h-8"
                  />
                </div>

                {/* Logo 11 - Shopify */}
                <div className="flex items-center justify-center p-4 transition-all duration-300 grayscale hover:grayscale-0">
                  <div className="text-lg font-bold text-black">Shopify</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses Trust Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="relative p-20 overflow-hidden shadow-2xl shadow-violet-500/60 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl min-h-[800px]">
            {/* Header */}
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                Businesses trust us to rank them
              </h2>
              <p className="text-xl text-white/90">
                Real people. Real business. Real results.
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="bg-[#1A0B2E] rounded-2xl p-10 shadow-2xl relative border border-white/10 min-h-[550px] flex flex-col">
                {/* Profile Picture */}
                <div className="flex justify-center mb-4 -mt-12">
                  <div className="flex items-center justify-center w-20 h-20 bg-yellow-400 border-4 border-white rounded-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                      <span className="text-2xl">👩</span>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="mb-8 text-center">
                  <div className="text-3xl font-bold text-[#6B46C1] mb-2">
                    3M Views
                  </div>
                </div>

                {/* Description */}
                <p className="flex-grow mb-8 text-sm leading-relaxed text-white/80">
                  Went from 200 to 3M reel views and managed to increase his
                  posting to 4-5 videos daily.
                </p>

                {/* Name and Role */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="font-medium text-white">
                      Anita dange story
                    </div>
                    <div className="text-sm text-white/60">Content creator</div>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1A0B2E] rounded-2xl p-10 shadow-2xl relative border border-white/10 min-h-[550px] flex flex-col">
                {/* Profile Picture */}
                <div className="flex justify-center mb-4 -mt-12">
                  <div className="flex items-center justify-center w-20 h-20 bg-pink-300 border-4 border-white rounded-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                      <span className="text-2xl">👩</span>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="mb-8 text-center">
                  <div className="text-3xl font-bold text-[#6B46C1] mb-2">
                    ₹30K Donation
                  </div>
                </div>

                {/* Description */}
                <p className="flex-grow mb-8 text-sm leading-relaxed text-white/80">
                  Went from 200 to 3M reel views and managed to increase his
                  posting to 4-5 videos daily.
                </p>

                {/* Name and Role */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="font-medium text-white">
                      Anita dange story
                    </div>
                    <div className="text-sm text-white/60">Content creator</div>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1A0B2E] rounded-2xl p-10 shadow-2xl relative border border-white/10 min-h-[550px] flex flex-col">
                {/* Profile Picture */}
                <div className="flex justify-center mb-4 -mt-12">
                  <div className="flex items-center justify-center w-20 h-20 bg-pink-300 border-4 border-white rounded-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                      <span className="text-2xl">👩</span>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="mb-8 text-center">
                  <div className="text-3xl font-bold text-[#6B46C1] mb-2">
                    3M Views
                  </div>
                </div>

                {/* Description */}
                <p className="flex-grow mb-8 text-sm leading-relaxed text-white/80">
                  Went from 200 to 3M reel views and managed to increase his
                  posting to 4-5 videos daily.
                </p>

                {/* Name and Role */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="font-medium text-white">
                      Anita dange story
                    </div>
                    <div className="text-sm text-white/60">Content creator</div>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#1A0B2E] rounded-2xl p-10 shadow-2xl relative border border-white/10 min-h-[550px] flex flex-col">
                {/* Profile Picture */}
                <div className="flex justify-center mb-4 -mt-12">
                  <div className="flex items-center justify-center w-20 h-20 bg-purple-300 border-4 border-white rounded-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                      <span className="text-2xl">👨</span>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="mb-8 text-center">
                  <div className="text-3xl font-bold text-[#6B46C1] mb-2">
                    3M Views
                  </div>
                </div>

                {/* Description */}
                <p className="flex-grow mb-8 text-sm leading-relaxed text-white/80">
                  Went from 200 to 3M reel views and managed to increase his
                  posting to 4-5 videos daily.
                </p>

                {/* Name and Role */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="font-medium text-white">
                      Anita dange story
                    </div>
                    <div className="text-sm text-white/60">Content creator</div>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Services Cards Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="space-y-8">
            {/* First Card - High-quality Blogs (Full Width Big Card) */}
            <div className="relative p-12 overflow-hidden bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl min-h-[400px]">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-20 h-20 bg-blue-300 rounded-full top-4 right-4 blur-xl"></div>
                <div className="absolute w-16 h-16 rounded-full bottom-4 left-4 bg-cyan-300 blur-xl"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="mb-6 text-4xl font-bold text-white">
                    High-quality Blogs
                  </h3>
                  <p className="max-w-4xl text-xl leading-relaxed text-white/90">
                    We rank topics based on the intent of your audience and then
                    write top-notch professional blogs reviewed by you that
                    increase your authority in the industry.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-end mt-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Three Smaller Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 2 - Blue-Cyan Gradient with CTA */}
              <div className="relative p-8 overflow-hidden bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-white rounded-full">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>

                <div className="mb-6">
                  <p className="mb-6 leading-relaxed text-white">
                    Transform your business into a powerful brand with our
                    expert branding services. From crafting a unique identity.
                  </p>

                  {/* CTA Button */}
                  <button className="px-6 py-3 font-semibold text-black transition-colors bg-white rounded-lg hover:bg-gray-100">
                    Get started
                  </button>
                </div>
              </div>

              {/* Card 3 - Unlock website potential */}
              <div className="relative p-8 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-black rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    Unlock your website's potential with us
                  </h3>
                  <p className="leading-relaxed text-white/90">
                    Full-stack SEO service solutions for all your needs.
                  </p>
                </div>
              </div>

              {/* Card 4 - New Fourth Card */}
              <div className="relative p-8 overflow-hidden bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-white rounded-lg">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    Accelerate Your Growth
                  </h3>
                  <p className="leading-relaxed text-white/90">
                    Boost your online presence with our comprehensive digital
                    marketing strategies and analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-By-Step Process Section */}
      <section className="py-48 bg-blue-600 rounded-b-[10rem] overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Title */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Our Methodical
                <br />
                <span className="italic font-normal">Step-By-Step</span>
                <br />
                Process
              </h2>
            </div>

            {/* Right Side - Steps Container */}
            <div className="relative -mr-16 lg:-mr-32 xl:-mr-64">
              <div className="relative p-8 overflow-hidden border border-blue-400 rounded-l-[3rem] bg-blue-500/20">
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
                      Manufacturing capability audit
                    </h3>

                    <div className="space-y-4 text-sm leading-relaxed text-white md:text-base">
                      <p>
                        Deep dive into your manufacturing capabilities, target
                        markets, and competitive landscape to identify
                        high-value keyword opportunities.
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
                      Define your metrics
                    </h3>

                    <div className="space-y-4 text-sm leading-relaxed text-white md:text-base">
                      <p>
                        Transform your business into a powerful brand with our
                        expert branding services. From crafting a unique
                        identity to building a following, we'll help you make a
                        lasting impression.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Leaders Section */}
      <section className="bg-white py-200">
        <div className="container px-4 mx-auto">
          <div className="relative -mt-16 rounded-[2rem] bg-gray-900 p-12 shadow-2xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left Column - Profile Card */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
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
                  You'll be working with Best SEO Leaders in the World
                </h2>

                <div className="space-y-6 text-white">
                  <p className="text-lg leading-relaxed opacity-90">
                    Founded by alumni from IIT Bombay and IIT Kharagpur,
                    Gushwork has been featured in top media outlets such as
                    TechCrunch, Financial Express, and CBInsights. Our SEO
                    strategy is spearheaded by Tushar, who has successfully led
                    campaigns for prominent Indian brands like Puma, Nykaa,
                    Groww, and Turtlemint.
                  </p>

                  <p className="text-lg leading-relaxed opacity-90">
                    By combining our technical background with tried-and-true
                    SEO strategies, we aim to deliver results that make a real
                    difference for your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How can we help Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl">
            <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              How can we help?
            </h2>

            <div className="mb-12">
              <p className="text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
                We take the guess-work
                <br />
                out of your marketing
                <br />
                strategy and deliver
                <br />
                results that help you
                <br />
                grow revenue.
              </p>
            </div>

            <div className="space-y-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <p
                  key={index}
                  className="ml-8 text-lg leading-relaxed text-gray-700"
                >
                  Whether you're building your marketing operation or looking to
                  explore new strategies, we have the tools and experience to
                  help you grow.
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Related Articles Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              SEO related Articles
            </h2>
            <a
              href="#"
              className="text-lg text-gray-600 underline hover:text-gray-800"
            >
              SEE ALL POSTS
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Article 1 */}
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center justify-center bg-blue-600 aspect-video">
                <div className="text-center text-white">
                  <div className="mb-2 text-2xl font-bold">FINAL FOUR</div>
                  <div className="text-lg">Allianz CUP</div>
                  <div className="mt-4 text-sm">FINAL SELECT</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
                    DIGITAL MARKETING
                  </span>
                  <span className="text-sm text-gray-500">05 min</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Top Mistakes Organizations Make in B2B Marketing: Part One
                </h3>
                <p className="mb-4 text-gray-600">
                  Marketing to other businesses takes a nuanced approach, and
                  long-term thinking is critical for success.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-medium text-gray-900">FARRIS QUNIBI</p>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center justify-center bg-blue-600 aspect-video">
                <div className="text-center text-white">
                  <div className="mb-2 text-2xl font-bold">FINAL FOUR</div>
                  <div className="text-lg">Allianz CUP</div>
                  <div className="mt-4 text-sm">FINAL SELECT</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
                    BRANDING
                  </span>
                  <span className="text-sm text-gray-500">05 min</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  What is customer service and why is it important?
                </h3>
                <p className="mb-4 text-gray-600">
                  Marketing to other businesses takes a nuanced approach, and
                  long-term thinking is critical for success.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-medium text-gray-900">FARRIS QUNIBI</p>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center justify-center bg-blue-600 aspect-video">
                <div className="text-center text-white">
                  <div className="mb-2 text-2xl font-bold">FINAL FOUR</div>
                  <div className="text-lg">Allianz CUP</div>
                  <div className="mt-4 text-sm">FINAL SELECT</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
                    ANIMATION
                  </span>
                  <span className="text-sm text-gray-500">05 min</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  The 9 best tools for your early-stage startup tech stack
                </h3>
                <p className="mb-4 text-gray-600">
                  Marketing to other businesses takes a nuanced approach, and
                  long-term thinking is critical for success.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-medium text-gray-900">FARRIS QUNIBI</p>
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
              <h2 className="mb-4 text-5xl font-medium text-gray-900">
                Frequently Asked{" "}
                <span className="font-serif italic">Questions</span>
              </h2>
              <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-6"></div>
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
                  <button className="flex items-center justify-between w-full py-8 text-left">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-xl text-gray-900">{question}</span>
                    </div>
                    <svg
                      className="w-6 h-6 text-gray-900 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
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

export default SEO;
