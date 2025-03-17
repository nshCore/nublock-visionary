
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">NUBLOCK.TECH</h3>
            <p className="text-muted-foreground mb-4">
              Software engineering and technical co-consultancy services for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/software-engineering" className="text-muted-foreground hover:text-primary transition-colors">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/technical-consulting" className="text-muted-foreground hover:text-primary transition-colors">
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/architecture" className="text-muted-foreground hover:text-primary transition-colors">
                  System Architecture
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Tech Street</p>
              <p>San Francisco, CA 94103</p>
              <p className="mt-4">contact@nublock.tech</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nublock Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
