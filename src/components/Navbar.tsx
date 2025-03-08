
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Contact', path: '#' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-jewelry-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-serif font-medium tracking-tight text-jewelry-light"
          >
            <span className="text-jewelry-gold">Lux</span>Craft
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`navbar-link ${location.pathname === link.path ? 'text-jewelry-light after:w-full' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-jewelry-light/80 hover:text-jewelry-light transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-jewelry-light"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-jewelry-dark z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-6 pt-24">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-2xl font-medium text-jewelry-light/80 hover:text-jewelry-light transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 border-t border-white/10">
            <Link to="#" className="flex items-center space-x-2 text-jewelry-light/80 hover:text-jewelry-light transition-colors">
              <ShoppingBag size={20} />
              <span>Shopping Bag (0)</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
