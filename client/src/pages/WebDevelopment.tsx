import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WebDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#2B1247] via-[#3D1A6B] to-[#1C0F33] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Web Development
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold italic leading-tight mb-8 text-[#F4B41A]">
                that converts
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-8">
                Build powerful, responsive websites that engage your audience
                and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#F4B41A] hover:bg-[#f7c538] text-[#2B1247] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#2B1247] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Content - Web Development Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1F2937] to-[#0F2D40] rounded-3xl p-8 shadow-2xl border border-white/10">
                {/* Code Editor Mockup */}
                <div className="mb-8">
                  <div className="bg-[#0F2D40] rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-4 text-sm text-white/60">
                        index.html
                      </span>
                    </div>
                    <div className="text-green-400 text-sm font-mono">
                      <div>
                        &lt;<span className="text-blue-400">div</span>{" "}
                        <span className="text-yellow-400">class</span>=
                        <span className="text-red-400">"hero"</span>&gt;
                      </div>
                      <div className="ml-4">
                        &lt;<span className="text-blue-400">h1</span>
                        &gt;Welcome&lt;/
                        <span className="text-blue-400">h1</span>&gt;
                      </div>
                      <div className="ml-4">
                        &lt;<span className="text-blue-400">p</span>&gt;Your
                        business online&lt;/
                        <span className="text-blue-400">p</span>&gt;
                      </div>
                      <div>
                        &lt;/<span className="text-blue-400">div</span>&gt;
                      </div>
                    </div>
                  </div>

                  {/* Website Preview */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="border-b border-gray-200 pb-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="ml-2 text-xs text-gray-500">
                          yourwebsite.com
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Welcome
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Your business online
                      </p>
                    </div>
                  </div>
                </div>

                {/* Development Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F4B41A]/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#F4B41A] mb-1">
                      100%
                    </div>
                    <div className="text-white/80 text-sm">Responsive</div>
                  </div>
                  <div className="bg-[#F4B41A]/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#F4B41A] mb-1">
                      Fast
                    </div>
                    <div className="text-white/80 text-sm">Loading</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1F2937] mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom web solutions built with modern technologies and best
              practices for optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F4B41A] rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                Custom Websites
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bespoke websites tailored to your brand and business
                requirements with modern design and functionality.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F4B41A] rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                E-commerce Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete online stores with payment integration, inventory
                management, and secure checkout systems.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F4B41A] rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                Web Applications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dynamic web applications with user authentication, database
                integration, and real-time features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
