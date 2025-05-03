
import React from 'react';
import { Check, Ruler, Database, Layers, Eye, User, Search, Chart, Shield, Circle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: '0.1 inch Accuracy',
      icon: <Ruler className="h-5 w-5 text-brand-teal" />,
    },
    {
      title: 'Dynamic, SKU-Level Sizing',
      icon: <Database className="h-5 w-5 text-brand-teal" />,
    },
    {
      title: 'Custom Measurement Capabilities',
      icon: <Ruler className="h-5 w-5 text-brand-teal" />,
    },
    {
      title: 'Fit-accurate, size-accurate virtual try-on',
      icon: <Eye className="h-5 w-5 text-brand-teal" />,
    },
    {
      title: 'Shop My Size: body-measurement-based personalization',
      icon: <User className="h-5 w-5 text-brand-teal" />,
    },
    {
      title: 'Shop My Fit: fit-based personalization',
      icon: <Circle className="h-5 w-5 text-brand-teal" />,
    },
    {
      title: 'Body size & fit similarity search',
      icon: <Search className="h-5 w-5 text-brand-teal" />,
    },
    {
      title: 'Product fit analytics',
      icon: <Chart className="h-5 w-5 text-brand-teal" />,
    },
    {
      title: 'Impacts 100% of your customers',
      icon: <Shield className="h-5 w-5 text-brand-teal" />,
    },
  ];

  return (
    <section id="features" className="section-padding bg-brand-blue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Key Features</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-3 bg-white/10 p-5 rounded-lg"
            >
              <div className="bg-white/20 p-2 rounded-md">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
