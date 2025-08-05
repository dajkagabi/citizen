import React from 'react'
import Hero from '../Hero/Hero';
import About from '../About/About';
import SliderGallery from '../SliderGallery/SliderGallery';
import BetterStartsNow from '../Better/Better';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
        <Hero />
        <About/>
        <BetterStartsNow/>
        <SliderGallery/>
        <Contact/>
    </div>
  )
}

export default Home;