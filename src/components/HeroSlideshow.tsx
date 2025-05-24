
import React, { useEffect, useState } from 'react';

const HeroSlideshow: React.FC = () => {
  const images = [
    "/lovable-uploads/0b47f217-ba54-4748-8060-cc7094019a9f.png",
    "/lovable-uploads/64c4e255-1c82-4748-8728-d257466a7c99.png",
    "/lovable-uploads/33049b9e-3b15-4782-88f8-79b7222631a3.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[520px] md:h-[625px] flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product measurement visualization ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          draggable={false}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow;
