// Footer.jsx

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import 'animate.css';

const Footer = () => {
  return (
    <footer className="bg-terracotta-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 animate__animated animate__fadeInUp">Handmade Pottery</h3>
          <p className="text-center text-clay-400 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Bringing you the finest handmade pottery with a touch of love and creativity.
          </p>
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-clay-400 hover:text-white animate__animated animate__bounceIn" style={{ animationDelay: '1.2s' }}>
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-clay-400 hover:text-white animate__animated animate__bounceIn" style={{ animationDelay: '1.3s' }}>
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-clay-400 hover:text-white animate__animated animate__bounceIn" style={{ animationDelay: '1.4s' }}>
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-clay-400 animate__animated animate__fadeInUp animate__delay-2s">
            &copy; 2024 Handmade Pottery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
