import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-slate-900 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          UN PROJET EN TÊTE ?
          <span className="block text-yellow-500">PARLONS-EN</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          De la conception à la réalisation, nous vous accompagnons à chaque étape. Obtenez votre devis gratuit sous 24h.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-slate-900 font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            DEMANDER UN DEVIS
          </Link>
          <a
            href="tel:0762205219"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors"
          >
            APPELER : 07 62 20 52 19
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

