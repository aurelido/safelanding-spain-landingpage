import React from 'react';
import { Compass, FileText, Briefcase, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="sl-section bg-stone-50 border-t border-stone-200/70">
      <div className="sl-section-inner max-w-7xl">
        <div className="text-center mb-14">
          <p className="sl-eyebrow mb-2">How we can help</p>
          <h2 className="sl-heading text-3xl md:text-4xl mb-4">Services</h2>
            <p className="sl-subtitle text-base md:text-lg mb-6">
            Your relocation has different stages — and we support you through all of them, from planning to paperwork to settling in.
          </p>
          <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
          {/* <p className="sl-subtitle text-base md:text-lg max-w-3xl mx-auto"> */}
            We support you not only with the preparation and documentation, but also with the after-arrival reality: the phone calls, appointments, forms, language barriers, and everyday tasks that can quickly feel overwhelming.
          </p>
          <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
            From visa clarity and document preparation to day-to-day support once you’re in Spain, we act as your bilingual guide through Spanish bureaucracy and daily life — so you don’t have to navigate it alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto border-t border-stone-200 pt-10">
          {/* <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200/80">
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
          </div> */}

          <div className="bg-white p-8 rounded-xl shadow-sm border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-light text-amber-800 mb-2 tracking-wide">Visa & Document Preparation</h3>
            <p className="text-amber-700 font-medium mb-4 tracking-wide">Clarity, Organization & Application Support</p>
            <p className="text-gray-600 mb-6 font-light">
              Ideal if you want guidance preparing your <b>Non-Lucrative Visa (NLV)</b>, <b>Digital Nomad Visa (DNV)</b>, or <b>Student Visa</b> — without confusion or unnecessary stress.
            </p>
            <div className="bg-amber-50/60 p-6 rounded-lg border border-amber-100 mb-6">
              <h4 className="font-semibold text-amber-800 mb-4 tracking-wide">We support you with:</h4>
              <ul className="space-y-2 text-gray-700 font-light">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Understanding visa requirements and eligibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Organizing and preparing your documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reviewing forms and application materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Document organization and review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Explaining each step of the application process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Preparing you for your consulate appointment</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-600 mb-6 font-light">
              Our role is to help you feel informed, organized, and confident throughout the application process.
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
            <p className="text-amber-700 font-medium mb-4 tracking-wide">Gestoría-Style Support for Settling In & Daily Life</p>
            <p className="text-gray-600 mb-6 font-light">
              Designed for expats who are already in Spain — or about to arrive — and feel overwhelmed by Spanish bureaucracy or daily admin.
            </p>
            <p className="text-gray-600 mb-6 font-light">
              We offer personalized, bilingual support similar to a gestoría, with a more human, hands-on approach.
            </p>
            <div className="bg-amber-50/60 p-6 rounded-lg border border-amber-100 mb-6">
              <h4 className="font-semibold text-amber-800 mb-4 tracking-wide">Support may include:</h4>
              <ul className="space-y-2 text-gray-700 font-light">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>TIE appointments and renewals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Empadronamiento and local registrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Liaising with local offices, services, or providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Accompaniment or support for appointments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Help with forms, certificates, and official communications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>General administrative support for life in Spain</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-600 mb-6 font-light">
              If it involves Spanish paperwork, processes, or communication — and you’re not sure where to start — we help you navigate it with more ease and confidence.
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
