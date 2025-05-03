
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-blue text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="font-bold text-xl">ApparelDIM</p>
            <p className="text-white/70 mt-1">Super Accurate Apparel Sizing</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p className="text-white/70">© {year} ApparelDIM. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
