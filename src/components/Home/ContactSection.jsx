import React from 'react';
import StatisticCard from '../common/StatisticCard';
import useContactForm from '../../hooks/useContactForm';
import { contactCopy, contactStats } from '../../data/home/contactInfo';

const ContactSection = () => {
  const {
    formData,
    status,
    error,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  if (isSuccess) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white shadow-2xl p-8 text-center">
          <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Message envoyé !</h2>
          <p className="text-slate-600">
            Merci pour votre demande. Nous vous recontacterons dans les plus brefs délais.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {contactCopy.heading}
                <span className="block text-yellow-500">{contactCopy.highlight}</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {contactCopy.description}
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {contactStats.map((stat) => (
                  <StatisticCard
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    className="text-center"
                    valueClassName="text-2xl font-black text-slate-900"
                    labelClassName="text-sm text-slate-600 normal-case"
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 bg-slate-100 p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-900 font-medium mb-1">
                    {contactCopy.phoneLabel}
                  </p>
                  <a
                    href={`tel:${contactCopy.phone.replace(/\s/g, '')}`}
                    className="text-xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    {contactCopy.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Demande de devis express
              </h3>

              {status === 'error' && (
                <div className="mb-6 p-4 border border-red-200 bg-red-50 text-red-700">
                  Une erreur est survenue. Merci de réessayer.
                  {error && (
                    <span className="block text-xs mt-2 opacity-75">
                      {String(error.message || error)}
                    </span>
                  )}
                </div>
              )}

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
                    id="accepteConditions"
                    name="accepteConditions"
                    checked={formData.accepteConditions}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600 border-2 border-slate-300 focus:ring-blue-500 focus:ring-2 mt-1"
                  />
                  <label
                    htmlFor="accepteConditions"
                    className="text-slate-600 leading-relaxed"
                  >
                    J'accepte le traitement de mes données personnelles pour cette demande de devis.
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formData.accepteConditions || isSubmitting}
                  className="w-full py-4 bg-yellow-500 text-slate-900 font-bold text-lg hover:bg-yellow-400 transition-all duration-200 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-slate-500"
                >
                  {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER MA DEMANDE'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
