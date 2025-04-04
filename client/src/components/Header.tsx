import React, { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case studies', path: '/case-studies' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About us', path: '/about' },
    { name: 'Contact us', path: '/contact' }
  ];

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <a className="text-foreground hover:text-primary font-medium transition-colors">
              {item.name}
            </a>
          </Link>
        ))}
      </nav>

      {/* CTA Button */}
      <Link href="/contact">
        <a className="hidden md:flex items-center">
          <Button variant="growButton" className="gap-2">
            <span>Lets grow</span>
            <ArrowRight className="h-5 w-5 text-primary" />
          </Button>
        </a>
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex items-center" onClick={toggleMobileMenu}>
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-5">
          <div className="flex justify-between items-center mb-10">
            <Logo />
            <button onClick={toggleMobileMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-xl">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a 
                  className="text-foreground hover:text-primary font-medium transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link href="/contact">
              <a 
                className="flex items-center justify-center w-full"
                onClick={toggleMobileMenu}
              >
                <Button variant="growButton" className="w-full gap-2">
                  <span>Lets grow</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
