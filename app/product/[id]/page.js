
'use client'
import React, { useState } from 'react';
import { ShoppingCart, Search, User, Heart, Phone, Mail, MapPin, Star, Plus, Minus, Check, Truck, Shield, RotateCcw, Package, ChevronRight, Facebook, Twitter, Instagram, Share2 } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RelatedProductsSlider from '../ProductComponents/RelatedProductsSlider';
import Image from 'next/image';

// Mock product data
const productData = {
  id: 1,
  name: 'Fresh Organic Tomatoes',
  brand: 'FreshFarm',
  price: 45,
  oldPrice: 60,
  discount: 25,
  rating: 4.5,
  reviews: 128,
  stock: 50,
  category: 'Vegetables',
  sku: 'VEG-TOM-001',
  images: [
    'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&h=600&fit=crop',
  ],
  description: 'Fresh organic tomatoes grown without pesticides. These premium quality tomatoes are handpicked from local farms and delivered fresh to your doorstep. Rich in vitamins and antioxidants, perfect for salads, cooking, and everyday meals.',
  features: [
    '100% Organic & Pesticide-free',
    'Handpicked from local farms',
    'Rich in Vitamin C and Antioxidants',
    'Fresh and naturally ripened',
    'Perfect for cooking and salads',
  ],
  nutritionalInfo: {
    calories: '18 kcal',
    protein: '0.9g',
    carbs: '3.9g',
    fiber: '1.2g',
    vitamin_c: '14mg',
  },
  weight: '1 kg',
  origin: 'Bangladesh',
  shelfLife: '5-7 days',
};

