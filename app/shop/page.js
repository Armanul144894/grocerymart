"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Filter,
  Grid,
  List,
  Star,
  X,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import products from "@/data/products";
import Image from "next/image";

// Mock products data
const allProducts = products;

const categories = [
  "All Products",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Bakery",
  "Meat",
  "Beverages",
  "Snacks",
  "Grains",
  "Cooking",
  "Organic",
];
const brands = [
  "All Brands",
  "FreshFarm",
  "DairyFresh",
  "FruitCo",
  "Premium",
  "BakeHouse",
  "MeatMart",
  "TeaTime",
  "Snacky",
  "JuicePlus",
  "PureHoney",
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  // Filter products
  let filteredProducts = allProducts.filter((product) => {
    const matchCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    const matchBrand =
      selectedBrand === "All Brands" || product.brand === selectedBrand;
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchBrand && matchPrice && matchSearch;
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

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
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
                          className="w-4 h-4 accent-red-600 cursor-pointer"
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

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">Brands</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center gap-2 cursor-pointer hover:text-red-600"
                      >
                        <input
                          type="radio"
                          name="brand"
                          checked={selectedBrand === brand}
                          onChange={() => setSelectedBrand(brand)}
                          className="accent-red-600 cursor-pointer"
                        />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory("All Products");
                    setSelectedBrand("All Brands");
                    setPriceRange([0, 500]);
                  }}
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold text-sm"
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
                    Showing{" "}
                    <span className="font-bold text-gray-900">
                      {filteredProducts.length}
                    </span>{" "}
                    products
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

            {/* Products Grid/List */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria
                </p>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-4 relative group"
                  >
                    <Link
                      href={`/product/${product.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      passHref
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

                      <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
                       
                        <Image src={product.images[0]}
                          alt={product.name}
                          height={200}
                          width={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                          </Image>
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

                      <h3 className="font-semibold text-sm mb-1 text-gray-900 line-clamp-2 h-10 cursor-pointer hover:text-red-600">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {product.brand}
                      </p>

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
                        <div className="text-xs text-green-600 mt-1">
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

                  <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 flex flex-wrap lg:flex-nowrap gap-6 mb-5">
                    <Link
                      key={product.id}
                      href={`/product/${product.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      passHref
                    >
                      <div className=" w-full h-full md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 relative">
                        {product.discount && (
                          <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                            -{product.discount}%
                          </div>
                        )}
                        <Image
                        src={product.images[0]}
                          alt={product.name}
                          height={200}
                          width={400}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                          />
                      </div>
                    </Link>

                    <div className="flex-1">
                      <Link
                        key={product.id}
                        href={`/product/${product.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        passHref
                      >
                        <h3 className="font-bold text-xl mb-2 text-gray-900 cursor-pointer hover:text-red-600">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Brand: {product.brand}
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

                      <p className="text-gray-600 text-sm mb-4">
                        High quality {product.category.toLowerCase()} product.
                        Fresh and organic, delivered right to your doorstep.
                      </p>

                      <div className="flex items-center justify-between">
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
      <Footer />
    </div>
  );
}
