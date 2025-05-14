
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, description }) => {
  return (
    <Card className="border-2 border-brand-teal h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
            {stepNumber}
          </div>
          <h3 className="text-xl font-bold text-brand-blue">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProcessStep;
