export const preloadImages = (sources = []) => {
  if (!Array.isArray(sources) || sources.length === 0) {
    return Promise.resolve();
  }

  const uniqueSources = Array.from(new Set(sources.filter(Boolean)));

  return Promise.all(
    uniqueSources.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        })
    )
  );
};

export default preloadImages;

