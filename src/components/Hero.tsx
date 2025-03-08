
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80)',
          filter: 'brightness(0.4)'
        }}
      >
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex flex-col items-start space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-jewelry-dark/60 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-jewelry-light mb-2">
              Handcrafted Excellence
            </span>
            
            <h1 className="heading-xl">
              <span className="text-gradient block">Artisan Jewelry</span>
              <span>For The Modern Spirit</span>
            </h1>
            
            <p className="text-lg md:text-xl text-jewelry-light/80 max-w-xl">
              Discover our collection of meticulously handcrafted jewelry pieces that blend traditional craftsmanship with contemporary design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/products" className="btn-primary flex items-center gap-2">
                Explore Collection <ArrowRight size={16} />
              </Link>
              <Link to="#" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass-panel p-6">
            <h3 className="text-xl font-serif mb-3 text-jewelry-gold">Artisan Crafted</h3>
            <p className="text-jewelry-light/80">Each piece is handmade with meticulous attention to detail and quality.</p>
          </div>
          
          <div className="glass-panel p-6">
            <h3 className="text-xl font-serif mb-3 text-jewelry-gold">Ethically Sourced</h3>
            <p className="text-jewelry-light/80">We use only ethically sourced materials that respect both people and planet.</p>
          </div>
          
          <div className="glass-panel p-6">
            <h3 className="text-xl font-serif mb-3 text-jewelry-gold">Timeless Design</h3>
            <p className="text-jewelry-light/80">Our designs combine classic elegance with contemporary sensibilities.</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-jewelry-light/30 flex justify-center">
          <div className="w-1 h-3 bg-jewelry-light/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
