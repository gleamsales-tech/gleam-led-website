import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, Target, Shield, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We source only premium LED components and maintain strict quality control throughout our manufacturing process.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Every project is unique. We work closely with clients to deliver customized solutions that meet their specific needs.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Our products come with comprehensive warranties and dedicated after-sales support across India.'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We stay at the forefront of LED display technology, bringing the latest innovations to the Indian market.'
  }
];

const stats = [
  { value: '100K+', label: 'Hours Lifespan' },
  { value: '2 Years', label: 'Warranty' },
  { value: '90%', label: 'Max Transparency' },
  { value: 'Pan India', label: 'Service Coverage' }
];

const About = () => {
  return (
    <div className="pt-20" data-testid="about-page">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">About Us</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-600 font-medium uppercase tracking-wider text-sm mb-4">
                About Gleam LED
              </p>
              <h1 className="font-manrope text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Illuminating India's Digital Signage Future
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Gleam LED is a leading provider of advanced LED display solutions in India, specializing in transparent LED screens, indoor video walls, and outdoor digital signage. We help brands and businesses communicate clearly and confidently through cutting-edge visual technology.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to transform ordinary spaces into extraordinary visual experiences. By combining aesthetic design with high technical performance, we deliver LED solutions that not only capture attention but also preserve architectural beauty.
              </p>
            </div>
            <div>
              <div className="aspect-square overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1771911646904-61f0fc9033e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85"
                  alt="Gleam LED Display Installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="font-manrope text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            caption="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide everything we do at Gleam LED"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-slate-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 transition-all"
              >
                <div className="w-16 h-16 bg-sky-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="font-manrope font-semibold text-xl text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-600 font-medium uppercase tracking-wider text-sm mb-4">
                Why Gleam LED
              </p>
              <h2 className="font-manrope text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your Trusted LED Display Partner
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sky-600">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Expert Design & Support</h3>
                    <p className="text-slate-600">Our team provides end-to-end project support, from initial consultation to installation and maintenance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sky-600">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Customized Solutions</h3>
                    <p className="text-slate-600">Every LED display is tailored to fit your specific space, requirements, and budget.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sky-600">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Industry-Grade Products</h3>
                    <p className="text-slate-600">We use only premium components backed by comprehensive warranties for long-lasting performance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sky-600">04</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Pan India Service</h3>
                    <p className="text-slate-600">Trusted by brands, retailers, and architects across India with reliable local support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1767334010488-83cdb8539273?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85"
                  alt="LED Display in Retail Space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container-custom text-center">
          <h2 className="font-manrope text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your space with cutting-edge LED display technology?
          </p>
          <Link
            to="/contact"
            data-testid="about-cta-btn"
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 font-medium hover:bg-sky-600 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
