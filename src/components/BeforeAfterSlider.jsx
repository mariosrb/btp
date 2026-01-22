import { useCallback, useMemo, useRef, useState } from 'react';
import './BeforeAfterSlider.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const BeforeAfterSlider = ({
  beforeSrc = '/images/picture.jpeg',
  afterSrc = '/images/picture4.jpg',
  altBefore = 'Avant',
  altAfter = 'Après',
  initial = 50,
  aspectRatio = '16/9',
  handleStep = 2,
}) => {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const pointerIdRef = useRef(null);
  const [percent, setPercent] = useState(() => clamp(initial, 0, 100));

  // Pour un rendu optimal, les deux images gagnent à partager le même ratio (pré-redimensionnement recommandé si les proportions diffèrent trop).
  const clampedPercent = useMemo(() => clamp(percent, 0, 100), [percent]);

  const updateFromClientX = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const nextPercent = Math.round((x / rect.width) * 100);
    setPercent(nextPercent);
  }, []);

  const handlePointerDown = (event) => {
    event.preventDefault();
    isDraggingRef.current = true;
    pointerIdRef.current = event.pointerId;
    containerRef.current?.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!isDraggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
    if (pointerIdRef.current !== null) {
      containerRef.current?.releasePointerCapture(pointerIdRef.current);
      pointerIdRef.current = null;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      setPercent((value) => clamp(value - handleStep, 0, 100));
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      setPercent((value) => clamp(value + handleStep, 0, 100));
    } else if (event.key === 'Home') {
      event.preventDefault();
      setPercent(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setPercent(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      style={{ '--ba-aspect-ratio': aspectRatio }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onPointerLeave={stopDragging}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedPercent}
      aria-label="Comparaison avant après"
    >
      <img
        src={afterSrc}
        alt={altAfter}
        className="ba-slider__image ba-slider__image--after"
        draggable="false"
      />

      <div className="ba-slider__overlay" style={{ width: `${clampedPercent}%` }}>
        <img
          src={beforeSrc}
          alt={altBefore}
          className="ba-slider__image ba-slider__image--before"
          draggable="false"
        />
      </div>

      <div className="ba-slider__handle" style={{ left: `${clampedPercent}%` }}>
        <span className="ba-slider__handle-line" aria-hidden="true" />
        <span className="ba-slider__handle-knob" aria-hidden="true" />
      </div>

      <div className="ba-slider__labels" aria-hidden="true">
        <span className="ba-slider__label ba-slider__label--left">Avant</span>
        <span className="ba-slider__label ba-slider__label--right">Après</span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
