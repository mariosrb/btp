import React, { useState } from 'react';

// Icônes SVG simples
const Truck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M5 17a2 2 0 1 0 4 0V9H5v8z"/>
    <path d="M19 17a2 2 0 1 0 4 0v-6l-4-4H9v10z"/>
  </svg>
);

const Clock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const Shield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Calculator = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <line x1="8" y1="6" x2="16" y2="6"/>
    <line x1="16" y1="10" x2="16" y2="10"/>
    <line x1="12" y1="10" x2="12" y2="10"/>
    <line x1="8" y1="10" x2="8" y2="10"/>
    <line x1="16" y1="14" x2="16" y2="14"/>
    <line x1="12" y1="14" x2="12" y2="14"/>
    <line x1="8" y1="14" x2="8" y2="14"/>
    <line x1="16" y1="18" x2="16" y2="18"/>
    <line x1="12" y1="18" x2="12" y2="18"/>
    <line x1="8" y1="18" x2="8" y2="18"/>
  </svg>
);

const CheckCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
);

const MapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Calendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function LocationBenneSection() {
  const [selectedSize, setSelectedSize] = useState('10m3');
  const [selectedDuration, setSelectedDuration] = useState('1-week');

  const benneTypes = [
    {
      id: '5m3',
      name: '5 m³',
      description: 'Parfait pour petits travaux',
      price: '120€',
      dimensions: 'L: 3m × l: 1.6m × H: 1m',
      usage: 'Rénovation appartement, débarras'
    },
    {
      id: '10m3',
      name: '10 m³',
      description: 'Idéal pour travaux moyens',
      price: '180€',
      dimensions: 'L: 4m × l: 1.8m × H: 1.4m',
      usage: 'Rénovation maison, démolition partielle',
      popular: true
    },
    {
      id: '15m3',
      name: '15 m³',
      description: 'Pour gros chantiers',
      price: '240€',
      dimensions: 'L: 5m × l: 1.8m × H: 1.7m',
      usage: 'Construction, gros œuvre'
    },
    {
      id: '20m3',
      name: '20 m³',
      description: 'Solution professionnelle',
      price: '320€',
      dimensions: 'L: 6m × l: 2m × H: 1.7m',
      usage: 'Chantiers industriels, démolition'
    }
  ];

  const services = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Livraison rapide',
      description: 'Livraison sous 24h partout en Île-de-France'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexibilité',
      description: 'Location de 1 jour à plusieurs mois selon vos besoins'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Conformité',
      description: 'Respect des normes environnementales et réglementaires'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center" style={{ color: 'white' }}>
          <h1 className="text-5xl font-bold mb-6" style={{ color: 'white' }}>
            Location de Bennes
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Solutions professionnelles pour tous vos projets de construction et rénovation. 
            Livraison rapide et service de qualité garantis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <CheckCircle />
              <span className="ml-2" style={{ color: 'white' }}>Livraison 24h</span>
            </div>
            <div className="flex items-center px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <CheckCircle />
              <span className="ml-2" style={{ color: 'white' }}>Tarifs transparents</span>
            </div>
            <div className="flex items-center px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <CheckCircle />
              <span className="ml-2" style={{ color: 'white' }}>Service 7j/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Types de Bennes */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choisissez votre benne
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de bennes pour répondre à tous vos besoins, 
            des petits travaux aux gros chantiers professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benneTypes.map((benne) => (
            <div
              key={benne.id}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                selectedSize === benne.id 
                  ? 'border-orange-500 transform scale-105' 
                  : 'border-gray-200 hover:border-orange-300'
              }`}
              onClick={() => setSelectedSize(benne.id)}
            >
              {benne.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Plus populaire
                  </span>
                </div>
              )}
              
              <div className="p-6">
                {/* Illustration simpliste de benne */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className={`w-16 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-t transform ${
                      benne.id === '5m3' ? 'scale-75' : 
                      benne.id === '10m3' ? 'scale-90' : 
                      benne.id === '15m3' ? 'scale-100' : 'scale-110'
                    }`}></div>
                    <div className={`w-20 h-3 bg-gray-600 rounded-b mx-auto transform ${
                      benne.id === '5m3' ? 'scale-75' : 
                      benne.id === '10m3' ? 'scale-90' : 
                      benne.id === '15m3' ? 'scale-100' : 'scale-110'
                    }`}></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  {benne.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {benne.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div><strong>Dimensions:</strong> {benne.dimensions}</div>
                  <div><strong>Usage:</strong> {benne.usage}</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {benne.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    /semaine HT
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-orange-600">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Formulaire de demande */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Demandez votre devis gratuit
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Type de projet *
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>Rénovation résidentielle</option>
                <option>Construction neuve</option>
                <option>Démolition</option>
                <option>Débarras</option>
                <option>Travaux de jardinage</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Taille de benne *
              </label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {benneTypes.map(benne => (
                  <option key={benne.id} value={benne.id}>
                    {benne.name} - {benne.price}/semaine
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Adresse de livraison *
              </label>
              <input 
                type="text" 
                placeholder="Adresse complète"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Date de livraison souhaitée *
              </label>
              <input 
                type="date" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nom complet *
              </label>
              <input 
                type="text" 
                placeholder="Votre nom et prénom"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Téléphone *
              </label>
              <input 
                type="tel" 
                placeholder="06 12 34 56 78"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Durée de location
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['1-week', '2-weeks', '1-month', 'other'].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedDuration === duration
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-orange-300'
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Informations complémentaires
              </label>
              <textarea 
                rows="4"
                placeholder="Décrivez votre projet, contraintes d'accès, type de déchets..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-2" />
              Vos données sont protégées et ne seront jamais partagées
            </div>
            <div className="flex gap-4">
              <button className="flex items-center px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                Appeler directement
              </button>
              <button className="flex items-center px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                <Calculator className="w-4 h-4 mr-2" />
                Demander un devis
              </button>
            </div>
          </div>
        </div>

        {/* Information tarifaire */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Informations tarifaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Tarifs inclus</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Livraison et enlèvement</li>
                <li>• Location 1 semaine</li>
                <li>• Benne étanche</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Options</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Livraison express: +30€</li>
                <li>• Week-end: +25€</li>
                <li>• Semaine supplémentaire: -20%</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Zone de livraison</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Paris et petite couronne</li>
                <li>• Île-de-France (supplément)</li>
                <li>• Autres régions sur demande</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}