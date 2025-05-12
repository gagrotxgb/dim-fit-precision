import React from 'react';
import { Badge } from '@/components/ui/badge';

// --- Slideshow component from HowItWorksSection.tsx ---
function Slideshow() {
  const images = [
    "/ChatGPT Image May 11, 2025, 1-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 2-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 3-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 4-Photoroom.png",
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % images.length), 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <img
      src={images[idx]}
      alt="Virtual try-on technology"
      className="object-contain rounded"
      style={{ height: '100%', width: 'auto', maxHeight: 245, maxWidth: 320, display: 'block' }}
    />
  );
}
// --- end Slideshow ---

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-brand-gray to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="bg-brand-teal/10 text-brand-teal border-brand-teal/30 py-1.5 px-3">
              Launching in 2025
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              Super Accurate <br/> Apparel Try On
              <span className="block text-brand-teal mt-2">with 0.1 inch Precision.</span>
            </h1>
            
            <ul className="space-y-3 text-gray-700">
              {[
                'SKU-level sizing information to your customers',
                'Provide fit-accurate, size-accurate virtual try-on',
                'Custom apparel size info to users',
                'Automatically provide all apparel measurements'
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="font-bold text-brand-teal mr-2">{i + 1}.</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-primary text-center">
                See Demo
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          
          {/* Hide cards below md (960px) */}
          <div className="relative h-full items-center justify-center min-h-[400px] hidden md:flex">
            <div className="grid grid-cols-2 gap-x-6 h-full items-center" style={{minHeight: '320px'}}>
              {/* Column 1: Centered card */}
              <div className="flex items-center justify-center h-full">
                <div className="aspect-[4/5] w-40 md:w-56 bg-brand-lightgray rounded-lg shadow-xl flex items-center justify-center"></div>
              </div>
              {/* Column 2: Two cards, one above and one below the midpoint of col 1 card */}
              <div className="flex flex-col justify-between h-full py-4 md:py-8" style={{minHeight: '320px'}}>
                <div className="flex items-start justify-center">
                  <div className="aspect-[4/5] w-40 md:w-56 bg-brand-lightgray rounded-lg shadow-xl flex items-center justify-center"></div>
                </div>
                <div className="flex items-end justify-center">
                  {/* --- Inserted: Slideshow and animation from Benefit B --- */}
                  <div className="aspect-[4/5] w-40 md:w-56 bg-brand-lightgray rounded-lg shadow-xl flex items-center justify-center overflow-visible relative">
                    {/* Animation SVG (copied from HowItWorksSection.tsx, Benefit B image div) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Example animated SVG: simple pulse ring for demo */}
                      <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#14b8a6"
                          strokeWidth="4"
                          fill="none"
                        >
                          <animate attributeName="r" values="40;45;40" dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                    </div>
                    {/* Slideshow */}
                    <div className="relative z-10">
                      <Slideshow />
                    </div>
                  </div>
                  {/* --- end inserted --- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
