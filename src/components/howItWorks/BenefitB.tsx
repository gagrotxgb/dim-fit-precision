
import React, { useState } from 'react';
import { CheckCircle, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Slideshow from './Slideshow';

const weightValues = [60, 75, 90, 85];
const heightValues = [183, 183, 183, 186];

const BenefitB: React.FC = () => {
  const [weightIdx, setWeightIdx] = useState(0);

  return (
    <Card className="shadow-md overflow-hidden">
      <div className="bg-gray-200 h-64 flex items-center justify-center">
        <div className="w-full h-full grid grid-cols-2">
          {/* Left: Sliders */}
          <div className="flex flex-col justify-center items-center px-4">
            <div className="w-full mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
              {/* Desktop (>=500px): show slider and min/max */}
              <div className="hidden min-[500px]:flex items-center">
                <span className="text-xs text-gray-500 mr-2">60kg</span>
                <input
                  type="range"
                  min={60}
                  max={100}
                  value={weightValues[weightIdx]}
                  readOnly
                  className="w-full accent-brand-teal pointer-events-none"
                  style={{
                    pointerEvents: 'none',
                    backgroundColor: '#e5e7eb', // Tailwind gray-200
                  }}
                />
                <span className="text-xs text-gray-500 ml-2">100kg</span>
              </div>
              {/* Mobile (<500px): just show value */}
              <div className="flex min-[500px]:hidden items-center justify-left">
                <span className="text-lg font-semibold text-brand-teal">{weightValues[weightIdx]} kg</span>
              </div>
              <div className="text-xs text-center text-gray-700 mt-1 min-[500px]:block hidden">{weightValues[weightIdx]} kg</div>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
              {/* Desktop (>=500px): show slider and min/max */}
              <div className="hidden min-[500px]:flex items-center">
                <span className="text-xs text-gray-500 mr-2">170cm</span>
                <input
                  type="range"
                  min={170}
                  max={200}
                  value={heightValues[weightIdx]}
                  readOnly
                  className="w-full accent-brand-teal pointer-events-none"
                  style={{
                    pointerEvents: 'none',
                    backgroundColor: '#e5e7eb', // Tailwind gray-200
                  }}
                />
                <span className="text-xs text-gray-500 ml-2">200cm</span>
              </div>
              {/* Mobile (<500px): just show value */}
              <div className="flex min-[500px]:hidden items-center justify-left">
                <span className="text-lg font-semibold text-brand-teal">{heightValues[weightIdx]} cm</span>
              </div>
              <div className="text-xs text-center text-gray-700 mt-1 min-[500px]:block hidden">{heightValues[weightIdx]} cm</div>
            </div>
          </div>
          {/* Right: Slideshow */}
          <div className="flex items-center justify-center h-full overflow-visible">
            <div className="w-full flex min-[500px]:justify-center justify-end overflow-visible relative">
              {/* On mobile, absolutely position the image to the right, allow overflow left */}
              <div className="max-w-full overflow-visible min-[500px]:static absolute right-0 top-1/2 min-[500px]:top-auto min-[500px]:right-auto min-[500px]:transform-none -translate-y-1/2 min-[500px]:-translate-y-0"
                style={{ maxWidth: 'none', width: 'auto' }}
              >
                <Slideshow onImageChange={setWeightIdx} />
              </div>
            </div>
          </div>
        </div>
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
            <div className="flex flex-col">
              <div className="flex items-center">
                <h4 className="font-semibold text-gray-900">Fit Accurate</h4>
                {/* World's First badge - styled like 0.1 inch Accuracy badge */}
                <span
                  className="
                    ml-2
                    inline-flex
                    items-center bg-brand-teal/90 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-lg z-10
                  "
                >
                  <svg className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  World's First
                </span>
              </div>
              <p className="text-sm text-gray-600">Real-life visualization of how garments will fit your body</p>
            </div>
          </div>
          
          {/* Bullet point 2 */}
          <div className="flex items-start">
            <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
              <Star className="h-5 w-5 text-brand-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Size Accurate</h4>
              <p className="text-sm text-gray-600">Precise measurements at 0.1" accuracy for every size</p>
            </div>
          </div>
          
          {/* Bullet point 3 */}
          <div className="flex items-start">
            <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
              <Users className="h-5 w-5 text-brand-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Like Your Body</h4>
              <p className="text-sm text-gray-600">Personalized visualization using your actual body measurements</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BenefitB;
