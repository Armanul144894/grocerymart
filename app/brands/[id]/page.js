"use client";
import React, { useState } from "react";
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
  Filter,
  Grid,
  List,
  Package,
  Award,
  TrendingUp,
  X,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock brand data
const brandData = {
  id: 1,
  name: "ACI Limited",
  logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
  banner:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&h=500&fit=crop",
  description:
    "ACI Limited is one of the leading conglomerates in Bangladesh with a multinational heritage. Since its establishment in 1968, ACI has been a pioneer in offering quality products.",
  founded: "1968",
  totalProducts: 245,
  categories: 8,
  rating: 4.8,
  reviews: 1250,
};

// Mock products
const brandProducts = [
  {
    id: 1,
    name: "ACI Pure Salt 1kg",
    price: 25,
    oldPrice: 30,
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1607541220892-f4b97c0f85a8?w=300&h=300&fit=crop",
    category: "Spices",
    rating: 4.7,
    stock: 150,
  },
  {
    id: 2,
    name: "ACI Nutrilife Milk Powder",
    price: 450,
    oldPrice: 500,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop",
    category: "Dairy",
    rating: 4.8,
    stock: 80,
  },
  {
    id: 3,
    name: "ACI Vermicelli",
    price: 65,
    oldPrice: 75,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop",
    category: "Noodles",
    rating: 4.6,
    stock: 120,
  },
  {
    id: 4,
    name: "ACI Sauce Tomato Ketchup",
    price: 85,
    oldPrice: 95,
    discount: 11,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=300&fit=crop",
    category: "Sauces",
    rating: 4.5,
    stock: 95,
  },
  {
    id: 5,
    name: "ACI Fun Cake",
    price: 120,
    oldPrice: 140,
    discount: 14,
    image:
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=300&h=300&fit=crop",
    category: "Snacks",
    rating: 4.7,
    stock: 60,
  },
  {
    id: 6,
    name: "ACI Savlon Handwash",
    price: 95,
    oldPrice: 110,
    discount: 14,
    image:
      "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=300&h=300&fit=crop",
    category: "Personal Care",
    rating: 4.9,
    stock: 200,
  },
  {
    id: 7,
    name: "ACI Pure Mustard Oil",
    price: 180,
    oldPrice: 200,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop",
    category: "Oils",
    rating: 4.8,
    stock: 75,
  },
  {
    id: 8,
    name: "ACI Aerosol Mosquito Spray",
    price: 140,
    oldPrice: 160,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1608889476518-738c9b1dcb8e?w=300&h=300&fit=crop",
    category: "Home Care",
    rating: 4.6,
    stock: 85,
  },
  {
    id: 9,
    name: "ACI Pure Turmeric Powder",
    price: 45,
    oldPrice: 55,
    discount: 18,
    image:
      "https://images.unsplash.com/photo-1596040033229-a0b3b29d1c27?w=300&h=300&fit=crop",
    category: "Spices",
    rating: 4.7,
    stock: 140,
  },
  {
    id: 10,
    name: "ACI Chili Powder",
    price: 40,
    oldPrice: 50,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1599909533540-d51eb5ab5698?w=300&h=300&fit=crop",
    category: "Spices",
    rating: 4.5,
    stock: 110,
  },
  {
    id: 11,
    name: "ACI Pasta",
    price: 75,
    oldPrice: 85,
    discount: 12,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop",
    category: "Noodles",
    rating: 4.6,
    stock: 90,
  },
  {
    id: 12,
    name: "ACI Liquid Hand Soap",
    price: 110,
    oldPrice: 125,
    discount: 12,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
    category: "Personal Care",
    rating: 4.8,
    stock: 130,
  },
  {
    id: 13,
    name: "ACI Pure Cumin Powder",
    price: 55,
    oldPrice: 65,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1596547609652-70d671f675f4?w=300&h=300&fit=crop",
    category: "Spices",
    rating: 4.6,
    stock: 100,
  },
  {
    id: 14,
    name: "ACI Tomato Sauce",
    price: 90,
    oldPrice: 105,
    discount: 14,
    image:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300&h=300&fit=crop",
    category: "Sauces",
    rating: 4.7,
    stock: 88,
  },
  {
    id: 15,
    name: "ACI Dishwashing Liquid",
    price: 125,
    oldPrice: 145,
    discount: 14,
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop",
    category: "Home Care",
    rating: 4.5,
    stock: 105,
  },
  {
    id: 16,
    name: "ACI Noodles",
    price: 35,
    oldPrice: 40,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop",
    category: "Noodles",
    rating: 4.6,
    stock: 180,
  },
];

