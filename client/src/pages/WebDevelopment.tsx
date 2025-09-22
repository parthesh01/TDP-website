import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, Quote } from "lucide-react";

const WebDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Tropical leaf background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-[#6B46C1] mb-4 sm:mb-6 lg:mb-8">
              Web Design & Development
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto px-4">
              Professional Web Design & Development services that deliver
              engaging and impactful experiences.
            </p>

            {/* Professional desk setup image placeholder */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <div className="bg-gray-700 rounded-lg p-3 sm:p-4 lg:p-6 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-gray-400">
                      Professional Workspace
                    </span>
                  </div>
                  <div className="bg-gray-600 rounded-lg p-3 sm:p-4 text-center">
                    <div className="w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm sm:text-base lg:text-lg font-semibold">
                        Modern Desk Setup
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-[#6B46C1] hover:bg-[#7c5ac9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* From Concept to Creation Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Mobile mockups */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="w-24 h-48 sm:w-28 sm:h-56 lg:w-32 lg:h-64 bg-gray-800 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 mb-3 sm:mb-4 border border-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl"></div>
                </div>
                <div className="w-24 h-48 sm:w-28 sm:h-56 lg:w-32 lg:h-64 bg-gray-800 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 mb-3 sm:mb-4 border border-white/10 absolute left-6 sm:left-7 lg:left-8 top-3 sm:top-4">
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 rounded-xl sm:rounded-2xl"></div>
                </div>
                <div className="w-24 h-48 sm:w-28 sm:h-56 lg:w-32 lg:h-64 bg-gray-800 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-white/10 absolute left-12 sm:left-14 lg:left-16 top-6 sm:top-8">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8">
                From Concept to Creation
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8">
                Custom Websites that{" "}
                <span className="text-[#6B46C1]">Engage</span>,{" "}
                <span className="text-[#6B46C1]">Convert</span>, and Accelerate
                Business Growth
              </p>
              <button className="bg-[#6B46C1] hover:bg-[#7c5ac9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Website Development Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#6B46C1] mb-4 sm:mb-6 lg:mb-8">
            Website Development
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 lg:mb-12">
            Our expertise includes:
          </p>

          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                Web Design + Creative Fullstack Development
              </p>
            </div>
          </div>

          <button className="mt-6 sm:mt-8 bg-[#6B46C1] hover:bg-[#7c5ac9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* We Make Extraordinary Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#6B46C1] mb-2 sm:mb-4">
          We Make Extraordinary
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90">
          Web Solutions
        </p>
      </section>

      {/* We Build Websites Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#6B46C1] mb-2 sm:mb-4">
            We Build Websites
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 lg:mb-16">
            Our process:
          </p>

          {/* Dinosaur game-style process */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#6B46C1] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                      D
                    </span>
                  </div>
                  <span className="text-white text-base sm:text-lg lg:text-xl font-semibold">
                    Design
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-white text-base sm:text-lg lg:text-xl font-semibold">
                    Testing
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gray-600 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-white text-base sm:text-lg lg:text-xl font-semibold">
                    Deployment
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Process line */}
              <div className="relative h-1.5 sm:h-2 bg-gray-600 rounded-full mb-3 sm:mb-4">
                <div className="absolute left-0 top-0 w-1/3 h-full bg-[#6B46C1] rounded-full"></div>
                <div className="absolute top-0 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6B46C1] rounded-full transform -translate-y-0.5 sm:-translate-y-1"></div>
              </div>

              {/* Clouds */}
              <div className="absolute -top-3 sm:-top-4 left-1/4 w-6 h-3 sm:w-8 sm:h-4 bg-white/20 rounded-full"></div>
              <div className="absolute -top-3 sm:-top-4 right-1/4 w-6 h-3 sm:w-8 sm:h-4 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Comparison Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Wireframe */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Wireframe
              </h3>
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <div className="bg-gray-700 rounded-lg p-3 sm:p-4 lg:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-3 sm:h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
                    <div className="h-24 sm:h-32 bg-gray-600 rounded"></div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="h-16 sm:h-20 bg-gray-600 rounded"></div>
                      <div className="h-16 sm:h-20 bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-6 sm:h-8 bg-gray-600 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center order-2 lg:order-2">
              <ArrowUpRight className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#6B46C1] transform rotate-45" />
            </div>

            {/* Developed */}
            <div className="text-center order-3 lg:order-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Developed
              </h3>
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-4 sm:p-6">
                  <div className="text-center text-white">
                    <h4 className="text-lg sm:text-xl font-bold mb-2">
                      Beautiful Website
                    </h4>
                    <p className="text-xs sm:text-sm opacity-90">
                      Fully designed and functional
                    </p>
                    <button className="mt-3 sm:mt-4 bg-white text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
                      Call to Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <button className="bg-[#6B46C1] hover:bg-[#7c5ac9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Our Sample Work Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#6B46C1] text-center mb-8 sm:mb-12 lg:mb-16">
            Our Sample Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: "Go The Extra Mile", category: "Web Design" },
              { title: "Crystal Heights", category: "Real Estate" },
              { title: "Tech Solutions", category: "Technology" },
              { title: "Creative Studio", category: "Design" },
              { title: "E-commerce Store", category: "Retail" },
              { title: "Health Clinic", category: "Healthcare" },
              { title: "Restaurant", category: "Food & Beverage" },
              { title: "Fitness Center", category: "Health & Fitness" },
              { title: "Law Firm", category: "Legal" },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                  <span className="text-white/60 text-xs sm:text-sm">
                    Project Preview
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm">
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#6B46C1] text-center mb-8 sm:mb-12 lg:mb-16">
            Our Clients
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
            {[
              "IT ISN'T",
              "O'sara",
              "Asha",
              "QYRA",
              "LiquidPay",
              "STEIZY",
              "V'WAH",
              "HYDE",
              "BRAND",
              "CREATIVE",
            ].map((client, index) => (
              <div key={index} className="text-white text-center p-2 sm:p-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-800 rounded-lg flex items-center justify-center border border-white/10">
                  <span className="text-xs sm:text-sm font-semibold">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <Quote className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>

            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 leading-relaxed px-4">
              "You have done a perfect job for us. It's easy to navigate and has
              an overall design that is professional and attractive."
            </blockquote>

            <div className="flex justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-xs sm:text-sm">
                  QYRA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
        {/* Tropical leaf background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#6B46C1] mb-4 sm:mb-6 lg:mb-8">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 lg:mb-12 px-4">
              Reach out to us today and we will get in touch with you.
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
              <form className="space-y-4 sm:space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#6B46C1] text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#6B46C1] text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#6B46C1] text-sm sm:text-base"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#6B46C1] resize-none text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="w-full bg-[#6B46C1] hover:bg-[#7c5ac9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
