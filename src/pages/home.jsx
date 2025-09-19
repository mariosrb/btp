import React, { useEffect, useState } from 'react';

export default function Home() {
  const backgroundImages = [
    '/images/fond.jpg',
    '/images/fond2.jpg',
    '/images/fond3.jpg',
    '/images/fond4.jpg',
    '/images/fond5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // État pour le formulaire de contact
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    travauxInterieur: 'Aucun',
    travauxExterieur: 'Aucun',
    description: '',
    accepteConditions: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Données du formulaire:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        travauxInterieur: 'Aucun',
        travauxExterieur: 'Aucun',
        description: '',
        accepteConditions: false
      });
    }, 3000);
  };

  // Message de confirmation
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white shadow-2xl p-8 text-center">
          <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Message envoyé !</h2>
          <p className="text-slate-600">
            Merci pour votre demande. Nous vous recontacterons dans les plus brefs délais.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero avec overlay moderne */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          }}
        ></div>
        {/* Overlay sombre moderne */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/60"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              L'EXPERTISE QUI INSPIRE
              <span className="block text-yellow-400">LA CONFIANCE</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
              Des ouvrages qui rendent fiers. Avec <span className="font-bold text-yellow-400">DICATE</span>,
              vos projets prennent de la hauteur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                NOS RÉALISATIONS
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                DEVIS GRATUIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Stats avec design collé/layered */}
      <div className="relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-8 shadow-xl border-l-4 border-yellow-500">
              <div className="text-3xl font-black text-slate-900 mb-2">13+</div>
              <div className="text-slate-600 font-medium">Années d'expertise</div>
            </div>
            <div className="bg-slate-900 p-8 shadow-xl text-white md:-mt-6">
              <div className="text-3xl font-black text-yellow-400 mb-2">98%</div>
              <div className="text-slate-300 font-medium">Délais respectés</div>
            </div>
            <div className="bg-white p-8 shadow-xl border-l-4 border-blue-600">
              <div className="text-3xl font-black text-slate-900 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Projets livrés</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Location de Bennes - Design moderne industriel */}
      <div className="pt-24 pb-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header avec design asymétrique */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 tracking-wide">
                    SERVICE PREMIUM
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                  LOCATION DE
                  <span className="block text-blue-600">BENNES</span>
                </h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                  Service rapide et professionnel dans toute l'Île-de-France.
                  De la livraison express au tri sélectif, nous adaptons nos solutions à vos besoins.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-12">
              <div className="bg-white p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi nous choisir ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Livraison garantie sous 24h</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Tarification transparente et équitable</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">Service client réactif 7j/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grille produits avec effet de profondeur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group">
              <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img
                    src="/images/gravats.jpg"
                    alt="Gravats et béton"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 text-sm font-bold">
                      PLUS DEMANDÉ
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Gravats & Béton</h4>
                  <p className="text-slate-600 text-sm mb-4">Déblais, béton, parpaings, tuiles</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-900">180€</span>
                    <span className="text-sm text-slate-500">/semaine</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img
                    src="/images/bois-vegetaux.jpg"
                    alt="Bois et végétaux"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-slate-900 px-2 py-1 text-sm font-bold">
                      ÉCO-FRIENDLY
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Bois & Végétaux</h4>
                  <p className="text-slate-600 text-sm mb-4">Planches, branches, élagage</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-900">160€</span>
                    <span className="text-sm text-slate-500">/semaine</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img
                    src="/images/tout-venant.jpg"
                    alt="Tout-venant"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Tout-venant</h4>
                  <p className="text-slate-600 text-sm mb-4">Mobilier, encombrants, divers</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-900">200€</span>
                    <span className="text-sm text-slate-500">/semaine</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img
                    src="/images/dechets-tries.jpg"
                    alt="Déchets triés"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-2 py-1 text-sm font-bold">
                      PREMIUM
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Déchets triés</h4>
                  <p className="text-slate-600 text-sm mb-4">Métal, placo, isolants</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">Prix négocié</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA avec design split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden shadow-2xl">
            <div className="bg-slate-900 p-12 text-white">
              <h3 className="text-3xl font-black mb-4">
                URGENCE ?
                <span className="block text-yellow-400">LIVRAISON EXPRESS</span>
              </h3>
              <p className="text-slate-300 mb-8 text-lg">
                Commandez maintenant, livré dans les 2 heures.
                Service disponible 7j/7 dans toute l'Île-de-France.
              </p>
              <button className="bg-yellow-500 text-slate-900 px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors">
                APPELER : 01 23 45 67 89
              </button>
            </div>
            <div className="bg-white p-12">
              <h3 className="text-3xl font-black text-slate-900 mb-4">
                DEVIS
                <span className="block text-blue-600">PERSONNALISÉ</span>
              </h3>
              <p className="text-slate-600 mb-8 text-lg">
                Réponse sous 1h. Tarification adaptée à votre projet.
                Conseils inclus par nos experts.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 font-bold text-lg hover:bg-blue-700 transition-colors">
                DEMANDER UN DEVIS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Contact avec design moderne */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header avec layout asymétrique */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 tracking-wide">
                    CONTACT EXPERT
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  VOTRE PROJET
                  <span className="block text-yellow-500">MÉRITE LE MEILLEUR</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  De père en fils depuis 2011, nous accompagnons tous vos projets BTP
                  avec passion, rigueur et professionnalisme.
                </p>

                {/* Stats visuels */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-900">98%</div>
                    <div className="text-sm text-slate-600">Délais</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-900">13</div>
                    <div className="text-sm text-slate-600">Ans</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-900">500+</div>
                    <div className="text-sm text-slate-600">Projets</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-12 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Demande de devis express
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Nom *"
                      className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                    />
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Prénom *"
                      className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                    />
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="Téléphone *"
                      className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium"
                    />
                  </div>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet..."
                    rows="4"
                    className="w-full p-4 border-2 border-slate-300 bg-white focus:border-blue-600 focus:outline-none transition-colors resize-none font-medium"
                  />

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="accepteConditions"
                      checked={formData.accepteConditions}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 border-2 border-slate-300 focus:ring-blue-500 focus:ring-2 mt-1"
                    />
                    <label className="text-slate-600 leading-relaxed">
                      J'accepte le traitement de mes données personnelles pour cette demande de devis.
                    </label>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!formData.accepteConditions}
                    className="w-full py-4 bg-yellow-500 text-slate-900 font-bold text-lg hover:bg-yellow-400 transition-all duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-slate-500"
                  >
                    ENVOYER MA DEMANDE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
