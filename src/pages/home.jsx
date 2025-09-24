import React, { useEffect, useState, useRef } from 'react';

export default function Home() {
  const backgroundImages = [
    '/images/fond.jpg',
    '/images/fond2.jpg',
    '/images/fond3.jpg',
    '/images/fond4.jpg',
    '/images/fond5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Variables d'état pour les animations
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  // formulaire de contact
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

  // UN SEUL useEffect pour les images de fond (corrigé)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Animation d'apparition au chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Animation des compteurs avec Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.7 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const counters = [
      { id: 'counter-98', target: 98, suffix: '%', duration: 2000 },
      { id: 'counter-13', target: 13, suffix: '+', duration: 1500 },
      { id: 'counter-500', target: 500, suffix: '+', duration: 2500 }
    ];

    counters.forEach((counter, index) => {
      setTimeout(() => {
        const element = document.getElementById(counter.id);
        if (!element) return;

        let current = 0;
        const increment = counter.target / (counter.duration / 16);

        const timer = setInterval(() => {
          current += increment;
          if (current >= counter.target) {
            element.textContent = counter.target + counter.suffix;
            clearInterval(timer);
          } else {
            element.textContent = Math.ceil(current) + counter.suffix;
          }
        }, 16);
      }, index * 300);
    });
  };

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
      {/* Hero Section avec animations améliorées */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        {/* Background images avec système de double couche pour éviter le flash */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center animate-slow-zoom transition-opacity duration-1000 ease-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform: 'scale(1.1)',
              willChange: 'transform, opacity',
            }}
          />
        ))}

        {/* Overlay gradient moderne */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />

        {/* Pattern industriel subtil */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 102px)`
          }} />
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-yellow-500/20 rounded-full animate-float"
              style={{
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[60vh]">

            {/* Colonne principale - Message */}
            <div className="lg:col-span-7 space-y-10">
              {/* Badge animé avec apparition progressive */}
              <div className={`inline-flex items-center space-x-2 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '0.2s' }}>
                <div className="w-3 h-3 bg-yellow-500 animate-pulse-slow" />
                <span className="text-yellow-500 font-bold text-sm tracking-wider">
                  DEPUIS 2011
                </span>
                <div className="w-12 h-0.5 bg-yellow-500 animate-expand-width" />
              </div>

              {/* Titre principal avec animations échelonnées */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
                  <span className={`inline-block transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`} style={{ transitionDelay: '0.4s' }}>
                    BÂTIR
                  </span>{' '}
                  <span className={`inline-block transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`} style={{ transitionDelay: '0.5s' }}>
                    CE
                  </span>{' '}
                  <span className={`inline-block transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`} style={{ transitionDelay: '0.6s' }}>
                    QUI
                  </span>
                  <span className={`block text-yellow-500 transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: '0.7s' }}>
                    VOUS IMPORTE
                  </span>
                </h1>

                <p className={`text-xl md:text-2xl text-slate-200 font-light max-w-xl leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '0.9s' }}>
                  L'expertise qui inspire la confiance. Des ouvrages qui rendent fiers.
                  Avec <span className="text-yellow-500 font-semibold animate-glow">DICATE</span>,
                  vos projets prennent de la hauteur.
                </p>
              </div>

              {/* Statistiques animées */}
              <div
                ref={counterRef}
                className={`flex flex-wrap gap-8 pt-8 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1.1s' }}
              >
                <div className="space-y-1 group transform hover:scale-110 transition-transform duration-300">
                  <div id="counter-98" className="text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">
                    98%
                  </div>
                  <div className="text-slate-300 text-sm font-medium">DÉLAIS RESPECTÉS</div>
                </div>
                <div className="space-y-1 group transform hover:scale-110 transition-transform duration-300">
                  <div id="counter-13" className="text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">
                    13+
                  </div>
                  <div className="text-slate-300 text-sm font-medium">ANNÉES D'EXPERTISE</div>
                </div>
                <div className="space-y-1 group transform hover:scale-110 transition-transform duration-300">
                  <div id="counter-500" className="text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">
                    500+
                  </div>
                  <div className="text-slate-300 text-sm font-medium">PROJETS LIVRÉS</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-6 pt-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '1.3s' }}>
                <button className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:translate-x-1 flex items-center">
                  DÉCOUVRIR NOS PROJETS
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                  OBTENIR UN DEVIS
                </button>
              </div>
            </div>

            {/* Colonne sidebar - Informations */}
            <div className={`lg:col-span-5 lg:pl-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '1.5s' }}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-0.5 bg-yellow-500 mr-3 animate-expand-width" />
                  NOTRE EXPERTISE
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Construction & Rénovation</h4>
                      <p className="text-slate-300 text-sm">Gros œuvre, second œuvre, finitions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location de Bennes</h4>
                      <p className="text-slate-300 text-sm">Service rapide, tarifs transparents</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-600/20 border border-slate-400/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Accompagnement A-Z</h4>
                      <p className="text-slate-300 text-sm">Un seul interlocuteur, de père en fils</p>
                    </div>
                  </div>
                </div>

                {/* Contact rapide */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-slate-300 text-sm mb-3">Urgence chantier ?</p>
                  <a href="tel:0123456789" className="text-yellow-500 font-bold text-lg hover:text-yellow-400 transition-colors">
                    01 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de progression amélioré */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 transition-all duration-500 transform hover:scale-y-150 hover:shadow-lg ${
                index === currentImageIndex
                  ? 'w-12 bg-yellow-500 shadow-lg shadow-yellow-500/50'
                  : 'w-8 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Section Expertise BTP complète */}
      <div className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-yellow-500 bg-yellow-500/20 px-3 py-1 tracking-wide">
              TOUS CORPS D'ÉTAT
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-4 leading-tight">
              UNE EXPERTISE
              <span className="block text-yellow-500">COMPLÈTE</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
              De la fondation à la finition, nous maîtrisons tous les métiers du bâtiment
              pour vous offrir une solution clé en main.
            </p>
          </div>

          {/* Split Intérieur/Extérieur */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

            {/* Travaux Intérieurs */}
            <div className="bg-white p-12 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900">
                  TRAVAUX
                  <span className="block text-blue-600">INTÉRIEURS</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Gros œuvre</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                      Cloisons & doublages
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                      Dalle & chape
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                      Ouvertures
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Second œuvre</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
                      Électricité
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
                      Plomberie
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
                      Chauffage & climatisation
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Finitions</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-600 mt-2 mr-3 flex-shrink-0"></div>
                      Carrelage & faïence
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-600 mt-2 mr-3 flex-shrink-0"></div>
                      Peinture & revêtements
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-600 mt-2 mr-3 flex-shrink-0"></div>
                      Menuiseries intérieures
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Spécialités</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-600 mt-2 mr-3 flex-shrink-0"></div>
                      Isolation thermique
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-600 mt-2 mr-3 flex-shrink-0"></div>
                      Agencement sur mesure
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-600 mt-2 mr-3 flex-shrink-0"></div>
                      Mise aux normes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Travaux Extérieurs */}
            <div className="bg-yellow-500 p-12 text-slate-900">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-slate-900 flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900">
                  TRAVAUX
                  <span className="block">EXTÉRIEURS</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Gros œuvre</h4>
                  <ul className="space-y-2 text-slate-800">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-900 mt-2 mr-3 flex-shrink-0"></div>
                      Terrassement & fondations
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-900 mt-2 mr-3 flex-shrink-0"></div>
                      Maçonnerie & béton
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-slate-900 mt-2 mr-3 flex-shrink-0"></div>
                      Charpente & couverture
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Façades</h4>
                  <ul className="space-y-2 text-slate-800">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                      Ravalement & nettoyage
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                      Isolation extérieure (ITE)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                      Enduits & bardages
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Aménagements</h4>
                  <ul className="space-y-2 text-slate-800">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white mt-2 mr-3 flex-shrink-0"></div>
                      Terrasses & allées
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white mt-2 mr-3 flex-shrink-0"></div>
                      Clôtures & portails
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white mt-2 mr-3 flex-shrink-0"></div>
                      VRD & assainissement
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Spécialités</h4>
                  <ul className="space-y-2 text-slate-800">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white mt-2 mr-3 flex-shrink-0"></div>
                      Étanchéité toiture
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white mt-2 mr-3 flex-shrink-0"></div>
                      Zinguerie & gouttières
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white mt-2 mr-3 flex-shrink-0"></div>
                      Démolition sélective
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-4">
                UN SEUL INTERLOCUTEUR
                <span className="block text-yellow-500">POUR TOUT VOTRE PROJET</span>
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Coordination optimale, délais maîtrisés, qualité garantie.
                Notre équipe pluridisciplinaire gère votre chantier de A à Z.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold text-lg hover:bg-yellow-400 transition-colors">
                  VOIR NOS RÉALISATIONS
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors">
                  DEVIS PERSONNALISÉ
                </button>
              </div>
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

      {/* CSS personnalisé pour les animations */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.1) translateZ(0); }
          100% { transform: scale(1.15) translateZ(0); }
        }

        @keyframes expand-width {
          0% { width: 0; }
          100% { width: 3rem; }
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(234, 179, 8, 0.5); }
          50% { text-shadow: 0 0 20px rgba(234, 179, 8, 0.8), 0 0 30px rgba(234, 179, 8, 0.6); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.95); }
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }

        .animate-expand-width {
          animation: expand-width 1.5s ease-out forwards;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
