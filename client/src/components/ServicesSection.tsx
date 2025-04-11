import { Sparkles, ChevronRight } from "lucide-react";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#0F2D40] via-[#0A1F2E] to-[#081B29] text-white py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-2 opacity-90">
          <div className="bg-[#B4E4FF]/20 p-2 rounded-lg backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-[#B4E4FF]" />
          </div>
          <span className="text-gray-400 uppercase tracking-[0.2em] font-medium">
            SERVICES
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-32">
          <h2 className="text-7xl font-medium mb-6 leading-tight">
            Conception to scale,
            <br />
            we cover the entire{" "}
            <span className="font-playfair italic bg-gradient-to-r from-[#B4E4FF] via-white to-[#B4E4FF] bg-clip-text text-transparent">
              growth journey
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Whether you're just building out your marketing or looking to
            explore new strategies, we have the toolkits and experience to help
            you grow your business.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-24 max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

          {/* Branding & Design */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg shrink-0 shadow-lg shadow-pink-500/20">
                B
              </span>
              <div className="flex-1">
                <h3 className="text-4xl font-medium mb-8 group-hover:text-[#B4E4FF] transition-colors">
                  Branding & Design
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Branding",
                    "Creative",
                    "UX/UI Design",
                    "Video",
                    "Web Design",
                    "Photography",
                  ].map((service) => (
                    <div key={service} className="group/item cursor-pointer">
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 text-[#B4E4FF] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">
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
          <div className="group relative">
            <div className="flex items-start gap-8">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-lg shrink-0 shadow-lg shadow-blue-500/20">
                I
              </span>
              <div className="flex-1">
                <h3 className="text-4xl font-medium mb-8 group-hover:text-[#B4E4FF] transition-colors">
                  Influencer Marketing
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Talent management & contracting",
                    "Management",
                    "Brands partnership",
                    "Product placements",
                    "Creative strategy",
                    "Audience research",
                  ].map((service) => (
                    <div key={service} className="group/item cursor-pointer">
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 text-[#B4E4FF] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">
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
          <div className="group relative">
            <div className="flex items-start gap-8">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-lg shrink-0 shadow-lg shadow-amber-500/20">
                S
              </span>
              <div className="flex-1">
                <h3 className="text-4xl font-medium mb-8 group-hover:text-[#B4E4FF] transition-colors">
                  Strategy & Growth
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Strategy Development",
                    "Strategy Implementation",
                    "Campaign Management",
                    "Account Based Marketing",
                    "Content Marketing",
                  ].map((service) => (
                    <div key={service} className="group/item cursor-pointer">
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 text-[#B4E4FF] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">
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
          <div className="group relative">
            <div className="flex items-start gap-8">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-lg shrink-0 shadow-lg shadow-green-500/20">
                D
              </span>
              <div className="flex-1">
                <h3 className="text-4xl font-medium mb-8 group-hover:text-[#B4E4FF] transition-colors">
                  Development
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "App Development",
                    "Website Development",
                    "Site Management",
                  ].map((service) => (
                    <div key={service} className="group/item cursor-pointer">
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 text-[#B4E4FF] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">
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
