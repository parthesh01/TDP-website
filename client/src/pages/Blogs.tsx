import React from 'react';
import Header from '@/components/Header';

const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Blog</h1>
        <p className="text-lg mb-12">Insights, tips, and trends from our digital marketing experts.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog post placeholders */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-100"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">April 10, 2025</p>
              <h3 className="text-xl font-bold mb-2">The Future of Digital Marketing</h3>
              <p className="text-gray-700 mb-4">Emerging trends that will shape the industry in the coming years</p>
              <a href="#" className="text-primary font-medium hover:underline">Read more</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-100"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">April 5, 2025</p>
              <h3 className="text-xl font-bold mb-2">Social Media Strategy Guide</h3>
              <p className="text-gray-700 mb-4">How to build an effective social media presence for your brand</p>
              <a href="#" className="text-primary font-medium hover:underline">Read more</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-100"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">March 28, 2025</p>
              <h3 className="text-xl font-bold mb-2">SEO Best Practices for 2025</h3>
              <p className="text-gray-700 mb-4">Stay ahead of the competition with these SEO tips</p>
              <a href="#" className="text-primary font-medium hover:underline">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
