import Link from 'next/link';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { USE_CASES } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LED Display Use Cases - Storefronts, Malls, Showrooms | Gleam LED',
  description: 'Discover how transparent LED displays transform storefronts, mall atriums, showrooms, and corporate lobbies across India.',
};

export default function UseCasesPage() {
  const useCases = USE_CASES;

  return (
    <div className="pt-20" data-testid="use-cases-page">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Use Cases</span>
          </nav>

          <SectionHeading
            caption="Applications"
            title="Where Our LED Displays Shine"
            subtitle="Discover how businesses across India are transforming their spaces with Gleam LED displays"
            align="left"
          />
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {useCases.map((useCase, idx) => (
              <div
                key={useCase.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden shadow-2xl">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-manrope text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {useCase.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-slate-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {useCase.benefits?.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Products */}
                  {useCase.recommended && (
                    <div className="mb-8">
                      <h3 className="font-semibold text-slate-900 mb-3">Recommended Products</h3>
                      <div className="flex flex-wrap gap-2">
                        {useCase.recommended.map((product, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-sky-50 text-sky-700 text-sm font-medium"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href="/contact"
                    data-testid={`use-case-cta-${useCase.id}`}
                    className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors"
                  >
                    Get Quote for {useCase.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container-custom text-center">
          <h2 className="font-manrope text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Unique Application in Mind?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team can design custom LED solutions for any space or requirement
          </p>
          <Link
            href="/contact"
            data-testid="use-cases-main-cta"
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 font-medium hover:bg-sky-600 transition-all"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
