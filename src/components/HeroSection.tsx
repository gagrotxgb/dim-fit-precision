import React from 'react';
import { Badge } from '@/components/ui/badge';
import HeroSlideshow from './HeroSlideshow';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-24 pb-4 md:pt-40 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-brand-gray to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
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
                {
                  label: 'Provide fit-accurate, size-accurate virtual try-on',
                  tag: true
                },
                'Custom apparel measurements info to users',
                'Automatically provide all apparel measurements'
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="font-bold text-brand-teal mr-2">{i + 1}.</span>
                  <span>
                    {typeof point === 'string' ? point : point.label}
                    {typeof point === 'object' && point.tag && (
                      <Badge variant="outline" className="ml-2 bg-brand-teal/10 text-brand-teal border-brand-teal/30 py-1 px-2">
                        World's First
                      </Badge>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-primary text-center">
                See Demo
              </a>
              <a 
                href="https://wa.me/0918108142423?text=Hi%2C%20I%27m%20interested%20in%20the%20ApparelDIM%27s%20demo." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          {/* Hero Slideshow */}
      <div className="relative h-full flex items-center justify-center animate-fade-in pt-16 md:pt-0 md:mt-0">
            <div className="w-full max-w-2xl mx-auto">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
