import React from 'react';
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-16">
      {/* Newsletter Box */}
      <div className="bg-gray-100 rounded-2xl max-w-4xl mx-auto px-10 py-12 text-center shadow-xl hover:shadow-2xl transition-shadow duration-500">
        <h2 className="text-2xl md:text-3xl font-semibold uppercase mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Stay updated with our latest news, events, and insights by subscribing to our newsletter.
        </p>

        {/* Email Input */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          />
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Social Icons + Copyright */}
      <div className="mt-16 text-center border-t border-gray-200 py-8">
        <div className="flex justify-center gap-6 mb-4 text-2xl text-gray-500">
          <a href="#" className="hover:text-black hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-black hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-black hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <FaXTwitter />
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2024 ANVESHAN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
