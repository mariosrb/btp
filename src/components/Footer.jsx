import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-10 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <img
                                src="./images/logo2.svg"
                                alt="Logo DICATE"
                                className="w-auto h-16 object-contain"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed text-justify">
                            Expert en construction, rénovation et location de bennes.
                            Une qualité artisanale au service de vos projets les plus ambitieux.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Navigation
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Accueil', path: '/' },
                                { label: 'Qui sommes-nous', path: '/qui-sommes-nous' },
                                { label: 'Réalisations', path: '/realisations' },
                                { label: 'Location', path: '/location' },
                                { label: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-yellow-500 transition-colors duration-200 text-sm block relative group"
                                    >
                                        <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Contact
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-slate-400 text-sm">
                                    123 Avenue de la Construction<br />
                                    75000 Paris, France
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:0762205219" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    07 62 20 52 19
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:dicate.pro@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    dictate.pro@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Zone d'intervention */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Zone d'intervention
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                                <span>Paris (75)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                <span>Seine-et-Marne (77)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                <span>Yvelines (78)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                <span>Essonne (91)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                <span>Hauts-de-Seine (92)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                <span>Seine-Saint-Denis (93)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                <span>Val-de-Marne (94)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                <span>Val-d’Oise (95)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-slate-500 text-sm">
                        &copy; {currentYear} DICATE. Tous droits réservés.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Mentions Légales</a>
                        <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
