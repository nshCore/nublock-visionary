
import React from 'react';

const HoldingSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">CONTENT SECTION</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This is a placeholder section where future content will be added.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-muted rounded-none mb-6 flex items-center justify-center">
                <span className="text-primary font-bold">{item}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">FEATURE {item}</h3>
              <p className="text-muted-foreground">
                This is a placeholder for future content that will showcase the services and capabilities of nublock.tech.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoldingSection;
