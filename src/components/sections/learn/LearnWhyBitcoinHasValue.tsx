import React from 'react';
import { Section } from '@/components/common/Section';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
const LearnWhyBitcoinHasValue = () => {
  return <Section id="why-bitcoin-has-value" spacing="lg" background="gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Why Does Bitcoin Have Value?</h2>
          <p className="section-subtitle mx-auto max-w-2xl">Now that you have an idea what Bitcoin is, let's explore what gives Bitcoin its value and why more people are adopting it everyday. [3 min]</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed videoId="SUJfuCrlnPw" title="Why Does Bitcoin Have Value? - River Financial" className="mb-6" />
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm max-w-3xl mx-auto">Attribution: River Financial</p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Why does Bitcoin have value?</h3>
            <p className="text-gray-700 leading-relaxed">
              Bitcoin has value for the same fundamental reasons that gold has value: it is scarce, durable, portable, divisible, and resistant to counterfeiting. Unlike gold, however, Bitcoin's scarcity is mathematically guaranteed — there will never be more than 21 million bitcoin, full stop. No government, CEO, or programmer can change that rule. Each bitcoin is divisible into 100 million smaller units called satoshis, so you don't need to buy a whole coin to participate. Bitcoin is also the most portable store of value ever invented: you can carry any amount across any border, in your head if necessary, without anyone's permission. Its value ultimately comes from the combination of absolute scarcity, a secure and decentralized network that 16 years of attacks have never compromised, and a growing global community of people who recognize it as the world's most sound form of money.
            </p>
          </div>
        </div>
      </div>
    </Section>
};
export default LearnWhyBitcoinHasValue;