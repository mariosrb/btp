import React from 'react';
import { CheckCircle, Clock, Award, Users } from 'lucide-react';

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: CheckCircle,
      title: 'Qualité garantie',
      description: 'Travaux certifiés et assurance décennale',
      color: 'text-blue-600',
    },
    {
      icon: Clock,
      title: 'Délais tenus',
      description: '98% de respect des plannings',
      color: 'text-yellow-500',
    },
    {
      icon: Award,
      title: 'Expertise reconnue',
      description: '13 ans de savoir-faire familial',
      color: 'text-blue-600',
    },
    {
      icon: Users,
      title: 'Équipe dédiée',
      description: '30 professionnels à votre service',
      color: 'text-yellow-500',
    },
  ];

  return (
    <section className="relative -mt-12 z-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-xl p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className={`w-12 h-12 ${guarantee.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-slate-600">{guarantee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;

