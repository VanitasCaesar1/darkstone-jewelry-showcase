
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';
import { getFeaturedProducts } from '../lib/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <Layout>
      <Hero />
      
      {/* Featured Products */}
      <section className="py-24 bg-jewelry-dark">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-jewelry-gold font-medium">Curated Selection</span>
              <h2 className="heading-lg mt-2">Featured Pieces</h2>
              <p className="text-jewelry-light/80 max-w-xl mt-3">
                Our most exceptional pieces, selected for their outstanding craftsmanship and timeless appeal.
              </p>
            </div>
            
            <Link to="/products" className="mt-6 md:mt-0 flex items-center text-jewelry-gold gap-2 group">
              View All Collections 
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80)', 
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="glass-panel p-10 md:p-16 max-w-3xl mx-auto text-center">
            <span className="text-jewelry-gold font-medium">Our Story</span>
            <h2 className="heading-lg mt-2 mb-6">Crafted With Passion</h2>
            <p className="text-jewelry-light/90 mb-8 text-lg">
              For over two decades, we've been committed to creating jewelry that embodies elegance, craftsmanship, and personal expression. Each piece in our collection is meticulously handcrafted, ensuring unparalleled quality and character.
            </p>
            
            <Link to="#" className="btn-primary inline-flex items-center gap-2">
              Our Craftsmanship <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-jewelry-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-jewelry-gold font-medium">Testimonials</span>
            <h2 className="heading-lg mt-2">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-panel p-8 stagger-item opacity-0 animate-fade-in-up">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-jewelry-gold inline-block mr-1">★</span>
                    ))}
                  </div>
                  
                  <p className="text-jewelry-light/80 italic mb-6 flex-grow">
                    "The attention to detail in each piece is remarkable. I've received countless compliments on my necklace, and I couldn't be happier with my purchase."
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="font-medium text-jewelry-light">Sarah J.</p>
                    <p className="text-sm text-jewelry-light/60">Loyal Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-b from-jewelry-dark to-black">
        <div className="container-custom">
          <div className="glass-panel p-10 md:p-16 text-center">
            <h2 className="heading-md mb-4">Join Our Newsletter</h2>
            <p className="text-jewelry-light/80 max-w-xl mx-auto mb-8">
              Subscribe to receive updates on new collections, exclusive offers, and jewelry care tips.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-jewelry-gold/50 text-jewelry-light"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
