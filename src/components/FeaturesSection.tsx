
import React from 'react';
import { Ruler, Eye, Database, Layers, User, Search, ChartBar, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-brand-blue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Other Key Features</h2>
        
        {/* Features Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technology Feature Card */}
          <Card className="bg-white/10 rounded-xl p-6 flex flex-col h-full border-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <Ruler className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold">The Technology</h3>
            </div>
            <div className="space-y-3">
              <p className="text-brand-lightgray/90">A custom marker with precision technology for apparel measurements.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-flex items-center bg-brand-teal/20 text-white text-xs px-3 py-1 rounded-full">
                  0.1 inch Accuracy
                </span>
                <span className="inline-flex items-center bg-brand-teal/20 text-white text-xs px-3 py-1 rounded-full">
                  Fit-accurate Virtual Try-on
                </span>
              </div>
            </div>
          </Card>

          {/* Shop My Fit Feature Card */}
          <Card className="bg-white/10 rounded-xl p-6 flex flex-col h-full border-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <Search className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold">Shop My Fit</h3>
            </div>
            <div className="space-y-3">
              <p className="text-brand-lightgray/90">Fit-based search that matches users' preferred garment fit with available products.</p>
              <p className="text-brand-lightgray/90">Customers can browse only items that match their desired fit profile.</p>
            </div>
          </Card>

          {/* Product Fit Analytics Card */}
          <Card className="bg-white/10 rounded-xl p-6 flex flex-col h-full border-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <ChartBar className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold">Product Fit Analytics</h3>
            </div>
            <div className="space-y-3">
              <p className="text-brand-lightgray/90">Detailed analytics on how products fit across different body types.</p>
              <p className="text-brand-lightgray/90">Insights to improve product design and sizing strategies.</p>
            </div>
          </Card>

          {/* Shop My Size Feature Card */}
          <Card className="bg-white/10 rounded-xl p-6 flex flex-col h-full border-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold">Shop My Size</h3>
            </div>
            <div className="space-y-3">
              <p className="text-brand-lightgray/90">Body-measurement based search for perfect size recommendations.</p>
              <p className="text-brand-lightgray/90">Eliminates guesswork from the sizing process.</p>
            </div>
          </Card>

          {/* 100% Customer Impact Card */}
          <Card className="bg-white/10 rounded-xl p-6 flex flex-col h-full border-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold">Impacts 100% of Customers</h3>
            </div>
            <div className="space-y-3">
              <p className="text-brand-lightgray/90">Universal benefits for all shoppers on your platform.</p>
              <p className="text-brand-lightgray/90">Creates a more inclusive shopping experience.</p>
            </div>
          </Card>

          {/* Plug and Play Solution Card */}
          <Card className="bg-white/10 rounded-xl p-6 flex flex-col h-full border-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <Zap className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold">Plug n Play Solution</h3>
            </div>
            <div className="space-y-3">
              <p className="text-brand-lightgray/90">Quick integration with existing e-commerce platforms.</p>
              <p className="text-brand-lightgray/90">Minimal technical requirements and setup time.</p>
            </div>
          </Card>
        </div>

        {/* Culturally Relevant Note */}
        <div className="mt-8 text-center">
          <p className="text-brand-lightgray/80 text-sm italic">Culturally relevant designs for businesses of all sizes</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
