import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductSeries } from '@/lib/data';

interface ProductCardProps {
  product: ProductSeries;
  categoryId: string;
  className?: string;
}

export default function ProductCard({ product, categoryId, className = '' }: ProductCardProps) {
  return (
    <Link
      href={`/products/${categoryId}/${product.id}`}
      data-testid={`product-card-${product.id}`}
      className={`group block bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl overflow-hidden card-hover ${className}`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-manrope font-semibold text-xl text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {product.tagline || product.description}
        </p>

        {/* Features Pills */}
        {product.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-100"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 text-sm font-medium text-sky-600 group-hover:gap-3 transition-all">
          View Details
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
