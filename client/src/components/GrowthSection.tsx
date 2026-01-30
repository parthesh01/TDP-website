import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Efficient, knowledgeable, & smooth experience. Highly recommended",
    rating: 5,
  },
  {
    quote:
      "Great communication and strong results. Would work with them again.",
    rating: 5,
  },
  {
    quote:
      "Professional team with creative execution. Everything was smooth end-to-end.",
    rating: 5,
  },
];

const GrowthSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          {/* Main Heading */}
          <h2 className="text-[56px] md:text-[72px] font-bold text-[#1F2937] text-center leading-tight mb-20">
            We help ambitious companies meet &<br />
            exceed their{" "}
            <span className="italic font-normal font-playfair">
              growth goals
            </span>
            .
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Testimonial Card - image static, only review carousel */}
            <div className="relative lg:col-span-7">
              <div className="bg-[#0F2D40] rounded-3xl p-8 overflow-hidden">
                <div className="flex items-center gap-8">
                  {/* Character Image - static, not in carousel */}
                  <div className="flex-shrink-0 w-1/2">
                    <img
                      src="/images/character/3d-character.png"
                      alt="3D Character Testimonial"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Testimonial content - carousel only for review */}
                  <div className="w-1/2 text-white relative min-h-[200px]">
                    <Carousel
                      setApi={setApi}
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        {testimonials.map((t, idx) => (
                          <CarouselItem key={idx}>
                            <div className="py-2">
                              <div className="mb-6">
                                <div className="w-12 h-12 bg-[#B4E4FF] rounded-full flex items-center justify-center">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M9.135 7.05c-.825-.9-1.275-1.8-1.275-2.7 0-1.05.45-1.8 1.2-2.4.75-.6 1.575-.9 2.475-.9.9 0 1.725.3 2.475.9.75.6 1.2 1.35 1.2 2.4 0 .9-.45 1.8-1.275 2.7L11.31 9.75v4.5H9.135V7.05zM15.135 7.05c-.825-.9-1.275-1.8-1.275-2.7 0-1.05.45-1.8 1.2-2.4.75-.6 1.575-.9 2.475-.9.9 0 1.725.3 2.475.9.75.6 1.2 1.35 1.2 2.4 0 .9-.45 1.8-1.275 2.7L17.31 9.75v4.5h-2.175V7.05z"
                                      fill="#0F2D40"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <h3 className="mb-6 text-2xl font-medium">
                                "{t.quote}"
                              </h3>
                              <div className="flex gap-1">
                                {[...Array(t.rating)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className="w-6 h-6 text-yellow-400 fill-current"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <CarouselPrevious className="left-0 hidden -translate-x-12 -translate-y-1/2 border-0 md:flex top-1/2 bg-white/10 hover:bg-white/20" />
                      <CarouselNext className="right-0 hidden -translate-x-2 -translate-y-1/2 border-0 md:flex top-1/2 bg-white/10 hover:bg-white/20" />
                    </Carousel>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current
                        ? "w-8 bg-[#0F2D40]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Mission Card */}
            <div className="lg:col-span-5 bg-[#EFF6FF] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600">
                To ensure long-term success for our companies, we strive
                diligently to combine the best of digital & traditional
                marketing strategies.
              </p>
            </div>

            {/* TDP Card */}
            <div className="lg:col-span-7 bg-[#EFF6FF] rounded-3xl p-8">
              <div className="flex items-start justify-between mb-8">
                <div className="max-w-[50%]">
                  <h3 className="text-3xl font-bold text-[#1F2937] mb-4">
                    We'r TDP
                  </h3>
                  <p className="mb-6 text-lg text-gray-600">
                    A group of creative thinkers gathered under one roof
                    collaboratively striving forward with a motto to take
                    business developments to its pinnacle.
                  </p>
                  <button className="text-[#1F2937] font-medium flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="text-right">
                    <h4 className="text-5xl font-bold text-[#1F2937] mb-2">
                      110 +
                    </h4>
                    <p className="text-gray-600">Successful Projects</p>
                  </div>
                  <div className="text-right">
                    <h4 className="text-5xl font-bold text-[#1F2937] mb-2">
                      1.2 x
                    </h4>
                    <p className="text-gray-600">Rapid growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="lg:col-span-5 bg-[#EFF6FF] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600">
                We are an Independent creative marketing agency with a vision to
                set new standards & create history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Banner Section - seamless never-ending marquee */}
      <section className="bg-[#F4B41A] py-2 sm:py-4" aria-label="Scrolling banner">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex logo-carousel-left-fast"
            style={{ width: "max-content" }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((copy) => (
              <div
                key={copy}
                className="flex items-center flex-shrink-0 gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-10 md:pr-10 lg:gap-12 lg:pr-12"
              >
                <img
                  src="/images/pillar.png"
                  alt=""
                  className="flex-shrink-0 h-6 sm:h-8 md:h-10"
                />
                <span className="text-[#0F2D40] font-extrabold text-xs tracking-wider whitespace-nowrap sm:text-sm md:text-lg">
                  NEW IDEAS
                </span>
                <img
                  src="/images/pillar.png"
                  alt=""
                  className="flex-shrink-0 h-6 sm:h-8 md:h-10"
                />
                <span className="text-[#0F2D40] font-extrabold text-xs tracking-wider whitespace-nowrap sm:text-sm md:text-lg">
                  GO VIRAL
                </span>
                <img
                  src="/images/pillar.png"
                  alt=""
                  className="flex-shrink-0 h-6 sm:h-8 md:h-10"
                />
                <span className="text-[#0F2D40] font-extrabold text-xs tracking-wider whitespace-nowrap sm:text-sm md:text-lg">
                  JOIN US
                </span>
                <img
                  src="/images/pillar.png"
                  alt=""
                  className="flex-shrink-0 h-6 sm:h-8 md:h-10"
                />
                <span className="text-[#0F2D40] font-extrabold text-xs tracking-wider whitespace-nowrap sm:text-sm md:text-lg">
                  TDP
                </span>
                <img
                  src="/images/pillar.png"
                  alt=""
                  className="flex-shrink-0 h-6 sm:h-8 md:h-10"
                />
                <span className="text-[#0F2D40] font-extrabold text-xs tracking-wider whitespace-nowrap sm:text-sm md:text-lg">
                  GROWTH
                </span>
                {/* <img
                  src="/images/pillar.png"
                  alt=""
                  className="flex-shrink-0 h-6 sm:h-8 md:h-10"
                /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthSection;
