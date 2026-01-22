import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../common/CTAButton';
import BeforeAfterSlider from '../BeforeAfterSlider';

const BeforeAfterSection = () => (
  <section className="py-20 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 space-y-6">
        <span className="inline-block text-xs font-black tracking-widest text-yellow-600 bg-yellow-100 px-3 py-2 rounded-full">
          AVANT / APRÈS · TRANSFORMATION & VOLUME
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          D'un pavillon ancien à une villa familiale (R+2)
          <span className="block text-blue-600">Surélévation, volumes et finitions maîtrisés</span>
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Une métamorphose complète pour tripler la surface habitable sans changer d'adresse.
        </p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-blue-600 mt-2 rounded-full" />
            <span>Surélévation totale : ajout de deux étages complets.</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-yellow-500 mt-2 rounded-full" />
            <span>Toiture neuve : couverture en ardoise véritable et zinguerie.</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-slate-900 mt-2 rounded-full" />
            <span>Façade moderne : enduit ton pierre avec modénatures et garde-corps en fer forgé.</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-2 h-2 bg-slate-500 mt-2 rounded-full" />
            <span>Aménagements : création de balcons et réfection des accès extérieurs.</span>
          </li>
        </ul>
        <div className="pt-4">
          <CTAButton as={Link} to="/contact#contact-form" variant="primary">
            Je veux la même transformation
          </CTAButton>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="bg-slate-900/90 p-3 md:p-4 rounded-xl shadow-2xl border border-white/10">
          <BeforeAfterSlider
            beforeSrc="/images/picture.jpeg"
            afterSrc="/images/picture4.jpg"
            altBefore="Maison avant rénovation"
            altAfter="Maison après rénovation"
            initial={45}
            aspectRatio="16/9"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
