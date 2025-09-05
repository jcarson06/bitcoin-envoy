import React from 'react';
import { Section } from '@/components/common/Section';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';

const LearnWhyBitcoinHasValue = () => {
  return (
    <Section id="why-bitcoin-has-value" spacing="lg" background="gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Why Does Bitcoin Have Value?</h2>
          <p className="section-subtitle mx-auto max-w-2xl">Now that you understand what Bitcoin is and how traditional money loses value, let's explore what gives Bitcoin its value and why more people are adopting it everyday. [3 min]</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed videoId="SUJfuCrlnPw" title="Why Does Bitcoin Have Value? - River Financial" className="mb-6" />
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">This video explains the fundamental reasons why Bitcoin has value, including its mathematical scarcity, unique properties as digital money, and the network effects that make it increasingly valuable over time. Attribution: River Financial</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LearnWhyBitcoinHasValue;