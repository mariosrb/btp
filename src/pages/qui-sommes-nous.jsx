import React from 'react';
import {
  Building2,
  Users,
  Award,
  Shield,
  MapPin,
  Leaf,
  Clock,
  CheckCircle,
  Star,
  Briefcase,
  Settings,
  Phone,
  FileText,
  Target,
  ThumbsUp,
  Truck,
  Hammer,
  Zap,
  Home,
  Factory,
  Store,
  TrendingUp
} from 'lucide-react';

const AboutDicate = () => {
  const certifications = [
    { icon: Award, title: "RGE", desc: "Reconnu Garant de l'Environnement", color: "green" },
    { icon: Shield, title: "Assurance Décennale", desc: "Couverture complète 10 ans", color: "blue" },
    { icon: CheckCircle, title: "Qualibat", desc: "Qualification professionnelle BTP", color: "orange" },
    { icon: Star, title: "Certifié", desc: "Normes qualité respectées", color: "purple" }
  ];

  const team = [
    { name: "Jean Dicate", role: "Fondateur & Directeur Général", icon: Users, exp: "25+ ans" },
    { name: "Marie Dicate", role: "Directrice Administrative", icon: Briefcase, exp: "20+ ans" },
    { name: "Pierre Dicate", role: "Directeur Technique", icon: Settings, exp: "22+ ans" }
  ];

  const piliers = [
    { icon: Users, title: "De père en fils", desc: "Savoir-faire familial transmis avec passion", color: "blue" },
    { icon: Award, title: "Qualité artisanale", desc: "Excellence technique dans chaque réalisation", color: "orange" },
    { icon: Shield, title: "Confiance mutuelle", desc: "Transparence et honnêteté absolue", color: "green" },
    { icon: Clock, title: "Délais respectés", desc: "98% de nos chantiers livrés dans les temps", color: "purple" }
  ];

  const evolution = [
    { year: "2011", team: "7", desc: "Création familiale", icon: Building2 },
    { year: "2016", team: "15", desc: "Première expansion", icon: TrendingUp },
    { year: "2020", team: "22", desc: "Diversification", icon: Target },
    { year: "2024", team: "30", desc: "Expertise confirmée", icon: Users }
  ];

  const services = [
    { icon: Building2, title: "Construction", desc: "Gros œuvre, charpente, toiture", sectors: ["Résidentiel", "Tertiaire"] },
    { icon: Hammer, title: "Démolition", desc: "Terrassement et démolition", sectors: ["Industriel", "Commercial"] },
    { icon: Store, title: "Commerce", desc: "Magasins, pharmacies, restaurants", sectors: ["Retail", "Restauration"] },
    { icon: Factory, title: "Industriel", desc: "Hangars, entrepôts, usines", sectors: ["Logistique", "Production"] }
  ];

  return (
		<div className="min-h-screen bg-gray-50">
		{/* Hero Section pleine largeur */}
		<div className="relative w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
			<div className="max-w-5xl mx-auto px-4 text-center">
			<h1 className="text-5xl md:text-6xl font-bold mb-6">DICATE</h1>
			<p className="text-xl md:text-2xl mb-5 opacity-95">
				De père en fils : Un savoir-faire transmis avec passion
			</p>
			<p className="text-base max-w-2xl mx-auto opacity-85 mb-10">
				Depuis 2011, quatre valeurs nous guident : l'héritage familial, la qualité artisanale,
				la confiance mutuelle et le respect absolu des délais. Parce que votre temps est précieux.
			</p>

			{/* Piliers */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
				{piliers.map((pilier, index) => (
				<div key={index} className="bg-white/20 rounded-xl p-5 hover:bg-white/30 transition-all">
					<pilier.icon className="w-8 h-8 mx-auto mb-2 text-white" />
					<h3 className="text-xs font-bold mb-1 text-gray-900">{pilier.title}</h3>
					<p className="text-xs opacity-80 text-gray-200">{pilier.desc}</p>
				</div>
				))}
			</div>
		 </div>
		</div>
        {/* Main Content */}
		<div className="max-w-5xl mx-auto px-4 md:px-4 lg:px-4 py-16 space-y-16">
          {/* Notre Histoire avec focus sur les 4 piliers */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center mb-5">
                <Building2 className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Notre Histoire</h2>
              </div>
              <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
                <p>
                  <strong className="text-blue-600">L'héritage familial (2011)</strong> : Tout a commencé
                  par une transmission de savoir-faire de père en fils. Cette expertise artisanale,
                  héritée de générations de bâtisseurs, constitue le socle de notre entreprise.
                  Nous étions 7, unis par cette même passion du travail bien fait.
                </p>
                <p>
                  <strong className="text-orange-600">La qualité avant tout</strong> : Chez DICATE,
                  chaque geste compte. Notre savoir-faire artisanal se traduit par une attention
                  minutieuse aux détails, l'utilisation de techniques éprouvées et une exigence
                  constante d'excellence. Pas de compromis sur la qualité, jamais.
                </p>
                <p>
                  <strong className="text-green-600">La confiance, notre moteur</strong> : Construire
                  une relation de confiance avec nos clients, c'est notre priorité absolue. Transparence
                  dans les devis, communication constante sur l'avancement, conseils avisés...
                  Cette confiance mutuelle fait notre réputation.
                </p>
                <p>
                  <strong className="text-purple-600">L'engagement délai</strong> : "Un délai annoncé
                  est un délai respecté." Cette phrase résume notre philosophie. Avec 30 collaborateurs
                  expérimentés et une organisation rodée, nous tenons nos engagements de planning
                  à 98%. Parce que votre temps a de la valeur.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Nos Valeurs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-1">Héritage familial</h4>
                  <p className="text-xs text-gray-600">De père en fils, un savoir-faire transmis avec passion</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-1">Qualité artisanale</h4>
                  <p className="text-xs text-gray-600">Excellence technique dans chaque réalisation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-1">Confiance mutuelle</h4>
                  <p className="text-xs text-gray-600">Transparence et honnêteté en toute circonstance</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-1">Délais respectés</h4>
                  <p className="text-xs text-gray-600">98% de nos chantiers livrés dans les temps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section spéciale Délais - Mise en avant principale */}
          <div className="bg-gradient-to-r from-purple-100 via-blue-50 to-purple-100 rounded-3xl p-10">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-12 h-12 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">98% de Délais Respectés</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                "Un délai annoncé est un délai respecté." Cette promesse n'est pas qu'un slogan,
                c'est notre engagement quotidien depuis 13 ans.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                <Target className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Planning précis</h4>
                <p className="text-gray-600 text-xs">Étude minutieuse de chaque étape du chantier</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Équipe dédiée</h4>
                <p className="text-gray-600 text-xs">30 professionnels expérimentés et organisés</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Suivi quotidien</h4>
                <p className="text-gray-600 text-xs">Communication constante avec le client</p>
              </div>
            </div>
          </div>

          {/* Nos Domaines d'Expertise */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">
              Une Expertise Complète
            </h2>
            <p className="text-base text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Du gros œuvre aux aménagements spécialisés, nous maîtrisons tous les corps de métier
              avec le même niveau de qualité artisanale.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-5 hover:shadow-2xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-xs mb-3 text-center">{service.desc}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {service.sectors.map((sector, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secteurs d'Activité */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
              Tous Secteurs Confondus
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Particuliers</h3>
                <p className="text-gray-600 text-xs mb-2">
                  Maisons individuelles, extensions, rénovations complètes
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Gros œuvre et charpente</li>
                  <li>• Toiture et couverture</li>
                  <li>• Terrassement</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Store className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Commerces</h3>
                <p className="text-gray-600 text-xs mb-2">
                  Magasins, pharmacies, restaurants, bureaux
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Aménagement sur mesure</li>
				  <li>• Rénovation express</li>
                  <li>• Mise aux normes</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Factory className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Industrie</h3>
                <p className="text-gray-600 text-xs mb-2">
                  Hangars, entrepôts, usines, bâtiments industriels
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Construction métallique</li>
                  <li>• Grands volumes</li>
                  <li>• Délais serrés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Équipe Dirigeante */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
              L'Équipe qui Fait la Différence
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-2 text-sm">{member.role}</p>
                  <div className="inline-block bg-blue-50 px-2 py-1 rounded-full text-xs text-blue-600 font-medium">
                    {member.exp} d'expérience
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">30 Collaborateurs à Votre Service</h3>
              <p className="text-gray-600 max-w-xl mx-auto text-sm">
                Électriciens qualifiés, plombiers expérimentés, maçons chevronnés, compagnons polyvalents, chefs d'équipe rigoureux et conducteurs de travaux certifiés…
			    Notre entreprise réunit tous les savoir-faire essentiels du bâtiment. Chaque membre partage la même exigence de qualité et la passion du travail bien fait, transmise de père en fils.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
              Certifications & Garanties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-5 text-center hover:shadow-2xl transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                    cert.color === 'green' ? 'bg-green-100' :
                    cert.color === 'blue' ? 'bg-blue-100' :
                    cert.color === 'orange' ? 'bg-orange-100' : 'bg-purple-100'
                  }`}>
                    <cert.icon className={`w-6 h-6 ${
                      cert.color === 'green' ? 'text-green-600' :
                      cert.color === 'blue' ? 'text-blue-600' :
                      cert.color === 'orange' ? 'text-orange-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-xs">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 px-4 rounded-t-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-5">
              L'Excellence Familiale à Votre Service
            </h2>
            <p className="text-lg mb-6 opacity-90">
              De père en fils, 13 ans de savoir-faire, 98% de délais respectés, plus de 500 clients qui nous font confiance
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                <Phone className="w-4 h-4 mr-2" />
                01 45 67 89 10
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg">
                Devis gratuit en ligne
              </button>
            </div>
          </div>
        </section>
    </div>
  );
};

export default AboutDicate;
