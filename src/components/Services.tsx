import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-8">SERVICES</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Our comprehensive technical consultancy services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8">
              <h2 className="text-2xl font-bold mb-4">SOFTWARE ENGINEERING</h2>
              <p className="text-muted-foreground">
                Placeholder for software engineering services description.
              </p>
            </div>
            
            <div className="bg-card p-8">
              <h2 className="text-2xl font-bold mb-4">CLOUD SOLUTIONS</h2>
              <p className="text-muted-foreground">
                Placeholder for cloud solutions services description.
              </p>
            </div>
            
            <div className="bg-card p-8">
              <h2 className="text-2xl font-bold mb-4">TECHNICAL CONSULTING</h2>
              <p className="text-muted-foreground">
                Placeholder for technical consulting services description.
              </p>
            </div>
            
            <div className="bg-card p-8">
              <h2 className="text-2xl font-bold mb-4">SYSTEM ARCHITECTURE</h2>
              <p className="text-muted-foreground">
                Placeholder for system architecture services description.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
