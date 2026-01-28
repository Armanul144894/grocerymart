'use client'
import React, { useState } from 'react';
import { ShoppingCart, Search, User, Heart, Menu, Phone, Mail, MapPin, ChevronRight, CreditCard, Truck, Home, Building2, Check, Lock, Tag, Gift, AlertCircle, Plus, Minus, X } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock cart data
const initialCartItems = [
    {
        id: 1,
        name: 'Fresh Tomatoes',
        price: 45,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop',
        weight: '1 kg'
    },
    {
        id: 2,
        name: 'Fresh Milk 1L',
        price: 65,
        quantity: 3,
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop',
        weight: '1 L'
    },
    {
        id: 3,
        name: 'Brown Bread',
        price: 35,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop',
        weight: '400 g'
    },
    {
        id: 4,
        name: 'Farm Eggs (12pcs)',
        price: 120,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=200&fit=crop',
        weight: '12 pcs'
    },
];

export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [deliveryMethod, setDeliveryMethod] = useState('standard');
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [addressType, setAddressType] = useState('home');
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);
    const [promoDiscount, setPromoDiscount] = useState(0);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: 'Dhaka',
        area: '',
        zipCode: '',
        instructions: '',
    });

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const applyPromoCode = () => {
        if (promoCode === 'SAVE10') {
            setPromoApplied(true);
            setPromoDiscount(10);
        } else if (promoCode === 'FIRST20') {
            setPromoApplied(true);
            setPromoDiscount(20);
        } else {
            alert('Invalid promo code');
        }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = deliveryMethod === 'express' ? 60 : deliveryMethod === 'scheduled' ? 40 : subtotal >= 500 ? 0 : 50;
    const discount = promoApplied ? (subtotal * promoDiscount / 100) : 0;
    const total = subtotal + deliveryFee - discount;

    const handlePlaceOrder = () => {
        if (!formData.fullName || !formData.phone || !formData.address) {
            alert('Please fill in all required fields');
            return;
        }
        alert('Order placed successfully! 🎉');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">Home</Link>
                        <ChevronRight size={16} />
                        <Link href="/cart" className="hover:text-red-600">Cart</Link>
                        <ChevronRight size={16} />
                        <span className="text-gray-900 font-semibold">Checkout</span>
                    </div>
                </div>
            </div>

            {/* Checkout Steps */}
            <div className="bg-white border-b py-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                                <Check size={20} />
                            </div>
                            <span className="ml-2 font-semibold text-gray-900">Cart</span>
                        </div>
                        <div className="w-20 h-1 bg-red-600"></div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                                2
                            </div>
                            <span className="ml-2 font-semibold text-gray-900">Information</span>
                        </div>
                        <div className="w-20 h-1 bg-gray-300"></div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                                3
                            </div>
                            <span className="ml-2 font-semibold text-gray-500">Payment</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
                    {/* Left Column - Forms */}
                    <div className="xl:col-span-2 space-y-6">
                        {/* Delivery Information */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                    <Truck size={20} className="text-red-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Delivery Information</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+880 XXX-XXXXXX"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Delivery Address <span className="text-red-600">*</span>
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="House/Flat No, Street, Area"
                                    rows="3"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                                    <select
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                    >
                                        <option>Dhaka</option>
                                        <option>Chittagong</option>
                                        <option>Sylhet</option>
                                        <option>Rajshahi</option>
                                        <option>Khulna</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Area</label>
                                    <input
                                        type="text"
                                        name="area"
                                        value={formData.area}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Gulshan, Banani"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        placeholder="1212"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Address Type</label>
                                <div className="grid grid-cols-3 gap-3">
                                    <button
                                        onClick={() => setAddressType('home')}
                                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 font-semibold transition ${addressType === 'home'
                                                ? 'border-red-600 bg-red-50 text-red-600'
                                                : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                            }`}
                                    >
                                        <Home size={20} />
                                        Home
                                    </button>
                                    <button
                                        onClick={() => setAddressType('office')}
                                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 font-semibold transition ${addressType === 'office'
                                                ? 'border-red-600 bg-red-50 text-red-600'
                                                : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                            }`}
                                    >
                                        <Building2 size={20} />
                                        Office
                                    </button>
                                    <button
                                        onClick={() => setAddressType('other')}
                                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 font-semibold transition ${addressType === 'other'
                                                ? 'border-red-600 bg-red-50 text-red-600'
                                                : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                            }`}
                                    >
                                        <MapPin size={20} />
                                        Other
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Delivery Instructions (Optional)
                                </label>
                                <textarea
                                    name="instructions"
                                    value={formData.instructions}
                                    onChange={handleInputChange}
                                    placeholder="Any specific instructions for delivery..."
                                    rows="2"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Delivery Method */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Method</h2>

                            <div className="space-y-3">
                                <label className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition ${deliveryMethod === 'standard'
                                        ? 'border-red-600 bg-red-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            checked={deliveryMethod === 'standard'}
                                            onChange={() => setDeliveryMethod('standard')}
                                            className="w-5 h-5 text-red-600"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">Standard Delivery</div>
                                            <div className="text-sm text-gray-600">2-3 Business Days</div>
                                        </div>
                                    </div>
                                    <div className="font-bold text-green-600">
                                        {subtotal >= 500 ? 'FREE' : '৳50'}
                                    </div>
                                </label>

                                <label className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition ${deliveryMethod === 'express'
                                        ? 'border-red-600 bg-red-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            checked={deliveryMethod === 'express'}
                                            onChange={() => setDeliveryMethod('express')}
                                            className="w-5 h-5 text-red-600"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">Express Delivery</div>
                                            <div className="text-sm text-gray-600">Same Day Delivery</div>
                                        </div>
                                    </div>
                                    <div className="font-bold text-gray-900">৳60</div>
                                </label>

                                <label className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition ${deliveryMethod === 'scheduled'
                                        ? 'border-red-600 bg-red-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="delivery"
                                            checked={deliveryMethod === 'scheduled'}
                                            onChange={() => setDeliveryMethod('scheduled')}
                                            className="w-5 h-5 text-red-600"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">Scheduled Delivery</div>
                                            <div className="text-sm text-gray-600">Choose your time slot</div>
                                        </div>
                                    </div>
                                    <div className="font-bold text-gray-900">৳40</div>
                                </label>
                            </div>

                            {subtotal < 500 && (
                                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                                    <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-yellow-800">
                                        Add ৳{500 - subtotal} more to get <strong>FREE standard delivery</strong>!
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CreditCard size={20} className="text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
                            </div>

                            <div className="space-y-3">
                                <label className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'cod'
                                        ? 'border-red-600 bg-red-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === 'cod'}
                                            onChange={() => setPaymentMethod('cod')}
                                            className="w-5 h-5 text-red-600"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">Cash on Delivery</div>
                                            <div className="text-sm text-gray-600">Pay when you receive</div>
                                        </div>
                                    </div>
                                    <div className="text-2xl">💵</div>
                                </label>

                                <label className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'card'
                                        ? 'border-red-600 bg-red-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === 'card'}
                                            onChange={() => setPaymentMethod('card')}
                                            className="w-5 h-5 text-red-600"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">Credit/Debit Card</div>
                                            <div className="text-sm text-gray-600">Visa, Mastercard, Amex</div>
                                        </div>
                                    </div>
                                    <div className="text-2xl">💳</div>
                                </label>

                                <label className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'bkash'
                                        ? 'border-red-600 bg-red-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === 'bkash'}
                                            onChange={() => setPaymentMethod('bkash')}
                                            className="w-5 h-5 text-red-600"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">bKash</div>
                                            <div className="text-sm text-gray-600">Mobile payment</div>
                                        </div>
                                    </div>
                                    <div className="text-2xl">📱</div>
                                </label>

                                <label className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'nagad'
                                        ? 'border-red-600 bg-red-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === 'nagad'}
                                            onChange={() => setPaymentMethod('nagad')}
                                            className="w-5 h-5 text-red-600"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">Nagad</div>
                                            <div className="text-sm text-gray-600">Mobile payment</div>
                                        </div>
                                    </div>
                                    <div className="text-2xl">📲</div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="xl:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            {/* Cart Items */}
                            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex gap-3 pb-4 border-b">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-sm text-gray-900 mb-1">{item.name}</h3>
                                            <p className="text-xs text-gray-500 mb-2">{item.weight}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="font-semibold text-sm">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-red-600">৳{item.price * item.quantity}</span>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-gray-400 hover:text-red-600"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Promo Code */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Promo Code
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        placeholder="Enter code"
                                        disabled={promoApplied}
                                        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 outline-none"
                                    />
                                    <button
                                        onClick={applyPromoCode}
                                        disabled={promoApplied}
                                        className={`px-6 py-2 rounded-lg font-semibold transition ${promoApplied
                                                ? 'bg-green-600 text-white'
                                                : 'bg-red-600 text-white hover:bg-red-700'
                                            }`}
                                    >
                                        {promoApplied ? <Check size={20} /> : 'Apply'}
                                    </button>
                                </div>
                                {promoApplied && (
                                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                                        <Gift size={14} />
                                        {promoDiscount}% discount applied!
                                    </p>
                                )}
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 mb-6 pb-6 border-b">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span className="font-semibold">৳{subtotal}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Delivery Fee</span>
                                    <span className={`font-semibold ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
                                        {deliveryFee === 0 ? 'FREE' : `৳${deliveryFee}`}
                                    </span>
                                </div>
                                {promoApplied && (
                                    <div className="flex justify-between text-green-600">
                                        <span>Discount ({promoDiscount}%)</span>
                                        <span className="font-semibold">-৳{discount}</span>
                                    </div>
                                )}
                            </div>

                            {/* Total */}
                            <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                                <span>Total</span>
                                <span className="text-red-600">৳{total}</span>
                            </div>

                            {/* Place Order Button */}
                            <button
                                onClick={handlePlaceOrder}
                                className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
                            >
                                <Lock size={20} />
                                Place Order
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                By placing this order, you agree to our Terms & Conditions
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}