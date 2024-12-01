import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    {
      title: 'LUXURY WATCHES',
      image: '/images/categories/watches.jpg',
      link: '/category/watches'
    },
    {
      title: 'RARE BAGS',
      image: '/images/categories/bags.jpg',
      link: '/category/bags'
    },
    {
      title: 'EXCLUSIVE SHOES',
      image: '/images/categories/shoes.jpg',
      link: '/category/shoes'
    },
    {
      title: 'DISTINCT CLOTHING',
      image: '/images/categories/clothing.jpg',
      link: '/category/clothing'
    },
    {
      title: 'TIMELESS JEWELRY',
      image: '/images/categories/jewelry.jpg',
      link: '/category/jewelry'
    },
    {
      title: 'ACCESSORIES',
      image: '/images/categories/accessories.jpg',
      link: '/category/accessories'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="relative aspect-square group overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-heading text-xl text-white mb-4">
                  {category.title}
                </h3>
                <span className="inline-block px-4 py-1 border border-white text-white text-sm uppercase tracking-wider">
                  VIEW
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;