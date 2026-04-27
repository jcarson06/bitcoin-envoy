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
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm max-w-3xl mx-auto">Attribution: Tuttle Twins</p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How does Bitcoin actually work?</h3>
            <p className="text-gray-700 leading-relaxed">
              When you send Bitcoin to someone, you broadcast a message to the entire Bitcoin network announcing the transfer. Thousands of computers — called nodes — independently verify that you actually own the bitcoin you're trying to send and that you haven't already spent it elsewhere. Once verified, your transaction is grouped with other recent transactions into a "block." Miners then compete to attach that block to the chain of all previous blocks — the blockchain — by solving a computationally expensive puzzle. The first miner to solve it earns bitcoin and gets to add the block permanently. Because every block references the one before it, altering any past transaction would require recomputing every subsequent block faster than the rest of the entire network combined — a practical impossibility. This design makes Bitcoin's transaction history tamper-proof without requiring anyone to trust a central authority.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
};

export default LearnWhatIsBitcoinPart2;