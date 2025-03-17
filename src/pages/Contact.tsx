
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-8">CONTACT US</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get in touch with our team for inquiries and collaborations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">SEND US A MESSAGE</h2>
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">MESSAGE</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 bg-muted text-foreground border-0 focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 transition-colors hover:bg-primary/90"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">CONTACT INFORMATION</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">ADDRESS</h3>
                  <p className="text-muted-foreground">
                    123 Tech Street<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">EMAIL</h3>
                  <p className="text-muted-foreground">contact@nublock.tech</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">PHONE</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">HOURS</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
