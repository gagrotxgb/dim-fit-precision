
import React, { useEffect, useState } from 'react';

interface SlideshowProps {
  onImageChange?: (idx: number) => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ onImageChange }) => {
  const images = [
    "/ChatGPT Image May 11, 2025, 1-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 2-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 3-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 4-Photoroom.png",
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [nextIdx, setNextIdx] = useState<number | null>(null);

  useEffect(() => {
    if (onImageChange) onImageChange(currentIdx);
  }, [currentIdx, onImageChange]);

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout;
    let holdTimeout: NodeJS.Timeout;

    holdTimeout = setTimeout(() => {
      setNextIdx((currentIdx + 1) % images.length);
      setIsFading(true);
      fadeTimeout = setTimeout(() => {
        setCurrentIdx((currentIdx + 1) % images.length);
        setIsFading(false);
        setNextIdx(null);
      }, 500); // fade duration
    }, 2000); // hold duration

    return () => {
      clearTimeout(holdTimeout);
      clearTimeout(fadeTimeout);
    };
  }, [currentIdx, images.length]);

  // Always render both current and next image, but control their opacity and zIndex
  const showNext = isFading && nextIdx !== null;
  return (
    <div
      style={{
        position: 'relative',
        height: 245,
        width: 320,
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Current image */}
      <img
        src={images[currentIdx]}
        alt="Virtual try-on technology"
        className="object-contain rounded"
        style={{
          height: '100%',
          width: 'auto',
          maxHeight: 245,
          maxWidth: 320,
          display: 'block',
          position: 'absolute',
          left: typeof window !== "undefined" && window.innerWidth < 500 ? '100%' : '50%',
          top: '50%',
          transform: typeof window !== "undefined" && window.innerWidth < 500
            ? 'translate(-100%, -50%)'
            : 'translate(-50%, -50%)',
          opacity: showNext ? 0 : 1,
          transition: 'opacity 500ms ease',
          zIndex: showNext ? 1 : 2,
          pointerEvents: 'none',
        }}
        draggable={false}
      />
      {/* Next image (always rendered, but only visible during fade) */}
      <img
        src={images[showNext ? nextIdx! : currentIdx]}
        alt=""
        aria-hidden="true"
        className="object-contain rounded"
        style={{
          height: '100%',
          width: 'auto',
          maxHeight: 245,
          maxWidth: 320,
          display: 'block',
          position: 'absolute',
          left: typeof window !== "undefined" && window.innerWidth < 500 ? '100%' : '50%',
          top: '50%',
          transform: typeof window !== "undefined" && window.innerWidth < 500
            ? 'translate(-100%, -50%)'
            : 'translate(-50%, -50%)',
          opacity: showNext ? 1 : 0,
          transition: 'opacity 500ms ease',
          zIndex: 2,
          pointerEvents: 'none',
        }}
        draggable={false}
      />
    </div>
  );
};

export default Slideshow;
