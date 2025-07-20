export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  description: string;
  ecoFriendly: boolean;
}

export const fakeProducts: Product[] = [
  {
    id: '1',
    name: 'Wooden Tooth Brush',
    price: 22.40,
    originalPrice: 32.00,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300&h=300&fit=crop',
    category: 'Personal Care',
    description: 'Eco-friendly bamboo toothbrush with soft bristles',
    ecoFriendly: true,
  },
  {
    id: '2',
    name: 'Wooden Water Bottle',
    price: 22.40,
    originalPrice: 32.00,
    discount: 35,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop',
    category: 'Kitchen',
    description: 'Sustainable wooden water bottle with leak-proof design',
    ecoFriendly: true,
  },
  {
    id: '3',
    name: 'Wooden Comb with Handle',
    price: 22.40,
    originalPrice: 28.00,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
    category: 'Personal Care',
    description: 'Handcrafted wooden comb with ergonomic handle',
    ecoFriendly: true,
  },
  {
    id: '4',
    name: 'Eco Cleaning Kit',
    price: 18.90,
    originalPrice: 24.00,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop',
    category: 'Cleaning',
    description: 'Natural cleaning products starter kit',
    ecoFriendly: true,
  },
  {
    id: '5',
    name: 'Bamboo Kitchen Set',
    price: 35.60,
    originalPrice: 45.00,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    category: 'Kitchen',
    description: 'Complete bamboo kitchen utensils set',
    ecoFriendly: true,
  },
  {
    id: '6',
    name: 'Organic Cotton Bags',
    price: 15.20,
    originalPrice: 20.00,
    discount: 24,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    category: 'Bags',
    description: 'Set of 3 organic cotton reusable bags',
    ecoFriendly: true,
  },
];

export const getTrendingProducts = (): Product[] => {
  return fakeProducts.slice(0, 3);
};

export const getDealsOfTheDay = (): Product[] => {
  return fakeProducts.slice(3, 6);
};

export const getAllProducts = (): Product[] => {
  return fakeProducts;
};

export const getProductById = (id: string): Product | undefined => {
  return fakeProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return fakeProducts.filter(product => product.category === category);
};