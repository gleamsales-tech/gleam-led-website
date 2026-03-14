import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const LOGO_URL = 'https://gleamled.com/wp-content/uploads/2025/12/cropped-GT_Logo-removebg-preview-3-e1766785399867.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-slate-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Gleam LED"
              className="h-12 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India&apos;s trusted partner for transparent LED displays, indoor video walls, and outdoor digital signage solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Pan India Service</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-manrope font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/transparent"
                  className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                >
                  Transparent LED Display
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/products/indoor"
                  className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                >
                  Indoor LED Display
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/products/outdoor"
                  className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                >
                  Outdoor LED Display
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-manrope font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/use-cases" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-manrope font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:gleamsales@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  gleamsales@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                data-testid="footer-get-quote-btn"
                className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 text-sm font-medium hover:bg-sky-600 transition-colors"
              >
                Get Free Quote
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Gleam LED. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Transparent LED Display Solutions in India
          </p>
        </div>
      </div>
    </footer>
  );
}
