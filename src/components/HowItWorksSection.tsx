
import React from 'react';
import { Upload, CheckCircle, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Header row with title and upload step */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Title - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue leading-tight">
              1 Step Process to Provide 2 Benefits
            </h2>
          </div>

          {/* Upload step - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-brand-teal h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue">Upload Product Images</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Upload images of your products clicked using our marker to our platform
                </p>
                <div className="mt-auto flex justify-center">
                  <Upload size={48} className="text-brand-teal" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits cards - 2 columns side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefit A Card */}
          <Card className="shadow-md overflow-hidden">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <img
                src="https://placehold.co/600x400?text=Custom+Measurements"
                alt="Custom measurements feature"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-brand-blue text-center mb-2">Benefit A</h3>
              <p className="text-gray-700 text-center mb-6">
                Users can find any measurement they need with precision and confidence
              </p>
              <div className="space-y-4">
                {/* Bullet point 1 */}
                <div className="flex items-start">
                  <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Measurements</h4>
                    <p className="text-sm text-gray-600">Choose specific points on garments to get any measurement</p>
                  </div>
                </div>
                
                {/* Bullet point 2 */}
                <div className="flex items-start">
                  <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
                    <Star className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Precise Accuracy</h4>
                    <p className="text-sm text-gray-600">Get measurements with 0.1 inch accuracy</p>
                  </div>
                </div>
                
                {/* Bullet point 3 */}
                <div className="flex items-start">
                  <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
                    <Users className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Customization</h4>
                    <p className="text-sm text-gray-600">Tailor measurement points to meet your exact needs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefit B Card */}
          <Card className="shadow-md overflow-hidden">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <img
                src="https://placehold.co/600x400?text=Virtual+Try-On"
                alt="Virtual try-on technology"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-brand-blue text-center mb-2">Benefit B</h3>
              <p className="text-gray-700 text-center mb-6">
                See exactly how garments will fit with our revolutionary virtual try-on technology
              </p>
              <div className="space-y-4">
                {/* Bullet point 1 */}
                <div className="flex items-start">
                  <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fit Accurate</h4>
                    <p className="text-sm text-gray-600">Real-time visualization of how garments will fit your body</p>
                  </div>
                </div>
                
                {/* Bullet point 2 */}
                <div className="flex items-start">
                  <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
                    <Star className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Size Accurate</h4>
                    <p className="text-sm text-gray-600">Precise measurements at 0.1" accuracy for every dimension</p>
                  </div>
                </div>
                
                {/* Bullet point 3 */}
                <div className="flex items-start">
                  <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
                    <Users className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">On Your Body</h4>
                    <p className="text-sm text-gray-600">Personalized visualization using your actual body measurements</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
