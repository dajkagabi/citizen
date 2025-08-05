import React from "react";
import better from "../../assets/better.png";

const HeroSplit = () => {
  return (
    <div className="bg-white text-[var(--main-text-color)] min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-center lg:text-left p-4 lg:p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            BETTER STARTS NOW
          </h1>
          <p className="text-lg text-[var(--main-text-color)] mb-8 max-w-xl mx-auto lg:mx-0">
            CITIZEN's watchmaking philosophy is that no matter who you are or
            what you do, it's always possible to create something better, and
            now is the time to start working on it.
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-900 text-[var(--main-text-color)] text-lg rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            <span>Learn more</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>

        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <div className="w-full h-96 lg:h-[600px] ">
            <img
              src={better}
              alt="Watchmaker"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSplit;
