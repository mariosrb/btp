import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { submitContactForm } from '../../services/contactService';
import {
  Truck,
  Calculator,
  CheckCircle,
  MapPin,
  Send,
} from 'lucide-react';

const Location = () => {
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState('10m3');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Location de benne',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email || '');
    const phoneDigits = String(formData.phone || '').replace(/\D/g, '');
    const phoneValid = phoneDigits.length >= 6;

    if (!emailValid || !phoneValid) {
      setSubmitStatus('error');
      setSubmitError(
        !emailValid
          ? 'Email invalide.'
          : 'Téléphone invalide (6 chiffres minimum).'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitContactForm({
        type: 'contact',
        data: {
          ...formData,
          benne: selectedSize,
        },
      });
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Renseignement',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="text-center mb-10">
              <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 tracking-wide">
                CONTACT
              </span>
              <h3 className="text-4xl font-black text-slate-900 mt-6 mb-3">
                Parlons de votre besoin
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Réponse rapide sous 24h. Indiquez-nous vos coordonnées et votre projet, nous revenons vers vous avec un devis précis.
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Benne sélectionnée : <span className="font-semibold text-slate-800">{selectedSize}</span>
              </p>
            </div>

            <form
              id="reservation-form"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom"
                  className="w-full p-4 border border-slate-200 bg-slate-50 focus:border-blue-600 focus:outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="06 12 34 56 78"
                  className="w-full p-4 border border-slate-200 bg-slate-50 focus:border-blue-600 focus:outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="vous@entreprise.fr"
                  className="w-full p-4 border border-slate-200 bg-slate-50 focus:border-blue-600 focus:outline-none transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Sujet
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-slate-200 bg-slate-50 focus:border-blue-600 focus:outline-none transition-colors font-medium"
                >
                  <option>Location de benne</option>
                  <option>Demande de devis</option>
                  <option>Renseignement</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Décrivez votre besoin, les délais souhaités, le budget estimé..."
                  className="w-full border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-3 bg-yellow-500 px-8 py-4 text-lg font-black text-slate-900 transition hover:bg-yellow-400 hover:shadow-xl hover:shadow-yellow-500/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Envoyer ma demande
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                    <CheckCircle className="h-4 w-4" />
                    Message envoyé ! Nous revenons vers vous très vite.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    Une erreur est survenue. Merci de réessayer ou de nous appeler directement.
                    {submitError && (
                      <span className="block text-xs mt-1 opacity-80">{submitError}</span>
                    )}
                  </div>
                )}
              </div>
            </form>
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
