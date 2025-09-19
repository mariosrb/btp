import React, { useState } from 'react';
import { Truck, Clock, Shield, Phone, Calculator, CheckCircle, MapPin, Calendar } from 'lucide-react';

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
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Location de Bennes
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solutions professionnelles pour tous vos projets de construction et rénovation.
            Livraison rapide et service de qualité garantis.
		  </p>
			<div className="flex flex-wrap justify-center gap-4">
			<div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
				<CheckCircle className="w-5 h-5 mr-2 text-white" />
				<span className="text-gray-900">Livraison 24h</span>
			</div>
			<div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
				<CheckCircle className="w-5 h-5 mr-2 text-white" />
				<span className="text-gray-900">Tarifs transparents</span>
			</div>
			<div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
				<CheckCircle className="w-5 h-5 mr-2 text-white" />
				<span className="text-gray-900">Service 7j/7</span>
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
