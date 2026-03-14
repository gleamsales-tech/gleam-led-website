import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Gleam LED - Transparent LED Display Screens India',
  description: 'India\'s trusted partner for transparent LED displays, indoor video walls, and outdoor digital signage solutions for storefronts, glass facades, and commercial spaces.',
  keywords: 'transparent LED display, LED screen India, glass facade LED, indoor LED display, outdoor LED billboard',
  openGraph: {
    title: 'Gleam LED - Transparent LED Display Screens India',
    description: 'Transform glass into digital canvas with see-through LED displays',
    url: 'https://gleamled.com',
    siteName: 'Gleam LED',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
