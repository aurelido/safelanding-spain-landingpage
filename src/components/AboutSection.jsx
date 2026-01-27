import React from 'react';
import { CheckCircle } from 'lucide-react';
import aboutImage from '../assets/placehold_nature_spain.svg';

const AboutSection = () => {
  return (
    <section id="about" className="sl-section bg-white border-t border-stone-200/80">
      <div className="sl-section-inner max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-amber-200/70 to-amber-500/60 rounded-2xl w-full h-72 md:h-[22rem] flex items-center justify-center">
              <div className="text-center">
                <img
                  // src="https://placehold.co/400x400/8B5A3C/FFFFFF?text=Nature+in+Spain"
                  src="src/assets/about-section.jpeg"
                  alt="Beautiful Spanish landscape"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          {/* <div className="relative">
            <div className="bg-gradient-to-br from-amber-200/70 to-amber-500/60 rounded-2xl w-full h-72 md:h-[22rem] flex items-center justify-center">
              <div className="text-center">
                <img
                  // src="https://placehold.co/400x400/8B5A3C/FFFFFF?text=Nature+in+Spain"
                  src={aboutImage}
                  alt="Beautiful Spanish landscape"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div> */}
          <div>
            <p className="sl-eyebrow mb-2">About us</p>
            <h2 className="sl-heading text-3xl md:text-4xl mb-6">Our Vision</h2>
            <p className="sl-subtitle text-base md:text-lg mb-6">
              SafeLanding Spain is a boutique relocation & concierge agency helping Americans move to Spain — and truly settle in — with clarity, confidence, and care.            </p>
            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
              We help you navigate both sides of the transition: the practical (visas, documents, appointments, bureaucracy) and the human (language barriers, overwhelm, uncertainty, adapting to daily life).
            </p>
            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
              From visa and application preparation to hands-on concierge support once you’re in Spain, we act as your bilingual guide through Spanish systems and everyday realities — so you don’t have to figure it out alone.
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
                  <span>simple explanations of Spanish administrative processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>1:1 real human support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>a high-touch, personalized experience where you’re truly supported</span>
                </li>
              </ul>
            </div>

            <p className="text-xl font-semibold text-amber-800 italic mb-4 tracking-wide">
              Your move doesn't have to be chaotic.
            </p>
            <p className="text-lg text-gray-700 font-light tracking-wide">
              Wherever you are in your journey — planning, preparing, or already in Spain — we help you land safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
