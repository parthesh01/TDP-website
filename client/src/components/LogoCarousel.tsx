import React from 'react';

const LogoCarousel: React.FC = () => {
  // Logo components
  const firstRowLogos = [
    <LogoItem key="creative1" name="CREATIVE DESIGN">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 0L0 35L35 70L70 35L35 0Z" fill="black"/>
        <path d="M35 15L15 35L35 55L55 35L35 15Z" fill="white"/>
      </svg>
    </LogoItem>,
    <LogoItem key="company1" name="COMPANY TAB LINE">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="50" height="50" stroke="black" strokeWidth="2"/>
        <rect x="20" y="20" width="30" height="30" fill="black"/>
      </svg>
    </LogoItem>,
    <LogoItem key="exclusive" name="EXCLUSIVE BRAND">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="35" r="10" fill="black"/>
        <circle cx="50" cy="35" r="10" fill="black"/>
      </svg>
    </LogoItem>,
    <LogoItem key="new" name="NEW BRAND">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="20" height="50" fill="black"/>
        <rect x="40" y="10" width="20" height="50" fill="black"/>
      </svg>
    </LogoItem>,
    <LogoItem key="brand1" name="BRAND">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="25" stroke="black" strokeWidth="2" fill="none"/>
        <path d="M20 35C20 25 30 15 50 35C30 55 20 45 20 35Z" fill="black"/>
      </svg>
    </LogoItem>,
    // Duplicate for seamless loop
    <LogoItem key="creative1-dup" name="CREATIVE DESIGN">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 0L0 35L35 70L70 35L35 0Z" fill="black"/>
        <path d="M35 15L15 35L35 55L55 35L35 15Z" fill="white"/>
      </svg>
    </LogoItem>,
    <LogoItem key="company1-dup" name="COMPANY TAB LINE">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="50" height="50" stroke="black" strokeWidth="2"/>
        <rect x="20" y="20" width="30" height="30" fill="black"/>
      </svg>
    </LogoItem>,
  ];

  const secondRowLogos = [
    <LogoItem key="company2" name="COMPANY">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="25" fill="none" stroke="black" strokeWidth="2"/>
        <path d="M25 20C35 30 45 20 45 45C35 35 25 45 25 20Z" fill="black"/>
      </svg>
    </LogoItem>,
    <LogoItem key="company3" name="COMPANY">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="45" r="15" fill="black"/>
        <circle cx="45" cy="25" r="15" fill="black"/>
      </svg>
    </LogoItem>,
    <LogoItem key="brand2" name="BRAND">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 15L15 55H55L35 15Z" fill="black"/>
        <path d="M25 35L35 55L45 35L35 15L25 35Z" fill="white"/>
      </svg>
    </LogoItem>,
    <LogoItem key="arts" name="ARTS & CRAFTS">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 35C15 25 25 15 35 15C45 15 55 25 55 35" stroke="black" strokeWidth="2" fill="none"/>
        <text x="35" y="50" fontSize="20" textAnchor="middle" fill="black">A&C</text>
      </svg>
    </LogoItem>,
    <LogoItem key="creative2" name="CREATIVE DESIGN">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15H60V55H10V15Z" fill="none" stroke="black" strokeWidth="2"/>
        <path d="M25 15L10 35L25 55M45 15L60 35L45 55" fill="none" stroke="black" strokeWidth="2"/>
      </svg>
    </LogoItem>,
    // Duplicate for seamless loop
    <LogoItem key="company2-dup" name="COMPANY">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="25" fill="none" stroke="black" strokeWidth="2"/>
        <path d="M25 20C35 30 45 20 45 45C35 35 25 45 25 20Z" fill="black"/>
      </svg>
    </LogoItem>,
    <LogoItem key="company3-dup" name="COMPANY">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="45" r="15" fill="black"/>
        <circle cx="45" cy="25" r="15" fill="black"/>
      </svg>
    </LogoItem>,
  ];

  return (
    <div className="overflow-hidden py-10">
      {/* First row - moves left */}
      <div className="flex space-x-16 py-6 logo-carousel-left mb-8" style={{ width: 'max-content' }}>
        {firstRowLogos}
        {firstRowLogos}
      </div>
      
      {/* Second row - moves right */}
      <div className="flex space-x-16 py-6 logo-carousel-right" style={{ width: 'max-content' }}>
        {secondRowLogos}
        {secondRowLogos}
      </div>
    </div>
  );
};

// Logo Item component
interface LogoItemProps {
  children: React.ReactNode;
  name: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ children, name }) => {
  return (
    <div className="flex flex-col items-center flex-shrink-0">
      {children}
      <p className="text-xs mt-2 font-bold text-black">{name}</p>
    </div>
  );
};

export default LogoCarousel;