import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../common/CTAButton';
import useBackgroundSlideshow from '../../hooks/useBackgroundSlideshow';
import useIntersectionReveal from '../../hooks/useIntersectionReveal';
import useAnimatedCounters from '../../hooks/useAnimatedCounters';
import {
  heroBackgrounds,
  heroCopy,
  heroCtas,
  heroStats,
} from '../../data/home/heroContent';

const HeroSection = () => {
  const {
    images,
    currentIndex,
    isReady,
    selectImage,
  } = useBackgroundSlideshow(heroBackgrounds);

  const { ref: heroRef, isVisible } = useIntersectionReveal({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionReveal({
    threshold: 0.6,
  });
  const counterValues = useAnimatedCounters(heroStats, { active: statsVisible });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      {isReady ? (
        images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform: 'scale(1.05)',
              willChange: index === currentIndex ? 'opacity' : 'auto',
            }}
          />
        ))
      ) : (
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white text-sm">Chargement...</p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[60vh]">
          <div className="lg:col-span-7 space-y-10">
            <div
              className={`inline-flex items-center space-x-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-3 h-3 bg-yellow-500 animate-pulse" />
              <span className="text-yellow-500 font-bold text-sm tracking-wider">
                {heroCopy.badge}
              </span>
              <div className="w-12 h-0.5 bg-yellow-500" />
            </div>

            <div className="space-y-6">
              <h1
                className={`text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {heroCopy.title}
                <span className="block text-yellow-500">{heroCopy.highlight}</span>
              </h1>

              <p
                className={`text-xl md:text-2xl text-slate-200 font-light max-w-xl leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                {heroCopy.description}
              </p>
            </div>

            <div
              ref={statsRef}
              className={`flex flex-wrap gap-8 pt-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="space-y-1 group transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">
                    {counterValues[index] ?? `${stat.target}${stat.suffix ?? ''}`}
                  </div>
                  <div className="text-slate-300 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-6 pt-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              <CTAButton as={Link} to="/realisations" variant="primary">
                {heroCtas[0]?.label}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </CTAButton>
              <CTAButton as={Link} to="/contact" variant="secondary">
                {heroCtas[1]?.label}
              </CTAButton>
            </div>
          </div>

          <div
            className={`lg:col-span-5 lg:pl-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '0.9s' }}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">NOTRE EXPERTISE</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Construction & Rénovation
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Gros œuvre, second œuvre, finitions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location de Bennes</h4>
                    <p className="text-slate-300 text-sm">Service rapide, tarifs transparents</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-600/20 border border-slate-400/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Accompagnement A-Z</h4>
                    <p className="text-slate-300 text-sm">
                      Un seul interlocuteur, de père en fils
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-slate-300 text-sm mb-3">Urgence chantier ?</p>
                <a
                  href="tel:0762205219"
                  className="text-yellow-500 font-bold text-lg hover:text-yellow-400 transition-colors"
                >
                  07 62 20 52 19
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={`indicator-${index}`}
            type="button"
            onClick={() => selectImage(index)}
            aria-label={`Image ${index + 1}`}
            className={`h-1 transition-all duration-500 ${
              index === currentIndex
                ? 'w-12 bg-yellow-500'
                : 'w-8 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
