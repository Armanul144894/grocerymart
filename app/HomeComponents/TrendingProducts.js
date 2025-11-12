'use client'
import { ChevronRight, Heart, Package, ShoppingCart, Star, TrendingUp } from 'lucide-react'
import React, { useState } from 'react'

const products = [
    { id: 1, name: 'Fresh Tomatoes', price: 45, oldPrice: 60, discount: 25, image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=300&h=300&fit=crop', category: 'Vegetables', rating: 4.5, stock: 50 },
    { id: 2, name: 'Basmati Rice 5kg', price: 450, oldPrice: 500, discount: 10, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop', category: 'Grains', rating: 4.8, stock: 30 },
    { id: 3, name: 'Fresh Milk 1L', price: 65, oldPrice: 75, discount: 13, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop', category: 'Dairy', rating: 4.7, stock: 100 },
    { id: 4, name: 'Brown Bread', price: 35, oldPrice: 40, discount: 12, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop', category: 'Bakery', rating: 4.6, stock: 45 },
    { id: 5, name: 'Farm Eggs (12pcs)', price: 120, oldPrice: 140, discount: 14, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop', category: 'Dairy', rating: 4.9, stock: 60 },
    { id: 6, name: 'Cooking Oil 1L', price: 180, oldPrice: 200, discount: 10, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop', category: 'Cooking', rating: 4.5, stock: 80 },
    { id: 7, name: 'Fresh Potatoes', price: 30, oldPrice: 40, discount: 25, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop', category: 'Vegetables', rating: 4.4, stock: 150 },
    { id: 8, name: 'Green Tea Bags', price: 95, oldPrice: 110, discount: 14, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&h=300&fit=crop', category: 'Beverages', rating: 4.7, stock: 40 },
    { id: 9, name: 'Chicken Breast 1kg', price: 280, oldPrice: 320, discount: 12, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=300&fit=crop', category: 'Meat', rating: 4.8, stock: 25 },
    { id: 10, name: 'Fresh Bananas', price: 60, oldPrice: 70, discount: 14, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop', category: 'Fruits', rating: 4.6, stock: 90 },
    { id: 11, name: 'Yogurt 500g', price: 75, oldPrice: 85, discount: 12, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop', category: 'Dairy', rating: 4.7, stock: 70 },
    { id: 12, name: 'Biscuits Pack', price: 55, oldPrice: 65, discount: 15, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop', category: 'Snacks', rating: 4.5, stock: 120 },
    { id: 13, name: 'Fresh Carrots', price: 40, oldPrice: 50, discount: 20, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop', category: 'Vegetables', rating: 4.6, stock: 80 },
    { id: 14, name: 'Orange Juice 1L', price: 120, oldPrice: 140, discount: 14, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop', category: 'Beverages', rating: 4.8, stock: 55 },
    { id: 15, name: 'Honey 500g', price: 350, oldPrice: 400, discount: 12, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784354?w=300&h=300&fit=crop', category: 'Organic', rating: 4.9, stock: 35 },
    { id: 16, name: 'Fresh Apples', price: 180, oldPrice: 200, discount: 10, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop', category: 'Fruits', rating: 4.7, stock: 65 },
    { id: 17, name: 'Cheese Block', price: 250, oldPrice: 280, discount: 11, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop', category: 'Dairy', rating: 4.6, stock: 40 },
    { id: 18, name: 'Fresh Strawberries', price: 220, oldPrice: 250, discount: 12, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop', category: 'Fruits', rating: 4.8, stock: 30 },
    { id: 19, name: 'Pasta 500g', price: 85, oldPrice: 95, discount: 11, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop', category: 'Grains', rating: 4.5, stock: 75 },
    { id: 20, name: 'Fresh Cucumber', price: 25, oldPrice: 35, discount: 29, image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=300&h=300&fit=crop', category: 'Vegetables', rating: 4.4, stock: 100 },
];


export default function TrendingProducts({wishlist,showNotification}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification('Added to cart!');
  };

    return (
        <div>
            {/* Trending Products */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <TrendingUp size={32} className="text-red-600" />
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
                                <p className="text-gray-600 mt-1">Most popular items this week</p>
                            </div>
                        </div>
                        <button className="text-red-600 font-semibold hover:underline flex items-center gap-1">
                            View All <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="grid grid-cols-6 gap-4">
                        {products.slice(0, 12).map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-4 relative group"
                            >
                                {product.discount && (
                                    <div className="absolute top-2 left-2 z-10">
                                        <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                                            -{product.discount}%
                                        </div>
                                    </div>
                                )}
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className={`absolute top-2 right-2 z-10 p-1.5 rounded-full ${wishlist.includes(product.id) ? 'bg-red-600 text-white' : 'bg-white text-gray-400'
                                        } hover:bg-red-600 hover:text-white transition shadow-md`}
                                >
                                    <Heart size={16} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                                </button>

                                <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={12}
                                            className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                                        />
                                    ))}
                                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                                </div>

                                <h3 className="font-semibold text-sm mb-2 text-gray-900 line-clamp-2 h-10">{product.name}</h3>

                                <div className="mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-red-600">৳{product.price}</span>
                                        {product.oldPrice && (
                                            <span className="text-xs text-gray-400 line-through">৳{product.oldPrice}</span>
                                        )}
                                    </div>
                                    <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                                        <Package size={12} />
                                        In Stock: {product.stock} units
                                    </div>
                                </div>

                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold flex items-center justify-center gap-2"
                                >
                                    <ShoppingCart size={16} />
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
