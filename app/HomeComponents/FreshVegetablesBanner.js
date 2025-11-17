import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function FreshVegetablesBanner() {
    return (
        <div>
            <section className="py-16 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1600&h=400&fit=crop"
                    alt="Fresh Vegetables"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/80"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl text-white">
                        <div className="bg-yellow-400 text-gray-900 inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
                            100% Organic
                        </div>
                        <h2 className="text-5xl font-bold mb-4">Fresh Vegetables</h2>
                        <p className="text-xl mb-6 text-gray-100">Farm fresh produce delivered to your doorstep daily. All vegetables are pesticide-free and handpicked.</p>
                        <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                            Shop Vegetables <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
