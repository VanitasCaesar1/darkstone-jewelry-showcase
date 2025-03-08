import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
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
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-jewelry-dark shadow-md' : 'bg-jewelry-dark'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl  font-medium tracking-tight text-jewelry-light"
          >
            <span className="text-jewelry-gold">S</span>itara
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`navbar-link relative hover:text-jewelry-gold transition-colors duration-300 
                  ${location.pathname === link.path 
                    ? 'text-jewelry-gold font-medium' 
                    : 'text-jewelry-light'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-jewelry-gold transition-all duration-300 
                  ${location.pathname === link.path ? 'w-full' : ''}`}>
                </span>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-jewelry-light/80 hover:text-jewelry-gold transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-jewelry-light hover:text-jewelry-gold transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu - with slide-in animation */}
      <div 
        className={`fixed inset-0 bg-jewelry-dark z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button positioned at the top right */}
        <button 
          className="absolute top-4 right-4 p-2 text-jewelry-light hover:text-jewelry-gold transition-colors"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col h-full p-6 pt-24">
          {/* Nav links with staggered animation */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-2xl font-medium transition-colors duration-300 transform  ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                } transition-delay-${index * 100}`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
                  opacity: isOpen ? 1 : 0
                }}
                onClick={toggleMenu}
              >
                <span className={
                  location.pathname === link.path 
                    ? 'text-jewelry-gold' 
                    : 'text-jewelry-light/80 hover:text-jewelry-light'
                }>
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
          
          <div 
            className="mt-auto pt-6 border-t border-white/10 transform transition-all duration-500"
            style={{ 
              transitionDelay: isOpen ? '400ms' : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <Link 
              to="/cart" 
              className="flex items-center space-x-2 text-jewelry-light/80 hover:text-jewelry-gold transition-colors"
              onClick={toggleMenu}
            >
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