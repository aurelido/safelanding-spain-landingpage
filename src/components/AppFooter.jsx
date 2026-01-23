import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const AppFooter = () => {
  return (
    <footer id="contact" className="bg-stone-100 border-t border-stone-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] gap-10 md:gap-16 mb-10">
          {/* Left block with solid warm panel */}
          <div className="bg-amber-600 text-amber-50 px-8 py-10 md:py-12 flex flex-col justify-between max-w-md">
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-tight">Get in touch</h3>
              <p className="text-sm mb-6 leading-relaxed">
                We work 1:1 with Americans planning a grounded, realistic move to Spain.
              </p>
              <div className="space-y-1 text-sm">
                <p>Based in Valencia, Spain</p>
                <p>Working remotely with clients across the U.S.</p>
              </div>
            </div>
            <div className="mt-8 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@safelandingspain.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+34 · By appointment</span>
              </p>
            </div>
          </div>

          {/* Right block: basic contact form */}
          <div className="flex flex-col justify-between">
            <form
              className="bg-white border border-stone-200 rounded-2xl px-6 py-6 md:px-8 md:py-8 shadow-sm mb-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <h4 className="text-lg font-medium text-stone-900 mb-4 tracking-tight">Share a little about your move</h4>
              <p className="text-sm text-stone-700 mb-6 leading-relaxed">
                Just a few details help us respond with something genuinely useful. We’ll reply personally—no automated sequences.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="first-name" className="text-xs font-medium text-stone-800 tracking-wide">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className="h-10 rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="last-name" className="text-xs font-medium text-stone-800 tracking-wide">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="h-10 rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="email" className="text-xs font-medium text-stone-800 tracking-wide">
                  Email <span className="text-amber-700">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-10 rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div className="flex flex-col gap-1 mb-6">
                <label htmlFor="message" className="text-xs font-medium text-stone-800 tracking-wide">
                  What would you like support with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 resize-y min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-stone-900/15 bg-stone-900 px-6 py-2.5 text-sm font-medium tracking-wide text-stone-50 shadow-sm hover:bg-stone-800 transition-colors"
              >
                Send message (no obligation)
              </button>
            </form>

            <div className="border-t border-stone-300 pt-4 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-xs text-stone-600">
                © 2026 SafeLanding Spain · Boutique relocation & concierge for Americans in Spain
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
