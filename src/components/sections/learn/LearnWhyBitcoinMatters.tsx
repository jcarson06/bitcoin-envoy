import React from 'react';
import { Section } from '@/components/common/Section';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
const LearnWhyBitcoinMatters = () => {
  return <Section id="why-bitcoin-matters" spacing="lg" background="white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Why Bitcoin Matters</h2>
          <p className="section-subtitle mx-auto max-w-2xl">Continue your journey with this insightful overview of Bitcoin's many use cases and why it's important for the future of money. [20 min]</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed videoId="R4gyS5mb9dE" title="Why Bitcoin is Important - Complete Overview" className="mb-6" />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Alex Gladstein, Human Rights Foundation</h3>
            <p className="text-gray-600">An excellent introduction to all the many use cases of Bitcoin and how it's changing the world. This is hands down the best 20 minutes you'll spend learning about Bitcoin. Attribution: Bitcoin Policy Institute</p>
          </div>
        </div>
      </div>
    </Section>;
};
export default LearnWhyBitcoinMatters;