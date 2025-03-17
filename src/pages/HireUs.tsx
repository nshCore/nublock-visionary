
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HireUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-8">HIRE US</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Let's collaborate on your next project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">PROJECT INQUIRY</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">NAME</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-muted text-foreground border-0 focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-muted text-foreground border-0 focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">COMPANY</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 bg-muted text-foreground border-0 focus:ring-2 focus:ring-primary"
                    placeholder="Company Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">BUDGET RANGE</label>
                  <select
                    id="budget"
                    className="w-full p-3 bg-muted text-foreground border-0 focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">PROJECT TIMELINE</label>
                  <select
                    id="timeline"
                    className="w-full p-3 bg-muted text-foreground border-0 focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a timeline</option>
                    <option value="1-3">1-3 months</option>
                    <option value="3-6">3-6 months</option>
                    <option value="6-12">6-12 months</option>
                    <option value="12+">12+ months</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">PROJECT DESCRIPTION</label>
                  <textarea
                    id="description"
                    rows={6}
                    className="w-full p-3 bg-muted text-foreground border-0 focus:ring-2 focus:ring-primary"
                    placeholder="Describe your project requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 transition-colors hover:bg-primary/90"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">WHY CHOOSE US</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-2">EXPERT TEAM</h3>
                  <p className="text-muted-foreground">
                    Placeholder text about our team's expertise and skills.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">PROVEN TRACK RECORD</h3>
                  <p className="text-muted-foreground">
                    Placeholder text about our successful projects and client satisfaction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">CUTTING-EDGE SOLUTIONS</h3>
                  <p className="text-muted-foreground">
                    Placeholder text about our advanced technical solutions and innovations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">DEDICATED SUPPORT</h3>
                  <p className="text-muted-foreground">
                    Placeholder text about our client support and communication approach.
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-4">TESTIMONIALS</h3>
                <blockquote className="bg-card p-6 border-l-4 border-primary mb-6">
                  <p className="text-muted-foreground italic mb-4">
                    "Placeholder for a client testimonial about our services and collaboration experience."
                  </p>
                  <footer className="font-medium">- John Doe, CEO at Example Inc</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HireUs;
