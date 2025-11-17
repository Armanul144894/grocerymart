import React from 'react'

export default function PromotionalBanners() {
    return (
        <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="relative rounded-2xl overflow-hidden h-80 cursor-pointer group">
                        <img
                            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=400&fit=crop"
                            alt="Organic Foods"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-600/60"></div>
                        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
                            <div className="bg-yellow-400 text-gray-900 inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                                NEW ARRIVAL
                            </div>
                            <h3 className="text-4xl font-bold mb-3">Organic Foods</h3>
                            <p className="text-lg mb-4">100% Chemical Free Products</p>
                            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition w-fit">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden h-80 cursor-pointer group">
                        <img
                            src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=800&h=400&fit=crop"
                            alt="Dairy Products"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
                        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
                            <div className="bg-red-500 text-white inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                                SAVE 30%
                            </div>
                            <h3 className="text-4xl font-bold mb-3">Dairy Products</h3>
                            <p className="text-lg mb-4">Fresh milk, cheese & more</p>
                            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition w-fit">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
