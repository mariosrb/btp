import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElegantNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gradient-to-r from-blue-900 to-gray-900 shadow-lg' : 'bg-gradient-to-r from-blue-800 to-gray-800 bg-opacity-95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img
                src="./images/logo.jpg"
                alt="Logo DICATE"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-200 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Présentation
            </Link>

            <Link
              to="/about"
              className="text-slate-200 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Qui sommes-nous
            </Link>

            <Link
              to="/realisations"
              className="text-slate-200 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Réalisations
            </Link>
            
            <Link
              to="/location"
              className="text-slate-200 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Location
            </Link>

            <Link
              to="/contact"
              className="px-5 py-2 rounded-lg text-sm font-semibold border border-white text-white bg-transparent backdrop-blur-md shadow-sm transition-all duration-200 hover:bg-white hover:bg-opacity-10 hover:text-blue-900"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ElegantNavbar;
