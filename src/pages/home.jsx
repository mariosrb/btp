import React, { useEffect, useState } from 'react';

export default function Home() {
  const backgroundImages = [
    '/images/fond.jpg',
    '/images/fond2.jpg',
    '/images/fond3.jpg',
    '/images/fond4.jpg',
    '/images/fond5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      {/* Section avec l'image en fond */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{ 
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            L'expertise qui inspire la confiance.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Des ouvrages qui rendent fiers.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white font-medium drop-shadow-sm">
            Avec <strong>DICATE</strong>, vos projets prennent de la hauteur.
          </p>
        </div>
      </div>

      {/* Section fond blanc */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">L'expertise qui inspire la confiance.</h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Nous sommes spécialisés dans la construction et la rénovation de bâtiments, avec un savoir-faire reconnu dans le secteur du BTP.
          </p>
        </div>
      </div>
    </>
  );
}