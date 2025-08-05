// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-[#001840] py-10">
      <div className="container mx-auto px-4">
        {/* Felső rész: Navigáció */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo és leírás */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">CITIZEN</h3>
            <p className="text-sm">
              Explore the world of CITIZEN watches, where craftsmanship meets innovation. Our timepieces are designed to inspire, offering a perfect blend of style, technology, and reliability.
            </p>
          </div>

          {/* Navigációs linkek */}
          <div className="w-full md:w-1/3 flex flex-wrap justify-center md:justify-end">
            <div className="mx-4 mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Explore</h4>
              <ul>
                <li><Link to="/new-arrivals" className="hover:text-[#191970] transition-colors duration-300">New Arrivals</Link></li>
                <li><Link to="/collections" className="hover:text-[#191970] transition-colors duration-300">Collections</Link></li>
                <li><Link to="/promaster" className="hover:text-[#191970] transition-colors duration-300">Promaster</Link></li>
                <li><Link to="/eco-drive" className="hover:text-[#191970] transition-colors duration-300">Eco-Drive</Link></li>
              </ul>
            </div>
            <div className="mx-4 mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
              <ul>
                <li><Link to="/contact" className="hover:text-[#191970] transition-colors duration-300">Contact Us</Link></li>
                <li><Link to="/shipping-returns" className="hover:text-[#191970] transition-colors duration-300">Shipping & Returns</Link></li>
                <li><Link to="/faq" className="hover:text-[#191970] transition-colors duration-300">FAQ</Link></li>
                <li><Link to="/warranty" className="hover:text-[#191970] transition-colors duration-300">Warranty</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alsó rész: Közösségi média és jogi nyilatkozat */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.facebook.com/citizenwatch" target="_blank" rel="noopener noreferrer" className="hover:text-[#191970] transition-colors duration-300">Facebook</a>
            <a href="https://www.instagram.com/citizenwatchus" target="_blank" rel="noopener noreferrer" className="hover:text-[#191970] transition-colors duration-300">Instagram</a>
            <a href="https://twitter.com/citizenwatch" target="_blank" rel="noopener noreferrer" className="hover:text-[#191970] transition-colors duration-300">Twitter</a>
            <a href="https://www.youtube.com/user/citizenwatch" target="_blank" rel="noopener noreferrer" className="hover:text-[#191970] transition-colors duration-300">YouTube</a>
          </div>
          <p>© {new Date().getFullYear()} CITIZEN Watch Company of America, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;