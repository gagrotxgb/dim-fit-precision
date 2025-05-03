
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <a href="#main" className="skip-to-content">Skip to content</a>
      
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-brand-blue">
          ApparelDIM
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-blue hover:text-brand-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#hero"
            className="btn-primary"
          >
            See Demo
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-brand-blue p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 flex flex-col items-center py-4"
          role="menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 text-brand-blue hover:text-brand-teal transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#hero"
            className="mt-3 btn-primary w-5/6 text-center"
            onClick={() => setIsMenuOpen(false)}
            role="menuitem"
          >
            See Demo
          </a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
