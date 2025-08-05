import React, { useEffect, useState } from "react";
import hero1 from "../../assets/hero-bg.jpg";
import hero2 from "../../assets/hero.jpg";
import hero3 from "../../assets/img.jpg";

const images = [hero1, hero2, hero3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 másodpercenként vált
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Képek */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Fekete áttetsző overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Gomb a Collections részre */}
      <div className="relative z-10 text-center">
        <a
          href="#collections"
          className="inline-block bg-white text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-200 transition"
        >
          Explore Collections
        </a>
      </div>
    </section>
  );
};

export default HeroSlider;
