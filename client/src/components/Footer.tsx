import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Bookmark,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2D40] text-white py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-purple-600 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-600 opacity-30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32">
          {/* Left Side */}
          <div className="mb-12 lg:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6">
                <img
                  src="/images/pillar.png"
                  alt="Pillar icon"
                  className="w-full"
                />
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl font-medium leading-[1.1] mb-4">
              It's now
              <br />
              time to meet <span className="font-playfair italic">you!</span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="bg-[#7CC6F8] text-white px-8 py-4 rounded-full flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <span className="uppercase tracking-[0.2em] text-sm font-medium">
              Book a Meeting
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and Contact */}
          <div>
            <img src="/TDP.png" alt="Digital Pillar" className="h-24 mb-6" />
            <div className="space-y-2 text-gray-300">
              <p>+917700 10286</p>
              <p>info@thedigitalpillar.com</p>
              <p className="mt-6">
                320/9B FC Road,
                <br />
                Deccan, Pune
                <br />
                411005
              </p>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-lg font-medium mb-6">Discover</h3>
            <nav className="space-y-4">
              <a
                href="#services"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Work
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#blog"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-medium mb-6">
              Sign up for our newsletter
            </h3>
            <div className="flex gap-4 mb-4">
              <input
                type="email"
                placeholder="E-mail"
                className="bg-transparent border-b border-gray-600 py-2 px-0 text-white placeholder-gray-500 focus:outline-none focus:border-white flex-grow"
              />
              <button className="text-white">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <p className="text-sm text-gray-400">
              By signing up to receive emails from Goodbrand, you agree to our
              Privacy Policy. We treat your info responsibly. Unsubscribe any
              time.
            </p>

            {/* Social Media Links */}
            <div className="mt-12">
              <h3 className="text-lg font-medium mb-6">Follow us</h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Bookmark className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-32 text-gray-400">
          <p>Copyright© 2023 The Digital Pillar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
