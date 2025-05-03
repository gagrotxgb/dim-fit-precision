
import React from 'react';
import { TrendingUp, Check, Settings, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-teal" />,
      title: 'Reduced Returns',
      description: 'Precise, SKU-level sizing minimizes returns by ensuring customers receive accurately sized products.'
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-teal" />,
      title: 'Enhanced Customer Trust',
      description: 'Accurate sizing builds confidence in your brand, leading to higher customer satisfaction and repeat business.'
    },
    {
      icon: <Check className="h-6 w-6 text-brand-teal" />,
      title: 'Improved Conversion Rates',
      description: 'Clear sizing information improves the online shopping experience, leading to increased conversions.'
    },
    {
      icon: <Settings className="h-6 w-6 text-brand-teal" />,
      title: 'Operational Efficiency',
      description: 'Automated sizing reduces manual errors and simplifies inventory management for your business.'
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-brand-gray">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Retail Benefits</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Our technology is designed to support apparel retailers by enhancing the shopping experience and reducing operational challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4"
            >
              <div className="bg-brand-teal/10 p-3 rounded-md">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
