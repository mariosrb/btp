export const linearEasing = (t) => t;

export const animateValue = ({
  from = 0,
  to,
  duration = 2000,
  easing = linearEasing,
  onUpdate = () => {},
  onComplete = () => {},
}) => {
  if (typeof to !== 'number') {
    throw new Error('animateValue: "to" must be a number');
  }

  const start = performance.now();
  let frameId = null;
  let cancelled = false;

  const step = (timestamp) => {
    if (cancelled) {
      return;
    }

    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);
    const currentValue = from + (to - from) * easedProgress;

    onUpdate(currentValue);

    if (progress < 1) {
      frameId = requestAnimationFrame(step);
    } else {
      onComplete(currentValue);
    }
  };

  frameId = requestAnimationFrame(step);

  return () => {
    cancelled = true;
    if (frameId) {
      cancelAnimationFrame(frameId);
    }
  };
};

