'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const LOGO_URL = 'https://gleamled.com/wp-content/uploads/2025/12/cropped-GT_Logo-removebg-preview-3-e1766785399867.png';

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Products',
    path: '/products',
    dropdown: [
      { name: 'Transparent LED', path: '/products/transparent' },
      { name: 'Indoor Display', path: '/products/indoor' },
      { name: 'Outdoor Display', path: '/products/outdoor' },
    ],
  },
  { name: 'Use Cases', path: '/use-cases' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="navbar-logo">
            <img
              src={LOGO_URL}
              alt="Gleam LED"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  data-testid={`nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                    pathname === item.path || pathname.startsWith(item.path + '/')
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-52 bg-white shadow-lg border border-slate-100 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        data-testid={`nav-dropdown-${subItem.name.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              data-testid="nav-get-quote-btn"
              className="bg-slate-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100" data-testid="mobile-menu">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.path}
                  className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-8">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className="block py-2 text-sm text-slate-500 hover:text-slate-900"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Link
                href="/contact"
                className="block w-full bg-slate-900 text-white text-center py-3 font-medium"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
