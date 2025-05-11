
import React from 'react';
import { Ruler, Eye, Database, Layers, ChartBar, Shield, Zap, BarChart3 } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const technologyBenefits = [
  {
    icon: <Ruler className="h-5 w-5 text-white" />, 
    title: "0.1 Inch Accuracy",
    description: "Precise measurements unmatched in the industry"
  },
  {
    icon: <Eye className="h-5 w-5 text-white" />, 
    title: "True-to-Life Visualization",
    description: "Accurate representation of garment fit and drape"
  },
  {
    icon: <Database className="h-5 w-5 text-white" />, 
    title: "SKU-Level Data",
    description: "Detailed information for every product variant"
  },
];

const poweredSolutions = [
  {
    title: 'Shop My Size',
    description: 'Body-measurement based search for perfect size recommendations',
    icon: <ChartBar className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Product Fit Analytics',
    description: 'Analyze how products fit across different customer segments',
    icon: <BarChart3 className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: '100% Customer Coverage',
    description: 'Benefits every customer regardless of their body type',
    icon: <Shield className="h-5 w-5 text-brand-teal" />,
  },
  {
    title: 'Plug & Play Integration',
    description: 'Simple implementation with minimal development effort',
    icon: <Zap className="h-5 w-5 text-brand-teal" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-brand-blue to-brand-blue/95 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Revolutionary Sizing Technology</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-brand-lightgray">
          Our proprietary marker technology enables unprecedented accuracy in apparel sizing and fit visualization
        </p>
        
        {/* Technology Showcase */}
        <div className="relative mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              
              {/* Left Side - Tech Description */}
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-brand-teal/20 text-brand-teal text-sm px-3 py-1 rounded-full font-medium mb-6">
                  <Layers className="h-4 w-4 mr-2" /> Proprietary Technology
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Custom Marker: The Core of Our System</h3>
                <p className="text-brand-lightgray mb-8 text-lg">
                  Our measurement system uses a proprietary marker technology to accurately capture garment dimensions with unprecedented precision.
                </p>
                
                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {technologyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <div className="flex-shrink-0 flex items-center justify-center bg-brand-teal rounded-full h-10 w-10">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{benefit.title}</h4>
                        <p className="text-sm text-brand-lightgray">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Side - Visual */}
              <div className="lg:w-1/2 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-teal/20 blur-2xl rounded-full"></div>
                  <div className="relative bg-white/10 backdrop-blur border border-white/30 p-6 rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                      alt="ApparelDIM Technology" 
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Solutions Powered By Our Technology */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Business Solutions</h3>
            <p className="text-lg text-brand-lightgray max-w-2xl mx-auto">
              Our core technology powers multiple business solutions for the retail industry
            </p>
          </div>
          
          {/* Feature Cards - Mobile Carousel, Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {poweredSolutions.map((solution, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-3 p-3 rounded-full bg-brand-teal/20 w-fit">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-brand-lightgray">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-brand-gray">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {poweredSolutions.map((solution, idx) => (
                  <CarouselItem key={idx}>
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader className="pb-2">
                        <div className="mb-3 p-3 rounded-full bg-brand-teal/20 w-fit">
                          {solution.icon}
                        </div>
                        <CardTitle className="text-brand-lightgray">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-brand-gray">{solution.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative inset-auto mx-2" />
                <CarouselNext className="relative inset-auto mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
