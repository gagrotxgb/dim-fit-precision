
import React from 'react';
import { Ruler, Eye, Search, ChartBar, Shield, Zap, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      id: 'technology',
      title: 'The Technology: A Custom Marker',
      description: 'Our proprietary technology ensures accurate measurements and perfect fit recommendations.',
      icon: <Ruler className="h-7 w-7 text-brand-teal" />,
      badges: [
        { icon: <Ruler className="h-4 w-4 mr-1" />, text: '0.1 inch Accuracy' },
        { icon: <Eye className="h-4 w-4 mr-1" />, text: 'Fit-accurate Virtual Try-on' }
      ],
      gridArea: 'tech',
      order: 1
    },
    {
      id: 'shop-fit',
      title: 'Shop My Fit',
      description: 'Fit-based search to match your preferred garment fit',
      icon: <Search className="h-6 w-6 text-brand-teal" />,
      gridArea: 'fit',
      order: 2
    },
    {
      id: 'shop-size',
      title: 'Shop My Size',
      description: 'Body-measurement based search for perfect size recommendations',
      icon: <User className="h-6 w-6 text-brand-teal" />,
      gridArea: 'size',
      order: 3
    },
    {
      id: 'analytics',
      title: 'Product Fit Analytics',
      description: 'Gain valuable insights on how your products fit various body types',
      icon: <ChartBar className="h-6 w-6 text-brand-teal" />,
      gridArea: 'analytics',
      order: 4
    },
    {
      id: 'impact',
      title: 'Impacts 100% of Customers',
      description: 'Every shopper benefits from improved sizing confidence',
      icon: <Shield className="h-6 w-6 text-brand-teal" />,
      gridArea: 'impact',
      order: 5
    },
    {
      id: 'plug-play',
      title: 'Plug and Play Solution',
      description: 'Easy integration with your existing e-commerce platform',
      icon: <Zap className="h-6 w-6 text-brand-teal" />,
      gridArea: 'plug',
      order: 6
    }
  ];

  return (
    <section id="features" className="section-padding bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Other Key Features</h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* The technology card (spans two rows on desktop) */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white lg:row-span-2 order-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full h-12 w-12">
                  <Ruler className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold ml-4">The Technology: A Custom Marker</h3>
              </div>
              
              <p className="mb-6 text-brand-lightgray">
                Our custom marker technology provides precise measurements for virtual try-ons and perfect fit recommendations.
              </p>
              
              <div className="space-y-3">
                <div className="inline-flex items-center bg-brand-teal/90 text-white text-sm px-3 py-1 rounded-full font-semibold mr-2">
                  <Ruler className="h-4 w-4 mr-1" /> 0.1 inch Accuracy
                </div>
                <div className="inline-flex items-center bg-brand-teal/90 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  <Eye className="h-4 w-4 mr-1" /> Fit-accurate, Size-accurate Virtual Try-on
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Shop my fit */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white order-2">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full h-10 w-10">
                  <Search className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold ml-3">Shop My Fit</h3>
              </div>
              <p className="text-sm text-brand-lightgray">
                Fit-based search to match your preferred garment fit. Find clothes that fit exactly the way you like.
              </p>
            </CardContent>
          </Card>
          
          {/* Product fit analytics */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white order-4 lg:order-3">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full h-10 w-10">
                  <ChartBar className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold ml-3">Product Fit Analytics</h3>
              </div>
              <p className="text-sm text-brand-lightgray">
                Gain valuable insights about how your products fit various body types and optimize your inventory.
              </p>
            </CardContent>
          </Card>
          
          {/* Shop my size */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white order-3 lg:order-4">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full h-10 w-10">
                  <User className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold ml-3">Shop My Size</h3>
              </div>
              <p className="text-sm text-brand-lightgray">
                Body-measurement based search for perfect size recommendations. Find your ideal fit every time.
              </p>
            </CardContent>
          </Card>
          
          {/* Impacts 100% of customers */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white order-5">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full h-10 w-10">
                  <Shield className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold ml-3">Impacts 100% of Customers</h3>
              </div>
              <p className="text-sm text-brand-lightgray">
                Every shopper benefits from improved sizing confidence, leading to fewer returns and higher satisfaction.
              </p>
            </CardContent>
          </Card>
          
          {/* Plug and play solution */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white order-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full h-10 w-10">
                  <Zap className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold ml-3">Plug and Play Solution</h3>
              </div>
              <p className="text-sm text-brand-lightgray">
                Easy integration with your existing e-commerce platform. Get up and running quickly with minimal setup.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
