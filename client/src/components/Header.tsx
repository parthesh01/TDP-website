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
    // Close dropdown when mobile menu is closed
    if (isMobileMenuOpen) {
      setIsServicesDropdownOpen(false);
    }
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
      className={`${headerBg} sticky top-0 z-[9999] transition-all duration-300 hover:-translate-y-0 ${borderOrShadow} ${
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
      <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="transform transition-transform duration-300 hover:scale-105">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navItems.map((item) => (
            <div key={item.path} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative services-dropdown-container"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button
                    className={`text-base xl:text-lg transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 font-medium flex items-center space-x-1 ${linkBase}`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-300 ${
                        isServicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 xl:w-64 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                      isServicesDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {servicesDropdownItems.map((dropdownItem) => (
                        <Link key={dropdownItem.path} href={dropdownItem.path}>
                          <a className="block px-3 xl:px-4 py-2 xl:py-3 text-sm xl:text-base text-gray-700 hover:bg-gray-50 hover:text-[#6B46C1] transition-colors duration-200">
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
                    className={`text-base xl:text-lg transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
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
          <a className="hidden lg:flex items-center group">
            <div className="flex items-center transform transition-all duration-300 hover:translate-x-1">
              <span
                className={`${ctaText} font-medium text-base xl:text-lg relative`}
              >
                Lets grow
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] ${ctaUnderline} group-hover:w-full transition-all duration-300`}
                ></span>
              </span>
              <div
                className={`ml-2 w-5 h-5 xl:w-6 xl:h-6 rounded-full ${ctaCircle} flex items-center justify-center transform transition-all duration-300`}
              >
                <ArrowRight
                  className={`h-3 w-3 xl:h-3.5 xl:w-3.5 ${ctaIcon} transform transition-transform duration-300 group-hover:translate-x-0.5`}
                />
              </div>
            </div>
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden flex items-center transform transition-transform active:scale-90 ${
            isServices || isVideoEditing ? "text-white" : "text-[#1F2937]"
          }`}
          onClick={toggleMobileMenu}
        >
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 ${
            isServices
              ? "bg-gradient-to-b from-[#2B1247] to-[#3D1A6B]"
              : isVideoEditing
              ? "bg-[#0F2D40]"
              : "bg-white"
          } z-[9998] transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full p-4 sm:p-5">
            <div
              className={`flex justify-between items-center mb-8 sm:mb-10 ${
                isServices || isVideoEditing ? "text-white" : "text-[#1F2937]"
              }`}
            >
              <Logo />
              <button
                onClick={toggleMobileMenu}
                className="transform transition-transform active:scale-90"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-2 sm:space-y-3 text-lg sm:text-xl">
              {navItems.map((item, index) => (
                <div
                  key={item.path}
                  className={`p-4 sm:p-6 rounded-lg transition-all duration-300 ${
                    index % 2 === 0
                      ? isServices || isVideoEditing
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-100 hover:bg-gray-200"
                      : isServices || isVideoEditing
                      ? "bg-white/5 hover:bg-white/15"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className={`${
                          isServices || isVideoEditing
                            ? "text-white/90 hover:text-white"
                            : "text-[#1F2937] hover:text-[#6B46C1]"
                        } font-medium transition-all duration-300 transform hover:translate-x-2 flex items-center space-x-2 w-full text-left`}
                        onClick={() =>
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        }
                        style={{
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <div
                        className={`ml-3 sm:ml-4 mt-2 space-y-2 sm:space-y-3 transition-all duration-300 ease-in-out ${
                          isServicesDropdownOpen
                            ? "opacity-100 max-h-96 visible"
                            : "opacity-0 max-h-0 invisible"
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
                                } text-base sm:text-lg font-normal transition-all duration-300 transform hover:translate-x-2 block py-2 px-3 rounded-md hover:bg-white/10`}
                                onClick={() => {
                                  toggleMobileMenu();
                                  setIsServicesDropdownOpen(false);
                                }}
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
                        } font-medium transition-all duration-300 transform hover:translate-x-2 block`}
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
