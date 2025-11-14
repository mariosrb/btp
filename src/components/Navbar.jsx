import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElegantNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      scrolled
        ? 'bg-slate-900 backdrop-blur-md shadow-xl border-b border-slate-700/50'
        : 'bg-slate-900 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img
                src="./images/logo2.svg"
                alt="Logo DICATE"
                className="w-auto h-20 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-200 hover:text-white font-medium transition-all duration-200 text-base"
            >
              Accueil
            </Link>

            <Link
              to="/qui-sommes-nous"
              className="text-slate-200 hover:text-white font-medium transition-all duration-200 text-base"
            >
              Qui sommes-nous
            </Link>

            <Link
              to="/realisations"
              className="text-slate-200 hover:text-white font-medium transition-all duration-200 text-base"
            >
              Réalisations
            </Link>

            <Link
              to="/location"
              className="text-slate-200 hover:text-white font-medium transition-all duration-200 text-base"
            >
              Location
            </Link>

            <Link
              to="/contact"
              className="rounded-lg font-semibold border border-white text-white bg-white/10 shadow-sm transition-all duration-200 hover:bg-white hover:text-yellow-400 px-6 py-2.5 text-base"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="md:hidden text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <Link
              to="/"
              className="block px-3 py-2 text-slate-200 hover:text-white hover:bg-slate-800/50 font-medium transition-all duration-200 text-sm rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>

            <Link
              to="/qui-sommes-nous"
              className="block px-3 py-2 text-slate-200 hover:text-white hover:bg-slate-800/50 font-medium transition-all duration-200 text-sm rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Qui sommes-nous
            </Link>

            <Link
              to="/realisations"
              className="block px-3 py-2 text-slate-200 hover:text-white hover:bg-slate-800/50 font-medium transition-all duration-200 text-sm rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Réalisations
            </Link>

            <Link
              to="/location"
              className="block px-3 py-2 text-slate-200 hover:text-white hover:bg-slate-800/50 font-medium transition-all duration-200 text-sm rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Location
            </Link>

            <Link
              to="/contact"
              className="block mx-3 mt-4 px-4 py-2 rounded-lg font-semibold border border-white text-white bg-white/10 shadow-sm transition-all duration-200 hover:bg-white hover:text-yellow-400 text-sm text-center"
              onClick={() => setMenuOpen(false)}
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
