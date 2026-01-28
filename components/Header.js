'use client'
import React, { useState } from 'react';
import { ChevronDown, Heart, Mail, MapPin, Menu, Minus, Phone, Plus, Search, ShoppingCart, Trash2, User, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import products from '@/data/products';

// Mock data
const categories = [
  { name: 'Vegetables', icon: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=200&h=200&fit=crop' },
  { name: 'Fruits', icon: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&h=200&fit=crop' },
  { name: 'Dairy', icon: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop' },
  { name: 'Bakery', icon: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop' },
  { name: 'Meat & Fish', icon: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&h=200&fit=crop' },
  { name: 'Beverages', icon: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=200&h=200&fit=crop' },
  { name: 'Snacks', icon: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&h=200&fit=crop' },
  { name: 'Frozen Foods', icon: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop' },
];

// Header Component
export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [cart, setCart] = useState([
    { id: 1, name: 'Fresh Tomatoes', price: 45, quantity: 2, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=300&fit=crop' },
    { id: 2, name: 'Basmati Rice 5kg', price: 450, quantity: 1, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop' },
  ]);
  const [wishlist, setWishlist] = useState([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const allproducts = products;

  return (
    <>
      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setShowCart(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-red-700 sm:text-2xl font-bold">Cart ({cartItemCount})</h2>
                <button onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-3 sm:gap-4 p-3 bg-gray-50 rounded-lg">
                        <Image src={item.image} alt={item.name} height={200} width={400} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1 truncate">{item.name}</h3>
                          <p className="text-red-600 font-bold mb-2">৳{item.price}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 bg-white rounded-lg border">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 hover:bg-gray-100 rounded"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-2 font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 hover:bg-gray-100 rounded"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:bg-red-50 p-1 rounded"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>৳{cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                      <span>Total</span>
                      <span>৳{cartTotal}</span>
                    </div>
                  </div>

                  <Link href={'/checkout'}>
                    <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Proceed to Checkout
                    </button></Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Sidebar */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[60] bg-black/50 lg:hidden" onClick={() => setShowMobileMenu(false)}>
          <div
            className="absolute left-0 top-0 h-full w-64 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={() => setShowMobileMenu(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-2">
                <Link href={'/'} className="block px-4 py-3 hover:bg-gray-100 rounded-lg text-gray-700 font-medium">
                  Home
                </Link>
                {['Shop', 'Offers', 'Brands'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-3 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat, idx) => (
                    <Link key={idx} href={`/category/${cat.name.toLowerCase()
                      .replace(/&/g, 'and')
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '')}`}>
                      <button

                        className="w-full px-4 py-2 hover:bg-gray-100 rounded-lg text-left text-gray-700 flex items-center gap-3"
                      >
                        <Image src={cat.icon} alt={cat.name} height={40} width={40} className="w-8 h-8 rounded object-cover" />
                        <span className="text-sm">{cat.name}</span>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Header - Hidden on mobile */}
      <div className="bg-red-600 text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> +880 123-456-789</span>
            <span className="flex items-center gap-1"><Mail size={12} /> info@grocerymart.com</span>
            <span className="hidden lg:flex items-center gap-1">Welcome to our online store!</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:underline">Track Order</span>
            <span className="cursor-pointer hover:underline">Help</span>
            <span className="cursor-pointer hover:underline">বাংলা</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link href={'/'}>
              <div className="text-lg sm:text-2xl font-bold text-red-600 cursor-pointer">
                🛒 <span className="hidden sm:inline">GROCERY</span><span className="text-green-600">MART</span>
              </div>
            </Link>

            {/* Search Bar - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 text-white px-5 py-1.5 rounded-md hover:bg-red-700">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search Icon - Mobile only */}
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
                <Search size={22} />
              </button>

              {/* Account - Hidden on mobile */}
              <button className="hidden sm:flex flex-col items-center hover:text-red-600 transition">
                <User size={24} />
                <span className="text-xs mt-1">Account</span>
              </button>

              {/* Wishlist - Hidden on smallest screens */}
              <button className="hidden sm:flex flex-col items-center hover:text-red-600 transition relative">
                <Heart size={24} />
                <span className="text-xs mt-1">Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Button - Responsive */}
              <button
                onClick={() => setShowCart(true)}
                className="flex items-center gap-2 bg-red-600 text-white px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-red-700 transition relative"
              >
                <ShoppingCart size={20} />
                <div className="hidden sm:flex flex-col items-start">
                  <span className="text-xs">My Cart</span>
                  <span className="text-sm font-bold">৳{cartTotal}</span>
                </div>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-md">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="bg-gray-100 border-t hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <button
                    onClick={() => setShowCategories(!showCategories)}
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    <Menu size={18} />
                    <span className="font-medium">All Categories</span>
                    <ChevronDown size={16} />
                  </button>

                  {showCategories && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-2 w-64 z-50">
                      {categories.map((cat, idx) => (
                        <Link key={idx} href={`/category/${cat.name.toLowerCase()
                          .replace(/&/g, 'and')
                          .replace(/[^a-z0-9]+/g, '-')
                          .replace(/(^-|-$)/g, '')}`}>
                          <button
                            onClick={() => setShowCategories(false)}
                            className="w-full px-4 py-2 hover:bg-gray-100 text-left text-gray-700 flex items-center gap-3"
                          >
                            <Image src={cat.icon} alt={cat.name} height={40} width={40} className="w-8 h-8 rounded object-cover" />
                            {cat.name}
                          </button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-6 text-sm font-medium">
                  <Link href={'/'} className="hover:text-red-600 transition">
                    Home
                  </Link>
                  {['Shop', 'Offers', 'Brands'].map((item) => (
                    <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red-600 transition">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                <MapPin size={18} />
                Deliver to: <span className="font-bold">Dhaka 1205</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Delivery Info */}
        <div className="lg:hidden bg-gray-100 border-t px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-red-600 text-xs font-semibold">
            <MapPin size={14} />
            <span>Deliver to: <span className="font-bold">Dhaka 1205</span></span>
          </div>
        </div>
      </header>
    </>
  );
};

