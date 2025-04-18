import React from "react";

interface CircleTextProps {
  text: string;
}

const CircleText: React.FC<CircleTextProps> = ({ text }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ transform: "rotate(-90deg)" }}
        >
          <path
            id="circle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
            stroke="none"
          />
          <text className="text-[8px] fill-[#1F2937]">
            <textPath href="#circle">{text}</textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CircleText;
