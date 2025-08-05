import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  {
    /** useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
*/
  }
  return (
    <nav className="bg-transparent text-[#072449] fixed top-0 left-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-semibold text-[var(--main-text-color)] tracking-wide"
            >
              <img src={logo} alt="" className="h-15" />
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-[var(--main-text-color)] hover:text-[#191970] transition"
            >
              HOME
            </Link>
            <Link
              to="/collecions"
              className="text-[var(--main-text-color)] hover:text-[#191970] transition"
            >
              COLLECTIONS
            </Link>
            <Link
              to="/about"
              className="text-[var(--main-text-color)] hover:text-[#191970] transition"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="text-[var(--main-text-color)] hover:text-[#191970] transition"
            >
              CONTACT
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[var(--main-text-color)] hover:text-[#191970] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 pt-4 pb-4 space-y-3">
          <Link
            to="/"
            className="block text-[var(--main-text-color)] hover:text-[#191970]"
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <Link
            to="/collection"
            className="block text-[var(--main-text-color)] hover:text-[#191970]"
            onClick={toggleMenu}
          >
            COLLECTIONS
          </Link>
          <Link
            to="/about"
            className="block text-[var(--main-text-color)] hover:text-[#191970]"
            onClick={toggleMenu}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="block text-[var(--main-text-color)] hover:text-[#191970]"
            onClick={toggleMenu}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
