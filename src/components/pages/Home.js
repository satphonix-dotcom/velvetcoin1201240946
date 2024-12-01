import React from 'react';
import LuxuryLayout from '../layout/LuxuryLayout';
import HeroSlider from '../home/HeroSlider';
import Features from '../home/Features';
import CategoryGrid from '../home/CategoryGrid';

const Home = () => {
  return (
    <LuxuryLayout>
      <HeroSlider />
      <Features />
      <CategoryGrid />
      <div className="text-center py-16 bg-white">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">
          INDULGE IN ELEGANCE YOU DESERVE
        </h2>
        <div className="flex justify-center space-x-4">
          {/* Social media icons */}
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </LuxuryLayout>
  );
};

export default Home;