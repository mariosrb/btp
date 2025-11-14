import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CTAButton from '../common/CTAButton';
import {
  interiorExpertise,
  exteriorExpertise,
} from '../../data/home/expertise';

const ExpertiseList = ({
  title,
  accentClass,
  iconColor,
  data,
  variant = 'light',
}) => {
  const containerClasses =
    variant === 'accent'
      ? 'bg-yellow-500 p-12 text-slate-900'
      : 'bg-white p-12 shadow-xl';

  return (
    <div className={containerClasses}>
      <div className="flex items-center mb-8">
        <div
          className={`w-16 h-16 ${accentClass} flex items-center justify-center mr-4`}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-black text-slate-900">
          {title.split('\n').map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((group) => (
          <div key={group.title}>
            <h4 className="font-bold text-slate-900 mb-3">{group.title}</h4>
            <ul className="space-y-2 text-slate-600">
              {group.items.map((item) => (
                <li key={item} className="flex items-start">
                  <div
                    className={`w-2 h-2 ${iconColor} mt-2 mr-3 flex-shrink-0`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExpertiseSection = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SectionHeader
          badge="TOUS CORPS D'ÉTAT"
          badgeClassName="text-sm font-bold text-yellow-500 bg-yellow-500/20"
          title="UNE EXPERTISE"
          highlight="COMPLÈTE"
          description="De la fondation à la finition, nous maîtrisons tous les métiers du bâtiment pour vous offrir une solution clé en main."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <ExpertiseList
          title={'TRAVAUX\nINTÉRIEURS'}
          accentClass="bg-blue-600 text-white"
          iconColor="bg-blue-600"
          data={interiorExpertise}
          variant="light"
        />
        <ExpertiseList
          title={'TRAVAUX\nEXTÉRIEURS'}
          accentClass="bg-slate-900 text-yellow-500"
          iconColor="bg-slate-900"
          data={exteriorExpertise}
          variant="accent"
        />
      </div>

      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            UN SEUL INTERLOCUTEUR
            <span className="block text-yellow-500">POUR TOUT VOTRE PROJET</span>
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Coordination optimale, délais maîtrisés, qualité garantie. Notre
            équipe pluridisciplinaire gère votre chantier de A à Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton>VOIR NOS RÉALISATIONS</CTAButton>
            <CTAButton variant="secondary">DEVIS PERSONNALISÉ</CTAButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExpertiseSection;

