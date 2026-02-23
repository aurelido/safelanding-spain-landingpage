import React from 'react';
import ctaImage from '../assets/final-cta-section.jpg';

const FinalCtaSection = () => {
  return (
    <section className="sl-section bg-stone-50 border-t border-stone-200">
      <div className="sl-section-inner max-w-7xl">
        <div className="grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.4fr)] gap-12 items-stretch">
          {/* Left column: short reassurance and CTA */}
          <div className="flex flex-col justify-center">
            <p className="sl-eyebrow mb-3">Get Started</p>
            <h2 className="sl-heading text-3xl md:text-4xl mb-4">Every relocation journey is different.</h2>
            {/* <p className="sl-subtitle text-sm md:text-base mb-6 max-w-md"> */}
            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
              The best place to start is a 30-minute, complimentary call where we take the time to understand your situation, clarify where you are in the process, and see whether our support is the right fit.
            </p>
            <a
              href="#contact"
              className="sl-button-primary w-max"
            >
              Get in touch
            </a>
          </div>

          {/* Right column */}
          {/* <div className="bg-white border border-stone-200 rounded-2xl px-6 py-6 md:px-8 md:py-8 shadow-sm"> */}
            {/* <div className="bg-gradient-to-br from-amber-200/70 to-amber-500/60 rounded-2xl w-full h-72 md:h-[22rem] flex items-center justify-center"> */}
              <div className="text-center">
                <img
                  src={ctaImage}
                  alt="Two people having an exploratory relocation consultation over coffee in Spain"
                  width="800"
                  height="534"
                  loading="lazy"
                  className="w-full h-full object-cover shadow-sm border border-[color:var(--sl-border)] rounded-2xl"
                />
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
