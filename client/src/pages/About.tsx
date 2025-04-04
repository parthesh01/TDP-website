import React from 'react';
import Header from '@/components/Header';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              The Digital Pillar was founded with a mission to help businesses achieve their growth potential through innovative digital marketing strategies.
            </p>
            <p className="text-lg mb-4">
              Based in Pune, we've worked with companies across industries, from startups to established brands, helping them navigate the digital landscape and achieve measurable results.
            </p>
            <p className="text-lg">
              Our team of experts brings together diverse skills and experiences, united by a passion for creativity and a commitment to excellence.
            </p>
          </div>
          <div className="bg-gray-100 h-80 rounded-lg"></div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p>We stay ahead of trends to deliver cutting-edge solutions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p>We work closely with our clients as true partners.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p>We're committed to delivering measurable outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
