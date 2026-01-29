import React from 'react';
import heroBg from '../assets/hero-section-bg.webp';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with warm gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Scenic view representing life in Spain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-24">
        <p className="text-sm font-medium tracking-[0.22em] uppercase text-amber-50/90 mb-4">
          Boutique Relocation & Transition Support for Moving to Spain
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 md:mb-6 leading-tight tracking-tight">
          A Peaceful, Well-Guided Move to Spain
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-amber-50/90 mb-6 md:mb-8 max-w-2xl mx-auto font-light">
          Personalized support for expats navigating visas, paperwork, and life in Spain — with clarity, care, and real human guidance at every step.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            className="sl-button-primary sl-button-hero"
            href="https://koalendar.com/e/relocation-exploratory-call-complimentary"
          >
            Book Exploratory Call
          </a>
          {/* <a href="#what-we-do" className="inline-flex items-center justify-center text-sm font-medium text-amber-50/90 hover:text-white transition-colors underline-offset-4 hover:underline">
            Learn How It Works
          </a> */}
        </div>
        {/* <p className="text-amber-100/80 mt-6 text-xs font-normal tracking-[0.22em] uppercase">
          Trusted by Americans beginning a grounded new chapter in Spain
        </p> */}
      </div>
    </section>
  );
};

export default HeroSection;
