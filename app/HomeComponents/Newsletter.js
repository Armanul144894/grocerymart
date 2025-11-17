import React from 'react'

export default function Newsletter() {
  return (
    <div>
              {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-5 justify-between">
            <div className="text-white max-w-xl">
              <h2 className="text-4xl font-bold mb-3">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-100">Get weekly updates on new products, exclusive deals, and special offers!</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 lg:py-4 py-2 rounded-lg w-56 outline-none text-gray-900"
              />
              <button
                onClick={() => showNotification('Thanks for subscribing!')}
                className="bg-white text-red-600 px-3 lg:py-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
