'use client'
import React, { useState } from 'react';
import { ShoppingCart, Search, User, Heart, Menu, ChevronDown, Phone, Mail, MapPin, Filter, Grid, List, Star, X, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// Mock products data
const allProducts = [
  { id: 1, name: 'Fresh Tomatoes', price: 45, oldPrice: 60, discount: 25, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=600&fit=crop', category: 'Vegetables', rating: 4.5, stock: 50, brand: 'FreshFarm' },
  { id: 2, name: 'Basmati Rice 5kg', price: 450, oldPrice: 500, discount: 10, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop', category: 'Grains', rating: 4.8, stock: 30, brand: 'Premium' },
  { id: 3, name: 'Fresh Milk 1L', price: 65, oldPrice: 75, discount: 13, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop', category: 'Dairy', rating: 4.7, stock: 100, brand: 'DairyFresh' },
  { id: 4, name: 'Brown Bread', price: 35, oldPrice: 40, discount: 12, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop', category: 'Bakery', rating: 4.6, stock: 45, brand: 'BakeHouse' },
  { id: 5, name: 'Farm Eggs (12pcs)', price: 120, oldPrice: 140, discount: 14, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop', category: 'Dairy', rating: 4.9, stock: 60, brand: 'FarmFresh' },
  { id: 6, name: 'Cooking Oil 1L', price: 180, oldPrice: 200, discount: 10, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop', category: 'Cooking', rating: 4.5, stock: 80, brand: 'PureOil' },
  { id: 7, name: 'Fresh Potatoes', price: 30, oldPrice: 40, discount: 25, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop', category: 'Vegetables', rating: 4.4, stock: 150, brand: 'FreshFarm' },
  { id: 8, name: 'Green Tea Bags', price: 95, oldPrice: 110, discount: 14, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&h=300&fit=crop', category: 'Beverages', rating: 4.7, stock: 40, brand: 'TeaTime' },
  { id: 9, name: 'Chicken Breast 1kg', price: 280, oldPrice: 320, discount: 12, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=300&fit=crop', category: 'Meat', rating: 4.8, stock: 25, brand: 'MeatMart' },
  { id: 10, name: 'Fresh Bananas', price: 60, oldPrice: 70, discount: 14, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop', category: 'Fruits', rating: 4.6, stock: 90, brand: 'FruitCo' },
  { id: 11, name: 'Yogurt 500g', price: 75, oldPrice: 85, discount: 12, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop', category: 'Dairy', rating: 4.7, stock: 70, brand: 'DairyFresh' },
  { id: 12, name: 'Biscuits Pack', price: 55, oldPrice: 65, discount: 15, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop', category: 'Snacks', rating: 4.5, stock: 120, brand: 'Snacky' },
  { id: 13, name: 'Fresh Carrots', price: 40, oldPrice: 50, discount: 20, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop', category: 'Vegetables', rating: 4.6, stock: 80, brand: 'FreshFarm' },
  { id: 14, name: 'Orange Juice 1L', price: 120, oldPrice: 140, discount: 14, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop', category: 'Beverages', rating: 4.8, stock: 55, brand: 'JuicePlus' },
  { id: 15, name: 'Honey 500g', price: 350, oldPrice: 400, discount: 12, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784354?w=300&h=300&fit=crop', category: 'Organic', rating: 4.9, stock: 35, brand: 'PureHoney' },
  { id: 16, name: 'Fresh Apples', price: 180, oldPrice: 200, discount: 10, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop', category: 'Fruits', rating: 4.7, stock: 65, brand: 'FruitCo' },
  { id: 17, name: 'Cheese Block', price: 250, oldPrice: 280, discount: 11, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop', category: 'Dairy', rating: 4.6, stock: 40, brand: 'DairyFresh' },
  { id: 18, name: 'Fresh Strawberries', price: 220, oldPrice: 250, discount: 12, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop', category: 'Fruits', rating: 4.8, stock: 30, brand: 'FruitCo' },
  { id: 19, name: 'Pasta 500g', price: 85, oldPrice: 95, discount: 11, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop', category: 'Grains', rating: 4.5, stock: 75, brand: 'PastaKing' },
  { id: 20, name: 'Fresh Cucumber', price: 25, oldPrice: 35, discount: 29, image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=300&h=300&fit=crop', category: 'Vegetables', rating: 4.4, stock: 100, brand: 'FreshFarm' },
];

const categories = ['All Products', 'Vegetables', 'Fruits', 'Dairy', 'Bakery', 'Meat', 'Beverages', 'Snacks', 'Grains', 'Cooking', 'Organic'];
const brands = ['All Brands', 'FreshFarm', 'DairyFresh', 'FruitCo', 'Premium', 'BakeHouse', 'MeatMart', 'TeaTime', 'Snacky', 'JuicePlus', 'PureHoney'];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
   const [showCart, setShowCart] = useState(false);

  // Filter products
  let filteredProducts = allProducts.filter(product => {
    const matchCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchBrand = selectedBrand === 'All Brands' || product.brand === selectedBrand;
    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchBrand && matchPrice && matchSearch;
  });

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'discount') {
    filteredProducts.sort((a, b) => b.discount - a.discount);
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('Added to cart!');
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="min-h-screen bg-gray-50">
     <Header/>   
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Shop</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          {/* Sidebar Filters */}
          {showFilters && (
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Filter size={20} />
                    Filters
                  </h3>
                  <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700">
                    <X size={18} />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer hover:text-red-600">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="text-red-600 focus:ring-red-500"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">Price Range</h4>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>৳{priceRange[0]}</span>
                    <span>৳{priceRange[1]}</span>
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">Brands</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer hover:text-red-600">
                        <input
                          type="radio"
                          name="brand"
                          checked={selectedBrand === brand}
                          onChange={() => setSelectedBrand(brand)}
                          className="text-red-600 focus:ring-red-500"
                        />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory('All Products');
                    setSelectedBrand('All Brands');
                    setPriceRange([0, 500]);
                  }}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition font-semibold text-sm"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center flex-wrap gap-4 justify-between">
                <div className="flex items-center gap-4">
                  {!showFilters && (
                    <button
                      onClick={() => setShowFilters(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      <SlidersHorizontal size={18} />
                      Show Filters
                    </button>
                  )}
                  <span className="text-gray-600 text-sm">
                    Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 outline-none text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="discount">Best Discount</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <p className="text-gray-500 text-lg">No products found matching your criteria</p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-4 relative group">
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

                    <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
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

                    <Link href={`/product/${product.id}`} passHref>
                      <h3 className="font-semibold text-sm mb-1 text-gray-900 line-clamp-2 h-10 cursor-pointer hover:text-red-600">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 mb-2">{product.brand}</p>

                    <div className="mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-red-600">৳{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">৳{product.oldPrice}</span>
                        )}
                      </div>
                      <div className="text-xs text-green-600 mt-1">In Stock: {product.stock}</div>
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
            ) : (
              <div className="space-y-4">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 flex flex-wrap lg:flex-nowrap gap-6">
                    <div className=" w-full h-full md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 relative">
                      {product.discount && (
                        <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                          -{product.discount}%
                        </div>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-gray-900 cursor-pointer hover:text-red-600">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">Brand: {product.brand}</p>

                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                        <span className="text-sm text-gray-600">({product.rating})</span>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        High quality {product.category.toLowerCase()} product. Fresh and organic, delivered right to your doorstep.
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl font-bold text-red-600">৳{product.price}</span>
                            {product.oldPrice && (
                              <span className="text-lg text-gray-400 line-through">৳{product.oldPrice}</span>
                            )}
                          </div>
                          <div className="text-sm text-green-600">In Stock: {product.stock} units</div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className={`p-3 rounded-lg ${wishlist.includes(product.id) ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'
                              } hover:bg-red-600 hover:text-white transition`}
                          >
                            <Heart size={20} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                          </button>
                          <button
                            onClick={() => addToCart(product)}
                            className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold flex items-center gap-2"
                          >
                            <ShoppingCart size={20} />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}