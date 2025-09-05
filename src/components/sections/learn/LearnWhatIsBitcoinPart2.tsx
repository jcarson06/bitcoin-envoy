import React from 'react';
import { Section } from '@/components/common/Section';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';

const LearnWhatIsBitcoinPart2 = () => {
  return (
    <Section id="what-is-bitcoin-part-2" spacing="lg" background="white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">What is Bitcoin (Part 2)?</h2>
          <p className="section-subtitle mx-auto max-w-2xl">Building on the fundamentals, here's a fun cartoon explanation that makes Bitcoin concepts even clearer and more engaging. [3 min]</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed videoId="BL5vUVQvmX4" title="What is Bitcoin (Part 2)? - Cartoon Explainer" className="mb-6" />
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">This animated cartoon makes Bitcoin concepts accessible and entertaining, perfect for reinforcing what you learned in the first video with a more visual and fun approach. Attribution: Tuttle Twins</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LearnWhatIsBitcoinPart2;