const relatedProducts = [
  { id: 2, name: 'Fresh Cucumbers', price: 25, oldPrice: 35, image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=300&h=300&fit=crop', rating: 4.4, discount: 29 },
  { id: 3, name: 'Fresh Carrots', price: 40, oldPrice: 50, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop', rating: 4.6, discount: 20 },
  { id: 4, name: 'Fresh Potatoes', price: 30, oldPrice: 40, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop', rating: 4.4, discount: 25 },
  { id: 5, name: 'Fresh Onions', price: 35, oldPrice: 45, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300&h=300&fit=crop', rating: 4.5, discount: 22 },
];

const customerReviews = [
  { id: 1, name: 'Sarah Ahmed', rating: 5, date: '2 days ago', comment: 'Very fresh tomatoes! Delivered on time and quality is excellent.', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'John Smith', rating: 5, date: '5 days ago', comment: 'Best quality tomatoes I have ordered online. Will order again!', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Fatima Khan', rating: 4, date: '1 week ago', comment: 'Good quality but some were slightly overripe. Overall satisfied.', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 4, name: 'Ahmed Hassan', rating: 5, date: '2 weeks ago', comment: 'Organic and fresh! Exactly what I was looking for.', avatar: 'https://i.pravatar.cc/150?img=3' },
];

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showNotification, setShowNotification] = useState('');

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= productData.stock) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    setCart([...cart, { ...productData, quantity }]);
    setShowNotification('Added to cart!');
    setTimeout(() => setShowNotification(''), 3000);
  };

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    setShowNotification(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist!');
    setTimeout(() => setShowNotification(''), 3000);
  };

  const totalPrice = productData.price * quantity;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-[100] bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          {showNotification}
        </div>
      )}

      {/* Top Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight size={16} />
            <Link href="/shop" className="hover:text-red-600">Shop</Link>
            <ChevronRight size={16} />
            <Link href="#" className="hover:text-red-600">{productData.category}</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-semibold">{productData.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="mb-4 rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-200">
                <Image src={productData.images[selectedImage]}
                  alt={productData.name}
                  height={400}
                  width={500}
                  className="w-full h-[500px] object-cover">

                </Image>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-red-600' : 'border-gray-200'
                      } hover:border-red-600 transition`}
                  >
                  
                    <Image src={image}
                      alt={`Product ${index + 1}`}
                      height={100}
                      width={200}
                      className="w-full h-24 object-cover">

                    </Image>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  In Stock
                </span>
                {productData.discount && (
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{productData.discount}% OFF
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{productData.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(productData.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                  <span className="text-gray-600 ml-2">({productData.reviews} reviews)</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">SKU: {productData.sku}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-red-600">৳{productData.price}</span>
                {productData.oldPrice && (
                  <span className="text-2xl text-gray-400 line-through">৳{productData.oldPrice}</span>
                )}
                <span className="text-green-600 font-semibold">Save ৳{productData.oldPrice - productData.price}</span>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <p className="text-gray-700 leading-relaxed">{productData.description}</p>
              </div>

              {/* Product Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-semibold w-24">Brand:</span>
                  <span className="text-gray-900">{productData.brand}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-semibold w-24">Category:</span>
                  <span className="text-gray-900">{productData.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-semibold w-24">Weight:</span>
                  <span className="text-gray-900">{productData.weight}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-semibold w-24">Origin:</span>
                  <span className="text-gray-900">{productData.origin}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-semibold w-24">Shelf Life:</span>
                  <span className="text-gray-900">{productData.shelfLife}</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">Quantity:</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="px-4 py-3 hover:bg-gray-100 transition"
                      disabled={quantity <= 1}
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-6 py-3 font-bold text-lg border-x-2 border-gray-300">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="px-4 py-3 hover:bg-gray-100 transition"
                      disabled={quantity >= productData.stock}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Only <span className="text-red-600 font-bold">{productData.stock}</span> items left
                  </span>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-lg">Total Price:</span>
                  <span className="text-3xl font-bold text-red-600">৳{totalPrice}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={addToCart}
                  className="flex-1 bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition font-bold text-lg flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={24} />
                  Add to Cart
                </button>
                <button
                  onClick={toggleWishlist}
                  className={`px-6 py-4 rounded-lg transition border-2 ${isInWishlist
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                    }`}
                >
                  <Heart size={24} fill={isInWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition font-bold text-lg mb-6">
                Buy Now
              </button>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                  <Truck size={24} className="text-blue-600" />
                  <div>
                    <div className="font-semibold text-sm">Free Delivery</div>
                    <div className="text-xs text-gray-600">Orders over ৳500</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                  <Shield size={24} className="text-green-600" />
                  <div>
                    <div className="font-semibold text-sm">100% Secure</div>
                    <div className="text-xs text-gray-600">Payment protected</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
                  <RotateCcw size={24} className="text-orange-600" />
                  <div>
                    <div className="font-semibold text-sm">Easy Returns</div>
                    <div className="text-xs text-gray-600">30 days return</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
                  <Package size={24} className="text-purple-600" />
                  <div>
                    <div className="font-semibold text-sm">Quality Check</div>
                    <div className="text-xs text-gray-600">Verified products</div>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="border-t pt-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-semibold">Share:</span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center justify-center">
                      <Facebook size={18} />
                    </button>
                    <button className="w-10 h-10 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition flex items-center justify-center">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition flex items-center justify-center">
                      <Instagram size={18} />
                    </button>
                    <button className="w-10 h-10 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition flex items-center justify-center">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {['description', 'features', 'nutrition', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 font-semibold capitalize ${activeTab === tab
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{productData.description}</p>
                <p className="text-gray-700 leading-relaxed">
                  Our fresh organic tomatoes are carefully selected from certified organic farms. They are grown without the use of synthetic pesticides or fertilizers, ensuring you get the healthiest and most flavorful tomatoes. Perfect for making sauces, salads, or enjoying fresh.
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Nutritional Information</h3>
                <p className="text-gray-600 mb-4">Per 100g serving</p>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(productData.nutritionalInfo).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-gray-700 capitalize">{key.replace('_', ' ')}:</span>
                      <span className="text-gray-900 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Customer Reviews</h3>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold">
                    Write a Review
                  </button>
                </div>

                {/* Rating Summary */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-900 mb-2">{productData.rating}</div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < Math.floor(productData.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <div className="text-gray-600 text-sm">{productData.reviews} reviews</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-3 mb-2">
                          <span className="w-12 text-sm text-gray-600">{star} Star</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${star === 5 ? 80 : star === 4 ? 15 : 5}%` }}
                            ></div>
                          </div>
                          <span className="w-12 text-sm text-gray-600 text-right">
                            {star === 5 ? 80 : star === 4 ? 15 : 5}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {customerReviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-bold text-gray-900">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      size={14}
                                      className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                                    />
                                  ))}
                                </div>
                                <span className="text-gray-500 text-sm">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <RelatedProductsSlider/>
      </div>

      <Footer />
    </div>
  )
}