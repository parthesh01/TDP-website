import React from "react";
import Header from "@/components/Header";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Intro Hero */}
      <section className="relative">
        <div className="container px-4 py-16 mx-auto md:py-24">
          <div className="relative z-10">
            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-7xl">
              We help organizations
              <span className="block md:inline"> increase </span>
              <em className="font-serif italic">their impact.</em>
            </h1>
            <p className="max-w-3xl mt-6 text-sm text-gray-600 md:text-base">
              We are a team of creative minds and strategic thinkers, dedicated
              to helping businesses reach their full potential. Our approach is
              simple: we deeply understand your business, identify your unique
              value proposition, and devise a marketing strategy that will help
              <span className="px-1 bg-yellow-400 box-decoration-clone">
                {" "}
                you stand out in a crowded market
              </span>
              .
            </p>
            <div className="mt-6 border-t border-gray-300" />
          </div>
        </div>
        {/* Decorative 01 */}
        <div className="absolute top-0 right-0 z-0 hidden pointer-events-none md:block">
          <div className="relative w-[400px] h-[250px] -translate-x-4 -translate-y-4">
            <div className="absolute left-0 top-0 w-[240px] h-[250px] rounded-br-[120px] rounded-tr-[120px] bg-yellow-400" />
            <div className="absolute right-0 top-0 h-[250px] w-[100px] bg-yellow-400" />
            <div className="absolute left-[80px] top-[30px] w-[80px] h-[190px] bg-white" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t border-gray-200">
        <div className="container px-4 py-20 mx-auto md:py-32">
          <h2 className="mb-16 text-4xl font-semibold text-center md:text-6xl">
            Meet our <em className="font-serif italic">team</em>
          </h2>

          <div className="grid grid-cols-1 gap-16 mt-16 md:grid-cols-2 md:gap-24">
            {/* Bio 1 */}
            <article className="space-y-6 text-base leading-8 text-gray-800">
              <h3 className="text-2xl font-semibold">Farris Qunibi</h3>
              <p className="text-lg italic text-gray-600">Partner</p>
              <p>
                Farris is co–founder and partner at TDP. Farris has been an avid
                entrepreneur, investor, and startup advisor to several growing
                startup and tech organizations for nearly 16 years.
              </p>
              <p>
                A fintech startup transforming how hedge funds and institutional
                investors analyze their investment portfolios and invest
                capital. During his time at Novus, Farris launched and grew the
                marketing department including, its editorial team and
                publishing efforts. Throughout his tenure in that role, Farris
                helped transform and position Novus as one of the most
                recognized brands in the Hedge Fund industry.
              </p>
            </article>

            {/* Bio 2 */}
            <article className="space-y-6 text-base leading-8 text-gray-800">
              <h3 className="text-2xl font-semibold">Tara Qunibi</h3>
              <p className="text-lg italic text-gray-600">Partner</p>
              <p>
                Tara is co–founder and partner at TDP. Tara has been an avid
                entrepreneur, investor, and startup advisor to several growing
                startup and tech organizations for nearly 16 years.
              </p>
              <p>
                A fintech startup transforming how hedge funds and institutional
                investors analyze their investment portfolios and invest
                capital. During her time at Novus, Tara launched and grew the
                marketing department including, its editorial team and
                publishing efforts. Throughout her tenure in that role, Tara
                helped transform and position Novus as one of the most
                recognized brands in the Hedge Fund industry.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-gray-200">
        <div className="container px-4 py-32 mx-auto md:py-48">
          <h2 className="mb-24 text-5xl font-bold text-center md:text-8xl">
            Our <em className="font-serif italic">Values</em>
          </h2>

          <div className="relative mt-24">
            {/* Vertical divider line */}
            <div className="absolute top-0 bottom-0 hidden w-px transform -translate-x-1/2 bg-gray-300 md:block left-1/2"></div>

            {/* Horizontal divider lines */}
            <div className="absolute left-0 right-0 hidden h-px bg-gray-300 top-1/3 md:block"></div>
            <div className="absolute left-0 right-0 hidden h-px bg-gray-300 top-2/3 md:block"></div>

            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              {/* Left column */}
              <div className="space-y-0">
                <div className="p-12 md:p-20">
                  <h3 className="mb-6 text-3xl font-bold">Excellence</h3>
                  <p className="text-lg font-semibold leading-relaxed text-gray-800">
                    We strive for excellence in everything we do. Whether it's
                    providing top-quality products and services or delivering
                    exceptional customer experiences, we always aim to exceed
                    expectations.
                  </p>
                </div>

                <div className="p-12 md:p-20">
                  <h3 className="mb-6 text-3xl font-bold">Partnership</h3>
                  <p className="text-lg font-semibold leading-relaxed text-gray-800">
                    Collaboration is at the heart of what we do. We value
                    partnerships and seek to build strong, lasting relationships
                    with our clients, vendors, and other agencies.
                  </p>
                </div>

                <div className="p-12 md:p-20">
                  <h3 className="mb-6 text-3xl font-bold">Teamwork</h3>
                  <p className="text-lg font-semibold leading-relaxed text-gray-800">
                    We believe that great things are achieved through teamwork.
                    We foster a culture of collaboration, communication, and
                    mutual support, where every team member has a voice and is
                    valued.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-0">
                <div className="p-12 md:p-20">
                  <h3 className="mb-6 text-3xl font-bold">Creativity</h3>
                  <p className="text-lg font-semibold leading-relaxed text-gray-800">
                    We believe that creativity is the key to innovation and
                    success. That's why we encourage our team to think outside
                    the box, experiment with new ideas, and explore new
                    possibilities.
                  </p>
                </div>

                <div className="p-12 md:p-20">
                  <h3 className="mb-6 text-3xl font-bold">Integrity</h3>
                  <p className="text-lg font-semibold leading-relaxed text-gray-800">
                    We hold ourselves to the highest ethical standards and are
                    committed to doing the right thing, even when no one is
                    watching. Trust and transparency are fundamental to the way
                    we operate.
                  </p>
                </div>

                <div className="p-12 md:p-20">
                  <h3 className="mb-6 text-3xl font-bold">Tech-Driven</h3>
                  <p className="text-lg font-semibold leading-relaxed text-gray-800">
                    We are passionate about technology and how it can transform
                    businesses and industries. We leverage the latest tools and
                    platforms to drive innovation, efficiency, and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default About;
