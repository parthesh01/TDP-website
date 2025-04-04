import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="w-5 h-5 bg-teal-800 rounded-full flex-shrink-0 mr-3 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="text-gray-800 text-lg">{question}</span>
        </div>
        <svg 
          className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-4 ml-8 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="font-serif italic font-normal">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <FAQItem question="What services does your agency offer?">
            <p>
              We offer a comprehensive range of digital marketing services including branding, web design, social media management, content creation, SEO optimization, and PPC advertising. Our team specializes in creating tailored strategies to help businesses grow their online presence and achieve their marketing goals.
            </p>
          </FAQItem>
          
          <FAQItem question="How long does a typical project take to complete?">
            <p>
              Project timelines vary based on scope and complexity. A typical website design project can take 4-8 weeks, while ongoing marketing campaigns are usually set up within 2-3 weeks. During our initial consultation, we'll provide a detailed timeline based on your specific needs and goals.
            </p>
          </FAQItem>
          
          <FAQItem question="What is your design process like?">
            <p>
              Our design process begins with research and discovery, followed by conceptualization, design development, client feedback and revisions, and finally implementation. We believe in collaborative creation, ensuring your input is incorporated at every stage to deliver results that align with your vision.
            </p>
          </FAQItem>
          
          <FAQItem question="Do you offer maintenance and support after launch?">
            <p>
              Yes, we provide ongoing maintenance and support for all our projects. We offer various maintenance packages to keep your digital assets up-to-date, secure, and performing optimally. Our support team is available to address any issues that may arise after launch.
            </p>
          </FAQItem>
          
          <FAQItem question="How do you handle project pricing?">
            <p>
              We offer transparent pricing based on project scope, complexity, and timeline. Before beginning any work, we provide detailed proposals outlining all costs involved. We can work with fixed project fees or retainer models depending on your needs and preferences.
            </p>
          </FAQItem>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;