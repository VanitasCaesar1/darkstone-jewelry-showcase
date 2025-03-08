
import { useState } from 'react';
import { Product } from '../lib/products';
import { Eye, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, price, image, category } = product;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="product-card-hover stagger-item opacity-0 animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-jewelry-dark/60 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="relative overflow-hidden aspect-[3/4]">
          {/* Image */}
          <div className="w-full h-full absolute inset-0 bg-jewelry-dark/20">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
              loading="lazy"
            />
          </div>
          
          {/* Overlay with buttons */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-jewelry-dark/80 to-transparent flex items-end justify-center p-6 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0.6 }}
          >
            <div className="flex gap-3 transition-transform duration-300 ease-out transform"
                style={{ transform: isHovered ? 'translateY(0)' : 'translateY(20px)' }}
            >
              <button className="p-3 rounded-full bg-jewelry-gold text-jewelry-dark hover:brightness-110 transition-all">
                <ShoppingBag size={18} />
              </button>
              <button className="p-3 rounded-full bg-white/10 backdrop-blur-md text-jewelry-light hover:bg-white/20 transition-all">
                <Eye size={18} />
              </button>
            </div>
          </div>
          
          {/* Category tag */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-jewelry-dark/70 backdrop-blur-md text-xs font-medium text-jewelry-light rounded-full">
            {category}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-serif text-lg font-medium text-jewelry-light mb-1">
            {name}
          </h3>
          <p className="text-jewelry-gold font-medium">
            {formatPrice(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
