import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SEO: React.FC = () => {
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
                SEO Services
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold italic leading-tight mb-8 text-[#F4B41A]">
                that drive results
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-8">
                Boost your online visibility and drive organic traffic with our
                comprehensive SEO strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#F4B41A] hover:bg-[#f7c538] text-[#2B1247] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#2B1247] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - SEO Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1F2937] to-[#0F2D40] rounded-3xl p-8 shadow-2xl border border-white/10">
                {/* Search Engine Mockup */}
                <div className="mb-8">
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">G</span>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2">
                        <span className="text-gray-500">
                          Search for your business...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Search Results */}
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-[#F4B41A] font-semibold mb-1">
                        Your Business Name
                      </div>
                      <div className="text-white/80 text-sm">
                        www.yourbusiness.com
                      </div>
                      <div className="text-white/70 text-xs">
                        Your business description and services...
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-white/60 font-semibold mb-1">
                        Competitor 1
                      </div>
                      <div className="text-white/50 text-sm">
                        www.competitor1.com
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-white/60 font-semibold mb-1">
                        Competitor 2
                      </div>
                      <div className="text-white/50 text-sm">
                        www.competitor2.com
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEO Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F4B41A]/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#F4B41A] mb-1">
                      #1
                    </div>
                    <div className="text-white/80 text-sm">Search Ranking</div>
                  </div>
                  <div className="bg-[#F4B41A]/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#F4B41A] mb-1">
                      +300%
                    </div>
                    <div className="text-white/80 text-sm">Traffic Growth</div>
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
              Our SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO strategies tailored to your business goals and
              industry requirements.
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
                Keyword Research
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover high-value keywords that your target audience is
                searching for and optimize your content accordingly.
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
                On-Page Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize your website's structure, content, and technical
                elements for better search engine visibility.
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
                Link Building
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build high-quality backlinks from authoritative websites to
                boost your domain authority and rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;
