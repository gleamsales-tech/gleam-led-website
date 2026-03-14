import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/common/ProductCard';
import { PRODUCTS } from '@/lib/data';
import type { Metadata } from 'next';

interface Props {
  params: { categoryId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = PRODUCTS[params.categoryId];

  if (!category) return { title: 'Category Not Found' };

  return {
    title: `${category.name} | Gleam LED India`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(PRODUCTS).map((categoryId) => ({ categoryId }));
}

export default function CategoryPage({ params }: Props) {
  const category = PRODUCTS[params.categoryId];

  if (!category) {
    notFound();
  }

  return (
    <div className="pt-20" data-testid="category-page">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-slate-900">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">{category.name}</span>
          </nav>

          <SectionHeading
            caption="Our Products"
            title={category.name}
            subtitle={category.description}
            align="left"
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.series?.map((product) => (
              <ProductCard key={product.id} product={product} categoryId={category.id} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container-custom text-center">
          <h3 className="font-manrope text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-slate-600 mb-8">
            Our experts will help you find the perfect {category.name.toLowerCase()} for your project
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-all"
          >
            Get Expert Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
