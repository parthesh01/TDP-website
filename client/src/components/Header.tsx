import { useState, useEffect } from "react";
import { Link } from "wouter";
import Logo from "@/components/Logo";
import { Menu, X, ArrowRight } from "lucide-react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 20);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Case studies", path: "/case-studies" },
    { name: "Blogs", path: "/blogs" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-all duration-300 hover:-translate-y-0 ${
        isScrolled ? "shadow-md" : "border-b border-gray-100"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="transform transition-transform duration-300 hover:scale-105">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`text-[#1F2937] hover:text-[#6B46C1] text-lg transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[#6B46C1] ${
                  item.name === "Home" ? "font-bold" : "font-medium"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact">
          <a className="hidden md:flex items-center group">
            <div className="flex items-center transform transition-all duration-300 hover:translate-x-1">
              <span className="text-[#1F2937] font-medium text-lg relative">
                Lets grow
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1F2937] group-hover:w-full transition-all duration-300"></span>
              </span>
              <div className="ml-2 w-6 h-6 rounded-full bg-[#93C5FD] flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#60A5FA]">
                <ArrowRight className="h-3.5 w-3.5 text-white transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center transform transition-transform active:scale-90"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-50 transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full p-5">
            <div className="flex justify-between items-center mb-10">
              <Logo />
              <button
                onClick={toggleMobileMenu}
                className="transform transition-transform active:scale-90"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-xl">
              {navItems.map((item, index) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className="text-[#1F2937] hover:text-[#6B46C1] font-medium transition-all duration-300 transform hover:translate-x-2"
                    onClick={toggleMobileMenu}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
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
                  <div className="flex items-center transform transition-all duration-300 hover:translate-x-1">
                    <span className="text-[#1F2937] font-medium text-lg relative group">
                      Lets grow
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1F2937] group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <div className="ml-2 w-6 h-6 rounded-full bg-[#93C5FD] flex items-center justify-center transform transition-all duration-300 group-hover:bg-[#60A5FA]">
                      <ArrowRight className="h-3.5 w-3.5 text-white transform transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
