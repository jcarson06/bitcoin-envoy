import React from 'react';
import { Section } from '@/components/common/Section';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
const LearnWhatIsBitcoin = () => {
  return <Section id="what-is-bitcoin" spacing="lg" background="gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">What is Bitcoin?</h2>
          <p className="section-subtitle mx-auto max-w-2xl">Start with the fundamentals. Here's a clear explanation of what Bitcoin actually is and how it works. [3 min]</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed videoId="EKLr0II_BVE" title="What is Bitcoin? - Foundational Overview" className="mb-6" />
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">This foundational video explains the basics of Bitcoin in simple terms, perfect for beginners. Attribution: iShares, by BlackRock</p>
          </div>
        </div>
      </div>
    </Section>;
};
export default LearnWhatIsBitcoin;