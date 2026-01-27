'use client'
import React, { useState } from 'react';
import { ShoppingCart, Search, User, Heart, Menu, ChevronDown, Phone, Mail, MapPin, ChevronRight, Star, Award, Users, Package, TrendingUp, Target, Eye, Shield, Truck, Clock, Sparkles, CheckCircle2, Leaf, Globe } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Header from '@/components/Header';
import Image from 'next/image';

// Team members data
const teamMembers = [
    { id: 1, name: 'Sarah Ahmed', role: 'CEO & Founder', image: 'https://i.pravatar.cc/300?img=1', bio: 'Visionary leader with 15+ years in retail' },
    { id: 2, name: 'John Smith', role: 'Chief Operations Officer', image: 'https://i.pravatar.cc/300?img=2', bio: 'Expert in supply chain management' },
    { id: 3, name: 'Fatima Khan', role: 'Head of Marketing', image: 'https://i.pravatar.cc/300?img=5', bio: 'Creative strategist and brand builder' },
    { id: 4, name: 'Ahmed Hassan', role: 'Technology Director', image: 'https://i.pravatar.cc/300?img=3', bio: 'Tech innovator and digital expert' },
    { id: 5, name: 'Lisa Chen', role: 'Customer Experience Lead', image: 'https://i.pravatar.cc/300?img=9', bio: 'Passionate about customer satisfaction' },
    { id: 6, name: 'Michael Rahman', role: 'Quality Assurance Manager', image: 'https://i.pravatar.cc/300?img=8', bio: 'Ensuring excellence in every product' },
];

// Milestones data
const milestones = [
    { year: '2018', title: 'Founded', description: 'GroceryMart was established with a vision to revolutionize grocery shopping' },
    { year: '2019', title: '50K Customers', description: 'Reached our first major milestone of 50,000 happy customers' },
    { year: '2020', title: 'Nationwide Expansion', description: 'Extended our services to all major cities across Bangladesh' },
    { year: '2022', title: '500+ Brands', description: 'Partnered with over 500 trusted brands and suppliers' },
    { year: '2024', title: '1M+ Orders', description: 'Successfully delivered over 1 million orders' },
    { year: '2025', title: 'Going Green', description: 'Launched eco-friendly packaging and sustainable practices' },
];

// Stats data
const stats = [
    { icon: <Users size={40} />, value: '500K+', label: 'Happy Customers', color: 'from-blue-500 to-blue-600' },
    { icon: <Package size={40} />, value: '10K+', label: 'Products', color: 'from-green-500 to-green-600' },
    { icon: <TrendingUp size={40} />, value: '1M+', label: 'Orders Delivered', color: 'from-purple-500 to-purple-600' },
    { icon: <Award size={40} />, value: '50+', label: 'Awards Won', color: 'from-orange-500 to-orange-600' },
];

// Core values data
const coreValues = [
    {
        icon: <Shield size={40} />,
        title: 'Quality First',
        description: 'We never compromise on product quality. Every item is carefully selected and verified.',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        icon: <Heart size={40} />,
        title: 'Customer Satisfaction',
        description: 'Your happiness is our success. We go the extra mile to ensure you have the best experience.',
        color: 'bg-red-50 text-red-600'
    },
    {
        icon: <Leaf size={40} />,
        title: 'Sustainability',
        description: 'We care about our planet. Using eco-friendly packaging and supporting local farmers.',
        color: 'bg-green-50 text-green-600'
    },
    {
        icon: <CheckCircle2 size={40} />,
        title: 'Trust & Transparency',
        description: 'Honest pricing, authentic products, and clear communication in everything we do.',
        color: 'bg-purple-50 text-purple-600'
    },
];

