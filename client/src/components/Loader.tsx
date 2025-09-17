import React, { useState, useEffect } from "react";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing...");

  const loadingTexts = [
    "Initializing...",
    "Building your digital presence...",
    "Crafting growth strategies...",
    "Preparing for success...",
    "Almost ready...",
  ];

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [isLoading]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-[#0F2D40] via-[#1F2937] to-[#2B1247] flex flex-col items-center justify-center z-50 transition-all duration-1000 ${
        !isLoading ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-[#6B46C1] rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-[#F4B41A] rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-white rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-[#6B46C1] rounded-full animate-pulse opacity-30"></div>

        {/* Animated lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6B46C1] to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4B41A] to-transparent opacity-20 animate-pulse"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main Logo/Icon Animation */}
        <div className="mb-12 relative">
          {/* Pillar Animation */}
          <div className="pillar-container">
            <div className="pillar-base"></div>
            <div className="pillar-column"></div>
            <div className="pillar-capital"></div>
          </div>

          {/* Digital particles */}
          <div className="particles-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 tracking-wide">
          <span className="font-playfair italic text-[#F4B41A]">
            The Digital
          </span>
          <br />
          <span className="text-[#6B46C1]">Pillar</span>
        </h1>

        {/* Loading Text */}
        <div className="mb-8 h-8 flex items-center justify-center">
          <p className="text-white/80 text-lg font-medium animate-pulse">
            {currentText}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="bg-white/10 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#6B46C1] to-[#F4B41A] h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <p className="text-white/60 text-sm font-mono">{progress}%</p>
      </div>

      <style>
        {`
        .pillar-container {
          position: relative;
          width: 80px;
          height: 120px;
          margin: 0 auto;
        }

        .pillar-base {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 20px;
          background: linear-gradient(45deg, #6B46C1, #7c5ac9);
          border-radius: 8px;
          animation: pillarGlow 2s ease-in-out infinite alternate;
        }

        .pillar-column {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 80px;
          background: linear-gradient(180deg, #6B46C1, #4c1d95);
          border-radius: 10px;
          animation: pillarPulse 1.5s ease-in-out infinite;
        }

        .pillar-capital {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 20px;
          background: linear-gradient(45deg, #F4B41A, #f7c538);
          border-radius: 8px;
          animation: capitalShine 2s ease-in-out infinite;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #F4B41A;
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }

        .particle-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .particle-2 { top: 30%; right: 15%; animation-delay: 0.5s; }
        .particle-3 { top: 60%; left: 20%; animation-delay: 1s; }
        .particle-4 { top: 70%; right: 10%; animation-delay: 1.5s; }
        .particle-5 { top: 40%; left: 5%; animation-delay: 2s; }
        .particle-6 { top: 50%; right: 5%; animation-delay: 2.5s; }

        @keyframes pillarGlow {
          0% { box-shadow: 0 0 20px rgba(108, 70, 193, 0.5); }
          100% { box-shadow: 0 0 40px rgba(108, 70, 193, 0.8); }
        }

        @keyframes pillarPulse {
          0%, 100% { transform: translateX(-50%) scaleY(1); }
          50% { transform: translateX(-50%) scaleY(1.1); }
        }

        @keyframes capitalShine {
          0% { box-shadow: 0 0 15px rgba(244, 180, 26, 0.3); }
          100% { box-shadow: 0 0 30px rgba(244, 180, 26, 0.6); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }

        /* Additional floating animation for particles */
        .particle:nth-child(odd) {
          animation: floatReverse 4s ease-in-out infinite;
        }

        @keyframes floatReverse {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.5;
          }
          25% { 
            transform: translateY(-15px) translateX(10px) scale(1.1);
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-10px) translateX(-5px) scale(0.9);
            opacity: 0.6;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Loader;
