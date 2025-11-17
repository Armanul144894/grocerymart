import { Facebook, Instagram, Mail, MapPin, Phone, Twitch, Twitter, X, Youtube } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

const socials = [
  { name: 'facebook', icon: Facebook},
  { name: 'twitter', icon: Twitter  },
  { name: 'instagram', icon: Instagram  },
  { name: 'youtube', icon: Youtube  },
];

export default function Footer() {
  return (
   
      <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid xl:grid-cols-5 md:grid-cols-2 gap-8 mb-12">
            <div className="xl:col-span-2">
              <div className="text-3xl font-bold text-red-600 mb-4">
                🛒 GROCERY<span className="text-green-600">MART</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted online grocery store delivering fresh, quality products right to your doorstep. Shop from thousands of products with the best prices guaranteed.
              </p>
              <div className="flex gap-4">
                {socials.map((social, idx) => (
                  <button key={idx} className="w-10 h-10 bg-gray-800 rounded-full hover:bg-red-600 transition flex items-center justify-center">
                     <social.icon size={18} className="mt-0.5 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {['About Us', 'Shop', 'Offers', 'Blog', 'Contact Us', 'Track Order'].map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-3 text-sm">
                {['Vegetables', 'Fruits', 'Dairy Products', 'Meat & Fish', 'Beverages', 'Snacks'].map((cat) => (
                  <li key={cat}>
                    <Link href="#" className="text-gray-400 hover:text-white transition">{cat}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>House 123, Road 12, Gulshan-2, Dhaka 1212, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone size={18} />
                  <span>+880 123-456-789</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} />
                  <span>info@grocerymart.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-400">
                © 2025 GroceryMart. All rights reserved. | Designed with ❤️ in Bangladesh
              </p>
              <div className="flex gap-6 text-gray-400">
                <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                <Link href="#" className="hover:text-white transition">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

  )
}
