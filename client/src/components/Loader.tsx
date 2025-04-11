import React from "react";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#0F2D40] flex flex-col items-center justify-center z-50 transition-transform duration-1000 ${
        !isLoading ? "-translate-y-full" : ""
      }`}
    >
      <div className="text-center">
        <div className="newtons-cradle mb-8">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
        <h1 className="text-white text-4xl font-medium mt-8">
          Welcome to{" "}
          <span className="font-playfair italic">The Digital Pillar</span>
        </h1>
      </div>

      <style>
        {`
        .newtons-cradle {
          --uib-size: 50px;
          --uib-speed: 1.2s;
          --uib-color: #fff;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--uib-size);
          height: var(--uib-size);
        }

        .newtons-cradle__dot {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          width: 25%;
          transform-origin: center top;
        }

        .newtons-cradle__dot::after {
          content: "";
          display: block;
          width: 100%;
          height: 25%;
          border-radius: 50%;
          background-color: var(--uib-color);
        }

        .newtons-cradle__dot:first-child {
          animation: swing var(--uib-speed) linear infinite;
        }

        .newtons-cradle__dot:last-child {
          animation: swing2 var(--uib-speed) linear infinite;
        }

        @keyframes swing {
          0% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }

          25% {
            transform: rotate(70deg);
            animation-timing-function: ease-in;
          }

          50% {
            transform: rotate(0deg);
            animation-timing-function: linear;
          }
        }

        @keyframes swing2 {
          0% {
            transform: rotate(0deg);
            animation-timing-function: linear;
          }

          50% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }

          75% {
            transform: rotate(-70deg);
            animation-timing-function: ease-in;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Loader;
