import React from 'react';
import { Compass, FileText, Briefcase, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="sl-section bg-stone-50 border-t border-stone-200/70">
      <div className="sl-section-inner max-w-7xl">
        <div className="text-center mb-14">
          <p className="sl-eyebrow mb-2">How we can help</p>
          <h2 className="sl-heading text-3xl md:text-4xl mb-4">Services</h2>
            {/* <p className="sl-subtitle text-base md:text-lg mb-6"> */}
            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
            Your relocation has different stages — and we support you through all of them, from planning to paperwork to settling in.
          </p>
          {/* <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
            We support you not only with the preparation and documentation, but also with the after-arrival reality: the phone calls, appointments, forms, language barriers, and everyday tasks that can quickly feel overwhelming.
          </p>
          <p className="text-lg text-gray-700 mb-6 font-light tracking-wide">
            From visa clarity and document preparation to day-to-day support once you’re in Spain, we act as your bilingual guide through Spanish bureaucracy and daily life — so you don’t have to navigate it alone.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto border-t border-[color:var(--sl-border)] pt-10">
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
            <a className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors tracking-wide"
                href="https://koalendar.com/e/relocation-exploratory-call-complimentary">
              Book a Call
            </a>
          </div> */}

          <div className="bg-[color:var(--sl-card)] p-8 rounded-xl shadow-sm border border-[color:var(--sl-border)] flex flex-col justify-between max-w-md">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/70 border border-[color:var(--sl-border)]">
              <FileText className="w-6 h-6 text-[color:var(--sl-accent)]" />
            </div>
            <h3 className="sl-heading text-2xl mb-2 tracking-wide">Visa &amp; Document Preparation</h3>
            <p className="text-sm font-semibold tracking-[0.16em] uppercase text-[color:var(--sl-accent-soft)] mb-4">
              Clarity, organization &amp; application support
            </p>
            <p className="sl-body-copy text-sm mb-6">
              Ideal if you want guidance preparing your <b>Non-Lucrative Visa (NLV)</b>, <b>Digital Nomad Visa (DNV)</b>, or <b>Student Visa</b> — without confusion or unnecessary stress.
            </p>
            <div className="bg-[color:var(--sl-card)]/80 p-6 rounded-lg border border-[color:var(--sl-border)] mb-6">
              <h3 className="font-semibold text-[color:var(--sl-accent)] mb-4 tracking-wide text-base">We support you with:</h3>
              <ul className="space-y-2 sl-body-copy text-sm">
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
            <p className="sl-body-copy text-sm mb-6">
              Our role is to help you feel informed, organized, and confident throughout the application process.
            </p>
            <p className="mt-1 text-xs text-[color:var(--sl-accent-soft)] italic">
              <b>Please note:</b> We provide guidance and preparation support. We are not a law firm and do not provide legal representation.
            </p>
            <a
              className="mt-4 w-full sl-button-primary justify-center"
              href="https://koalendar.com/e/relocation-exploratory-call-complimentary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </div>

          <div className="bg-[color:var(--sl-card)] p-8 rounded-xl shadow-sm border border-[color:var(--sl-border)] flex flex-col justify-between max-w-md">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/70 border border-[color:var(--sl-border)]">
              <Briefcase className="w-6 h-6 text-[color:var(--sl-accent)]" />
            </div>
            <h3 className="sl-heading text-2xl mb-2 tracking-wide">Concierge Support in Spain</h3>
            <p className="text-sm font-semibold tracking-[0.16em] uppercase text-[color:var(--sl-accent-soft)] mb-4">
              Gestoría-style support for settling in &amp; daily life
            </p>
            <p className="sl-body-copy text-sm mb-6">
              Designed for expats who are already in Spain — or about to arrive — and feel overwhelmed by Spanish bureaucracy or daily admin.
            </p>
            <div className="bg-[color:var(--sl-card)]/80 p-6 rounded-lg border border-[color:var(--sl-border)] mb-6">
              <h3 className="font-semibold text-[color:var(--sl-accent)] mb-4 tracking-wide text-base">Support may include:</h3>
              <ul className="space-y-2 sl-body-copy text-sm">
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
            <p className="sl-body-copy text-sm mb-6">
              We offer personalized, bilingual support similar to a gestoría, with a more human, hands-on approach.
            </p>
            <p className="sl-body-copy text-sm mb-6">
              If it involves Spanish paperwork, processes, or communication — and you’re not sure where to start — we help you navigate it with more ease and confidence.
            </p>
            <a
              className="mt-4 w-full sl-button-primary justify-center"
              href="https://koalendar.com/e/relocation-exploratory-call-complimentary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
