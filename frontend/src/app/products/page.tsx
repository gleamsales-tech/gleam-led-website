'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/common/ProductCard';
import { PRODUCTS } from '@/lib/data';

const categoryTabs = [
  { id: 'all', name: 'All Products' },
  { id: 'transparent', name: 'Transparent LED' },
  { id: 'indoor', name: 'Indoor Display' },
  { id: 'outdoor', name: 'Outdoor Display' },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const products = Object.values(PRODUCTS);

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.id === activeCategory);

  return (
    <div className="pt-20" data-testid="products-page">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Products</span>
          </nav>

          <SectionHeading
            caption="Our Products"
            title="LED Display Solutions"
            subtitle="Explore our complete range of transparent, indoor, and outdoor LED display products"
            align="left"
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-4">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                data-testid={`category-tab-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {filteredProducts.map((category) => (
            <div key={category.id} className="mb-16 last:mb-0">
              {activeCategory === 'all' && (
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-manrope text-2xl font-semibold text-slate-900">
                    {category.name}
                  </h3>
                  <Link
                    href={`/products/${category.id}`}
                    className="text-sm text-sky-600 hover:text-sky-700 font-medium"
                  >
                    View All
                  </Link>
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.series?.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    categoryId={category.id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container-custom text-center">
          <h3 className="font-manrope text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Need Help Choosing the Right Display?
          </h3>
          <p className="text-slate-600 mb-8">
            Our experts will help you find the perfect LED solution for your project
          </p>
          <Link
            href="/contact"
            data-testid="products-cta-btn"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-all"
          >
            Get Expert Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
