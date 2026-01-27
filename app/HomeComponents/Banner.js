import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const bannerSlides = [
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=600&fit=crop', // Sale banner
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=600&fit=crop', // Shopping bags
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop', // Store display
  'https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=1200&h=600&fit=crop', // Modern retail
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
            <Image
            src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full"
              height={400}
              width={1600}
              >

            </Image>
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
