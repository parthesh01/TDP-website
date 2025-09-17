import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/Logo";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [location] = useLocation();
  const isServices = location === "/services";
  const isVideoEditing = location === "/video-editing";

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

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".services-dropdown-container")) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Case studies", path: "/case-studies" },
    { name: "Blogs", path: "/blogs" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  const servicesDropdownItems = [
    { name: "Personal Branding", path: "/services" },
    { name: "Web Development", path: "/web-development" },
    { name: "SEO", path: "/seo" },
    { name: "Video Editing", path: "/video-editing" },
  ];

  const headerBg = isServices
    ? "bg-gradient-to-b from-[#2B1247] to-[#3D1A6B]"
    : isVideoEditing
    ? "bg-[#0F2D40]"
    : "bg-white";
  const borderOrShadow = isServices
    ? isScrolled
      ? "shadow-md"
      : "border-b border-white/10"
    : isVideoEditing
    ? isScrolled
      ? "shadow-md"
      : "border-b border-white/10"
    : isScrolled
    ? "shadow-md"
    : "border-b border-gray-100";

  const linkBase = isServices
    ? "text-white/90 hover:text-white after:bg-white"
    : isVideoEditing
    ? "text-white/90 hover:text-white after:bg-white"
    : "text-[#1F2937] hover:text-[#6B46C1] after:bg-[#6B46C1]";

  const ctaText = isServices
    ? "text-white"
    : isVideoEditing
    ? "text-white"
    : "text-[#1F2937]";
  const ctaUnderline = isServices
    ? "bg-white"
    : isVideoEditing
    ? "bg-white"
    : "bg-[#1F2937]";
  const ctaCircle = isServices
    ? "bg-[#F4B41A] group-hover:bg-[#f7c538]"
    : isVideoEditing
    ? "bg-[#F4B41A] group-hover:bg-[#f7c538]"
    : "bg-[#93C5FD] group-hover:bg-[#60A5FA]";
  const ctaIcon = isServices
    ? "text-[#2B1247]"
    : isVideoEditing
    ? "text-[#2B1247]"
    : "text-white";

  return (
    <header
      className={`${headerBg} sticky top-0 z-50 transition-all duration-300 hover:-translate-y-0 ${borderOrShadow} ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${isVideoEditing ? "relative" : ""}`}
    >
      {/* Grid Background for Video Editing Page */}
      {isVideoEditing && (
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Grid Dots */}
          <div className="absolute inset-0">
            {Array.from({ length: 3 }, (_, i) =>
              Array.from({ length: 20 }, (_, j) => (
                <div
                  key={`${i}-${j}`}
                  className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full opacity-40"
                  style={{
                    left: `${j * 40 + 20}px`,
                    top: `${i * 40 + 20}px`,
                  }}
                />
              ))
            )}
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="transform transition-transform duration-300 hover:scale-105">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.path} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative services-dropdown-container"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button
                    className={`text-lg transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 font-medium flex items-center space-x-1 ${linkBase}`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isServicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                      isServicesDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {servicesDropdownItems.map((dropdownItem) => (
                        <Link key={dropdownItem.path} href={dropdownItem.path}>
                          <a className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#6B46C1] transition-colors duration-200">
                            {dropdownItem.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={item.path}>
                  <a
                    className={`text-lg transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                      item.name === "Home" ? "font-bold" : "font-medium"
                    } ${linkBase}`}
                  >
                    {item.name}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact">
          <a className="hidden md:flex items-center group">
            <div className="flex items-center transform transition-all duration-300 hover:translate-x-1">
              <span className={`${ctaText} font-medium text-lg relative`}>
                Lets grow
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] ${ctaUnderline} group-hover:w-full transition-all duration-300`}
                ></span>
              </span>
              <div
                className={`ml-2 w-6 h-6 rounded-full ${ctaCircle} flex items-center justify-center transform transition-all duration-300`}
              >
                <ArrowRight
                  className={`h-3.5 w-3.5 ${ctaIcon} transform transition-transform duration-300 group-hover:translate-x-0.5`}
                />
              </div>
            </div>
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex items-center transform transition-transform active:scale-90 ${
            isServices || isVideoEditing ? "text-white" : "text-[#1F2937]"
          }`}
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 ${
            isServices
              ? "bg-gradient-to-b from-[#2B1247] to-[#3D1A6B]"
              : isVideoEditing
              ? "bg-[#0F2D40]"
              : "bg-white"
          } z-50 transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full p-5">
            <div
              className={`flex justify-between items-center mb-10 ${
                isServices || isVideoEditing ? "text-white" : "text-[#1F2937]"
              }`}
            >
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
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className={`${
                          isServices || isVideoEditing
                            ? "text-white/90 hover:text-white"
                            : "text-[#1F2937] hover:text-[#6B46C1]"
                        } font-medium transition-all duration-300 transform hover:translate-x-2 flex items-center space-x-2`}
                        onClick={() =>
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        }
                        style={{
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <div
                        className={`ml-4 mt-2 space-y-3 transition-all duration-300 ${
                          isServicesDropdownOpen
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0 overflow-hidden"
                        }`}
                      >
                        {servicesDropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownItem.path}
                              href={dropdownItem.path}
                            >
                              <a
                                className={`${
                                  isServices || isVideoEditing
                                    ? "text-white/70 hover:text-white"
                                    : "text-gray-600 hover:text-[#6B46C1]"
                                } text-lg font-normal transition-all duration-300 transform hover:translate-x-2 block`}
                                onClick={toggleMobileMenu}
                                style={{
                                  transitionDelay: `${
                                    index * 50 + dropdownIndex * 30
                                  }ms`,
                                }}
                              >
                                {dropdownItem.name}
                              </a>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.path}>
                      <a
                        className={`${
                          isServices || isVideoEditing
                            ? "text-white/90 hover:text-white"
                            : "text-[#1F2937] hover:text-[#6B46C1]"
                        } font-medium transition-all duration-300 transform hover:translate-x-2`}
                        onClick={toggleMobileMenu}
                        style={{
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        {item.name}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-auto">
              <Link href="/contact">
                <a
                  className="flex items-center justify-center w-full"
                  onClick={toggleMobileMenu}
                >
                  <div className="flex items-center transform transition-all duration-300 hover:translate-x-1">
                    <span
                      className={`${ctaText} font-medium text-lg relative group`}
                    >
                      Lets grow
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-[1px] ${ctaUnderline} group-hover:w-full transition-all duration-300`}
                      ></span>
                    </span>
                    <div
                      className={`ml-2 w-6 h-6 rounded-full ${ctaCircle} flex items-center justify-center transform transition-all duration-300`}
                    >
                      <ArrowRight
                        className={`h-3.5 w-3.5 ${ctaIcon} transform transition-transform duration-300 group-hover:translate-x-0.5`}
                      />
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
