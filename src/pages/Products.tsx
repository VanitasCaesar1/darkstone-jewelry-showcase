
import { useState, useEffect } from 'react';
import { products, categories } from '../lib/products';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter products based on category and search query
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      let filtered = products;
      
      // Filter by category
      if (activeCategory) {
        filtered = filtered.filter(product => product.category === activeCategory);
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      }
      
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-jewelry-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80)', 
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="text-jewelry-gold font-medium animate-fade-in">Our Collection</span>
            <h1 className="heading-xl mt-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>Handcrafted Jewelry</h1>
            <p className="text-lg text-jewelry-light/80 mt-4 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore our carefully curated collection of handcrafted jewelry pieces, each one a unique work of art.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters and Products */}
      <section className="py-16 bg-jewelry-dark">
        <div className="container-custom">
          {/* Search and filters */}
          <div className="mb-10 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="relative max-w-md w-full">
              <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-jewelry-light/60" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-jewelry-dark/60 border border-white/10 rounded-full py-3 pl-12 pr-4 text-jewelry-light placeholder:text-jewelry-light/40 focus:outline-none focus:ring-2 focus:ring-jewelry-gold/30"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setActiveCategory(null)} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === null 
                    ? 'bg-jewelry-gold text-jewelry-dark' 
                    : 'bg-white/5 text-jewelry-light/80 hover:bg-white/10'
                }`}
              >
                All
              </button>
              
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-jewelry-gold text-jewelry-dark' 
                      : 'bg-white/5 text-jewelry-light/80 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products grid */}
          <div className="min-h-[400px]">
            {isLoading ? (
              // Loading skeleton
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="bg-white/5 rounded-xl overflow-hidden animate-pulse">
                    <div className="aspect-[3/4] bg-white/10"></div>
                    <div className="p-4">
                      <div className="h-5 bg-white/10 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-white/10 rounded w-1/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-jewelry-light/80">No products found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setActiveCategory(null);
                    setSearchQuery('');
                  }}
                  className="mt-4 text-jewelry-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
