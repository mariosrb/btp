import React, { useState } from 'react';
import HeroSection from '../../components/Realisations/HeroSection';
import GuaranteesSection from '../../components/Realisations/GuaranteesSection';
import MasonryGallery from '../../components/Realisations/MasonryGallery';
import CTASection from '../../components/Realisations/CTASection';
import Lightbox from '../../components/Realisations/Lightbox';
import { galleryImages } from '../../data/realisations/galleryData';

const Realisations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <GuaranteesSection />
      <MasonryGallery images={galleryImages} onImageClick={handleImageClick} />
      <CTASection />
      <Lightbox image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
};

export default Realisations;
