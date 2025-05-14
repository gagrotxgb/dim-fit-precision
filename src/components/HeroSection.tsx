
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Slideshow from './howItWorks/Slideshow';
import { Grid2X2, SquareDashed } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-brand-gray to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
                'Custom apparel measurements info to users',
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
                href="https://wa.me/0918108142423" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          
          {/* New Card Layout */}
          <div className="relative h-full grid grid-cols-1 md:grid-cols-5 gap-4 animate-fade-in">
            {/* Column 1: Virtual Try On Slideshow (3/5 width) */}
            <Card className="md:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <div className="p-4 h-full flex flex-col">
                <div className="text-brand-blue font-medium mb-3 flex items-center">
                  <Grid2X2 className="h-4 w-4 mr-2" />
                  Virtual Try-On
                </div>
                <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg">
                  <Slideshow />
                </div>
              </div>
            </Card>
            
            {/* Column 2: Two cards stacked */}
            <div className="md:col-span-2 flex flex-col gap-4">
              {/* Card 2: Marker Design */}
              <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-4">
                  <div className="text-brand-blue font-medium mb-3 flex items-center">
                    <SquareDashed className="h-4 w-4 mr-2" />
                    Marker Design
                  </div>
                  <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="w-3/4 h-3/4 relative">
                      {/* 2D Data Matrix Design */}
                      <div className="grid grid-cols-6 grid-rows-6 gap-1 w-full h-full">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`${
                              // Create a pattern using math to determine which squares are teal
                              [0, 1, 2, 3, 4, 5, 30, 31, 32, 33, 34, 35, 0, 5, 6, 11, 12, 17, 18, 23, 24, 29, 30, 35].includes(i) 
                                ? 'bg-brand-teal' 
                                : (Math.random() > 0.7 ? 'bg-brand-teal/50' : 'bg-white')
                            } border border-gray-100 rounded-sm`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Card 3: Animation from Benefit A */}
              <Card className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1">
                <div className="p-4 h-full">
                  <div className="text-brand-blue font-medium mb-3 flex items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-2">
                      <path d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M13.5 7L13.6716 7.17157C16.0049 9.50491 17.1716 10.6716 17.1716 12C17.1716 13.3284 16.0049 14.4951 13.6716 16.8284L13.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M10.5 7L10.3284 7.17157C7.99509 9.50491 6.82843 10.6716 6.82843 12C6.82843 13.3284 7.99509 14.4951 10.3284 16.8284L10.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8.5 9L8.32843 9.17157C6.99509 10.5049 6.32843 11.1716 6.32843 12C6.32843 12.8284 6.99509 13.4951 8.32843 14.8284L8.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Benefit Animation
                  </div>
                  
                  {/* SVG Animation from BenefitA */}
                  <div className="relative bg-gray-50 rounded-lg h-36 flex items-center justify-center overflow-hidden">
                    <svg width="320" height="160" viewBox="-10 -10 500 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                      <g>
                        <path id="segmentA1" d="M82 56.5L400 56L466.5 186" stroke="#26A69A" strokeWidth="3" fill="none" />
                        <path id="segmentA2" d="M15 186.5L76.5 222.5" stroke="#26A69A" strokeWidth="3" fill="none" />
                        <path id="segmentA3" d="M104.5 180.5H377" stroke="#26A69A" strokeWidth="3" fill="none" />
                        <path id="segmentA4" d="M297.5 17.5V233" stroke="#26A69A" strokeWidth="3" fill="none" />
                        <path id="segmentA5" d="M185 15.5H296.5" stroke="#26A69A" strokeWidth="3" fill="none" />
                      </g>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-brand-blue text-sm font-medium">0.1 inch Precision</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
