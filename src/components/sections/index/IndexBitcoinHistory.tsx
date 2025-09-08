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
              src="/lovable-uploads/43c24c85-a596-413e-ba49-9d949a36c0d7.png"
              alt="Bitcoin vs USD home price comparison infographic showing how many Bitcoin or dollars were needed to buy a home in different years, demonstrating Bitcoin's increasing purchasing power over time"
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
              Notice how dramatically fewer Bitcoin are needed to purchase the same home over time, compared to the increasing number of dollars required.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IndexBitcoinHistory;