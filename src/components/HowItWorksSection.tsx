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
          <div className="relative col-span-1 md:col-span-2">
            <div className="bg-brand-gray rounded-lg p-6 h-full border border-brand-lightgray">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Benefit 1: Users can find any measurement</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <p className="text-gray-700 col-span-1">
                  Choose specific points on garments to get any measurement of the apparel with precision. Our technology allows for complete customization of measurement points to meet your exact needs.
                </p>
                <div className="col-span-1 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-dashed border-brand-lightgray rounded-lg flex items-center justify-center bg-white text-brand-lightgray">
                    {/* Image goes here */}
                    Image Frame
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow Down for Mobile */}
          <div className="flex justify-center md:hidden">
            <ArrowDown size={32} className="text-brand-teal" />
          </div>
        </div>
        
        {/* Benefit 2 - Virtual Try-on Feature Showcase */}
        <div className="mt-8">
          <section id="virtual-try-on" className="py-8 bg-brand-gray rounded-lg w-full border border-brand-lightgray">
            <div className="container mx-auto px-0 md:px-4">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Features List */}
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">See Exactly How Garments Will Fit</h3>
                  <div className="space-y-4 mb-6">
                    {/* Feature 1 */}
                    <div className="flex items-start">
                      <div className="bg-brand-lightblue p-2 rounded-full mr-4 mt-1">
                        {/* Checkmark Shield Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Fit Accurate</h4>
                        <p className="text-gray-700">Real-time visualization of how garments will drape and fit on your body</p>
                      </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex items-start">
                      <div className="bg-brand-lightblue p-2 rounded-full mr-4 mt-1">
                        {/* Star Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Size Accurate</h4>
                        <p className="text-gray-700">Precise measurements at 0.1" accuracy for every garment dimension</p>
                      </div>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex items-start">
                      <div className="bg-brand-lightblue p-2 rounded-full mr-4 mt-1">
                        {/* User Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">On Your Body</h4>
                        <p className="text-gray-700">Personalized visualization using customer's actual body measurements</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Image with Overlay */}
                <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="https://placehold.co/600x500?text=Virtual Try-On Technology"
                      alt="Virtual try-on technology showing a garment on a digital model with accurate measurements"
                      className="w-full h-auto"
                      width={600}
                      height={500}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://placehold.co/${target.width}x${target.height}`;
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue to-transparent p-6">
                      <span className="bg-brand-teal text-white text-xs px-3 py-1 rounded-full">First in the world</span>
                      <h4 className="text-white text-xl font-bold mt-2">Fit &amp; Size Accuracy Combined</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;