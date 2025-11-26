import React from 'react';
import { Link } from 'react-router-dom';
import { rentalProducts } from '../../data/home/rentalProducts';

const RentalSection = () => (
  <section className="pt-24 pb-20 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-7">
          <div className="space-y-6">
            <span className="inline-block text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 tracking-wide">
              SERVICE PREMIUM
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              LOCATION DE
              <span className="block text-blue-600">BENNES</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Service rapide et professionnel dans toute l'Île-de-France. De la livraison express au tri sélectif, nous adaptons nos solutions à vos besoins.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-12">
          <div className="bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi nous choisir ?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 mt-2 flex-shrink-0" />
                <span className="text-slate-700">Livraison garantie sous 24h</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 mt-2 flex-shrink-0" />
                <span className="text-slate-700">Tarification transparente et équitable</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 mt-2 flex-shrink-0" />
                <span className="text-slate-700">Service client réactif 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {rentalProducts.map((item) => (
          <div key={item.title} className="group">
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <img
                  src={`/images/${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
                <Link
                  to="/location#reservation"
                  className="block w-full py-3 bg-yellow-300 text-black font-bold text-center hover:bg-yellow-400 transition-colors duration-200"
                >
                  LOUER CETTE BENNE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden shadow-2xl">
        <div className="bg-slate-900 p-12 text-white">
          <h3 className="text-3xl font-black mb-4">
            URGENCE ?
            <span className="block text-yellow-400">LIVRAISON EXPRESS</span>
          </h3>
          <p className="text-slate-300 mb-8 text-lg">
            Commandez maintenant, livré dans les 2 heures. Service disponible 7j/7 dans toute l'Île-de-France.
          </p>
          <a
            href="tel:0762205219"
            className="inline-block bg-yellow-500 text-slate-900 px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            APPELER : 07 62 20 52 19
          </a>
        </div>
        <div className="bg-white p-12">
          <h3 className="text-3xl font-black text-slate-900 mb-4">
            DEVIS
            <span className="block text-blue-600">PERSONNALISÉ</span>
          </h3>
          <p className="text-slate-600 mb-8 text-lg">
            Réponse sous 24h. Tarification adaptée à votre projet. Conseils inclus par nos experts.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            DEMANDER UN DEVIS
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default RentalSection;