export default function Page() {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">Home</Link>
                        <ChevronRight size={16} />
                        <span className="text-gray-900 font-semibold">About Us</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&h=600&fit=crop"
                    alt="About Us"
                    height={200}
                    width={1600}
                    className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

                <div className="absolute inset-0 container mx-auto px-4 flex items-center">
                    <div className="text-white max-w-3xl">
                        <h1 className="text-6xl font-bold mb-4">About GroceryMart</h1>
                        <p className="text-2xl mb-6">
                            Your trusted partner for fresh, quality groceries delivered right to your doorstep
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                                <div className="text-3xl font-bold">7+</div>
                                <div className="text-sm">Years of Service</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                                <div className="text-3xl font-bold">500K+</div>
                                <div className="text-sm">Happy Customers</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                                <div className="text-3xl font-bold">10K+</div>
                                <div className="text-sm">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-red-100 text-red-600 inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
                                OUR STORY
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Bringing Fresh Groceries to Your Home Since 2018
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                GroceryMart was founded with a simple mission: to make grocery shopping easier, faster, and more convenient for everyone. We started as a small local store and have grown into Bangladesh leading online grocery platform.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Our journey began when our founders realized that busy families needed a better way to shop for fresh, quality groceries. Today, we serve over 500,000 customers across the country, delivering happiness one order at a time.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We partner with the best local farmers, trusted brands, and reliable suppliers to ensure you get only the finest products at the best prices.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Image src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&h=300&fit=crop"
                                alt="Fresh Produce"
                                className="rounded-2xl shadow-lg"
                                height={200}
                                width={1600}
                            />
                            <Image src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=400&h=300&fit=crop"
                                alt="Quality Products"
                                className="rounded-2xl shadow-lg mt-8"
                                height={200}
                                width={1600}
                            />

                            <Image src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop"
                                alt="Happy Customers"
                                className="rounded-2xl shadow-lg"
                                height={200}
                                width={1600}
                            />

                            <Image src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop"
                                alt="Fresh Vegetables"
                                className="rounded-2xl shadow-lg mt-8"
                                height={200}
                                width={1600}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center text-white">
                                <div className="flex justify-center mb-4">
                                    <div className={`w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center`}>
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-xl">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-600">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <Target size={32} className="text-red-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To revolutionize grocery shopping by providing a seamless, convenient, and reliable platform that connects customers with fresh, quality products from trusted sources. We strive to save our customers time while ensuring they get the best value for their money.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <Eye size={32} className="text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To become the most trusted and preferred online grocery platform in Bangladesh, known for exceptional quality, unmatched convenience, and outstanding customer service. We envision a future where every household has access to fresh, affordable groceries at their fingertips.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            These principles guide everything we do and shape our commitment to you
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border border-gray-100 hover:transform hover:-translate-y-2">
                                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-4`}>
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-gray-600 text-lg">Milestones that shaped our success</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-200 -translate-x-1/2"></div>

                        {milestones.map((milestone, index) => (
                            <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <div className="text-red-600 text-3xl font-bold mb-2">{milestone.year}</div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                    <Sparkles size={20} className="text-white" />
                                </div>
                                <div className="w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Passionate individuals dedicated to bringing you the best grocery shopping experience
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group">
                                <div className="aspect-square overflow-hidden bg-gray-100">
                                    <Image src={member.image}
                                        alt={member.name}
                                        height={80}
                                        width={80}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 text-white">
                        <h2 className="text-4xl font-bold mb-4">Why Choose GroceryMart?</h2>
                        <p className="text-xl">We are committed to making your life easier</p>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        {[
                            { icon: <Truck size={40} />, title: 'Fast Delivery', desc: 'Same-day delivery available' },
                            { icon: <Shield size={40} />, title: 'Quality Assured', desc: '100% authentic products' },
                            { icon: <Clock size={40} />, title: '24/7 Support', desc: 'Always here to help' },
                            { icon: <Globe size={40} />, title: 'Wide Coverage', desc: 'Serving all major cities' },
                        ].map((feature, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-white/20 transition">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                <p className="text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Join thousands of happy customers who trust GroceryMart for their daily needs
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/shop" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                                Start Shopping
                            </Link>
                            <Link href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}