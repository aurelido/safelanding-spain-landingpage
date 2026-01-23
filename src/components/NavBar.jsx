import React from 'react';

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-light tracking-[0.16em] uppercase text-stone-900">
              SafeLanding Spain
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#what-we-do" className="text-stone-700 hover:text-stone-950 transition-colors tracking-wide">
              What We Do
            </a>
            <a href="#services" className="text-stone-700 hover:text-stone-950 transition-colors tracking-wide">
              Services
            </a>
            <a href="#about" className="text-stone-700 hover:text-stone-950 transition-colors tracking-wide">
              About
            </a>
            <a href="#faq" className="text-stone-700 hover:text-stone-950 transition-colors tracking-wide">
              FAQs
            </a>
            <a href="#contact" className="text-stone-700 hover:text-stone-950 transition-colors tracking-wide">
              Contact
            </a>
            <button className="rounded-full border border-stone-900/10 bg-stone-900 text-stone-50 px-5 py-2 text-sm font-medium tracking-wide hover:bg-stone-800 hover:border-stone-900/30 transition-colors">
              Book a Consultation
            </button>
          </div>
          <button className="md:hidden text-stone-800" aria-label="Open navigation menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
