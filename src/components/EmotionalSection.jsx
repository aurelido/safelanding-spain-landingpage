import React from 'react';
import { Coffee, Clock, User } from 'lucide-react';

const EmotionalSection = () => {
  return (
    <section className="sl-section bg-gradient-to-br from-stone-50 via-amber-50/40 to-stone-100">
      <div className="sl-section-inner max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center border-t border-stone-200 pt-12">
          <div>
            <p className="sl-eyebrow mb-2">Beyond paperwork</p>
            <h2 className="sl-heading text-3xl md:text-4xl mb-6">Moving Abroad is More Than Paperwork</h2>
            <p className="sl-subtitle text-base md:text-lg mb-6">
              It's about leaving behind everything familiar—the grocery store clerk who knows your name, your favorite coffee shop corner, the rhythm of your daily life.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
              It's about the excitement of cobblestone streets and siestas, but also the fear of getting lost in bureaucracy or feeling isolated in a new language.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
              We've been there. That's why we don't just handle documents—we hold space for your hopes, fears, and dreams while making the practical side feel manageable.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center text-amber-700 font-light tracking-wide">
                <Coffee className="w-5 h-5 mr-2" />
                <span>No more 3 a.m. Google spirals</span>
              </div>
              <div className="flex items-center text-amber-700 font-light tracking-wide">
                <Clock className="w-5 h-5 mr-2" />
                <span>Clear timeline, no surprises</span>
              </div>
              <div className="flex items-center text-amber-700 font-light tracking-wide">
                <User className="w-5 h-5 mr-2" />
                <span>Someone who's actually done it</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl w-full h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <Coffee className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <p className="text-amber-800 italic font-light tracking-wide">
                  "Finally, someone who understands both the paperwork AND the heart of moving abroad."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
