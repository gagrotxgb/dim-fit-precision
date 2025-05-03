
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
              Super Accurate Apparel Try On
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
          
          <div className="relative h-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in">
              <div className="aspect-[4/3] bg-brand-lightgray rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-brand-teal/20 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-brand-teal/30 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-brand-teal/50 rounded-full"></div>
                    </div>
                  </div>
                  <p className="mt-4 text-brand-blue font-medium">Precision Measurement Technology</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-brand-lightgray rounded-full w-full"></div>
                <div className="h-3 bg-brand-lightgray rounded-full w-3/4"></div>
                <div className="h-3 bg-brand-lightgray rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
