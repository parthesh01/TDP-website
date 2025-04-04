import React from 'react';

interface ServiceCategoryProps {
  title: string;
  services: Array<{
    name: string;
    highlight?: boolean;
  }>;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, services }) => {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-white mb-8">{title}</h3>
      <div className="space-y-3">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center border-b border-gray-600 pb-2"
          >
            <span className="text-white">{service.name}</span>
            {service.highlight && (
              <div className="bg-sky-400 rounded-full px-3 py-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-800">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  // Service categories and their items
  const serviceCategories = [
    {
      title: "Branding & Design",
      services: [
        { name: "Branding" },
        { name: "Creative" },
        { name: "UX/UI Design" },
        { name: "Video" },
        { name: "Web Design" },
        { name: "Photography", highlight: true }
      ]
    },
    {
      title: "Influencer Marketing",
      services: [
        { name: "Talent management & contracting" },
        { name: "Management" },
        { name: "Brands partnership" },
        { name: "Product placements" },
        { name: "Creative strategy" },
        { name: "Audience research", highlight: true }
      ]
    },
    {
      title: "Strategy & Growth",
      services: [
        { name: "Strategy Development" },
        { name: "Strategy Implementation" },
        { name: "Campaign Management" },
        { name: "Account Based Marketing" },
        { name: "Content Marketing", highlight: true }
      ]
    },
    {
      title: "Development",
      services: [
        { name: "App Development" },
        { name: "Website Development" },
        { name: "Site Management", highlight: true }
      ]
    }
  ];

  return (
    <section className="bg-teal-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side - Introduction */}
          <div className="lg:col-span-4">
            <div className="sticky top-20">
              <span className="text-gray-400 uppercase tracking-wide">SERVICES</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                Conception to scale, <br />
                we cover the entire <span className="font-serif italic font-normal">growth journey</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Whether you're just building out your marketing or looking to explore new strategies, we have the toolkits and experience to help you grow your business.
              </p>
            </div>
          </div>
          
          {/* Right side - Services List */}
          <div className="lg:col-span-8">
            {serviceCategories.map((category, index) => (
              <ServiceCategory 
                key={index}
                title={category.title}
                services={category.services}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;