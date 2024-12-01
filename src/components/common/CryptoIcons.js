import React from 'react';

const CryptoIcons = ({ className = '' }) => {
  const cryptos = ['btc', 'usdt', 'eth', 'ltc', 'xrp'];
  
  return (
    <div className={`flex space-x-2 ${className}`}>
      {cryptos.map(crypto => (
        <img
          key={crypto}
          src={`/images/icons/crypto/${crypto}.svg`}
          alt={crypto.toUpperCase()}
          className="h-8 w-8"
        />
      ))}
    </div>
  );
};

export default CryptoIcons;