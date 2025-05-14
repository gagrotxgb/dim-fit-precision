
import React from 'react';
import { usePathAnimation } from './howItWorks/AnimationUtils';
import BenefitA from './howItWorks/BenefitA';
import BenefitB from './howItWorks/BenefitB';
import ProcessStep from './howItWorks/ProcessStep';

const HowItWorksSection: React.FC = () => {
  const { sectionRef } = usePathAnimation();

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
            <ProcessStep
              stepNumber={1}
              title="Upload Product Images"
              description="Upload images of your products clicked using our marker to our platform"
            />
          </div>
        </div>

        {/* Benefits cards - 2 columns side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefit A Card */}
          <BenefitA />

          {/* Benefit B Card */}
          <BenefitB />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
