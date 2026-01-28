'use client'
import products from '@/data/products';
import { Clock, Zap, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



export default function WeeklyOffer() {
  const [cart, setCart] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const Allproducts = products;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, Allproducts.slice(20, 32).length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="">
      {/* Weekly Offers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Clock size={32} className="text-orange-500" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Weekly Special Offers</h2>
                <p className="text-gray-600 mt-1">Limited time deals you cant miss</p>
              </div>
            </div>
            {cart.length > 0 && (
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-semibold">
                Cart: {cart.reduce((sum, item) => sum + item.quantity, 0)} items
              </div>
            )}
          </div>

          <div className="relative px-12">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous products"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next products"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>

            {/* Slider Container */}

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {Allproducts.slice(20, 32).map((product) => (
                  <Link href={`/product/${product.name
                    .toLowerCase()
                    .replace(/&/g, 'and')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '')}`}
                    key={product.id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / itemsPerView}%` }}>
                    <div >
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200 hover:border-red-400 transition hover:shadow-xl h-full">
                        <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 w-fit flex items-center gap-1">
                          <Zap size={14} />
                          SPECIAL OFFER
                        </div>
                        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-white">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            height={200}
                            width={400}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"

                          />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-red-600">৳{product.price}</span>
                            <span className="text-sm text-gray-400 line-through ml-2">৳{product.oldPrice}</span>
                          </div>
                          <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                            -{product.discount}%
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(product)}
                          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-8 bg-red-600' : 'w-2 bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}