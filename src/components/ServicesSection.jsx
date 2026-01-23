import React from 'react';
import { Compass, FileText, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-stone-50 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 tracking-tight">How We Can Help</h2>
          <p className="text-base md:text-lg text-stone-600 max-w-3xl mx-auto font-light">
            Your move has different stages — and we support you through all of them, from planning to paperwork to settling in. Choose the service that fits where you are right now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto border-t border-stone-200 pt-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200/80">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Compass className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-light text-amber-800 mb-2 tracking-wide">Exploratory Relocation Consultation</h3>
            <p className="text-amber-700 font-medium mb-4 tracking-wide">Planning Your Move</p>
            <p className="text-gray-600 mb-6 font-light">This is for you if you're still abroad or early in the process.</p>
            <p className="text-gray-600 mb-6 font-light">
              We help you understand your visa options, eligibility, timelines, and next steps. You'll get clear answers, guidance tailored to your situation, and a step-by-step plan you can follow with confidence.
            </p>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors tracking-wide">
              Book This Service
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-light text-amber-800 mb-2 tracking-wide">Visa Document Preparation</h3>
            <p className="text-amber-700 font-medium mb-4 tracking-wide">Preparing Your Paperwork</p>
            <p className="text-gray-600 mb-6 font-light">
              Perfect if you want help preparing your NLV or DNV documents — without legal complexities or confusion.
            </p>
            <p className="text-gray-600 mb-6 font-light">
              We guide you through every requirement, help you avoid common mistakes, prepare and organize your documents, and support you right up to your consulate appointment.
            </p>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors tracking-wide">
              Book This Service
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-light text-amber-800 mb-2 tracking-wide">Concierge Support in Spain</h3>
            <p className="text-amber-700 font-medium mb-4 tracking-wide">Life in Spain Support</p>
            <p className="text-gray-600 mb-6 font-light">
              Already in Spain and feeling overwhelmed by daily life or Spanish bureaucracy?
            </p>
            <p className="text-gray-600 mb-6 font-light">
              We provide personal, bilingual, hands-on support for the practical tasks that are difficult without Spanish or local knowledge. From appointments and certificates to housing communication and everyday admin, we help you move through life in Spain with more ease and confidence.
            </p>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors tracking-wide">
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
