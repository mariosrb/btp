import React from 'react';
import {
  Building2,
  Users,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Briefcase,
  Settings,
  Phone,
  Target,
  Hammer,
  Home,
  Factory,
  Store,
  TrendingUp,
} from 'lucide-react';

const QuiSommesNous = () => {
  const certifications = [
    { icon: Award, title: 'RGE', desc: "Reconnu Garant de l'Environnement" },
    { icon: Shield, title: 'Assurance Décennale', desc: 'Couverture complète 10 ans' },
    { icon: CheckCircle, title: 'Qualibat', desc: 'Qualification professionnelle BTP' },
    { icon: Star, title: 'Certifié', desc: 'Normes qualité respectées' },
  ];

  const team = [
    { name: 'Jean Dicate', role: 'Fondateur & Directeur Général', icon: Users, exp: '25+ ans' },
    { name: 'Marie Dicate', role: 'Directrice Administrative', icon: Briefcase, exp: '20+ ans' },
    { name: 'Pierre Dicate', role: 'Directeur Technique', icon: Settings, exp: '22+ ans' },
  ];

  const services = [
    { icon: Building2, title: 'Construction', desc: 'Gros œuvre, charpente, toiture', sectors: ['Résidentiel', 'Tertiaire'] },
    { icon: Hammer, title: 'Démolition', desc: 'Terrassement et démolition', sectors: ['Industriel', 'Commercial'] },
    { icon: Store, title: 'Commerce', desc: 'Magasins, pharmacies, restaurants', sectors: ['Retail', 'Restauration'] },
    { icon: Factory, title: 'Industriel', desc: 'Hangars, entrepôts, usines', sectors: ['Logistique', 'Production'] },
  ];

  const evolution = [
    { year: '2011', team: '7', desc: 'Création familiale', icon: Building2 },
    { year: '2016', team: '15', desc: 'Première expansion', icon: TrendingUp },
    { year: '2020', team: '22', desc: 'Diversification', icon: Target },
    { year: '2024', team: '30', desc: 'Expertise confirmée', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative w-full bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div>
                  <span className="text-sm font-bold text-yellow-500 bg-yellow-500/20 px-3 py-1 tracking-wide">
                    DEPUIS 2011
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  DICATE
                  <span className="block text-yellow-500 text-4xl md:text-5xl font-light">
                    De père en fils
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl">
                  Un savoir-faire transmis avec passion. Quatre valeurs nous guident : l'héritage familial, la qualité artisanale, la confiance mutuelle et le respect absolu des délais.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Nos chiffres</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Années d'expertise</span>
                    <span className="text-2xl font-black text-yellow-500">13+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Délais respectés</span>
                    <span className="text-2xl font-black text-yellow-500">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Projets livrés</span>
                    <span className="text-2xl font-black text-yellow-500">500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Collaborateurs</span>
                    <span className="text-2xl font-black text-yellow-500">30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {evolution.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-900">{item.year}</span>
                  <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-2">{item.team} personnes</div>
                <div className="text-slate-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <div>
                <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 tracking-wide">
                  NOTRE HISTOIRE
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                QUATRE PILIERS
                <span className="block text-yellow-500">INÉBRANLABLES</span>
              </h2>

              <div className="space-y-6 text-slate-700 leading-relaxed">
                <div className="bg-white p-6 shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">L'héritage familial (2011)</h3>
                  <p>
                    Tout a commencé par une transmission de savoir-faire de père en fils. Cette expertise artisanale, héritée de générations de bâtisseurs, constitue le socle de notre entreprise. Nous étions 7, unis par cette même passion du travail bien fait.
                  </p>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-yellow-600 mb-3">La qualité avant tout</h3>
                  <p>
                    Chez DICATE, chaque geste compte. Notre savoir-faire artisanal se traduit par une attention minutieuse aux détails, l'utilisation de techniques éprouvées et une exigence constante d'excellence. Pas de compromis sur la qualité, jamais.
                  </p>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-slate-600">
                  <h3 className="text-xl font-bold text-slate-600 mb-3">La confiance, notre moteur</h3>
                  <p>
                    Construire une relation de confiance avec nos clients, c'est notre priorité absolue. Transparence dans les devis, communication constante sur l'avancement, conseils avisés... Cette confiance mutuelle fait notre réputation.
                  </p>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-slate-400">
                  <h3 className="text-xl font-bold text-slate-600 mb-3">L'engagement délai</h3>
                  <p>
                    "Un délai annoncé est un délai respecté." Cette phrase résume notre philosophie. Avec 30 collaborateurs expérimentés et une organisation rodée, nous tenons nos engagements de planning à 98%. Parce que votre temps a de la valeur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-slate-900 text-white p-8">
                <h3 className="text-2xl font-bold mb-6">En chiffres</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-500 mb-1">98%</div>
                    <div className="text-slate-300">Délais respectés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-500 mb-1">13</div>
                    <div className="text-slate-300">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-500 mb-1">500+</div>
                    <div className="text-slate-300">Projets réalisés</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500 text-slate-900 p-8">
                <h4 className="text-xl font-bold mb-3">Notre promesse</h4>
                <p className="font-medium">"Un délai annoncé est un délai respecté."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 tracking-wide">
              EXPERTISE COMPLÈTE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
              TOUS CORPS DE MÉTIER
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Du gros œuvre aux aménagements spécialisés, nous maîtrisons chaque étape avec le même niveau de qualité artisanale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-slate-600 text-center mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.sectors.map((sector, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 overflow-hidden shadow-2xl">
          <div className="bg-white p-12 text-center">
            <div className="w-20 h-20 bg-blue-100 mx-auto mb-6 flex items-center justify-center">
              <Home className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Particuliers</h3>
            <p className="text-slate-600 mb-6">
              Maisons individuelles, extensions, rénovations complètes
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 mr-3" />
                Gros œuvre et charpente
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 mr-3" />
                Toiture et couverture
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 mr-3" />
                Terrassement
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-12 text-center text-white">
            <div className="w-20 h-20 bg-yellow-500 mx-auto mb-6 flex items-center justify-center">
              <Store className="w-10 h-10 text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Commerces</h3>
            <p className="text-slate-300 mb-6">
              Magasins, pharmacies, restaurants, bureaux
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-500 mr-3" />
                Aménagement sur mesure
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-500 mr-3" />
                Rénovation express
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-500 mr-3" />
                Mise aux normes
              </li>
            </ul>
          </div>

          <div className="bg-white p-12 text-center">
            <div className="w-20 h-20 bg-slate-200 mx-auto mb-6 flex items-center justify-center">
              <Factory className="w-10 h-10 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Industrie</h3>
            <p className="text-slate-600 mb-6">
              Hangars, entrepôts, usines, bâtiments industriels
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-600 mr-3" />
                Construction métallique
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-600 mr-3" />
                Grands volumes
              </li>
              <li className="flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-600 mr-3" />
                Délais serrés
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 tracking-wide">
              L'ÉQUIPE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
              QUI FAIT LA
              <span className="block text-yellow-500">DIFFÉRENCE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-slate-900 p-8 text-center text-white">
                  <div className="w-20 h-20 bg-yellow-500 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <member.icon className="w-10 h-10 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-yellow-500 font-semibold">{member.role}</p>
                </div>
                <div className="p-6 text-center">
                  <div className="inline-block bg-slate-100 px-4 py-2 text-slate-700 font-bold">
                    {member.exp} d'expérience
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-12 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              30 Collaborateurs à Votre Service
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Électriciens qualifiés, plombiers expérimentés, maçons chevronnés, compagnons polyvalents, chefs d'équipe rigoureux et conducteurs de travaux certifiés… Notre entreprise réunit tous les savoir-faire essentiels du bâtiment. Chaque membre partage la même exigence de qualité et la passion du travail bien fait, transmise de père en fils.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <span className="text-sm font-bold text-slate-600 bg-slate-200 px-3 py-1 tracking-wide">
              GARANTIES
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
              CERTIFICATIONS
              <span className="block text-blue-600">&amp; QUALITÉ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-slate-100 mx-auto mb-6 flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
                <p className="text-slate-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            L'EXCELLENCE FAMILIALE
            <span className="block text-yellow-500">À VOTRE SERVICE</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            De père en fils, 13 ans de savoir-faire, 98% de délais respectés, plus de 500 clients qui nous font confiance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="flex items-center justify-center px-8 py-4 bg-yellow-500 text-slate-900 font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5 mr-3" />
              07 62 20 52 19
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors">
              Devis gratuit en ligne
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuiSommesNous;
