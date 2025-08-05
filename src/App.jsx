import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer"; 
import Collection from "./components/Collection/Collection";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
     
        <Route path="/collections" element={<Collection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
