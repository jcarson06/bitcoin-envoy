import React, { useState } from 'react';
import { Section } from '@/components/common/Section';
const IndexBitcoinHistory = () => {
  const [imageError, setImageError] = useState(false);
  return <Section spacing="lg" className="bg-gradient-to-br from-white to-pulse-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Bitcoin's Purchasing Power</h2>
          <p className="section-subtitle mx-auto max-w-2xl">Unlike the Dollar, Bitcoin's purchasing power has actually increased over time, offering a superior store of value.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {!imageError ? <img src="/lovable-uploads/e937ee56-d44e-4461-a995-dbcd4eaef7d9.png" alt="Price of a Home: U.S. Dollars vs. Bitcoin comparison showing the same house requiring 664 BTC in 2016, 45 BTC in 2020, and only 6.6 BTC in 2024" className="w-full h-auto rounded-lg shadow-lg mb-6" loading="lazy" decoding="async" onError={() => setImageError(true)} /> : <div className="w-full h-64 bg-gray-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <p className="text-gray-500">Image unavailable</p>
            </div>}
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notice how home prices have gone UP when priced in Dollars, but gone DOWN when priced in Bitcoin. 
              If you're not quite sure what that means or why it's happening, you're not alone. And you came to the right place!
            </p>
          </div>
        </div>
      </div>
    </Section>;
};
export default IndexBitcoinHistory;