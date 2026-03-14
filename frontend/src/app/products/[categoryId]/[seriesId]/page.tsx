import Link from 'next/link';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import SpecsTable from '@/components/common/SpecsTable';
import { PRODUCTS } from '@/lib/data';
import type { Metadata } from 'next';

interface Props {
  params: { categoryId: string; seriesId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = PRODUCTS[params.categoryId];
  const product = category?.series?.find((s) => s.id === params.seriesId);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} - ${category.name} | Gleam LED India`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const paths: { categoryId: string; seriesId: string }[] = [];

  Object.values(PRODUCTS).forEach((category) => {
    category.series?.forEach((series) => {
      paths.push({ categoryId: category.id, seriesId: series.id });
    });
  });

  return paths;
}

export default function ProductDetailPage({ params }: Props) {
  const category = PRODUCTS[params.categoryId];
  const product = category?.series?.find((s) => s.id === params.seriesId);

  if (!category || !product) {
    notFound();
  }

  return (
    <div className="pt-20" data-testid="product-detail-page">
      {/* Hero Section */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-slate-900">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/products/${params.categoryId}`} className="hover:text-slate-900">
              {category.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-white shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-sky-600 font-medium uppercase tracking-wider text-sm mb-3">
                {category.name}
              </p>
              <h1 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-slate-500 mb-6">{product.tagline}</p>
              <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>

              {/* Features */}
              {product.features && (
                <div className="mb-8">
                  <h3 className="font-semibold text-slate-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-600">
                        <Check className="w-5 h-5 text-sky-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  data-testid="product-get-quote-btn"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-all"
                >
                  Get Quote for {product.name}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 font-medium hover:bg-[#20bd5a] transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-manrope text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Technical Specifications
          </h2>
          <div className="bg-slate-50 border border-slate-100 p-6 md:p-8">
            <SpecsTable specs={product.specs} />
          </div>
          <p className="text-sm text-slate-500 mt-4">
            *All specifications subject to change without notice. Other pixel pitches available on
            request.
          </p>
        </div>
      </section>

      {/* Applications */}
      {product.applications && (
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="font-manrope text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Applications
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 border border-slate-100 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="font-medium text-slate-900">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {category.series && category.series.length > 1 && (
        <section className="section-padding bg-white border-t border-slate-100">
          <div className="container-custom">
            <h2 className="font-manrope text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Other {category.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {category.series
                .filter((s) => s.id !== params.seriesId)
                .map((series) => (
                  <Link
                    key={series.id}
                    href={`/products/${params.categoryId}/${series.id}`}
                    className="group block bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 p-6 transition-all hover:shadow-lg"
                  >
                    <h3 className="font-semibold text-lg text-slate-900 group-hover:text-sky-600 mb-2">
                      {series.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{series.tagline}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container-custom text-center">
          <h3 className="font-manrope text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-300 mb-8">Contact us for a free consultation and custom quote</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 font-medium hover:bg-sky-600 transition-all"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
