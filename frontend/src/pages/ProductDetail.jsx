import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';
import SpecsTable from '@/components/common/SpecsTable';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ProductDetail = () => {
  const { categoryId, seriesId } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const [productRes, categoryRes] = await Promise.all([
          axios.get(`${API}/products/${categoryId}/${seriesId}`),
          axios.get(`${API}/products/${categoryId}`)
        ]);
        setProduct(productRes.data);
        setCategory(categoryRes.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [categoryId, seriesId]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-slate-500">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-sky-600 hover:text-sky-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20" data-testid="product-detail-page">
      {/* Hero Section */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-slate-900">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/products/${categoryId}`} className="hover:text-slate-900">
              {category?.name}
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
                {category?.name}
              </p>
              <h1 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-slate-500 mb-6">
                {product.tagline}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>

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
                  to="/contact"
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
            *All specifications subject to change without notice. Other pixel pitches available on request.
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
      {category?.series && category.series.length > 1 && (
        <section className="section-padding bg-white border-t border-slate-100">
          <div className="container-custom">
            <h2 className="font-manrope text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Other {category.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {category.series
                .filter(s => s.id !== seriesId)
                .map((series) => (
                  <Link
                    key={series.id}
                    to={`/products/${categoryId}/${series.id}`}
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
          <p className="text-slate-300 mb-8">
            Contact us for a free consultation and custom quote
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 font-medium hover:bg-sky-600 transition-all"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
