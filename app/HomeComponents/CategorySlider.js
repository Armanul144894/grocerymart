"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import products from "@/data/products";

/* Category → Image mapping */
const categoryImageMap = {
  Vegetables:
    "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=300&fit=crop",

  Fruits:
    "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop",

  Dairy:
    "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop",

  Grains:
    "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=300&fit=crop",

  Bakery:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",

  Meat:
    "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop",

  Beverages:
    "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=400&h=300&fit=crop",

  Snacks:
    "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop",

  "Cooking & Spices":
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
};

const getCategoryImage = (category) =>
  categoryImageMap[category] ||
  "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=400&h=300&fit=crop";

export default function CategorySlider() {
  const allProducts = products;

  /* ✅ FIXED: memo + unique categories */
  const categories = useMemo(() => {
    return [...new Set(allProducts.map((p) => p.category))];
  }, [allProducts]);

  return (
    <div className="relative container mx-auto px-4 py-6">
      {/* Custom navigation */}
      <button
        className="cat-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100"
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        className="cat-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100"
        aria-label="Next"
      >
        <ChevronRight size={18} />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".cat-prev",
          nextEl: ".cat-next",
        }}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category}>
            <Link
              href={`/category/${category
                .toLowerCase()
                .replace(/&/g, "and")
                .replace(/\s+/g, "-")}`}
            >
              <div className="group bg-white rounded-xl shadow hover:shadow-lg transition p-3 cursor-pointer">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={getCategoryImage(category)}
                    alt={category}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="mt-3 flex justify-center">
                  <span className="bg-red-700 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    {category}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
