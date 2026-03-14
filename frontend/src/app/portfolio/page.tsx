'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, ImageIcon } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

const portfolioItems = [
  {
    id: 1,
    title: 'Retail Storefront Display',
    category: 'Transparent LED',
    image:
      'https://images.unsplash.com/photo-1767334010488-83cdb8539273?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85',
    description: 'Transform storefronts into dynamic digital displays',
  },
  {
    id: 2,
    title: 'Shopping Mall Installation',
    category: 'Indoor LED',
    image:
      'https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85',
    description: 'Large-scale LED video walls for commercial spaces',
  },
  {
    id: 3,
    title: 'Corporate Lobby Display',
    category: 'Indoor LED',
    image:
      'https://images.unsplash.com/photo-1771911646904-61f0fc9033e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85',
    description: 'Premium LED displays for corporate environments',
  },
  {
    id: 4,
    title: 'Glass Facade Display',
    category: 'Transparent LED',
    image:
      'https://images.unsplash.com/photo-1704392354269-42ad41f15398?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVudCUyMGxlZCUyMHNjcmVlbiUyMGdsYXNzJTIwZmFjYWRlfGVufDB8fHx8MTc3MzM3NjgwM3ww&ixlib=rb-4.1.0&q=85',
    description: 'See-through displays for building facades',
  },
  {
    id: 5,
    title: 'Outdoor Billboard',
    category: 'Outdoor LED',
    image:
      'https://images.unsplash.com/photo-1772147743462-8f3258dc3198?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHw0fHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MHx8fHwxNzczMzc2ODE4fDA&ixlib=rb-4.1.0&q=85',
    description: 'High-brightness outdoor advertising displays',
  },
  {
    id: 6,
    title: 'Showroom Display',
    category: 'Transparent LED',
    image:
      'https://images.unsplash.com/photo-1770902971692-e4b9e3cf3933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85',
    description: 'Premium displays for luxury showrooms',
  },
];

const categories = ['All', 'Transparent LED', 'Indoor LED', 'Outdoor LED'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20" data-testid="portfolio-page">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Portfolio</span>
          </nav>

          <SectionHeading
            caption="Our Work"
            title="Project Gallery"
            subtitle="Explore our LED display installations and see how we transform spaces across India"
            align="left"
          />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                data-testid={`portfolio-filter-${category.toLowerCase().replace(' ', '-')}`}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-sky-500 text-white text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-manrope font-semibold text-xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note about placeholder images */}
          <div className="mt-12 p-6 bg-sky-50 border border-sky-100 flex items-start gap-4">
            <ImageIcon className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Sample Projects</h3>
              <p className="text-slate-600 text-sm">
                These images represent the types of LED display installations we offer. Contact us
                to discuss your project and get a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container-custom text-center">
          <h2 className="font-manrope text-3xl md:text-4xl font-bold text-white mb-4">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            data-testid="portfolio-cta-btn"
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 font-medium hover:bg-sky-600 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
