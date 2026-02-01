import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const AppFooter = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, message } = formValues;
    const subject = encodeURIComponent('SafeLanding Spain — New enquiry');

    const lines = [
      firstName || lastName ? `Name: ${firstName} ${lastName}`.trim() : null,
      email ? `From: ${email}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    const body = encodeURIComponent(lines.join('\n'));

    window.location.href = `mailto:hello@safelandingspain.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="border-t border-[color:var(--sl-border)] bg-[color:var(--sl-bg)] pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-8 md:gap-12 mb-8">
          {/* Left block: compact contact details card */}
          <div className="bg-[color:var(--sl-card)] p-8 rounded-xl shadow-sm border border-[color:var(--sl-border)] md:px-7 md:py-8 flex flex-col justify-between max-w-md">
            <div className="space-y-3">
              <p className="sl-eyebrow mb-1">Contact</p>
              <h3 className="sl-heading text-xl md:text-2xl">Get in touch</h3>
              <p className="sl-body-copy text-sm leading-relaxed">
                Share a little about your move and we&apos;ll respond with a calm, practical reply—no automated sequences.
              </p>
            </div>
            <div className="mt-6 space-y-2 text-sm sl-body-copy">
              <p className="flex items-center gap-2 text-[color:var(--sl-text)]">
                <Mail className="w-4 h-4 text-[color:var(--sl-accent)]" />
                <span>info@safelandingspain.com</span>
              </p>
              <p className="flex items-center gap-2 text-[color:var(--sl-text)]">
                <Phone className="w-4 h-4 text-[color:var(--sl-accent)]" />
                <span>+1 (508)-492-5842</span>
              </p>
            </div>
          </div>

          {/* Right block: basic contact form */}
          <div className="flex flex-col justify-between">
            <form
              className="bg-[color:var(--sl-surface)] border border-[color:var(--sl-border)] rounded-2xl px-6 py-6 md:px-8 md:py-8 shadow-sm mb-6"
              onSubmit={handleSubmit}
            >
              {/* <h4 className="sl-heading text-xl mb-3">Share a little about your move</h4>
              <p className="sl-body-copy text-sm mb-6 leading-relaxed text-[color:var(--sl-muted)]">
                A few details help us respond with something genuinely useful. We&apos;ll reply personally—no automated sequences.
              </p> */}

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="first-name" className="text-xs font-medium text-[color:var(--sl-accent)] tracking-wide">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formValues.firstName}
                    onChange={handleChange}
                    className="h-10 rounded-md border border-[color:var(--sl-border)] bg-white px-3 text-sm text-[color:var(--sl-text)] shadow-sm focus:border-[color:var(--sl-accent-soft)] focus:outline-none focus:ring-2 focus:ring-[color:var(--sl-accent-soft)]/40"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="last-name" className="text-xs font-medium text-[color:var(--sl-accent)] tracking-wide">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formValues.lastName}
                    onChange={handleChange}
                    className="h-10 rounded-md border border-[color:var(--sl-border)] bg-white px-3 text-sm text-[color:var(--sl-text)] shadow-sm focus:border-[color:var(--sl-accent-soft)] focus:outline-none focus:ring-2 focus:ring-[color:var(--sl-accent-soft)]/40"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="email" className="text-xs font-medium text-[color:var(--sl-accent)] tracking-wide">
                  Email <span className="text-[color:var(--sl-accent-soft)]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                  className="h-10 rounded-md border border-[color:var(--sl-border)] bg-white px-3 text-sm text-[color:var(--sl-text)] shadow-sm focus:border-[color:var(--sl-accent-soft)] focus:outline-none focus:ring-2 focus:ring-[color:var(--sl-accent-soft)]/40"
                />
              </div>

              <div className="flex flex-col gap-1 mb-6">
                <label htmlFor="message" className="text-xs font-medium text-[color:var(--sl-accent)] tracking-wide">
                  What would you like support with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formValues.message}
                  onChange={handleChange}
                  className="rounded-md border border-[color:var(--sl-border)] bg-white px-3 py-2 text-sm text-[color:var(--sl-text)] shadow-sm focus:border-[color:var(--sl-accent-soft)] focus:outline-none focus:ring-2 focus:ring-[color:var(--sl-accent-soft)]/40 resize-y min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                className="sl-button-primary w-full justify-center"
              >
                Send message
              </button>
            </form>

            <div className="border-t border-[color:var(--sl-border)] pt-4 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-xs text-[color:var(--sl-muted)]">
                © 2026 SafeLanding Spain · Boutique relocation &amp; transition support for expats moving to Spain
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
