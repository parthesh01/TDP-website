import React from 'react';
import Header from '@/components/Header';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Case Studies</h1>
        <p className="text-lg mb-12">Explore our successful client projects and the results we've achieved.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case study placeholders */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E-commerce Transformation</h3>
              <p className="text-gray-700 mb-4">How we helped an online retailer increase sales by 200%</p>
              <a href="#" className="text-primary font-medium hover:underline">Read case study</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Brand Revitalization</h3>
              <p className="text-gray-700 mb-4">Rebranding strategy that doubled customer engagement</p>
              <a href="#" className="text-primary font-medium hover:underline">Read case study</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
