import Link from 'next/link';
import { ArrowRight, Eye, Sun, Zap, Shield, Clock, Award, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { PRODUCTS, USE_CASES } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gleam LED - Transparent LED Display Screens India | Glass Facade LED',
  description: 'India\'s trusted partner for transparent LED displays. Transform glass into digital canvas with see-through LED screens for storefronts, malls, and commercial spaces.',
};

const features = [
  {
    icon: Eye,
    title: 'High Transparency',
    description: 'Up to 90% see-through rate while displaying vivid content',
  },
  {
    icon: Sun,
    title: 'Bright & Visible',
    description: 'Crystal-clear visuals even in well-lit environments',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Low power consumption with maximum visual impact',
  },
  {
    icon: Shield,
    title: 'Durable & Reliable',
    description: '100,000+ hours lifespan with 2-year warranty',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Quick setup with minimal structural modifications',
  },
  {
    icon: Award,
    title: 'Custom Solutions',
    description: 'Tailored sizes and configurations for any space',
  },
];

export default function Home() {
  const products = Object.values(PRODUCTS);
  const useCases = USE_CASES;

  return (
    <div className="pt-20" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-sky-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sky-600 font-medium uppercase tracking-wider text-sm mb-4">
                Transparent LED Display Solutions
              </p>
              <h1 className="font-manrope text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Transform Glass into
                <span className="text-sky-600"> Digital Canvas</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                India&apos;s trusted partner for see-through LED displays. Showcase dynamic content without blocking natural light or architectural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  data-testid="hero-get-quote-btn"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-all"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/products"
                  data-testid="hero-explore-btn"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 font-medium border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Explore Products
                </Link>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1677930075348-5933c68cd46d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHx0cmFuc3BhcmVudCUyMGxlZCUyMHNjcmVlbiUyMGdsYXNzJTIwZmFjYWRlfGVufDB8fHx8MTc3MzM3NjgwM3ww&ixlib=rb-4.1.0&q=85"
                    alt="Transparent LED Display on Glass Facade"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="font-manrope text-3xl font-bold text-slate-900">90%</p>
                      <p className="text-sm text-slate-500">Transparency</p>
                    </div>
                    <div className="w-px h-12 bg-slate-200" />
                    <div className="text-center">
                      <p className="font-manrope text-3xl font-bold text-slate-900">100K+</p>
                      <p className="text-sm text-slate-500">Hours Lifespan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            caption="Why Choose Gleam LED"
            title="Technology That Transforms Spaces"
            subtitle="Our transparent LED displays combine cutting-edge visuals with architectural elegance"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 bg-slate-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors">
                  <feature.icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-manrope font-semibold text-xl text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            caption="Our Solutions"
            title="LED Display Products"
            subtitle="Complete range of transparent, indoor, and outdoor LED display solutions"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                data-testid={`category-card-${category.id}`}
                className="group relative overflow-hidden bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl card-hover"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-manrope font-semibold text-xl text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-sky-600">
                    View {category.series?.length || 0} Series
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            caption="Applications"
            title="Featured Use Cases"
            subtitle="See how businesses across India are using our LED displays"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.slice(0, 4).map((useCase, idx) => (
              <div key={useCase.id} className="group relative h-80 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-manrope font-semibold text-xl text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/use-cases"
              data-testid="view-all-use-cases-btn"
              className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors"
            >
              View All Use Cases
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom text-center">
          <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your transparent LED display project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              data-testid="cta-get-quote-btn"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white px-8 py-4 font-medium hover:bg-sky-600 transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 font-medium hover:bg-white/20 transition-all border border-white/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { label: '2 Year Warranty', icon: Shield },
              { label: 'Pan India Service', icon: CheckCircle },
              { label: 'Expert Support', icon: Award },
              { label: 'Custom Solutions', icon: Zap },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-600">
                <badge.icon className="w-5 h-5 text-sky-500" />
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
