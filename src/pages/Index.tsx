
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import CTASection from '../components/CTASection';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <Services />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
