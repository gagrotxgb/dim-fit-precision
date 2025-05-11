
import React from 'react';
import { 
  Ruler, 
  Eye, 
  ChartBar, 
  Zap, 
  User, 
  Search, 
  Shield, 
  Layers, 
  Target, 
  Globe 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const poweredFeatures = [
  {
    title: 'Shop My Size',
    description: 'Body-measurement based search for personalized recommendations',
    icon: <User className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Shop My Fit',
    description: 'Preference-driven search to match your ideal garment fit',
    icon: <Search className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Real-time Analytics',
    description: 'Detailed insights on customer fit preferences and behavior',
    icon: <ChartBar className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: '100% Customer Reach',
    description: 'Benefits all shoppers, not just those with measurement data',
    icon: <Shield className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Seamless Integration',
    description: 'Easy implementation with your existing e-commerce platform',
    icon: <Zap className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Global Sizing',
    description: 'Supports international sizing standards and conversions',
    icon: <Globe className="h-5 w-5 text-brand-teal" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-brand-blue to-[#142039] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Precision Technology</h2>
        
        {/* Technology Showcase */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent rounded-xl opacity-30 blur-xl"></div>
          <Card className="bg-white/5 backdrop-blur-sm border-brand-teal/30 rounded-xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-5">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-brand-teal/20 p-3 rounded-full">
                      <Ruler className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Revolutionary Marker Technology</h3>
                  </div>
                  
                  <p className="text-brand-lightgray/90 text-lg leading-relaxed">
                    Our proprietary marker technology captures precise measurements with unprecedented accuracy, enabling a new era of digital apparel fitting.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/10 rounded-lg p-4 flex items-center">
                      <Ruler className="h-5 w-5 text-brand-teal mr-3" />
                      <div>
                        <span className="block font-bold text-white">0.1 inch</span>
                        <span className="text-sm text-brand-lightgray">Precision</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex items-center">
                      <Eye className="h-5 w-5 text-brand-teal mr-3" />
                      <div>
                        <span className="block font-bold text-white">True-to-size</span>
                        <span className="text-sm text-brand-lightgray">Visualization</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex items-center">
                      <Target className="h-5 w-5 text-brand-teal mr-3" />
                      <div>
                        <span className="block font-bold text-white">SKU-level</span>
                        <span className="text-sm text-brand-lightgray">Accuracy</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex items-center">
                      <Layers className="h-5 w-5 text-brand-teal mr-3" />
                      <div>
                        <span className="block font-bold text-white">Multi-dimensional</span>
                        <span className="text-sm text-brand-lightgray">Measurements</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative h-64 w-64 flex items-center justify-center">
                    {/* Abstract visualization of the marker technology */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/30 to-transparent rounded-full animate-pulse"></div>
                    <div className="absolute h-48 w-48 border-4 border-dashed border-brand-teal/40 rounded-full animate-spin-slow"></div>
                    <div className="absolute h-40 w-40 bg-brand-teal/20 rounded-full flex items-center justify-center">
                      <div className="h-24 w-24 bg-brand-teal/30 rounded-full flex items-center justify-center">
                        <div className="h-12 w-12 bg-brand-teal rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Measurement lines */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-brand-teal/50"></div>
                    <div className="absolute top-0 left-1/2 w-px h-full bg-brand-teal/50"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Powered Features Title */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-medium text-brand-teal mb-2">Beyond Measurement</h3>
          <p className="text-lg text-brand-lightgray">One technology, countless applications:</p>
        </div>
        
        {/* Powered Features Mobile Carousel */}
        <div className="lg:hidden mb-10">
          <Carousel className="w-full">
            <CarouselContent>
              {poweredFeatures.map((feature, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 h-full hover:bg-white/10 transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className="bg-brand-teal/20 p-2 rounded-full">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-brand-lightgray">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 mr-2" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        {/* Powered Features Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {poweredFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="bg-brand-teal/20 p-2 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-brand-lightgray">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
