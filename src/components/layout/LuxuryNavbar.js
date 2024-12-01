import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const LuxuryNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'NEW', path: '/new' },
    { name: 'Stores', path: '/stores' },
    { name: 'Designer', path: '/designer' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Shoes', path: '/shoes' },
    { name: 'Bags', path: '/bags' },
    { name: 'Jewelry', path: '/jewelry' },
    { name: 'Accessories', path: '/accessories' }
  ];

  return (
    <nav className="bg-primary fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo variant="full" className="h-8" />
          
          <div className="hidden md:flex space-x-8">
            {categories.map(category => (
              <Link
                key={category.name}
                to={category.path}
                className="text-text-primary hover:text-accent transition-colors text-sm"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-text-primary hover:text-accent">
              <i className="fas fa-search"></i>
            </button>
            <Link to="/account" className="text-text-primary hover:text-accent">
              <i className="fas fa-user"></i>
            </Link>
            <Link to="/cart" className="text-text-primary hover:text-accent">
              <i className="fas fa-shopping-bag"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LuxuryNavbar;