import React from "react";
import hero from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
     
      <img
        src={hero}
        alt="Citizen Watch"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
};

export default Hero;
