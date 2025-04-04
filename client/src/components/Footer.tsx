import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Link } from 'wouter';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaTwitter,
  FaBehance
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-teal-800/20 to-blue-400/30 pointer-events-none"></div>
      
      {/* Column */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 pb-12 border-b border-gray-700">
          <div className="max-w-lg mb-10 md:mb-0">
            <div className="mb-6">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="8" y="2" width="8" height="4" fill="currentColor" />
                <rect x="8" y="18" width="8" height="4" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold mb-6">
              It's now <br />
              time to meet <span className="font-serif italic">you!</span>
            </h3>
            <div className="mb-6">
              <Logo />
            </div>
            <div className="text-gray-400 mb-2">
              <p>+91 77700 10286</p>
              <p>info@thedigitalpillar.com</p>
            </div>
            <div className="text-gray-400">
              <p>320/9B FC Road,</p>
              <p>Deccan, Pune</p>
              <p>411005</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Links */}
            <div>
              <h4 className="text-white text-lg mb-4">Discover</h4>
              <ul className="space-y-3">
                <li><Link href="/services"><a className="text-gray-400 hover:text-white transition-colors">Services</a></Link></li>
                <li><Link href="/about"><a className="text-gray-400 hover:text-white transition-colors">About</a></Link></li>
                <li><Link href="/work"><a className="text-gray-400 hover:text-white transition-colors">Work</a></Link></li>
                <li><Link href="/contact"><a className="text-gray-400 hover:text-white transition-colors">Contact</a></Link></li>
                <li><Link href="/blog"><a className="text-gray-400 hover:text-white transition-colors">Blog</a></Link></li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-white text-lg mb-4">Sign up for our newsletter</h4>
              <div className="flex items-center mb-4">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className="bg-transparent border-b border-gray-500 text-white py-2 w-full focus:outline-none focus:border-white" 
                />
                <button className="ml-2 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                By signing up to receive emails from GlobalBrand, you agree to our Privacy Policy. We treat your info responsibly. Unsubscribe anytime.
              </p>
              
              {/* Social Media */}
              <div>
                <h4 className="text-white text-lg mb-4">Follow us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-white hover:text-pink-400 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-white hover:text-blue-500 transition-colors">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="text-white hover:text-red-600 transition-colors">
                    <FaYoutube />
                  </a>
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-white hover:text-blue-500 transition-colors">
                    <FaBehance />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-8 md:mt-0">
            <Button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-3 flex items-center">
              BOOK A MEETING
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          <p>Copyright© 2025 The Digital Pillar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;