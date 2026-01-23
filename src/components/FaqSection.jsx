import React from 'react';
import { HelpCircle } from 'lucide-react';

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-stone-600 font-light">
            We've heard these questions countless times—and we're happy to answer them clearly.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto border-t border-stone-200 pt-8">
          <div className="border-b border-stone-200 pb-6">
            <h3 className="text-lg font-medium text-stone-900 mb-2 flex items-center tracking-tight">
              <HelpCircle className="w-5 h-5 mr-2" />
              Do you work with all types of visas?
            </h3>
              <p className="text-sm text-stone-700 font-light">
              We specialize in non-lucrative visas, student visas, digital nomad visas, and family reunification visas for Americans moving to Spain. We don't handle work visas that require employer sponsorship.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-light text-amber-800 mb-2 flex items-center tracking-wide">
              <HelpCircle className="w-5 h-5 mr-2" />
              Can you guarantee my visa will be approved?
            </h3>
            <p className="text-gray-600 font-light">
              No one can guarantee visa approval—that's ultimately up to Spanish immigration authorities. However, we dramatically increase your chances by ensuring your application is complete, accurate, and presents your case clearly and professionally.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-light text-amber-800 mb-2 flex items-center tracking-wide">
              <HelpCircle className="w-5 h-5 mr-2" />
              When should I contact you—before or after I decide to move?
            </h3>
            <p className="text-gray-600 font-light">
              The earlier, the better! Many clients reach out during their research phase (6-12 months before moving) to understand requirements and timeline. Others contact us once they've made their decision but before starting paperwork. We can help at any stage.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-light text-amber-800 mb-2 flex items-center tracking-wide">
              <HelpCircle className="w-5 h-5 mr-2" />
              What if I'm not sure Spain is the right choice yet?
            </h3>
            <p className="text-gray-600 font-light">
              Our Initial Consultation is perfect for this! We'll help you evaluate if Spain aligns with your goals, lifestyle preferences, and practical considerations. No pressure—just honest, experienced guidance to inform your decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
