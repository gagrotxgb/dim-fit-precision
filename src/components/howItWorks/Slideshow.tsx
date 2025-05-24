
import React, { useEffect, useState } from 'react';

interface SlideshowProps {
  onImageChange?: (idx: number) => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ onImageChange }) => {
  const images = [
    "/lovable-uploads/0b47f217-ba54-4748-8060-cc7094019a9f.png",
    "/lovable-uploads/64c4e255-1c82-4748-8728-d257466a7c99.png",
    "/lovable-uploads/33049b9e-3b15-4782-88f8-79b7222631a3.png",
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

  const showNext = isFading && nextIdx !== null;
  
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
      {/* Current image */}
      <img
        src={images[currentIdx]}
        alt="Product measurement visualization"
        className="object-contain w-full h-full max-w-full max-h-full"
        style={{
          position: 'absolute',
          opacity: showNext ? 0 : 1,
          transition: 'opacity 500ms ease',
          zIndex: showNext ? 1 : 2,
          pointerEvents: 'none',
        }}
        draggable={false}
      />
      {/* Next image */}
      <img
        src={images[showNext ? nextIdx! : currentIdx]}
        alt=""
        aria-hidden="true"
        className="object-contain w-full h-full max-w-full max-h-full"
        style={{
          position: 'absolute',
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
