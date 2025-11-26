import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Truck,
  Shield,
  Phone,
  Calculator,
  CheckCircle,
  MapPin,
  Calendar,
} from 'lucide-react';

const Location = () => {
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState('10m3');
  const [selectedDuration, setSelectedDuration] = useState('1-week');

  const benneTypes = [
    {
      id: '8m3',
      name: '8 m³',
      description: 'Pour gravats et terre',
      dimensions: 'L: 3.5m × l: 1.7m × H: 1.2m',
      usage: 'Rénovation, terrassement',
    },
    {
      id: '10m3',
      name: '10 m³',
      description: 'Idéal pour travaux moyens',
      dimensions: 'L: 4m × l: 1.8m × H: 1.4m',
      usage: 'Rénovation maison, démolition partielle',
      popular: true,
    },
    {
      id: '15m3',
      name: '15 m³',
      description: 'Pour gros chantiers',
      dimensions: 'L: 5m × l: 1.8m × H: 1.7m',
      usage: 'Construction, gros œuvre',
    },
    {
      id: '20m3',
      name: '20 m³',
      description: 'Solution professionnelle',
      dimensions: 'L: 6m × l: 2m × H: 1.7m',
      usage: 'Chantiers industriels, démolition',
    },
    {
      id: '30m3',
      name: '30 m³',
      description: 'Grand volume',
      dimensions: 'L: 6.5m × l: 2.4m × H: 2m',
      usage: 'Grands chantiers, DIB',
    },
  ];

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.replace('#', '');

    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    scrollToTarget();
    const timeoutId = setTimeout(scrollToTarget, 150);

    return () => clearTimeout(timeoutId);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative bg-slate-900 text-white py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/benne.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div>
                  <span className="text-sm font-bold text-yellow-500 bg-yellow-500/20 px-3 py-1 tracking-wide">
                    SERVICE PREMIUM
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  LOCATION DE
                  <span className="block text-yellow-500">BENNES</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl">
                  Solutions professionnelles pour tous vos projets de construction et rénovation.
                  Livraison rapide et service de qualité garantis.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Nos garanties</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-yellow-500 mr-3" />
                    <span className="text-slate-200">Livraison 24h</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-yellow-500 mr-3" />
                    <span className="text-slate-200">Tarifs transparents</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-yellow-500 mr-3" />
                    <span className="text-slate-200">Service 7j/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Livraison express</span>
                <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900 mt-2">2h</div>
            </div>

            <div className="bg-slate-900 p-6 shadow-xl text-white hover:-translate-y-2 transition-all duration-300 md:-mt-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Zones couvertes</span>
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-black text-yellow-500 mt-2">Île-de-France</div>
            </div>

            <div className="bg-white p-6 shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Devis</span>
                <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900 mt-2">Gratuit</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-12">
          <div className="text-center">
            <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 tracking-wide">
              NOTRE GAMME
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
              CHOISISSEZ
              <span className="block text-yellow-500">VOTRE BENNE</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une gamme complète de bennes pour répondre à tous vos besoins, des petits travaux aux gros chantiers professionnels.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {benneTypes.map((benne) => (
              <div
                key={benne.id}
                className={`relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] ${selectedSize === benne.id ? 'ring-4 ring-yellow-500 transform -translate-y-2' : ''
                  }`}
                onClick={() => setSelectedSize(benne.id)}
              >
                {benne.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-yellow-500 text-slate-900 px-4 py-1 text-sm font-bold whitespace-nowrap">
                      PLUS POPULAIRE
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div
                        className={`w-16 h-12 bg-gradient-to-br from-slate-700 to-slate-900 transform ${benne.id === '8m3'
                          ? 'scale-75'
                          : benne.id === '10m3'
                            ? 'scale-90'
                            : benne.id === '15m3'
                              ? 'scale-100'
                              : 'scale-110'
                          }`}
                      />
                      <div
                        className={`w-20 h-3 bg-yellow-500 mx-auto transform ${benne.id === '8m3'
                          ? 'scale-75'
                          : benne.id === '10m3'
                            ? 'scale-90'
                            : benne.id === '15m3'
                              ? 'scale-100'
                              : 'scale-110'
                          }`}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 text-center mb-3">
                    {benne.name}
                  </h3>
                  <p className="text-slate-600 text-center mb-6">{benne.description}</p>

                  <div className="space-y-3 text-sm text-slate-600 mb-6">
                    <div>
                      <strong>Dimensions:</strong> {benne.dimensions}
                    </div>
                    <div>
                      <strong>Usage:</strong> {benne.usage}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-900 mb-1">
                      Sur devis
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-2xl p-12 max-w-5xl mx-auto" id="reservation">
            <div className="-mt-20 pt-20" aria-hidden="true" />
            <div className="text-center mb-12">
              <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 tracking-wide">
                DEVIS GRATUIT
              </span>
              <h3 className="text-4xl font-black text-slate-900 mt-6 mb-4">
                RÉSERVEZ
                <span className="block text-blue-600">VOTRE BENNE</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Type de projet *
                </label>
                <select className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium">
                  <option>Rénovation résidentielle</option>
                  <option>Construction neuve</option>
                  <option>Démolition</option>
                  <option>Débarras</option>
                  <option>Travaux de jardinage</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Taille de benne *
                </label>
                <select
                  className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  {benneTypes.map((benne) => (
                    <option key={benne.id} value={benne.id}>
                      {benne.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Adresse de livraison *
                </label>
                <input
                  type="text"
                  placeholder="Adresse complète"
                  className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Date de livraison souhaitée *
                </label>
                <input
                  type="date"
                  className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Nom complet *
                </label>
                <input
                  type="text"
                  placeholder="Votre nom et prénom"
                  className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Durée de location
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['1-week', '2-weeks', '1-month', 'other'].map((duration) => (
                    <button
                      key={duration}
                      type="button"
                      onClick={() => setSelectedDuration(duration)}
                      className={`p-4 border-2 transition-all font-medium ${selectedDuration === duration
                        ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                        : 'border-slate-300 hover:border-blue-600 text-slate-700'
                        }`}
                    >
                      {duration === '1-week' && '1 semaine'}
                      {duration === '2-weeks' && '2 semaines'}
                      {duration === '1-month' && '1 mois'}
                      {duration === 'other' && 'Autre durée'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Informations complémentaires
                </label>
                <textarea
                  rows="4"
                  placeholder="Décrivez votre projet, contraintes d'accès, type de déchets..."
                  className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors resize-none font-medium"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-6">
              <div className="flex items-center text-slate-600">
                <Shield className="w-5 h-5 mr-2" />
                Vos données sont protégées et ne seront jamais partagées
              </div>
              <div className="flex gap-4">
                <button className="flex items-center px-6 py-4 border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler directement
                </button>
                <button className="flex items-center px-8 py-4 bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-400 transition-colors">
                  <Calculator className="w-4 h-4 mr-2" />
                  Demander un devis
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 overflow-hidden shadow-2xl">
            <div className="bg-white p-12 text-center">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Services inclus</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 mr-3" />
                  Livraison et enlèvement
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 mr-3" />
                  Location 1 semaine
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 mr-3" />
                  Benne étanche
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-12 text-center text-white">
              <h4 className="text-xl font-bold mb-6">Options</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-500 mr-3" />
                  Livraison express
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-500 mr-3" />
                  Location Week-end
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-500 mr-3" />
                  Semaine supplémentaire
                </li>
              </ul>
            </div>

            <div className="bg-white p-12 text-center">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Zone de livraison</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-600 mr-3" />
                  Paris et petite couronne
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-600 mr-3" />
                  Île-de-France (supplément)
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-600 mr-3" />
                  Autres régions sur demande
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Location;
