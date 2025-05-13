
import React, { useEffect, useRef, useState } from 'react';
import { Upload, CheckCircle, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const weightValues = [60, 75, 90, 85];
const heightValues = [183, 183, 183, 186];

const HowItWorksSection = () => {
  const animationRef = useRef<{ active: boolean }>({ active: true });
  const animatedPaths = useRef<Set<string>>(new Set());
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // IDs of the animated paths
    const ids = ['segmentA1', 'segmentA2', 'segmentA3', 'segmentA4', 'segmentA5'];
    
    // Initialize paths with starting state
    ids.forEach(id => {
      const path = document.getElementById(id) as SVGPathElement | null;
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.transition = 'stroke-dashoffset 1.6s ease-in-out';
      }
    });

    // Create intersection observer to trigger animations only when visible
    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedPaths.current.size) {
          // Only start animations when the section is visible
          startAnimations(ids);
        }
      },
      { threshold: 0.2 } // Start when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.current.observe(sectionRef.current);
    }

    // Optimized animation that doesn't use requestAnimationFrame during scroll
    function startAnimations(pathIds: string[]) {
      pathIds.forEach((id, idx) => {
        setTimeout(() => {
          if (!animationRef.current.active) return;
          
          const element = document.getElementById(id);
          if (!element || !(element instanceof SVGPathElement)) return;
          
          const path = element;
          // Use CSS transitions instead of JS animation
          path.style.strokeDashoffset = '0';
          animatedPaths.current.add(id);
          
          // Reset animation after delay
          setTimeout(() => {
            if (!animationRef.current.active) return;
            
            // Briefly pause at full visibility
            path.style.transition = 'none';
            
            setTimeout(() => {
              if (!animationRef.current.active) return;
              
              // Reset and prepare for next animation
              const length = path.getTotalLength();
              path.style.strokeDashoffset = `${length}`;
              
              setTimeout(() => {
                if (!animationRef.current.active) return;
                
                // Restore transition for next animation
                path.style.transition = 'stroke-dashoffset 1.6s ease-in-out';
                path.style.strokeDashoffset = '0';
              }, 50);
            }, 1000);
          }, 1600);
        }, idx * 200);
      });
    }

    // Cleanup
    return () => {
      animationRef.current.active = false;
      if (observer.current && sectionRef.current) {
        observer.current.unobserve(sectionRef.current);
        observer.current.disconnect();
      }
      animatedPaths.current.clear();
    };
  }, []);

  const [weightIdx, setWeightIdx] = useState(0);

  return (
    <section id="how-it-works" className="section-padding bg-white" ref={sectionRef}>
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
                {/* <div className="mt-auto flex justify-center">
                  <Upload size={48} className="text-brand-teal" />
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits cards - 2 columns side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefit A Card */}
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
              {/* Badge: absolute on desktop, static below SVG on mobile s*/}
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

          {/* Benefit B Card */}
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
                    <h4 className="font-semibold text-gray-900">Like Your Body</h4>
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

function Slideshow({ onImageChange }: { onImageChange?: (idx: number) => void }) {
  const images = [
    "/ChatGPT Image May 11, 2025, 1-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 2-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 3-Photoroom.png",
    "/ChatGPT Image May 11, 2025, 4-Photoroom.png",
  ];
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  
  useEffect(() => {
    if (onImageChange) onImageChange(currentIdx);
  }, [currentIdx, onImageChange]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Start transition
      setTransitioning(true);
      setNextIdx((currentIdx + 1) % images.length);
      
      // After transition completes, update current index
      const transitionTimer = setTimeout(() => {
        setCurrentIdx((currentIdx + 1) % images.length);
        setTransitioning(false);
      }, 1000); // Match this with the CSS transition duration
      
      return () => clearTimeout(transitionTimer);
    }, 3000); // Total time between transitions
    
    return () => clearInterval(timer);
  }, [currentIdx, images.length]);
  
  return (
    <div className="relative h-full w-auto" style={{ height: '100%', width: 'auto', maxHeight: 245, maxWidth: 320 }}>
      {/* Current image */}
      <img
        src={images[currentIdx]}
        alt={`Virtual try-on technology ${currentIdx + 1}`}
        className="object-contain rounded absolute top-0 left-0 w-full h-full"
        style={{ 
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 1s ease-in-out'
        }}
      />
      {/* Next image (for crossfade) */}
      <img
        src={images[nextIdx]}
        alt={`Virtual try-on technology ${nextIdx + 1}`}
        className="object-contain rounded absolute top-0 left-0 w-full h-full"
        style={{ 
          opacity: transitioning ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      />
    </div>
  );
}

export default HowItWorksSection;
