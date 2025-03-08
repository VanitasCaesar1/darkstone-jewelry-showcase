
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ethereal Diamond Ring",
    category: "Rings",
    price: 1299,
    description: "Handcrafted diamond ring with intricate detailing and a timeless design.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800&h=600",
    featured: true
  },
  {
    id: "2",
    name: "Celestial Pearl Necklace",
    category: "Necklaces",
    price: 899,
    description: "Elegant pearl necklace inspired by celestial bodies, perfect for special occasions.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800&h=600",
    featured: true
  },
  {
    id: "3",
    name: "Harmony Gold Bracelet",
    category: "Bracelets",
    price: 649,
    description: "Delicate gold bracelet with harmonious patterns, adding grace to any outfit.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "4",
    name: "Whisper Silver Earrings",
    category: "Earrings",
    price: 349,
    description: "Lightweight silver earrings that add a subtle elegance to your everyday look.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "5",
    name: "Radiant Sapphire Pendant",
    category: "Pendants",
    price: 799,
    description: "Vibrant sapphire pendant that captures light beautifully, set in premium metal.",
    image: "https://images.unsplash.com/photo-1620830880315-7d06ca510fbf?auto=format&fit=crop&q=80&w=800&h=600",
    featured: true
  },
  {
    id: "6",
    name: "Heritage Emerald Brooch",
    category: "Brooches",
    price: 1199,
    description: "Timeless emerald brooch inspired by heritage designs, crafted with precision.",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "7",
    name: "Infinity Ruby Anklet",
    category: "Anklets",
    price: 429,
    description: "Luxurious ruby anklet with an infinity motif, perfect for both casual and formal wear.",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "8",
    name: "Aurora Opal Cufflinks",
    category: "Cufflinks",
    price: 579,
    description: "Distinctive opal cufflinks that shimmer with colors reminiscent of the aurora.",
    image: "https://images.unsplash.com/photo-1618403083295-8b6bf0c41f4e?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
