import React from 'react';
import { CheckCircle } from 'lucide-react';
import aboutImage from '../assets/about-section.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-200/70 to-amber-500/60 rounded-2xl w-full h-80 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <img
                  src="https://placehold.co/400x400/8B5A3C/FFFFFF?text=Nature+in+Spain"
                  // src={aboutImage}
                  alt="Beautiful Spanish landscape"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-amber-700 mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-6 tracking-tight">Our Vision</h2>
            <p className="text-base md:text-lg text-stone-700 mb-6 font-light">
              SafeLanding Spain is a boutique relocation & concierge agency helping expats move to Spain — and truly settle in — with clarity, confidence, and care.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
              We support you not only with the planning and paperwork, but also with the after-arrival reality: the phone calls, appointments, forms, language barriers, and everyday tasks that can quickly feel overwhelming.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
              From visa clarity and document preparation to on-site, day-to-day support once you're in Spain, we act as your bilingual guide through Spanish bureaucracy and daily life — so you don't have to navigate it alone.
            </p>

            <div className="bg-amber-50/60 p-6 rounded-lg border border-amber-100 mb-6">
              <h4 className="font-semibold text-amber-800 mb-4 tracking-wide">We believe in:</h4>
              <ul className="space-y-2 text-gray-700 font-light">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>clear, honest guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>simple explanations (no Spanish admin headaches)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>1:1 real human support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>and making every client feel genuinely cared for</span>
                </li>
              </ul>
            </div>

            <p className="text-xl font-semibold text-amber-800 italic mb-4 tracking-wide">
              Your move doesn't have to be chaotic.
            </p>
            <p className="text-lg text-gray-700 font-light tracking-wide">
              Wherever you are in your journey — planning, preparing, or already here — we help you land safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
