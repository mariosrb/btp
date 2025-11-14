import { useEffect, useRef, useState } from 'react';

const defaultOptions = {
  threshold: 0.2,
  root: null,
  rootMargin: '0px',
  once: true,
};

const useIntersectionReveal = (options = {}) => {
  const mergedOptions = { ...defaultOptions, ...options };
  const { once, ...observerOptions } = mergedOptions;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            obs.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    }, observerOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, [observerOptions.root, observerOptions.rootMargin, observerOptions.threshold, once]);

  return {
    ref: elementRef,
    isVisible,
  };
};

export default useIntersectionReveal;

