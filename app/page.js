"use client"
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Heart, Menu, ChevronDown, Phone, Mail, MapPin, ChevronRight, Star, Truck, Shield, Headphones, CreditCard, TrendingUp, Gift, Clock, Award, X, Plus, Minus, Package, Zap, Trash2 } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Banner from '@/app/HomeComponents/Banner';
import FeaturedBanner from '@/app/HomeComponents/FeaturedBanner';
import DayDeal from './HomeComponents/DayDeal';
import Link from 'next/link';
import WeeklyOffer from './HomeComponents/WeeklyOffer';

// Mock data with real image URLs
const categories = [
  { name: 'Vegetables', icon: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=200&h=200&fit=crop' },
  { name: 'Fruits', icon: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&h=200&fit=crop' },
  { name: 'Dairy', icon: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop' },
  { name: 'Bakery', icon: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop' },
  { name: 'Meat & Fish', icon: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&h=200&fit=crop' },
  { name: 'Beverages', icon: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=200&h=200&fit=crop' },
  { name: 'Snacks', icon: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&h=200&fit=crop' },
  { name: 'Frozen Foods', icon: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop' },
  { name: 'Personal Care', icon: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop' },
  { name: 'Home & Kitchen', icon: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop' },
];

const products = [
  { id: 1, name: 'Fresh Tomatoes', price: 45, oldPrice: 60, discount: 25, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=300&fit=crop', category: 'Vegetables', rating: 4.5, stock: 50 },
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

const bannerSlides = [
  {
    title: 'Fresh Vegetables & Fruits',
    subtitle: 'Up to 50% OFF',
    description: 'Farm fresh produce delivered daily',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&h=600&fit=crop',
    color: 'from-green-600 to-green-700'
  },
  {
    title: 'Organic Products',
    subtitle: 'Healthy Living',
    description: '100% Natural & Chemical Free',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop',
    color: 'from-orange-600 to-orange-700'
  },
  {
    title: 'Daily Essentials',
    subtitle: 'Best Prices Guaranteed',
    description: 'Save more on everyday items',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1200&h=600&fit=crop',
    color: 'from-red-600 to-red-700'
  },
];



const testimonials = [
  { name: 'Sarah Ahmed', comment: 'Great quality products and fast delivery!', rating: 5, image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'John Smith', comment: 'Best online grocery store in Bangladesh', rating: 5, image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Fatima Khan', comment: 'Fresh vegetables always arrive on time', rating: 5, image: 'https://i.pravatar.cc/150?img=5' },
];

export default function GroceryStore() {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState('');



  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

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


  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
      showNotification('Removed from wishlist');
    } else {
      setWishlist(prev => [...prev, productId]);
      showNotification('Added to wishlist!');
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 z-[100] bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          {notification}
        </div>
      )}

      <FeaturedBanner />

      <DayDeal />

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
            <Link href='shop'>
              <button className="text-red-600 font-semibold hover:underline flex items-center gap-1">
                View All <ChevronRight size={18} />
              </button>
            </Link>
          </div>
          <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4">
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

                <Link href={`product/${product.id}`}>
                  <h3 className="font-semibold text-sm mb-2 text-gray-900 line-clamp-2 h-10">{product.name}</h3>
                </Link>
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

      {/* Fresh Vegetables Banner */}
      <section className="py-16 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1600&h=400&fit=crop"
          alt="Fresh Vegetables"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <div className="bg-yellow-400 text-gray-900 inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
              100% Organic
            </div>
            <h2 className="text-5xl font-bold mb-4">Fresh Vegetables</h2>
            <p className="text-xl mb-6 text-gray-100">Farm fresh produce delivered to your doorstep daily. All vegetables are pesticide-free and handpicked.</p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
              Shop Vegetables <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-5 justify-between mb-8">
            <div className="flex items-center gap-3">
              <Award size={32} className="text-yellow-500" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
                <p className="text-gray-600 mt-1">Top rated products by our customers</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-lg font-semibold ${selectedCategory === 'All' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                All
              </button>
              {['Vegetables', 'Fruits', 'Dairy'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-semibold ${selectedCategory === cat ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4">
            {filteredProducts.slice(0, 12).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-4 relative group border border-gray-100"
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

                <Link href={`product/${product.id}`}>
                  <h3 className="font-semibold text-sm mb-2 text-gray-900 line-clamp-2 h-10">{product.name}</h3>
                </Link>

                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600">৳{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">৳{product.oldPrice}</span>
                    )}
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

      {/* Promotional Banners */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="relative rounded-2xl overflow-hidden h-80 cursor-pointer group">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=400&fit=crop"
                alt="Organic Foods"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-600/60"></div>
              <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
                <div className="bg-yellow-400 text-gray-900 inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                  NEW ARRIVAL
                </div>
                <h3 className="text-4xl font-bold mb-3">Organic Foods</h3>
                <p className="text-lg mb-4">100% Chemical Free Products</p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition w-fit">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-80 cursor-pointer group">
              <img
                src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=800&h=400&fit=crop"
                alt="Dairy Products"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
              <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
                <div className="bg-red-500 text-white inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                  SAVE 30%
                </div>
                <h3 className="text-4xl font-bold mb-3">Dairy Products</h3>
                <p className="text-lg mb-4">Fresh milk, cheese & more</p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition w-fit">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WeeklyOffer/>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Trusted by thousands of happy customers</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-5 justify-between">
            <div className="text-white max-w-xl">
              <h2 className="text-4xl font-bold mb-3">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-100">Get weekly updates on new products, exclusive deals, and special offers!</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 lg:py-4 py-2 rounded-lg w-56 outline-none text-gray-900"
              />
              <button
                onClick={() => showNotification('Thanks for subscribing!')}
                className="bg-white text-red-600 px-8 lg:py-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-500 text-sm font-semibold mb-8">TRUSTED BY LEADING BRANDS</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5 items-center justify-around opacity-60">
            {['BRAND', 'LOGO', 'PARTNER', 'COMPANY', 'RETAIL', 'STORE'].map((brand, idx) => (
              <div key={idx} className="text-2xl font-bold text-gray-400">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer></Footer>

    </div>
  )
}
