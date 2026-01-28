import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RelatedProductsSlider({ relatedProducts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);


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

  const maxIndex = Math.max(0, relatedProducts.length - itemsPerView);

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

  return (
    <div className=" bg-gray-50">
      <div className="">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Related Products</h3>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                aria-label="Previous products"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                aria-label="Next products"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {relatedProducts.map((product) => (
                <Link href={`/product/${product.name
                  .toLowerCase()
                  .replace(/&/g, 'and')
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '')}`} 
                  key={product.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}>
                  <div


                  >
                    <div className="border rounded-xl p-4 hover:shadow-xl transition group h-full">
                      {product.discount && (
                        <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 w-fit">
                          -{product.discount}%
                        </div>
                      )}
                      <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                        <Image src={product.images[0]}
                          alt={product.name}
                          height={200}
                          width={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h4>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-red-600">৳{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">৳{product.oldPrice}</span>
                        )}
                      </div>
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-8 bg-red-600' : 'w-2 bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}