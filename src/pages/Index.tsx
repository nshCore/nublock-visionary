import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import Navbar from '../components/Navbar';
import HoldingSection from '../components/HoldingSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Terminal />
      
      <div className="transition-opacity duration-1000 ease-in-out">
        <Navbar />
        
        <div className="h-screen"></div>
        
        <main>
          <HoldingSection />
          <HoldingSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
