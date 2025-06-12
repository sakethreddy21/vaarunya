import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/Vaarunya_cropped_bg.png'; // Adjust the path to your logo file

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0  ml-[-10px]"> {/* Added ml-[-8px] to shift logo left */}
            <img
              src={logo}
              alt="Vaarunya Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`px-4 py-2 text-base font-medium uppercase tracking-wide transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`px-4 py-2 text-base font-medium uppercase tracking-wide transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`px-4 py-2 text-base font-medium uppercase tracking-wide transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`} >
              Products
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-gray-700/30'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-100 rounded-md transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-100 rounded-md transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-100 rounded-md transition-colors duration-300"
          >
              Products
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;