import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';

// Layout Components
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';

// Pages
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import UseCases from '@/pages/UseCases';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Portfolio from '@/pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categoryId" element={<Products />} />
            <Route path="/products/:categoryId/:seriesId" element={<ProductDetail />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
