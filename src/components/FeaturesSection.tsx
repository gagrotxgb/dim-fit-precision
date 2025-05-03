import React from 'react';
import { Ruler, Eye, Database, Layers, User, Search, ChartBar, Shield, Zap } from 'lucide-react';

const poweredFeatures = [
  {
    title: 'Dynamic, SKU-Level Sizing',
    icon: <Database className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Custom Measurement Capabilities',
    icon: <Ruler className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Automatically provides all dimensions',
    icon: <Layers className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Shop My Size',
    description: 'Body-measurement based search for perfect size recommendations',
    icon: <User className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Shop My Fit',
    description: 'Fit-based search to match your preferred garment fit',
    icon: <Search className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Product fit analytics',
    icon: <ChartBar className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Impacts 100% of your customers',
    icon: <Shield className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Plug n play solution',
    icon: <Zap className="h-5 w-5 text-brand-teal" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-brand-blue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Key Features</h2>
        
        {/* Row 1: Technology Highlight */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="bg-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center w-full md:w-auto max-w-3xl mx-auto">
            <div className="flex-shrink-0 flex items-center justify-center bg-white/20 rounded-full h-14 w-14 mr-0 md:mr-6 mb-4 md:mb-0">
              <Ruler className="h-7 w-7 text-brand-teal" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">The Technology: Custom Marker</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="inline-flex items-center bg-brand-teal/90 text-white text-sm px-3 py-1 rounded-full font-semibold mr-2 mb-2 md:mb-0">
                  <Ruler className="h-4 w-4 mr-1" /> 0.1 inch Accuracy
                </span>
                <span className="inline-flex items-center bg-brand-teal/90 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  <Eye className="h-4 w-4 mr-1" /> Fit-accurate, Size-accurate Virtual Try-on
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2+: Powered Features */}
        <div className="mb-6 text-center text-lg font-medium text-brand-lightgray">
          And it powers so many other features:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {poweredFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3"
            >
              <div>
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base text-brand-lightgray">{feature.title}</h3>
                {feature.description && (
                  <p className="text-sm text-brand-gray">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
