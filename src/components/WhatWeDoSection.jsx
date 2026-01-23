import React from 'react';
import { User, FileText, Plane, Home } from 'lucide-react';

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="sl-section bg-white">
      <div className="sl-section-inner max-w-6xl">
        <div className="mb-12">
          <p className="sl-eyebrow mb-2">
            How we work
          </p>
          <h2 className="sl-heading text-3xl md:text-4xl mb-3">
            A calm, step-by-step path to Spain.
          </h2>
          <p className="sl-subtitle text-sm md:text-base max-w-2xl">
            From the first conversation to the day you feel truly settled, our process is designed to keep you informed,
            supported, and out of overwhelm.
          </p>
        </div>

        <div className="space-y-10 border-t border-stone-200 pt-10">
          {/* Row 1 */}
          <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center pt-1">
                <div className="w-10 h-10 rounded-full border border-amber-500/70 flex items-center justify-center text-amber-600">
                  <User className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light text-stone-900 mb-1 tracking-tight">
                  Exploratory Relocation Consultation
                </h3>
                <p className="text-sm font-medium text-stone-700 mb-1">Planning Your Move</p>
              </div>
            </div>
            <div className="text-sm text-stone-700 leading-relaxed">
              <p className="mb-3">
                This is for you if you're still abroad or early in the process.
              </p>
              <p>
                We help you understand your visa options, eligibility, timelines, and next steps. You'll get clear answers,
                guidance tailored to your situation, and a step-by-step plan you can follow with confidence.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 border-t border-stone-200 pt-10">
            <div className="flex gap-4">
              <div className="flex flex-col items-center pt-1">
                <div className="w-10 h-10 rounded-full border border-amber-500/70 flex items-center justify-center text-amber-600">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light text-stone-900 mb-1 tracking-tight">Visa Document Preparation</h3>
                <p className="text-sm font-medium text-stone-700 mb-1">Preparing Your Paperwork</p>
              </div>
            </div>
            <div className="text-sm text-stone-700 leading-relaxed">
              <p className="mb-3">
                Perfect if you want help preparing your NLV or DNV documents — without legal complexities or confusion.
              </p>
              <p>
                We guide you through every requirement, help you avoid common mistakes, prepare and organize your
                documents, and support you right up to your consulate appointment.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 border-t border-stone-200 pt-10">
            <div className="flex gap-4">
              <div className="flex flex-col items-center pt-1">
                <div className="w-10 h-10 rounded-full border border-amber-500/70 flex items-center justify-center text-amber-600">
                  <Home className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light text-stone-900 mb-1 tracking-tight">Concierge Support in Spain</h3>
                <p className="text-sm font-medium text-stone-700 mb-1">Life in Spain Support</p>
              </div>
            </div>
            <div className="text-sm text-stone-700 leading-relaxed">
              <p className="mb-3">
                Already in Spain and feeling overwhelmed by daily life or Spanish bureaucracy?
              </p>
              <p>
                We provide personal, bilingual, hands-on support for the practical tasks that are difficult without Spanish
                or local knowledge. From appointments and certificates to housing communication and everyday admin, we help
                you move through life in Spain with more ease and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
