import React from 'react';
import Header from '@/components/Header';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Our Services</h1>
        <p className="text-lg mb-12">Explore the range of services we offer to help your business grow.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service placeholders */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
            <p>Strategic digital marketing solutions to grow your online presence.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p>Custom websites and web applications tailored to your needs.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Content Creation</h3>
            <p>Engaging content that connects with your audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
