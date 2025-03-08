
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jewelry-dark border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-medium tracking-tight text-jewelry-light mb-4 inline-block">
              <span className="text-jewelry-gold">Lux</span>Craft
            </Link>
            <p className="text-jewelry-light/70 mt-3 mb-6">
              Handcrafted jewelry pieces for the modern individual. Each piece tells a story of artistry and passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-jewelry-light/60 hover:text-jewelry-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 text-jewelry-light/60 hover:text-jewelry-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 text-jewelry-light/60 hover:text-jewelry-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-jewelry-light mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-jewelry-light/70 hover:text-jewelry-light transition-colors">Products</Link>
              </li>
              <li>
                <Link to="#" className="text-jewelry-light/70 hover:text-jewelry-light transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="#" className="text-jewelry-light/70 hover:text-jewelry-light transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-jewelry-light/70 hover:text-jewelry-light transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-serif text-jewelry-light mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-jewelry-light/70 hover:text-jewelry-light transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-jewelry-light/70 hover:text-jewelry-light transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className="text-jewelry-light/70 hover:text-jewelry-light transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-jewelry-light/70 hover:text-jewelry-light transition-colors">Returns & Exchanges</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif text-jewelry-light mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-jewelry-gold flex-shrink-0" />
                <span className="text-jewelry-light/70">100 Kakinada </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-jewelry-gold flex-shrink-0" />
                <span className="text-jewelry-light/70">+91 9999 9999 99</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-jewelry-gold flex-shrink-0" />
                <span className="text-jewelry-light/70">info@Sitara.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-jewelry-light/60">
          <p>© {new Date().getFullYear()} Sitara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
