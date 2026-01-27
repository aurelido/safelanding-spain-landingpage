import React from 'react';

const FinalCtaSection = () => {
  return (
    <section className="sl-section bg-stone-50 border-t border-stone-200">
      <div className="sl-section-inner max-w-7xl">
        <div className="grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.4fr)] gap-12 items-stretch">
          {/* Left column: short reassurance and CTA */}
          <div className="flex flex-col justify-center">
            <p className="sl-eyebrow mb-3">Next step</p>
            <h2 className="sl-heading text-3xl md:text-4xl mb-4">Let's talk about your move to Spain.</h2>
            <p className="sl-subtitle text-sm md:text-base mb-6 max-w-md">
              Share a bit about your plans, and we'll follow up with a calm, practical conversation—no pressure, no sales script, just clear guidance.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-900/15 bg-white px-6 py-2.5 text-sm font-medium tracking-wide text-stone-900 shadow-sm hover:bg-stone-100 transition-colors w-max"
            >
              Get in touch
            </a>
          </div>

          {/* Right column */}
          {/* <div className="bg-white border border-stone-200 rounded-2xl px-6 py-6 md:px-8 md:py-8 shadow-sm"> */}
            {/* <div className="bg-gradient-to-br from-amber-200/70 to-amber-500/60 rounded-2xl w-full h-72 md:h-[22rem] flex items-center justify-center"> */}
              <div className="text-center">
                <img
                  // src="https://placehold.co/400x400/8B5A3C/FFFFFF?text=Nature+in+Spain"
                  src="src/assets/final-cta-section.jpg"
                  alt="Beautiful Spanish landscape"
                  className="w-full h-full object-cover rounded-2xl"
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
