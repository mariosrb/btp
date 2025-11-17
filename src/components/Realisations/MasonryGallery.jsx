import React from 'react';

const MasonryGallery = ({ images, onImageClick }) => {
  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 tracking-wide mb-6">
            NOTRE TRAVAIL
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            PROJETS
            <span className="block text-blue-600">RÉCENTS</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            De la construction neuve à la rénovation complète, découvrez la diversité de nos réalisations
          </p>
        </div>

        {/* Grille Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${getSizeClasses(image.size)} group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-200`}
              onClick={() => onImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-xs font-bold text-yellow-500 bg-yellow-500/20 px-2 py-1 mb-2">
                    {image.category}
                  </span>
                  <p className="font-bold text-lg mb-1">{image.alt}</p>
                  <p className="text-sm text-slate-300">Cliquez pour agrandir</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;

