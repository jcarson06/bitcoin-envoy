import React, { useState } from 'react';
import { Section } from '@/components/common/Section';

const IndexBitcoinHistory = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Section spacing="lg" className="bg-gradient-to-br from-white to-pulse-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Bitcoin's Purchasing Power History</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            See how Bitcoin's purchasing power has increased dramatically over time, offering a superior store of value compared to traditional currencies.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {!imageError ? (
            <img
              src="/lovable-uploads/22bdecf3-020a-460e-a323-e5fe40a037a9.png"
              alt="Price of a Home: U.S. Dollars vs. Bitcoin comparison showing the same house requiring 664 BTC in 2016, 45 BTC in 2020, and only 6.6 BTC in 2024"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-64 bg-gray-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <p className="text-gray-500">Image unavailable</p>
            </div>
          )}
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notice how the same home that required 664 Bitcoin in 2016 now only needs 6.6 Bitcoin in 2024 - a dramatic increase in Bitcoin's purchasing power over just 8 years.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IndexBitcoinHistory;