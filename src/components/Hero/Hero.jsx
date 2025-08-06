import React from "react";
import hero from "../../assets/hero-b.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#d4dfed] px-6 py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8 text-gray-900">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Timeless Innovation
            <br />
            <span className="text-[#25396D]">Citizen Watches</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-xl">
            Experience Japanese precision and elegance. Discover watches where
            tradition meets cutting-edge technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-block px-8 py-3 bg-[#25396D] hover:bg-indigo-700 rounded-full font-semibold text-white shadow-lg transition"
            >
              <Link to="/collections">Explore Collection</Link>
            </a>
            <a
              href="#learn-more"
              className="inline-block px-8 py-3 border border-indigo-400 text-[#25396D] hover:bg-indigo-50 rounded-full font-semibold transition"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <img
            src={hero}
            alt="Citizen Watch"
            title="Citizen NJ0150-81L"
            className="w-full max-w-md object-cover"
          />
          <div className="absolute inset-0 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
