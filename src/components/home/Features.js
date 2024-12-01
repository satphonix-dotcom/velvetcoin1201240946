import React from 'react';
import FeatureIcon from '../common/FeatureIcon';

const Features = () => {
  const features = [
    {
      icon: 'secure',
      title: 'Secure Payments',
      description: 'Encrypted transactions'
    },
    {
      icon: 'delivery',
      title: 'Verified Delivery',
      description: 'Tracked shipping'
    },
    {
      icon: 'authentic',
      title: 'Authentic Products',
      description: 'Guaranteed genuine'
    }
  ];

  return (
    <div className="bg-white py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <FeatureIcon type={feature.icon} className="mx-auto mb-4" />
              <h3 className="font-heading text-lg text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;