import React from 'react'
import Hero from '../Hero/Hero';
import About from '../About/About';
import SliderGallery from '../SliderGallery/SliderGallery';

const Home = () => {
  return (
    <div>
        <Hero />
        <About/>
        <SliderGallery/>
    </div>
  )
}

export default Home;