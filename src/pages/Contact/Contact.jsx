import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { submitContactForm } from '../../services/contactService';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  Shield,
  Star,
  Building,
} from 'lucide-react';

const quickAccess = [
  {
    icon: Phone,
    label: 'Appel direct',
    value: '07 62 20 52 19',
    detail: '7j/7 · 7h à 20h',
    href: 'tel:0762205219',
  },
  {
    icon: Clock,
    label: 'Devis express',
    value: '< 24h',
    detail: 'Retour garanti par un chargé d’affaires',
  },
  {
    icon: MapPin,
    label: 'Zone couverte',
    value: 'Île-de-France',
    detail: 'Intervention hors région sur devis',
  },
];

const contactDetails = [
  {
    icon: Phone,
    title: 'Téléphone',
    value: '07 62 20 52 19',
    helper: 'Disponible 7j/7 · 7h → 20h',
    href: 'tel:0762205219',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'dicate.pro@gmail.com',
    helper: 'Réponse sous 24h ouvrées',
    href: 'mailto:dicate.pro@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Siège social',
    value: 'Paris & Île-de-France',
    helper: 'Déplacements rapides sur toute la région',
  },
];

const trustStats = [
  { label: 'Délais respectés', value: '98%' },
  { label: "Ans d’expérience", value: '13' },
  { label: 'Projets livrés', value: '500+' },
  { label: 'Intervenants', value: '30' },
];

const heroImage = '/images/photo0.jpg';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Renseignement',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace('#', '');

    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    scrollToTarget();
    const t = setTimeout(scrollToTarget, 150);
    return () => clearTimeout(t);
  }, [location.hash]);

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
        data: formData,
      });
      setSubmitStatus('success');
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

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden px-4 pb-24 pt-24 text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-yellow-500/25 via-yellow-500/10 to-transparent blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl space-y-12">
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-flex items-center justify-center border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90 md:justify-start">
              Contact
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
                Un interlocuteur unique
                <span className="block text-yellow-400">pour piloter votre chantier</span>
              </h1>
              <p className="text-lg text-white/70 md:text-xl">
                Expliquez-nous vos besoins : nous revenons vers vous avec un plan d’action précis, un devis clair et un calendrier réaliste.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {quickAccess.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    <span>{item.label}</span>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-white/10">
                      <Icon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{item.value}</p>
                      <p className="text-sm text-white/70">{item.detail}</p>
                    </div>
                  </div>
                </>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="border border-white/20 bg-white/10 backdrop-blur-sm p-8 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/15"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="border border-white/20 bg-white/10 backdrop-blur-sm p-8 shadow-lg shadow-slate-900/10"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative -mt-16 bg-gradient-to-b from-white via-slate-50 to-white px-4 pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 xl:grid-cols-3">
          <div className="space-y-8 border border-slate-100 bg-white p-10 text-slate-900 shadow-2xl shadow-slate-900/10">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Coordonnées
              </p>
              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const valueNode = detail.href ? (
                    <a
                      href={detail.href}
                      className="text-lg font-semibold text-slate-900 transition-colors hover:text-yellow-500"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-slate-900">{detail.value}</p>
                  );
                  return (
                    <div key={detail.title} className="pt-4 first:pt-0">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center bg-slate-100 text-yellow-500">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                            {detail.title}
                          </p>
                          {valueNode}
                        </div>
                      </div>
                      <p className="mt-2 pl-16 text-sm text-slate-500">{detail.helper}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-slate-900">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-slate-100 bg-slate-50 p-4 text-center"
                >
                  <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="border border-slate-100 bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-yellow-500">
                <Star className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Nos engagements
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Devis détaillé et gratuit sous 24h
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Suivi par un conducteur de travaux dédié
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                  Respect des délais annoncés (98%)
                </li>
              </ul>
            </div>

          </div>

          <div className="xl:col-span-2">
            <div
              id="contact-form"
              className="bg-white p-8 text-slate-900 shadow-2xl shadow-yellow-500/10 md:p-12"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Formulaire
                </p>
                <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                  Expliquez-nous votre projet
                </h2>
                <p className="text-lg text-slate-500">
                  Plus vous nous donnez de détails, plus notre réponse sera précise (budget, délais, contraintes techniques, etc.).
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom"
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-900 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-900 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="vous@entreprise.fr"
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-900 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Sujet
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-900 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                    >
                      <option>Renseignement</option>
                      <option>Demande de devis</option>
                      <option>Location de benne</option>
                      <option>Partenariat</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Décrivez votre besoin, les délais souhaités, le budget estimé..."
                    className="w-full resize-none border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-900 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>

                <div className="space-y-4">
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

                  <p className="flex items-center gap-2 text-sm text-slate-500">
                    <Shield className="h-4 w-4 text-slate-400" />
                    Vos données restent confidentielles et ne sont jamais partagées.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
