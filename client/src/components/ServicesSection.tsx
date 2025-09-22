import { Sparkles, ChevronRight } from "lucide-react";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#0F2D40] via-[#0A1F2E] to-[#081B29] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container relative px-4 mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-8 sm:mb-12 lg:mb-16 opacity-90">
          <div className="bg-[#B4E4FF]/20 p-2 rounded-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#B4E4FF]" />
          </div>
          <span className="text-gray-400 uppercase tracking-[0.2em] font-medium text-sm sm:text-base">
            SERVICES
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="mb-4 sm:mb-6 font-medium leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Conception to scale,
            <br />
            we cover the entire{" "}
            <span className="font-playfair italic bg-gradient-to-r from-[#B4E4FF] via-white to-[#B4E4FF] bg-clip-text text-transparent">
              growth journey
            </span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-400">
            Whether you're just building out your marketing or looking to
            explore new strategies, we have the toolkits and experience to help
            you grow your business.
          </p>
        </div>

        {/* Services List */}
        <div className="relative flex flex-col max-w-4xl gap-12 sm:gap-16 lg:gap-24 mx-auto">
          {/* Vertical Line - Hidden on mobile */}
          <div className="absolute w-px left-4 top-8 bottom-8 bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden sm:block"></div>

          {/* Branding & Design */}
          <div className="relative group">
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-sm sm:text-base lg:text-lg text-white shadow-lg rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 shrink-0 shadow-pink-500/20">
                B
              </span>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 lg:mb-8 group-hover:text-[#B4E4FF] transition-colors">
                  Branding & Design
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {[
                    "Branding",
                    "Creative",
                    "UX/UI Design",
                    "Video",
                    "Web Design",
                    "Photography",
                  ].map((service) => (
                    <div key={service} className="cursor-pointer group/item">
                      <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 transition-all duration-300 rounded-xl hover:bg-white/5">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#B4E4FF] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        <span className="text-sm sm:text-base text-gray-400 transition-colors group-hover/item:text-white">
                          {service}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Influencer Marketing */}
          <div className="relative group">
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-sm sm:text-base lg:text-lg text-white shadow-lg rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shrink-0 shadow-blue-500/20">
                I
              </span>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 lg:mb-8 group-hover:text-[#B4E4FF] transition-colors">
                  Influencer Marketing
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {[
                    "Talent management & contracting",
                    "Management",
                    "Brands partnership",
                    "Product placements",
                    "Creative strategy",
                    "Audience research",
                  ].map((service) => (
                    <div key={service} className="cursor-pointer group/item">
                      <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 transition-all duration-300 rounded-xl hover:bg-white/5">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#B4E4FF] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        <span className="text-sm sm:text-base text-gray-400 transition-colors group-hover/item:text-white">
                          {service}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Strategy & Growth */}
          <div className="relative group">
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-sm sm:text-base lg:text-lg text-white shadow-lg rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shrink-0 shadow-amber-500/20">
                S
              </span>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 lg:mb-8 group-hover:text-[#B4E4FF] transition-colors">
                  Strategy & Growth
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {[
                    "Strategy Development",
                    "Strategy Implementation",
                    "Campaign Management",
                    "Account Based Marketing",
                    "Content Marketing",
                  ].map((service) => (
                    <div key={service} className="cursor-pointer group/item">
                      <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 transition-all duration-300 rounded-xl hover:bg-white/5">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#B4E4FF] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        <span className="text-sm sm:text-base text-gray-400 transition-colors group-hover/item:text-white">
                          {service}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Development */}
          <div className="relative group">
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-sm sm:text-base lg:text-lg text-white shadow-lg rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shrink-0 shadow-green-500/20">
                D
              </span>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 lg:mb-8 group-hover:text-[#B4E4FF] transition-colors">
                  Development
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {[
                    "App Development",
                    "Website Development",
                    "Site Management",
                  ].map((service) => (
                    <div key={service} className="cursor-pointer group/item">
                      <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 transition-all duration-300 rounded-xl hover:bg-white/5">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#B4E4FF] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        <span className="text-sm sm:text-base text-gray-400 transition-colors group-hover/item:text-white">
                          {service}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
