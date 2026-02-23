import React from 'react';
import { Coffee, Clock, User } from 'lucide-react';
import founderImage from '../assets/founder-section.jpg';

const EmotionalSection = () => {
  return (
    <section className="sl-section bg-gradient-to-br from-stone-50 via-amber-50/40 to-stone-100">
      <div className="sl-section-inner max-w-7xl">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] items-center border-t border-stone-200 pt-12">
          {/* Text first so the story is the main focus */}
          <div>
            <p className="sl-eyebrow mb-3">Meet our project</p>
            <h2 className="sl-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              SafeLanding Spain was consciously created from lived experience.
            </h2>
            <div className="sl-body-copy text-sm md:text-base text-stone-800 space-y-4 leading-relaxed max-w-2xl">
              <p>
                I&apos;m Fabiola, born and raised in Spain and currently living abroad in the U.S. After navigating multiple
                visa processes, bureaucratic hurdles across different countries, and the emotional reality of building a
                life between cultures, I deeply understand how disorienting — and overwhelming — relocation can be.
              </p>
              <p>
                Even when you speak the language, systems can feel opaque. Even when the decision is right, the process
                can feel heavy.
              </p>
              <p>
                SafeLanding Spain exists to bridge that gap: offering clear guidance, bilingual support, and a human
                approach to Spanish bureaucracy and settling in — so you feel informed, supported, and less alone
                throughout the transition.
              </p>
            </div>
          </div>

          {/* Founder photo as a smaller, supporting element */}
          <div className="flex justify-center lg:justify-end">
            <figure className="w-full max-w-xs sm:max-w-sm aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200/60 shadow-sm shadow-stone-300/70">
              <img
                src={founderImage}
                alt="Fabiola, founder of SafeLanding Spain, wrapped in an orange shawl"
                width="400"
                height="500"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
