'use client'
import { Clock, Zap, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const testimonials = [
    { name: 'Sarah Ahmed', comment: 'Great quality testimonials and fast delivery!', rating: 5, image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'John Smith', comment: 'Best online grocery store in Bangladesh', rating: 5, image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Fatima Khan', comment: 'Fresh vegetables always arrive on time', rating: 5, image: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Sarah Ahmed', comment: 'Great quality testimonials and fast delivery!', rating: 5, image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'John Smith', comment: 'Best online grocery store in Bangladesh', rating: 5, image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Fatima Khan', comment: 'Fresh vegetables always arrive on time', rating: 5, image: 'https://i.pravatar.cc/150?img=5' },
    { name: 'John Smith', comment: 'Best online grocery store in Bangladesh', rating: 5, image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Fatima Khan', comment: 'Fresh vegetables always arrive on time', rating: 5, image: 'https://i.pravatar.cc/150?img=5' },
];
export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setItemsPerView(3);
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

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

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
        <div className="">
            {/* Weekly Offers */}
            <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold">What Our Customers Say</h3>
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                aria-label="Previous client"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentIndex >= maxIndex}
                                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                aria-label="Next client"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="relative">

                        {/* Slider Container */}

                        <div className="relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                {testimonials.map((testimonial, idx) => (

                                    <div key={idx} className='flex-shrink-0 px-3'>
                                        <div className="bg-white rounded-xl p-4 hover:shadow-xl transition group h-full">
                                            <div className="flex items-center gap-4 mb-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                    <div className="flex gap-1 mt-1">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 italic">{testimonial.comment}</p>
                                        </div>
                                    </div>
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