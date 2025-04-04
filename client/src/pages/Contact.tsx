import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Contact Us</h1>
        <p className="text-lg mb-12">Ready to grow your business? Get in touch with our team.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button variant="dark" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-700">info@thedigitalpillar.com</p>
                </div>
                
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-700">+91 98765 43210</p>
                </div>
                
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-700">
                    123 Digital Avenue<br />
                    Pune, Maharashtra 411001<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
