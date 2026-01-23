import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md"
      aria-label="Primary navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-light tracking-[0.16em] uppercase text-stone-900">
              SafeLanding Spain
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="text-stone-700 hover:text-stone-950 transition-colors tracking-wide">
              About
            </a>
            <a href="#what-we-do" className="text-stone-700 hover:text-stone-950 transition-colors tracking-wide">
              What We Do
            </a>
            <a href="#services" className="text-stone-700 hover:text-stone-950 transition-colors tracking-wide">
              Services
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
          <button
            className="md:hidden text-stone-800 p-2 rounded-md hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="primary-nav-mobile"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden border-t border-stone-200 bg-white/95 backdrop-blur-sm"
          id="primary-nav-mobile"
        >
          <div className="px-4 pb-4 pt-2 space-y-1 text-sm font-medium">
            <a
              href="#about"
              onClick={closeMenu}
              className="block py-2 text-stone-800 hover:text-stone-950"
            >
              About
            </a>
            <a
              href="#what-we-do"
              onClick={closeMenu}
              className="block py-2 text-stone-800 hover:text-stone-950"
            >
              What We Do
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="block py-2 text-stone-800 hover:text-stone-950"
            >
              Services
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="block py-2 text-stone-800 hover:text-stone-950"
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block py-2 text-stone-800 hover:text-stone-950"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-stone-900/15 bg-stone-900 px-5 py-2 text-sm font-medium text-stone-50 shadow-sm hover:bg-stone-800 transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