const categories = [
  "All Products",
  "Spices",
  "Dairy",
  "Noodles",
  "Sauces",
  "Snacks",
  "Personal Care",
  "Oils",
  "Home Care",
];

export default function BrandShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Added to cart!");
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  // Filter products
  let filteredProducts = brandProducts.filter((product) => {
    const matchCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "discount") {
    filteredProducts.sort((a, b) => b.discount - a.discount);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <ChevronRight size={16} />
            <Link href="/brands" className="hover:text-red-600">
              Brands
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-semibold">
              {brandData.name}
            </span>
          </div>
        </div>
      </div>

      {/* Brand Banner */}
      <section className="relative h-[80vh] md:h-80 overflow-hidden">
        <img
          src={brandData.banner}
          alt={brandData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

        <div className="absolute inset-0 container mx-auto px-4 flex items-center">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
            <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
              <img
                src={brandData.logo}
                alt={brandData.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-white">
              <h1 className="text-5xl font-bold mb-3">{brandData.name}</h1>
              <p className="text-lg mb-4 max-w-2xl">{brandData.description}</p>

              <div className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold">
                    {brandData.totalProducts}
                  </div>
                  <div className="text-sm text-gray-300">Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {brandData.categories}
                  </div>
                  <div className="text-sm text-gray-300">Categories</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-2xl font-bold">
                    <Star
                      size={24}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {brandData.rating}
                  </div>
                  <div className="text-sm text-gray-300">
                    {brandData.reviews} Reviews
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    Since {brandData.founded}
                  </div>
                  <div className="text-sm text-gray-300">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          {/* Sidebar Filters */}
          {showFilters && (
            <div className="md:w-64 w-full flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Filter size={20} />
                    Filters
                  </h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 cursor-pointer hover:text-red-600"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="accent-red-600 cursor-pointer"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    Price Range
                  </h4>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full accent-red-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>৳{priceRange[0]}</span>
                    <span>৳{priceRange[1]}</span>
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory("All Products");
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
              <div className="flex items-center flex-wrap gap-6 justify-between">
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
                    Showing{" "}
                    <span className="font-bold text-gray-900">
                      {filteredProducts.length}
                    </span>{" "}
                    products
                  </span>
                </div>

                <div className="flex items-center gap-4">
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

                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${viewMode === "grid"
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-600"
                        }`}
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${viewMode === "list"
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-600"
                        }`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {viewMode === "grid" ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-4 relative group"
                  >

                    {product.discount && (
                      <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                        -{product.discount}%
                      </div>
                    )}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-2 right-2 z-10 p-1.5 rounded-full ${wishlist.includes(product.id)
                        ? "bg-red-600 text-white"
                        : "bg-white text-gray-400"
                        } hover:bg-red-600 hover:text-white transition shadow-md`}
                    >
                      <Heart
                        size={16}
                        fill={
                          wishlist.includes(product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                    <Link
                      href={`/product/${product.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
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

                      <h3 className="font-semibold text-sm mb-2 text-gray-900 line-clamp-2 h-10 cursor-pointer hover:text-red-600">
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
                        <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                          <Package size={12} />
                          In Stock: {product.stock}
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
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 flex flex-wrap lg:flex-nowrap mb-5 gap-6">
                    <Link
                      href={`/product/${product.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <div className="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 relative">
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
                    </Link>
                    <div className="flex-1">
                      <Link

                        href={`/product/${product.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <h3 className="font-bold text-xl mb-2 text-gray-900 cursor-pointer hover:text-red-600">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Category: {product.category}
                        </p>
                      </Link>
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                        <span className="text-sm text-gray-600">
                          ({product.rating})
                        </span>
                      </div>

                      <div className="flex flex-wrap lg:flex-nowrap gap-5 items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl font-bold text-red-600">
                              ৳{product.price}
                            </span>
                            {product.oldPrice && (
                              <span className="text-lg text-gray-400 line-through">
                                ৳{product.oldPrice}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-green-600">
                            In Stock: {product.stock} units
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className={`p-3 rounded-lg ${wishlist.includes(product.id)
                              ? "bg-red-600 text-white"
                              : "bg-gray-200 text-gray-600"
                              } hover:bg-red-600 hover:text-white transition`}
                          >
                            <Heart
                              size={20}
                              fill={
                                wishlist.includes(product.id)
                                  ? "currentColor"
                                  : "none"
                              }
                            />
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
