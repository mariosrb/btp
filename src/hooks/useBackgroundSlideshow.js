import { useCallback, useEffect, useMemo, useState } from 'react';
import { preloadImages } from '../services/imagePreloader';

const useBackgroundSlideshow = (
  sources = [],
  { interval = 5500, startIndex = 0 } = {}
) => {
  const images = useMemo(
    () => (Array.isArray(sources) ? sources.filter(Boolean) : []),
    [sources]
  );

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    preloadImages(images).then(() => {
      if (isMounted) {
        setIsReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [images]);

  useEffect(() => {
    if (!isReady || images.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isReady]);

  const selectImage = useCallback(
    (index) => {
      if (!Number.isInteger(index) || images.length === 0) {
        return;
      }
      setCurrentIndex((index % images.length + images.length) % images.length);
    },
    [images.length]
  );

  return {
    images,
    currentIndex,
    isReady,
    selectImage,
  };
};

export default useBackgroundSlideshow;

