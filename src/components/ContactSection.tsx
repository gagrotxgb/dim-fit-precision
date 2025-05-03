
import React, { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        number: '',
        email: '',
        company: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="section-title">Message Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                  Number
                </label>
                <input
                  id="number"
                  type="tel"
                  name="number"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  aria-required="true"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-70"
                  aria-label="Submit form"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Map and Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="bg-brand-gray rounded-lg h-64 md:h-60 w-full flex items-center justify-center">
              <p className="text-brand-blue text-lg">Contact information</p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Contact Information</h3>
              <p className="text-gray-700 mb-1">Email: info@appareldim.com</p>
              <p className="text-gray-700">Address: 123 Tech Avenue, Innovation District, CA 94103</p>
              
              <div className="flex space-x-4 mt-6">
                <a 
                  href="https://instagram.com/appareldim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white p-2 rounded-full hover:bg-brand-teal transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com/company/appareldim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white p-2 rounded-full hover:bg-brand-teal transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
