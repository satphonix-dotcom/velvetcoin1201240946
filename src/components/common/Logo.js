import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ variant = 'full', className = '' }) => {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      {variant === 'full' ? (
        <img 
          src="/images/logo/velvetcoin-text.svg" 
          alt="VelvetCoin"
          className="h-8"
        />
      ) : (
        <img 
          src="/images/logo/velvetcoin-icon.svg" 
          alt="V"
          className="h-8 w-8"
        />
      )}
    </Link>
  );
};

export default Logo;