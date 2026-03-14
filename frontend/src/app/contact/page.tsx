'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

const productOptions = [
  'Transparent LED Display',
  'Indoor LED Display',
  'Outdoor LED Display',
  'Custom Solution',
  'Not Sure - Need Consultation',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    phone: '',
    product_interest: '',
    requirement: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          company_name: '',
          email: '',
          phone: '',
          product_interest: '',
          requirement: '',
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      setError('Failed to submit. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const phoneNumber = '919876543210';
  const whatsappMessage = 'Hi, I am interested in Gleam LED displays. Please share more information.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-20" data-testid="contact-page">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Contact Us</span>
          </nav>

          <SectionHeading
            caption="Get in Touch"
            title="Let's Discuss Your Project"
            subtitle="Request a free quote or consultation for your LED display requirements"
            align="left"
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-8 md:p-12">
                <h2 className="font-manrope text-2xl font-bold text-slate-900 mb-6">
                  Request a Quote
                </h2>

                {success ? (
                  <div className="text-center py-12" data-testid="form-success">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">
                      We&apos;ve received your inquiry and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="text-sky-600 font-medium hover:text-sky-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company_name"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Company / Individual Name *
                        </label>
                        <input
                          type="text"
                          id="company_name"
                          name="company_name"
                          required
                          value={formData.company_name}
                          onChange={handleChange}
                          data-testid="input-company-name"
                          className="w-full px-4 py-3 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors bg-white"
                          placeholder="Your name or company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          data-testid="input-email"
                          className="w-full px-4 py-3 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          data-testid="input-phone"
                          className="w-full px-4 py-3 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors bg-white"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="product_interest"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Product Interest
                        </label>
                        <select
                          id="product_interest"
                          name="product_interest"
                          value={formData.product_interest}
                          onChange={handleChange}
                          data-testid="select-product"
                          className="w-full px-4 py-3 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors bg-white"
                        >
                          <option value="">Select a product</option>
                          {productOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="requirement"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Your Requirement
                      </label>
                      <textarea
                        id="requirement"
                        name="requirement"
                        rows={5}
                        value={formData.requirement}
                        onChange={handleChange}
                        data-testid="textarea-requirement"
                        className="w-full px-4 py-3 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors bg-white resize-none"
                        placeholder="Tell us about your project - location, size, intended use, etc."
                      />
                    </div>

                    {error && (
                      <div className="text-red-600 text-sm" data-testid="form-error">
                        {error}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        disabled={loading}
                        data-testid="submit-btn"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                        <Send className="w-5 h-5" />
                      </button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="whatsapp-contact-btn"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 font-medium hover:bg-[#20bd5a] transition-all"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Us
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-slate-900 text-white p-8 md:p-10 h-full">
                <h3 className="font-manrope text-xl font-semibold mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Email</p>
                      <a
                        href="mailto:gleamsales@gmail.com"
                        className="text-white hover:text-sky-400 transition-colors"
                      >
                        gleamsales@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">WhatsApp</p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-sky-400 transition-colors"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Service Area</p>
                      <p className="text-white">Pan India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-4">Office Hours</h4>
                  <p className="text-slate-400 text-sm">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM IST
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-slate-400 text-sm">Response Time: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our products and services"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'What information do I need for an accurate quote?',
                a: 'Share the installation location, viewing distance, glass/wall size (width/height), content type, and whether it will be used in daylight. Our team will recommend the right pixel pitch, brightness, and structure.',
              },
              {
                q: 'Do you provide installation services?',
                a: 'Yes, we provide end-to-end services including site survey, design consultation, installation, and after-sales support across India.',
              },
              {
                q: 'What warranty do you offer?',
                a: 'All Gleam LED products come with a standard 2-year warranty. Extended warranty options are also available.',
              },
              {
                q: 'How long does delivery and installation take?',
                a: 'Delivery times depend on the project size and customization requirements. Typically, projects are completed within 4-8 weeks from order confirmation.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
