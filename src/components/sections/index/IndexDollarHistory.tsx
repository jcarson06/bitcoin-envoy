import React, { useState } from 'react';
import { Section } from '@/components/common/Section';
const IndexDollarHistory = () => {
  const [imageError, setImageError] = useState(false);
  return <Section spacing="lg" className="bg-gradient-to-br from-pulse-50 to-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">A Tale of Two Graphics</h2>
          <p className="section-subtitle mx-auto max-w-2xl">In the first (below) see how the Dollar has lost value over time — its purchasing power has decreased by about 96% over the past century.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {!imageError ? <img src="/lovable-uploads/0108b8ad-fcf1-4944-bed6-da89f90d6703.png" alt="A Dollar's Worth infographic showing the purchasing power decline of the U.S. dollar from $25 in 1920 to $1 in 2020, with historical examples of what $1 could buy in different decades" className="w-full h-auto rounded-lg shadow-lg mb-6" onError={() => setImageError(true)} /> : <div className="w-full h-64 bg-gray-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <p className="text-gray-500">Image unavailable</p>
            </div>}
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">Notice the bottom row of images and all of the items that $1 could have afforded you in the past. What can $1 buy you today?</p>
          </div>
        </div>
      </div>
    </Section>;
};
export default IndexDollarHistory;