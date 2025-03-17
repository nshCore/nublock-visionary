
import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import Navbar from '../components/Navbar';
import HoldingSection from '../components/HoldingSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // This timeout simulates waiting for the terminal animation to complete
    // and then shows the main content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Adjust this timing to match your terminal animation duration
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Terminal Animation */}
      <Terminal />
      
      {/* Main Content - will be visible after terminal animation */}
      <div 
        className={`transition-opacity duration-1000 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        
        {/* Empty section at the top to ensure content is below the terminal animation */}
        <div className="h-screen"></div>
        
        {/* Main content sections */}
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
