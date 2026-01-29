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
  TrendingUp,
  Award,
  Sparkles,
  Package,
} from "lucide-react";
import Link from "next/link";
// Mock brands data with real images
const featuredBrands = [
  {
    id: 1,
    name: "ACI Limited",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    products: 245,
    category: "Food & Beverages",
    rating: 4.8,
    banner:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=400&fit=crop",
    color: "from-blue-500 to-blue-600",
    description: "Leading manufacturer of quality food products",
  },
  {
    id: 2,
    name: "PRAN Foods",
    logo: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=200&h=200&fit=crop",
    products: 320,
    category: "Food & Snacks",
    rating: 4.7,
    banner:
      "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=1200&h=400&fit=crop",
    color: "from-green-500 to-green-600",
    description: "Trusted name in food and beverages",
  },
  {
    id: 3,
    name: "Arla Dairy",
    logo: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop",
    products: 85,
    category: "Dairy Products",
    rating: 4.9,
    banner:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1200&h=400&fit=crop",
    color: "from-purple-500 to-purple-600",
    description: "Premium dairy products for your family",
  },
  {
    id: 4,
    name: "Nestle",
    logo: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=200&h=200&fit=crop",
    products: 180,
    category: "Food & Beverages",
    rating: 4.8,
    banner:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=1200&h=400&fit=crop",
    color: "from-red-500 to-red-600",
    description: "Good food, good life",
  },
  {
    id: 5,
    name: "Radhuni",
    logo: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=200&h=200&fit=crop",
    products: 95,
    category: "Spices & Seasoning",
    rating: 4.6,
    banner:
      "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=1200&h=400&fit=crop",
    color: "from-orange-500 to-orange-600",
    description: "Authentic spices and masalas",
  },
  {
    id: 6,
    name: "Fresh Foods",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop",
    products: 150,
    category: "Dairy & Beverages",
    rating: 4.7,
    banner:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1200&h=400&fit=crop",
    color: "from-teal-500 to-teal-600",
    description: "Fresh dairy products daily",
  },
];

const allBrands = [
  {
    id: 1,
    name: "ACI Limited",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    products: 245,
    category: "Food & Beverages",
  },
  {
    id: 2,
    name: "PRAN Foods",
    logo: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=200&h=200&fit=crop",
    products: 320,
    category: "Food & Snacks",
  },
  {
    id: 3,
    name: "Arla Dairy",
    logo: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop",
    products: 85,
    category: "Dairy Products",
  },
  {
    id: 4,
    name: "Nestle",
    logo: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=200&h=200&fit=crop",
    products: 180,
    category: "Food & Beverages",
  },
  {
    id: 5,
    name: "Radhuni",
    logo: "https://images.unsplash.com/photo-1596040033229-a0b3b29d1c27?w=200&h=200&fit=crop",
    products: 95,
    category: "Spices",
  },
  {
    id: 6,
    name: "Fresh Foods",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop",
    products: 150,
    category: "Dairy",
  },
  {
    id: 7,
    name: "Coca-Cola",
    logo: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&h=200&fit=crop",
    products: 45,
    category: "Beverages",
  },
  {
    id: 8,
    name: "Unilever",
    logo: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop",
    products: 210,
    category: "Personal Care",
  },
  {
    id: 9,
    name: "PepsiCo",
    logo: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200&h=200&fit=crop",
    products: 68,
    category: "Beverages",
  },
  {
    id: 10,
    name: "Ahmed Food",
    logo: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=200&h=200&fit=crop",
    products: 125,
    category: "Food",
  },
  {
    id: 11,
    name: "Meghna Oil",
    logo: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop",
    products: 35,
    category: "Cooking Oil",
  },
  {
    id: 12,
    name: "Olympic Biscuits",
    logo: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop",
    products: 72,
    category: "Biscuits",
  },
  {
    id: 13,
    name: "BD Food",
    logo: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&h=200&fit=crop",
    products: 88,
    category: "Food Items",
  },
  {
    id: 14,
    name: "Fresh Food Ltd",
    logo: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=200&h=200&fit=crop",
    products: 156,
    category: "Fresh Foods",
  },
  {
    id: 15,
    name: "Dabur",
    logo: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200&h=200&fit=crop",
    products: 92,
    category: "Health & Wellness",
  },
  {
    id: 16,
    name: "Igloo Ice Cream",
    logo: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200&h=200&fit=crop",
    products: 48,
    category: "Ice Cream",
  },
  {
    id: 17,
    name: "Bombay Sweets",
    logo: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=200&h=200&fit=crop",
    products: 67,
    category: "Sweets",
  },
  {
    id: 18,
    name: "Kazi Farms",
    logo: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=200&fit=crop",
    products: 54,
    category: "Meat Products",
  },
  {
    id: 19,
    name: "Danish Bakery",
    logo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop",
    products: 43,
    category: "Bakery",
  },
  {
    id: 20,
    name: "Lifebuoy",
    logo: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=200&h=200&fit=crop",
    products: 28,
    category: "Personal Care",
  },
  {
    id: 21,
    name: "Lux",
    logo: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=200&h=200&fit=crop",
    products: 32,
    category: "Personal Care",
  },
  {
    id: 22,
    name: "Dove",
    logo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
    products: 41,
    category: "Personal Care",
  },
  {
    id: 23,
    name: "Maggi",
    logo: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=200&fit=crop",
    products: 25,
    category: "Food",
  },
  {
    id: 24,
    name: "Kitkat",
    logo: "https://images.unsplash.com/photo-1606312619070-d48b4863ad6d?w=200&h=200&fit=crop",
    products: 18,
    category: "Snacks",
  },
];

const brandCategories = [
  "All Brands",
  "Food & Beverages",
  "Dairy Products",
  "Snacks",
  "Personal Care",
  "Spices",
  "Cooking Oil",
  "Bakery",
];

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Brands");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const filteredBrands = allBrands.filter((brand) => {
    const matchCategory =
      selectedCategory === "All Brands" ||
      brand.category.includes(selectedCategory);
    const matchSearch = brand.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Group brands alphabetically
  const groupedBrands = filteredBrands.reduce((acc, brand) => {
    const firstLetter = brand.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(brand);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-semibold">Our Brands</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Discover Top Brands</h1>
          <p className="text-xl mb-6">
            Shop from the most trusted and loved brands
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold">{allBrands.length}+</div>
              <div className="text-sm">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">2500+</div>
              <div className="text-sm">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm">Authentic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Sparkles size={32} className="text-yellow-500" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Featured Brands
                </h2>
                <p className="text-gray-600 mt-1">
                  Premium brands with amazing products
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {featuredBrands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64">
                  <img
                    src={brand.banner}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${brand.color} opacity-60 group-hover:opacity-70 transition`}
                  ></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 bg-white rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {brand.products} Products
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                    <p className="text-sm mb-3">{brand.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="font-semibold">{brand.rating}</span>
                      </div>
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                        Shop Now →
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {brandCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    selectedCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Brands - Alphabetical */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              All Brands A-Z
            </h2>
            <p className="text-gray-600">
              Browse {filteredBrands.length} brands alphabetically
            </p>
          </div>

          {Object.keys(groupedBrands)
            .sort()
            .map((letter) => (
              <div key={letter} className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                    {letter}
                  </div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
                  {groupedBrands[letter].map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/brands/${brand.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-red-600 hover:shadow-lg transition-all group"
                    >
                      <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-bold text-sm text-gray-900 mb-1 group-hover:text-red-600 transition">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {brand.category}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Package size={12} />
                        <span>{brand.products} Products</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
