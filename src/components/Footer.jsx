import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
        <div className="mb-4">
            <img 
              src={assets.logo_dark}
              alt="Estate Logo" 
              className="h-10" 
            />
          </div>
          <p className="text-sm text-gray-400">
          Welcome to Estate, your trusted real estate partner. With years of experience, 
              we offer personalized services tailored to your unique needs. Whether you were buying, selling, or renting, our
              dedicated team ensures a smooth and transparent process.
          </p>
        </div>
        
        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="#Header" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#About" className="text-gray-400 hover:text-white">About us</a></li>
            <li><a href="#Projects" className="text-gray-400 hover:text-white">Projects</a></li>
            <li><a href="#Testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
            <li><a href="#Contact" className="text-gray-400 hover:text-white">Contact Us</a></li>

          </ul>
        </div>
        
        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h2>
          <p className="text-sm text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 rounded-l bg-gray-700 text-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="px-4 py-2 bg-blue-500 rounded-r text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-400">Copyright 2024 © Avindu21894. All Rights Reserved.</p>
      </div>
    </footer>
  )
}


