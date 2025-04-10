import React from "react";
import { Link } from "wouter";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className="flex items-center">
        <img
          src="/tdp-logo.png"
          alt="The Digital Pillar"
          className="h-20 w-auto"
        />
      </a>
    </Link>
  );
};

export default Logo;
