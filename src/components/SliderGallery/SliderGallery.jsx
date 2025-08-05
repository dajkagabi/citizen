import React, { useEffect, useState } from "react";
import slider from '../../assets/slider.jpg';
import slider2 from '../../assets/slider-2.jpg';
import slider3 from '../../assets/slider-3.jpg';
import slider4 from '../../assets/slider-4.jpg';
import slider5 from '../../assets/slider-5.jpg';
import slider6 from '../../assets/slider-6.jpg';
import slider7 from '../../assets/slider-7.jpg';
import slider8 from '../../assets/slider-8.jpg';
import slider9 from '../../assets/slider-9.jpg';

const images = [
    slider,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,

];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 másodpercenként vált
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Gomb a Collections részre */}
    
    </section>
  );
};

export default HeroSlider;
