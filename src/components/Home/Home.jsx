import React from 'react'
import Hero from '../Hero/Hero';
import About from '../About/About';
import SliderGallery from '../SliderGallery/SliderGallery';
import BetterStartsNow from '../Better/Better';

const Home = () => {
  return (
    <div>
        <Hero />
        <About/>
        <BetterStartsNow/>
        <SliderGallery/>
    </div>
  )
}

export default Home;