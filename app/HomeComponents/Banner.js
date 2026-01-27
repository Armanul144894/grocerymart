import React, { useEffect, useState } from 'react'

const bannerSlides = [
  'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1200&h=600&fit=crop',
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
    <div className="container mx-auto mt-5">
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        {bannerSlides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? 'w-10 h-3 bg-white'
                  : 'w-3 h-3 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
