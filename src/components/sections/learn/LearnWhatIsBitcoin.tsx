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
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm max-w-3xl mx-auto">Attribution: iShares, by BlackRock</p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What is Bitcoin, exactly?</h3>
            <p className="text-gray-700 leading-relaxed">
              Bitcoin is a decentralized digital currency — the first of its kind — created in 2009 by an anonymous person or group known as Satoshi Nakamoto. Unlike dollars, euros, or any traditional currency, no government, central bank, or company controls Bitcoin. It runs on a global network of computers that collectively verify and record every transaction in a public ledger called the blockchain. Anyone can view every transaction ever made, but no single entity can alter or erase them. Bitcoin has a fixed, predetermined supply of 21 million coins — a cap that is enforced mathematically and can never be changed. New bitcoins are created through a process called "mining," where computers compete to solve complex math problems, and the winner earns freshly issued bitcoin as a reward. This process simultaneously creates new coins and secures the entire network against fraud and manipulation.
            </p>
          </div>
        </div>
      </div>
    </Section>;
};
export default LearnWhatIsBitcoin;