import React from 'react';
import { ArrowDown, Upload } from 'lucide-react';
const HowItWorksSection = () => {
  return <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">1 Step Process to Provide 2 Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold z-10">
              1
            </div>
            <div className="bg-brand-gray rounded-lg p-6 h-full border-2 border-brand-teal flex flex-col">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Upload Product Images</h3>
              <p className="text-gray-700 mb-4">Upload images of your products clicked using our marker to our platform</p>
              <div className="mt-auto flex justify-center">
                <Upload size={48} className="text-brand-teal" />
              </div>
            </div>
          </div>
          
          {/* Benefit 1 */}
          <div className="relative">
            <div className="bg-brand-gray rounded-lg p-6 h-full col-2 border border-brand-lightgray">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Benefit 1: Select Measurement Points</h3>
              <p className="text-gray-700">Choose specific points on garments to get any measurement of the apparel with precision. Our technology allows for complete customization of measurement points to meet your exact needs.</p>
            </div>
          </div>
          
          {/* Arrow Down for Mobile */}
          <div className="flex justify-center md:hidden">
            <ArrowDown size={32} className="text-brand-teal" />
          </div>
        </div>
        
        {/* Benefit 2 - Full Width */}
        <div className="mt-8">
          <div className="bg-brand-gray rounded-lg p-6 w-full border border-brand-lightgray">
            <h3 className="text-xl font-bold text-brand-blue mb-3">Benefit 2: Fit-accurate, Size-accurate Virtual Try-on</h3>
            <p className="text-gray-700">Our system provides accurate measurements with 0.1 inch precision, allowing customers to visualize exactly how garments will fit before purchasing, reducing returns and increasing satisfaction.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;