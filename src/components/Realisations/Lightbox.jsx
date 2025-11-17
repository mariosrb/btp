import React, { useEffect } from 'react';

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [image]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-5xl w-12 h-12 flex items-center justify-center hover:text-yellow-500 transition-colors z-10 font-light"
        onClick={onClose}
        aria-label="Fermer"
      >
        &times;
      </button>
      <div
        className="relative max-w-6xl max-h-[90vh] animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[90vh] object-contain shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
          <span className="inline-block text-xs font-bold text-yellow-500 bg-yellow-500/20 px-2 py-1 mb-2">
            {image.category}
          </span>
          <p className="text-white text-2xl font-bold">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;

