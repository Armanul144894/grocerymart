import Image from "next/image";
import React, { useEffect, useState } from "react";

const bannerSlides = [
  "/images/banner-2.jpg", // Sale banner
  "/images/banner-3.jpg",
  "/images/banner-4.jpg", // Shopping bags
  "/images/banner-2.jpg", // Store display
  "/images/banner-3.jpg", // Modern retail
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
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full"
              height={400}
              width={1600}
            ></Image>
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
                  ? "w-10 h-3 bg-white"
                  : "w-3 h-3 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
