
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const bannerSlides = [
  {
    title: 'Fresh Vegetables & Fruits',
    subtitle: 'Up to 50% OFF',
    description: 'Farm fresh produce delivered daily',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&h=600&fit=crop',
    color: 'from-green-600 to-green-700'
  },
  {
    title: 'Organic Products',
    subtitle: 'Healthy Living',
    description: '100% Natural & Chemical Free',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop',
    color: 'from-orange-600 to-orange-700'
  },
  {
    title: 'Daily Essentials',
    subtitle: 'Best Prices Guaranteed',
    description: 'Save more on everyday items',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1200&h=600&fit=crop',
    color: 'from-red-600 to-red-700'
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[500px] overflow-hidden bg-gray-900">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`}></div>
            <div className="absolute inset-0 container mx-auto px-4 flex items-center">
              <div className="text-white max-w-2xl">
                <div className="bg-yellow-400 text-gray-900 inline-block px-4 py-1 rounded-full text-sm font-bold mb-4">
                  {slide.subtitle}
                </div>
                <h1 className="text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
                <p className="text-xl mb-6 text-gray-100">{slide.description}</p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                  Shop Now <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all ${index === currentSlide ? 'w-10 h-3 bg-white' : 'w-3 h-3 bg-white/50'
                } rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
