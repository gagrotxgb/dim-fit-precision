
import React from 'react';
import { Ruler, Eye, Search, ChartBar, Shield, Zap, User, CircuitBoard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Other Key Features</h2>
        
        {/* Features Grid - Mobile: single column, Desktop: three columns with specific layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* The Technology card - spans 3 rows on desktop, column 1 */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white lg:col-span-4 lg:row-span-3 order-1">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full h-12 w-12">
                  <CircuitBoard className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold ml-4">The Technology: A Custom Marker</h3>
              </div>
              
              <p className="mb-6 text-brand-lightgray">
                Our proprietary technology ensures accurate measurements and perfect fit recommendations.
              </p>
              
              <div className="mt-auto space-y-4">
                <div className="relative overflow-hidden rounded-lg bg-white/5 p-4 mb-4">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-teal/20 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <h4 className="font-medium text-brand-teal mb-1">Revolutionary Approach</h4>
                    <p className="text-sm text-brand-lightgray">
                      Unlike traditional sizing methods, our technology captures precise body measurements.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center bg-brand-teal/90 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    <Ruler className="h-4 w-4 mr-1" /> 0.1 inch Accuracy
                  </div>
                  <div className="inline-flex items-center bg-brand-teal/90 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    <Eye className="h-4 w-4 mr-1" /> Fit-accurate Virtual Try-on
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Column 2 */}
          {/* Shop My Fit - column 2, row 1 */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white lg:col-span-4 lg:row-span-1 order-2">
            <CardContent className="p-6 h-full">
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
          
          {/* Shop My Size - column 2, row 2 */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white lg:col-span-4 lg:row-span-2 order-3">
            <CardContent className="p-6 h-full">
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
          
          {/* Column 3 */}
          {/* Product Fit Analytics - column 3, row 1 */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white lg:col-span-4 lg:row-span-1 order-4">
            <CardContent className="p-6 h-full">
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
          
          {/* Plug and Play Solution - column 3, row 2 */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white lg:col-span-4 lg:row-span-1 order-6">
            <CardContent className="p-6 h-full">
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
          
          {/* Impacts 100% of Customers - column 3, row 3 */}
          <Card className="bg-white/5 hover:bg-white/10 transition-all border-white/10 text-white lg:col-span-4 lg:row-span-1 order-5">
            <CardContent className="p-6 h-full">
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
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
