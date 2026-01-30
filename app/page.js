"use client";
import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Search,
  User,
  Heart,
  Menu,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Star,
  Truck,
  Shield,
  Headphones,
  CreditCard,
  TrendingUp,
  Gift,
  Clock,
  Award,
  X,
  Plus,
  Minus,
  Package,
  Zap,
  Trash2,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/app/HomeComponents/Banner";
import FeaturedBanner from "@/app/HomeComponents/FeaturedBanner";
import DayDeal from "./HomeComponents/DayDeal";
import Link from "next/link";
import WeeklyOffer from "./HomeComponents/WeeklyOffer";
import Newsletter from "./HomeComponents/Newsletter";
import Testimonials from "./HomeComponents/Testimonials";
import FreshVegetablesBanner from "./HomeComponents/FreshVegetablesBanner";
import PromotionalBanners from "./HomeComponents/PromotionalBanners";
import TrustedPartners from "./HomeComponents/TrustedPartners";
import Image from "next/image";
import products from "@/data/products";
import CategorySlider from "./HomeComponents/CategorySlider";

// Mock data with real image URLs
const categories = [
  {
    name: "Vegetables",
    icon: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=200&h=200&fit=crop",
  },
  {
    name: "Fruits",
    icon: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&h=200&fit=crop",
  },
  {
    name: "Dairy",
    icon: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop",
  },
  {
    name: "Bakery",
    icon: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop",
  },
  {
    name: "Meat & Fish",
    icon: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&h=200&fit=crop",
  },
  {
    name: "Beverages",
    icon: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=200&h=200&fit=crop",
  },
  {
    name: "Snacks",
    icon: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&h=200&fit=crop",
  },
  {
    name: "Frozen Foods",
    icon: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop",
  },
  {
    name: "Personal Care",
    icon: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop",
  },
  {
    name: "Home & Kitchen",
    icon: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop",
  },
];

export default function GroceryStore() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [notification, setNotification] = useState("");

  const Allproducts = products;

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification("Added to cart!");
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showNotification("Removed from wishlist");
    } else {
      setWishlist((prev) => [...prev, productId]);
      showNotification("Added to wishlist!");
    }
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts =
    selectedCategory === "All"
      ? Allproducts
      : Allproducts?.filter((p) => p?.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />

      <CategorySlider />

      <FeaturedBanner />

      <DayDeal />

      {/* Trending Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp size={32} className="text-red-600" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Trending Products
                </h2>
                <p className="text-gray-600 mt-1">
                  Most popular items this week
                </p>
              </div>
            </div>
            <Link href="/shop">
              <button className="text-red-600 font-semibold hover:underline flex items-center gap-1">
                View All <ChevronRight size={18} />
              </button>
            </Link>
          </div>
          <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4">
            {Allproducts.slice(20, 32).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-4 relative group"
              >
                <Link
                  href={`/product/${product.name
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  key={product.id}
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
                    className={`absolute top-2 right-2 z-10 p-1.5 rounded-full ${
                      wishlist.includes(product.id)
                        ? "bg-red-600 text-white"
                        : "bg-white text-gray-400"
                    } hover:bg-red-600 hover:text-white transition shadow-md`}
                  >
                    <Heart
                      size={16}
                      fill={
                        wishlist.includes(product.id) ? "currentColor" : "none"
                      }
                    />
                  </button>

                  <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      height={200}
                      width={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    ></Image>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>

                  <Link
                    href={`product/${product.name
                      .toLowerCase()
                      .replace(/&/g, "and")
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    <h3 className="font-semibold text-sm mb-2 text-gray-900 line-clamp-2 h-10">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-red-600">
                        ৳{product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ৳{product.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <Package size={12} />
                      In Stock: {product.stock} units
                    </div>
                  </div>
                </Link>

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
      <FreshVegetablesBanner />

      {/* Best Sellers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-5 justify-between mb-8">
            <div className="flex items-center gap-3">
              <Award size={32} className="text-yellow-500" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Best Sellers
                </h2>
                <p className="text-gray-600 mt-1">
                  Top rated products by our customers
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-lg font-semibold ${selectedCategory === "All" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              >
                All
              </button>
              {["Vegetables", "Fruits", "Dairy"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-semibold ${selectedCategory === cat ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
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
                <Link
                  href={`/product/${product.name
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  key={product.id}
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
                    className={`absolute top-2 right-2 z-10 p-1.5 rounded-full ${
                      wishlist.includes(product.id)
                        ? "bg-red-600 text-white"
                        : "bg-white text-gray-400"
                    } hover:bg-red-600 hover:text-white transition shadow-md`}
                  >
                    <Heart
                      size={16}
                      fill={
                        wishlist.includes(product.id) ? "currentColor" : "none"
                      }
                    />
                  </button>

                  <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      height={200}
                      width={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    ></Image>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm mb-2 text-gray-900 line-clamp-2 h-10">
                    {product.name}
                  </h3>

                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-red-600">
                        ৳{product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ৳{product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
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
      <PromotionalBanners />

      <WeeklyOffer />

      {/* Customer Testimonials */}

      <Testimonials />

      <Newsletter />

      {/* Brand Logos */}
      <TrustedPartners />
    </div>
  );
}
