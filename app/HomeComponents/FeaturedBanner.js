import Image from 'next/image';
import React from 'react'

const featuredDeals = [
    { title: 'Super Sale', discount: '40%', image: 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=400&h=300&fit=crop', color: 'bg-red-500' },
    { title: 'Fresh Fruits', discount: '30%', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop', color: 'bg-orange-500' },
    { title: 'Dairy Products', discount: '25%', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop', color: 'bg-blue-500' },
];
export default function FeaturedBanner() {
    return (
        <div>
            {/* Featured Deals Banner */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                        {featuredDeals.map((deal, idx) => (
                            <div key={idx} className="relative rounded-2xl overflow-hidden h-64 cursor-pointer group">

                                <Image
                                    src={deal.image}
                                    alt={deal.title}
                                    height={200}
                                    width={400}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                >

                                </Image>
                                <div className={`absolute inset-0 ${deal.color} opacity-70 group-hover:opacity-80 transition`}></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <h3 className="text-3xl font-bold mb-2">{deal.title}</h3>
                                    <div className="text-5xl font-bold mb-4">{deal.discount} OFF</div>
                                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
