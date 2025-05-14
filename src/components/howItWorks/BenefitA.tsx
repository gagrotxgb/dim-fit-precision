
import React from 'react';
import { CheckCircle, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitA: React.FC = () => {
  return (
    <Card className="shadow-md overflow-hidden">
      <div className="relative bg-gray-200 h-64 flex items-center justify-center">
        {/* Overlay SVG for animation */}
        <svg width="490" height="485" viewBox="-5 -8 490 490" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2}}>
          <g>
            <path id="segmentA1" d="M82 56.5L400 56L466.5 186" stroke="#FF0000" strokeWidth="5" fill="none" />
            <path id="segmentA2" d="M15 186.5L76.5 222.5" stroke="#FF0000" strokeWidth="5" fill="none" />
            <path id="segmentA3" d="M104.5 180.5H377" stroke="#FF0000" strokeWidth="5" fill="none" />
            <path id="segmentA4" d="M297.5 17.5V463" stroke="#FF0000" strokeWidth="5" fill="none" />
            <path id="segmentA5" d="M185 15.5H296.5" stroke="#FF0000" strokeWidth="5" fill="none" />
          </g>
        </svg>
        <img
          src="/svgviewer-output.svg"
          alt="Measurement Illustration"
          style={{
            maxWidth: 320,
            maxHeight: 245,
            width: "100%",
            height: "100%",
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            pointerEvents: "none",
            zIndex: 1
          }}
          draggable={false}
        />
        {/* Badge: absolute on desktop, static below SVG on mobile */}
        <span
          className="
            hidden
            lg:inline-flex
            absolute bottom-3 right-3
            items-center bg-brand-teal/90 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg z-10
          "
        >
          <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none"><path d="M4 20V17M4 17V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17M4 17H20M20 17V20M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          0.1 inch Accuracy
        </span>
      </div>
      {/* Mobile badge below SVG */}
      <div className="block lg:hidden px-4 mt-2 flex justify-end">
        <span
          className="
            inline-flex
            items-center bg-brand-teal/90 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg z-10
          "
        >
          <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none"><path d="M4 20V17M4 17V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17M4 17H20M20 17V20M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          0.1 inch Accuracy
        </span>
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
              <h4 className="font-semibold text-gray-900">Dynamic, SKU-Level Sizing</h4>
              <p className="text-sm text-gray-600">Each product and size can have a unique fit</p>
            </div>
          </div>
          
          {/* Bullet point 3 */}
          <div className="flex items-start">
            <div className="bg-brand-lightblue p-2 rounded-full mr-3 mt-1">
              <Users className="h-5 w-5 text-brand-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Automatically provides all dimensions</h4>
              <p className="text-sm text-gray-600">All Apparel measurement are automaticallly computed and provided to you</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BenefitA;
