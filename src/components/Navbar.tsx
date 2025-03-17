
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <Link 
    to={href} 
    className="px-4 py-2 transition-colors hover:text-primary text-foreground"
  >
    {children}
  </Link>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Start showing the navbar after the hero section
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
        if (window.scrollY > window.innerHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out
                 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-foreground font-bold text-2xl">
              nublock<span className="text-primary">.tech</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/services">SERVICES</NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
            <Link 
              to="/hire-us" 
              className="ml-4 px-6 py-2 bg-primary text-white transition-all hover:bg-primary/90"
            >
              HIRE US
            </Link>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-6 bg-background">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/services">SERVICES</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
              <NavLink href="/contact">CONTACT</NavLink>
              <Link 
                to="/hire-us" 
                className="px-6 py-2 bg-primary text-white transition-all hover:bg-primary/90 text-center"
              >
                HIRE US
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
