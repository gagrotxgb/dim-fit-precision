
import React from 'react';
import { 
  Ruler, 
  ChartBar, 
  Zap, 
  User, 
  Search, 
  Shield, 
  Globe,
  Layers,
  Target,
  BarChart3,
  CircleDollarSign,
  Tag
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const keyFeatures = [
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
    title: 'Seamless Integration',
    description: 'Easy implementation with your existing e-commerce platform',
    icon: <Zap className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Return Rate Reduction',
    description: 'Significantly lower returns due to improved fit accuracy',
    icon: <CircleDollarSign className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Dynamic Pricing',
    description: 'Optimize pricing based on fit preference trends',
    icon: <Tag className="h-5 w-5 text-brand-teal" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-brand-blue to-[#142039] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Other Key Features</h2>
        
        {/* Foundation Technology - Compact Version */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent rounded-xl opacity-30 blur-xl"></div>
          <Card className="bg-white/5 backdrop-blur-sm border-brand-teal/30 rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Title */}
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-brand-teal/20 p-2 rounded-full">
                      <Ruler className="h-6 w-6 text-brand-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Powered by Precision Tech</h3>
                  </div>
                  <p className="text-brand-lightgray/90 leading-relaxed">
                    Our marker technology enables all these features through unparalleled measurement accuracy and digital garment fitting.
                  </p>
                </div>
                
                {/* Key Metrics */}
                <div className="md:col-span-2">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="block font-bold text-xl text-white">0.1"</span>
                        <span className="text-xs text-brand-lightgray">Precision</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="block font-bold text-xl text-white">100%</span>
                        <span className="text-xs text-brand-lightgray">SKU Coverage</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="flex flex-col items-center justify-center h-full">
                        <span className="block font-bold text-xl text-white">3D</span>
                        <span className="text-xs text-brand-lightgray">Visualization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* "Beyond the Basics" Section Title */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-medium text-brand-teal mb-2">Beyond the Basics</h3>
          <p className="text-lg text-brand-lightgray">Transform your business with these powerful applications:</p>
        </div>
        
        {/* Features Mobile Carousel */}
        <div className="lg:hidden mb-10">
          <Carousel className="w-full">
            <CarouselContent>
              {keyFeatures.map((feature, idx) => (
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
        
        {/* Features Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {keyFeatures.map((feature, idx) => (
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

        {/* Business Impact Highlight */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Measurable Business Impact</h3>
              <p className="text-brand-lightgray mb-4">
                Our clients have experienced transformative results by implementing these features:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="text-brand-teal">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-white">Up to 40% reduction in size-related returns</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-brand-teal">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-white">28% increase in customer satisfaction</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-brand-teal">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-white">22% higher conversion rate for online shoppers</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-48 w-48 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/30 to-transparent rounded-full animate-pulse"></div>
                <div className="absolute h-40 w-40 border-4 border-dashed border-brand-teal/40 rounded-full animate-spin-slow"></div>
                <div className="absolute h-32 w-32 bg-brand-teal/20 rounded-full flex items-center justify-center">
                  <div className="h-20 w-20 bg-brand-teal/30 rounded-full flex items-center justify-center">
                    <div className="h-10 w-10 bg-brand-teal rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
