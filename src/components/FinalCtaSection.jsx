import React from 'react';

const FinalCtaSection = () => {
  return (
    <section className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.4fr)] gap-12 items-stretch">
          {/* Left column: short reassurance and CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-amber-700 mb-3">
              Next step
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 tracking-tight">
              Let's talk about your move to Spain.
            </h2>
            <p className="text-sm md:text-base text-stone-700 mb-6 max-w-md leading-relaxed">
              Share a bit about your plans, and we'll follow up with a calm, practical conversation—no pressure, no sales script, just clear guidance.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-900/15 bg-white px-6 py-2.5 text-sm font-medium tracking-wide text-stone-900 shadow-sm hover:bg-stone-100 transition-colors w-max"
            >
              Get in touch
            </a>
          </div>

          {/* Right column: simple enquiry layout hint */}
          <div className="bg-white border border-stone-200 rounded-2xl px-6 py-6 md:px-8 md:py-8 shadow-sm">
            <p className="text-sm font-medium text-stone-900 mb-4">A few details help us support you better:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4 text-xs text-stone-600">
              <div>
                <p className="font-medium mb-1">Timeline</p>
                <p>Are you exploring, actively planning, or already preparing documents?</p>
              </div>
              <div>
                <p className="font-medium mb-1">Location</p>
                <p>Where are you now, and which part of Spain are you considering?</p>
              </div>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              You can share as much or as little as you like. We read every message carefully and respond personally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
