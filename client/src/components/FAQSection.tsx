import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-8 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-[#0F2D40] flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <span className="text-[#0F2D40] text-xl">{question}</span>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-[#0F2D40] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-8" : "max-h-0"
        }`}
      >
        <div className="pl-10 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    "What services does your agency offer?",
    "How long does a typical project take to complete?",
    "What is your design process like?",
    "Do you offer maintenance and support after launch?",
    "How do you handle project pricing?",
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#0F2D40] text-5xl font-medium mb-4">
              Frequently Asked{" "}
              <span className="font-playfair italic">Questions</span>
            </h2>
            <p className="text-gray-600 text-xl">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqs.map((question, index) => (
              <FAQItem
                key={index}
                question={question}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
