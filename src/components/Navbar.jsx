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
        ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-700/50'
        : 'bg-slate-900/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img
                src="./images/logo2.svg"
                alt="Logo DICATE"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? 'h-12' : 'h-16'
                }`}
              />
            </div>
          </div>

          {/* Toggle + Navigation */}
          <div className="flex items-center">
            {/* Bouton hamburger (mobile) */}
            <button
              type="button"
              aria-label="Ouvrir le menu"
              className="md:hidden text-slate-200 hover:text-white focus:outline-none"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="block w-6 h-0.5 bg-current mb-1"></span>
              <span className="block w-6 h-0.5 bg-current mb-1"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </button>

            {/* Liens */}
            <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex items-center space-x-8 ml-4`}>
              <Link
                to="/"
                className={`text-slate-200 hover:text-white font-medium transition-all duration-200 ${
                  scrolled ? 'text-sm' : 'text-sm'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Présentation
              </Link>

              <Link
                to="/presentation"
                className={`text-slate-200 hover:text-white font-medium transition-all duration-200 ${
                  scrolled ? 'text-sm' : 'text-sm'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Qui sommes-nous
              </Link>

              <Link
                to="/realisations"
                className={`text-slate-200 hover:text-white font-medium transition-all duration-200 ${
                  scrolled ? 'text-sm' : 'text-sm'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Réalisations
              </Link>

              <Link
                to="/location"
                className={`text-slate-200 hover:text-white font-medium transition-all duration-200 ${
                  scrolled ? 'text-sm' : 'text-sm'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Location
              </Link>

              <Link
                to="/contact"
                className={`rounded-lg font-semibold border border-white text-white bg-white/10 shadow-sm transition-all duration-200 hover:bg-white hover:text-yellow-400 ${
                  scrolled ? 'px-4 py-1.5 text-sm' : 'px-5 py-2 text-sm'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ElegantNavbar;
