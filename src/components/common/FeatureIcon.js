import React from 'react';

const FeatureIcon = ({ type, className = '' }) => {
  return (
    <img
      src={`/images/icons/${type}.svg`}
      alt={type}
      className={`h-12 w-12 ${className}`}
    />
  );
};

export default FeatureIcon;