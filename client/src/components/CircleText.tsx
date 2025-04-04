import React from 'react';

interface CircleTextProps {
  text: string;
}

const CircleText: React.FC<CircleTextProps> = ({ text }) => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full rotating-text">
      <defs>
        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
      </defs>
      <text>
        <textPath href="#circle" className="text-xs uppercase tracking-widest">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CircleText;
