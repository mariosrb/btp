import React from 'react';

const HeroSection = () => {
  const stats = [
    { label: 'Projets réalisés', value: '500+' },
    { label: 'Clients satisfaits', value: '98%' },
    { label: 'Délais respectés', value: '98%' },
    { label: 'Années d\'expertise', value: '13+' },
  ];

  return (
    <section className="relative min-h-[60vh] flex items-center bg-slate-900 text-white py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/photo10.jpg)' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="space-y-6 animate-fadeIn">
              <span className="inline-block text-sm font-bold text-yellow-500 bg-yellow-500/20 px-3 py-1 tracking-wide">
                PORTFOLIO
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                NOS
                <span className="block text-yellow-500">RÉALISATIONS</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                Découvrez nos projets de construction et rénovation. Chaque réalisation témoigne de notre expertise et de notre engagement envers l'excellence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 animate-scaleIn" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Nos chiffres clés</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-slate-300">{stat.label}</span>
                    <span className="text-2xl font-black text-yellow-500">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

