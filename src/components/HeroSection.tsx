import React from 'react';
import { Badge } from '@/components/ui/badge';

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
          
          <div className="relative h-full flex items-center justify-center min-h-[400px]">
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
                  <div className="aspect-[4/5] w-40 md:w-56 bg-brand-lightgray rounded-lg shadow-xl flex items-center justify-center"></div>
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
