
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-8">ABOUT US</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Learn more about nublock.tech and our mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">OUR STORY</h2>
              <p className="text-muted-foreground mb-6">
                Placeholder for company history and background information.
              </p>
              <p className="text-muted-foreground">
                Additional placeholder text about the company's journey.
              </p>
            </div>
            
            <div className="bg-muted h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Placeholder for company image</p>
            </div>
            
            <div className="bg-muted h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Placeholder for team image</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">OUR TEAM</h2>
              <p className="text-muted-foreground mb-6">
                Placeholder for information about the team and expertise.
              </p>
              <p className="text-muted-foreground">
                Additional placeholder text about team members and skills.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
