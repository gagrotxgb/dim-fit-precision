
import React from 'react';
import { Ruler, Eye, Search, ChartBar, Users, Puzzle, MicrochipIcon, Shirt, Scale, TrendingUp, Target, Plug } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

// Features data with descriptions
const featuresData = [
  {
    title: 'The Technology',
    description: 'A custom marker with 0.1 inch accuracy that powers fit-accurate, size-accurate virtual try-on',
    icon: <MicrochipIcon className="h-6 w-6 text-brand-teal" />,
    badges: [
      { text: '0.1 inch Accuracy', icon: <Ruler className="h-3 w-3" /> },
      { text: 'Fit-accurate Try-on', icon: <Eye className="h-3 w-3" /> },
    ],
    className: 'row-span-2 md:col-span-1',
    isHighlighted: true,
  },
  {
    title: 'Shop my fit',
    description: 'Fit-based search to match your preferred garment fit',
    icon: <Shirt className="h-6 w-6 text-brand-teal" />,
    className: 'md:col-span-1',
  },
  {
    title: 'Shop my size',
    description: 'Body-measurement based search for perfect size recommendations',
    icon: <Scale className="h-6 w-6 text-brand-teal" />,
    className: 'md:col-span-1',
  },
  {
    title: 'Product fit analytics',
    description: 'Detailed insights into how products fit different body types',
    icon: <TrendingUp className="h-6 w-6 text-brand-teal" />,
    className: 'md:col-span-1',
  },
  {
    title: 'Impacts 100% of customers',
    description: 'Every customer benefits from our sizing technology',
    icon: <Target className="h-6 w-6 text-brand-teal" />,
    className: 'md:col-span-1',
  },
  {
    title: 'Plug n play solution',
    description: 'Quick integration with existing e-commerce platforms',
    icon: <Puzzle className="h-6 w-6 text-brand-teal" />,
    className: 'md:col-span-1',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-brand-blue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Other Key Features</h2>
        
        {/* Features Grid Layout - Designed based on wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <Card 
              key={index}
              className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group ${feature.className}`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${feature.isHighlighted ? 'bg-brand-teal/20' : 'bg-white/10'}`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl">{feature.title}</h3>
                </div>
                
                <p className="text-brand-lightgray/80 mb-4">{feature.description}</p>
                
                {feature.isHighlighted && (
                  <div className="mt-auto">
                    <div className="w-full h-px bg-white/10 mb-4"></div>
                    <div className="flex flex-wrap gap-2">
                      {feature.badges?.map((badge, idx) => (
                        <Badge 
                          key={idx} 
                          className="bg-brand-teal/90 hover:bg-brand-teal text-white flex items-center gap-1 py-1.5"
                        >
                          {badge.icon}
                          {badge.text}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-teal/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Optional: Visual indication showing these features build on the technology */}
        <div className="mt-12 text-center">
          <p className="text-brand-lightgray/70 italic">
            All powered by our precision measurement technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
