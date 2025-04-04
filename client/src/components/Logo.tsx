import React from 'react';
import { Link } from 'wouter';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className="flex items-center">
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12Z" fill="#E4B842"/>
          <path d="M24 4C14.0589 4 6 12.0589 6 22C6 31.9411 14.0589 40 24 40C33.9411 40 42 31.9411 42 22" stroke="#E4B842" strokeWidth="3"/>
        </svg>
        <div className="ml-1 text-secondary font-bold text-2xl">dp</div>
      </a>
    </Link>
  );
};

export default Logo;
